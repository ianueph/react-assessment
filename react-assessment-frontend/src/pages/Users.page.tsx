import { UserCard } from "@/components/UserCard/UserCard";
import { UserCardGrid } from "@/components/UserCardGrid/UserCardGrid";
import { UserForm } from "@/components/UserForm/UserForm";
import { UserTable } from "@/components/UserTable/UserTable";
import { getUsers } from "@/services/userServices";
import { User } from "@/types/User"
import { Grid, Paper } from "@mantine/core";
import { useEffect, useState } from "react"

export function Users() {
    const [users, setUsers] = useState<User[]>([]);
    const [editingUser, setEditingUser] = useState<User | null>(null);

    const loadUsers = async () => {
        setUsers(await getUsers());
    }

    useEffect(() => {
        loadUsers();
    }, []);

    return <>
        <Paper
            withBorder
            radius="md"
            shadow="sm"
            p={0}
            m="xl"
            style={{overflow:"hidden"}}
        >
            <Grid>

                <Grid.Col 
                    span = {{ base: 12, sm: 5, md: 4, lg: 3 }}
                >
                    <UserForm 
                        onEdit={setEditingUser} 
                        onChange={loadUsers} 
                        editingUser={editingUser}
                    />
                </Grid.Col>

                <Grid.Col 
                    span = {{ base: 12, sm: 7, md: 8, lg: 9 }}
                >
                    <UserCardGrid
                        users={users}
                        onChange={loadUsers}
                        onEdit={setEditingUser}
                    />
                </Grid.Col>
            </Grid>
        </Paper>
    </>
}