import { User } from "@/types/User";
import { Button, Card, Flex, Image, Stack, Text } from "@mantine/core";
import classes from "./UserCard.module.css"
import { UserCardProps } from "./UserCardTypes";

export function UserCard(
    {
        user,
        onEdit
    } : UserCardProps
) {

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
                    <Button> View </Button>
                    <Button> Update </Button>
                    <Button> Delete </Button>
                </Stack>
            </Card>
        </div>
    </div>
}