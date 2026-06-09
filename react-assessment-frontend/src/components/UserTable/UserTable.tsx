import { User } from "@/types/User"
import { Button, Group, Table } from "@mantine/core"

type UserTableProps = {
    users: User[]
}

export function UserTable( 
    {users}:
    UserTableProps
) {
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
                <Table.Tr>
                    <Table.Td> {user.id} </Table.Td>
                    <Table.Td> {user.name} </Table.Td>
                    <Table.Td> {user.email} </Table.Td>
                    <Table.Td> {user.contact} </Table.Td>
                    <Table.Td> 
                        <Group>
                            <Button>View</Button>
                            <Button>Update</Button>
                            <Button>Delete</Button>
                        </Group>
                    </Table.Td>
                </Table.Tr>
            ))}
        </Table.Tbody>
    </Table>
}