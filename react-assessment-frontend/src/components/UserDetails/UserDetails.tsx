import { User } from "@/types/User";
import {
    Card,
    Group,
    Stack,
    Text,
    Title,
    Divider,
} from "@mantine/core";

export function UserDetails(
    { user }: { user: User }
) {
    return (
        <Card
            shadow="sm"
            padding="xl"
            radius="md"
            withBorder
        >
            <Stack gap="md">
                <Title order={1}>
                    User Details
                </Title>

                <Divider />

                <Group>
                    <Text fw={700}>ID:</Text>
                    <Text>{user.id}</Text>
                </Group>

                <Group>
                    <Text fw={700}>Name:</Text>
                    <Text>{user.name}</Text>
                </Group>

                <Group>
                    <Text fw={700}>Email:</Text>
                    <Text>{user.email}</Text>
                </Group>

                <Group>
                    <Text fw={700}>Contact:</Text>
                    <Text>{user.contact}</Text>
                </Group>
            </Stack>
        </Card>
    );
}