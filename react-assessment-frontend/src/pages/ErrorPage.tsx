import { Button, Center, Stack, Text, Title } from "@mantine/core";
import { useNavigate } from "react-router-dom";

export function ErrorPage() {
    const navigate = useNavigate();

    return (
        <Center h="100vh">
            <Stack align="center" gap="xs">
                <Title
                    order={1}
                    size="6rem"
                    fw={900}
                >
                    404
                </Title>

                <Title order={2}>
                    Page Not Found
                </Title>

                <Text c="dimmed">
                    The page you're looking for doesn't exist.
                </Text>

                <Button
                    mt="md"
                    onClick={() => navigate("/")}
                >
                    Return Home
                </Button>
            </Stack>
        </Center>
    );
}