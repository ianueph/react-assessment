import { UserForm } from "@/components/UserForm/UserForm";
import { UserTable } from "@/components/UserTable/UserTable";
import { getUsers } from "@/services/userServices";
import { User } from "@/types/User"
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
        <UserForm onEdit={setEditingUser} onChange={loadUsers} editingUser={editingUser}/>
        <UserTable onEdit={setEditingUser} onChange={loadUsers} users={users}/>
    </>
}