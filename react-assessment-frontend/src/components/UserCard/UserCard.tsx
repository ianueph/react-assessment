import { User } from "@/types/User";
import { Button, Card, Flex, Group, Image, Stack, Text } from "@mantine/core";
import classes from "./UserCard.module.css"
import { UserCardProps } from "./UserCardTypes";
import { useNavigate } from "react-router-dom";
import { deleteUser } from "@/services/userServices";
import defaultPfp from "./Default_pfp.svg"

export function UserCard(
    {
        user,
        onChange,
        onEdit
    } : UserCardProps
) {
    const navigate = useNavigate();

    const handleView = (id: number) => {
        navigate(`/contact-detail/${id}`);
    }

    const handleDelete = async (id: number) => {
        await deleteUser(id);

        await onChange();
    }

    const handleUpdate = async (user: User) => {
        onEdit(user);
    }

    return <div className={classes.flipCard}>
        <div className={classes.flipCardInner}>
            <Card className={classes.flipCardFront} shadow="sm" padding="md" withBorder radius="md">
                <Card.Section
                    mb="md"
                    style={{
                        borderBottom: "1px solid var(--mantine-color-dark-1)"
                    }}
                >
                    <Image
                        src={defaultPfp}
                        height={160}
                        alt="some dude"
                    />
                </Card.Section>

                <Flex
                    justify="flex-start"
                    align="flex-start"
                    direction="column"
                    maw="100%"
                    w="100%"
                >
                    <Text fw="bold" truncate="end" w="100%" style={{ minWidth: 0 }} ta="left">
                        {user.name}
                    </Text>

                    <Text c="dimmed" truncate="end" w="100%" style={{ minWidth: 0 }} ta="left">
                        {user.email}
                    </Text>

                    <Text c="dimmed" truncate="end" w="100%" style={{ minWidth: 0 }} ta="left">
                        {user.contact}
                    </Text>
                </Flex>

                <Group justify="flex-end" w="100%" mt="xs">
                    <Text size="xs" c="dimmed">
                        #{user.id}
                    </Text>
                </Group>
            </Card>
            <Card className={classes.flipCardBack} shadow="sm" padding="md" withBorder radius="md">
                <Stack>
                    <Button 
                        variant="outline"
                        onClick={() => handleView(user.id)}
                    > View </Button>
                    <Button 
                        variant="outline"
                        color="blue.3"
                        onClick={() => handleUpdate(user)}
                    > Update </Button>
                    <Button 
                        variant="outline"
                        color="red.3"
                        onClick={() => handleDelete(user.id)}
                    > Delete </Button>
                </Stack>
            </Card>
        </div>
    </div>
}