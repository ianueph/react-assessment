import { User } from "@/types/User";
import { Button, Card, Flex, Image, Stack, Text } from "@mantine/core";
import classes from "./UserCard.module.css"
import { UserCardProps } from "./UserCardTypes";
import { useNavigate } from "react-router-dom";
import { deleteUser } from "@/services/userServices";

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
            <Card className={classes.flipCardFront} shadow="sm" padding="md" withBorder>
                <Card.Section>
                    <Image
                        src=""
                        height={160}
                        alt="some dude"
                    />
                </Card.Section>

                <Flex
                    justify="flex-start"
                    align="flex-start"
                    direction="column"
                >
                    <Text fw="bold">
                        {user.name}
                    </Text>

                    <Text c="dimmed">
                        {user.email}
                    </Text>

                    <Text c="dimmed">
                        {user.contact}
                    </Text>
                </Flex>
            </Card>
            <Card className={classes.flipCardBack} shadow="sm" padding="md" withBorder>
                <Stack>
                    <Button onClick={() => handleView(user.id)}> View </Button>
                    <Button onClick={() => handleUpdate(user)}> Update </Button>
                    <Button onClick={() => handleDelete(user.id)}> Delete </Button>
                </Stack>
            </Card>
        </div>
    </div>
}