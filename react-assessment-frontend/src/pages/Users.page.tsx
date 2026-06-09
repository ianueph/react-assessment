import { UserForm } from "@/components/UserForm/UserForm";
import { UserTable } from "@/components/UserTable/UserTable";
import { getUsers } from "@/services/userServices";
import { User } from "@/types/User"
import { useEffect, useState } from "react"

export function Users() {
    const [users, setUsers] = useState<User[]>([]);

    const loadUsers = async () => {
        setUsers(await getUsers());
    }

    useEffect(() => {
        loadUsers();
    }, []);

    return <>
        <UserForm onChange={loadUsers}/>
        <UserTable onChange={loadUsers} users={users}/>
    </>
}