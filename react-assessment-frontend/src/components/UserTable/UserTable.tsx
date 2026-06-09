import { User } from "@/types/User"
import { Button, Group, Table } from "@mantine/core"
import { useNavigate } from "react-router-dom";

type UserTableProps = {
    users: User[]
}

export function UserTable( 
    {users}:
    UserTableProps
) {
    const navigate = useNavigate();

    const handleViewButton = (id: number) => {
        navigate(`/contact-detail/${id}`);
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
                            <Button onClick={() => {handleViewButton(user.id)}}>View</Button>
                            <Button>Update</Button>
                            <Button>Delete</Button>
                        </Group>
                    </Table.Td>
                </Table.Tr>
            ))}
        </Table.Tbody>
    </Table>
}