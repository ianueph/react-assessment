import { Flex, Grid, ScrollArea, ScrollAreaAutosize } from "@mantine/core";
import { UserCardGridProps } from "./UserCardGridTypes";
import { useEffect } from "react";
import { UserCard } from "../UserCard/UserCard";

export function UserCardGrid(
    {
        users,
        onChange,
        onEdit
    } : UserCardGridProps
) {
    return <ScrollArea h="90vh">
        <Grid p="xl">
            {users.map(user => (
                <Grid.Col span={{ base: 12, sm: 12, md: 6, lg: 4 }}>
                    <Flex
                        gap="md"
                        justify="center"
                        align="center"
                    >
                        <UserCard
                            user={user}
                            onEdit={onEdit}
                        />
                    </Flex>
                </Grid.Col>
            ))}
        </Grid>
    </ScrollArea>
}