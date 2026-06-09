import { deleteUser } from "@/services/userServices";
import { User } from "@/types/User"
import { Button, Group, Table } from "@mantine/core"
import { useNavigate } from "react-router-dom";

type UserTableProps = {
    users: User[],
    onChange: () => Promise<void>
}

export function UserTable( 
    {users, onChange}:
    UserTableProps
) {
    const navigate = useNavigate();

    const handleView = (id: number) => {
        navigate(`/contact-detail/${id}`);
    }

    const handleDelete = async (id: number) => {
        await deleteUser(id);

        await onChange();
    }

    return <Table>
        <Table.Thead>
            <Table.Tr>
                <Table.Td> Id </Table.Td>
                <Table.Td> Name </Table.Td>
                <Table.Td> E-mail </Table.Td>
                <Table.Td> Contact </Table.Td>
                <Table.Td> Buttons </Table.Td>
            </Table.Tr>
        </Table.Thead>

        <Table.Tbody>
            {users.map(user => (
                <Table.Tr key={user.id}>
                    <Table.Td> {user.id} </Table.Td>
                    <Table.Td> {user.name} </Table.Td>
                    <Table.Td> {user.email} </Table.Td>
                    <Table.Td> {user.contact} </Table.Td>
                    <Table.Td> 
                        <Group>
                            <Button onClick={() => {handleView(user.id)}}>View</Button>
                            <Button >Update</Button>
                            <Button onClick={() => {handleDelete(user.id)}}>Delete</Button>
                        </Group>
                    </Table.Td>
                </Table.Tr>
            ))}
        </Table.Tbody>
    </Table>
}