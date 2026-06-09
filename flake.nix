{
  description = "A Nix-flake-based Java development environment";

  inputs.nixpkgs.url = "https://flakehub.com/f/NixOS/nixpkgs/0.1"; # unstable Nixpkgs

  outputs =
    { self, ... }@inputs:

    let
      javaVersion = 21; # Change this value to update the whole stack

      supportedSystems = [
        "x86_64-linux"
        "aarch64-linux"
        "aarch64-darwin"
      ];
      forEachSupportedSystem =
        f:
        inputs.nixpkgs.lib.genAttrs supportedSystems (
          system:
          f {
            inherit system;
            pkgs = import inputs.nixpkgs {
              inherit system;
              overlays = [ inputs.self.overlays.default ];
            };
          }
        );
    in
    {
      overlays.default =
        final: prev:
        let
          jdk = prev."jdk${toString javaVersion}";
        in
        {
          inherit jdk;
          maven = prev.maven.override { jdk_headless = jdk; };
          gradle = prev.gradle.override { java = jdk; };
          lombok = prev.lombok.override { inherit jdk; };
        };

      devShells = forEachSupportedSystem (
        { pkgs, system }:
        {
          backend = pkgs.mkShellNoCC {
            packages = with pkgs; [
              gcc
              gradle
              jdk
              maven
              ncurses
              patchelf
              zlib
              self.formatter.${system}
            ];

            shellHook =
              let
                loadLombok = "-javaagent:${pkgs.lombok}/share/java/lombok.jar";
                prev = "\${JAVA_TOOL_OPTIONS:+ $JAVA_TOOL_OPTIONS}";
              in
              ''
                export JAVA_TOOL_OPTIONS="${loadLombok}${prev}"
              '';
          };
          
          frontend = pkgs.mkShellNoCC {
            packages = with pkgs; [
              nodejs
              pnpm
              yarn
              self.formatter.${system}
            ];
          };
        }
      );

      packages = forEachSupportedSystem (
        {pkgs, system}:
        with pkgs; {
          backend = maven.buildMavenPackage (finalAttrs: {
            pname = "react-assessment-api";
            version = "0.0.1";

            src = ./React-Assessment-API;

            mvnHash = "sha256-VBe89wR2tabm9aQLTe0MRwHM7q6l251/wRQblWm24pg=";

            nativeBuildInputs = [ makeWrapper ];

            doCheck = false;

            installPhase = ''
              runHook preInstall

              mkdir -p $out/bin $out/share/react-assessment-api
              install -Dm644 target/React-Assessment-API-*.jar $out/share/java/React-Assessment-API.jar

              makeWrapper ${jre}/bin/java $out/bin/react-assessment-api \
                --add-flags "-jar $out/share/java/React-Assessment-API.jar"

              runHook postInstall
            '';
          });

          frontend = buildNpmPackage {
            pname = "react-assessment-frontend";
            version = "0.1";

            src = ./react-assessment-frontend;

            installPhase = ''
              mkdir -p $out/share/www $out/bin

              cp -r dist/* $out/share/www

              cat <<EOF > $out/bin/react-assessment-frontend
              #!/bin/sh
              echo "Starting Busybox HTTP server at http://localhost:4200 ... "
              exec ${busybox}/bin/httpd -f -p 4200 -h $out/share/www
              EOF
              
              chmod +x $out/bin/react-assessment-frontend
            '';

            npmDepsHash = "sha256-s3pJP6EP8++KX/lwAttZb78d2GiBN3Tk5rHIX2QcJeU=";
          };
        }
      );

      formatter = forEachSupportedSystem ({ pkgs, ... }: pkgs.nixfmt);
    };
}
