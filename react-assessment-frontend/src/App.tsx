import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { Router } from './Router';
import { theme } from './theme';
import { Global } from 'storybook/theming';

export default function App() {
  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <Global
          styles={{
              body: {
                  backgroundColor: "var(--mantine-color-dark-9)",
              },
          }}
      />
      <Router />
    </MantineProvider>
  );
}
