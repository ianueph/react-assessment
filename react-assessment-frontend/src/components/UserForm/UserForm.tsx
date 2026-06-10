import { addUser, updateUser } from "@/services/userServices";
import { User, UserDTO } from "@/types/User";
import { Button, Container, Flex, Group, Stack, TextInput, Title } from "@mantine/core";
import { useEffect, useState } from "react";

type UserFormProps = {
    onChange: () => Promise<void>,
    editingUser: User | null,
    onEdit: React.Dispatch<React.SetStateAction<User | null>>
}

export function UserForm(
    {onChange, editingUser, onEdit}:
    UserFormProps
) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("")

    const handleSubmit = async (e: React.SubmitEvent) => {
        e.preventDefault();

        const userDTO : UserDTO = {
            name: name,
            email: email,
            contact: contact,
        }
        
        if (editingUser) {
            const data = await updateUser(editingUser.id, userDTO)
            onEdit(null);
        } else {
            const data = await addUser(userDTO);
        }

        setName("");
        setEmail("");
        setContact("");

        await onChange();
    }

    useEffect(() => {
        if (editingUser) {
            setName(editingUser.name);
            setEmail(editingUser.email);
            setContact(editingUser.contact);
        }
    }, [editingUser])

    return <>
        <Flex
            m='xl'
            justify="center"
            align="center"
        >
            <form 
                style = {{
                    width: "100%",
                    maxWidth: "500px",
                    margin: "0 auto",
                }}
                onSubmit={handleSubmit}
            >
                <Stack>
                    <Title order={3}>Name</Title>
                    <TextInput 
                        name = "Name"
                        value = {name}
                        onChange = {(e) => {setName(e.target.value)}}
                        required
                    />

                    <Title order={3}>E-mail</Title>
                    <TextInput
                        name = "E-mail"
                        value = {email}
                        onChange = {(e) => {setEmail(e.target.value)}}
                        required
                        type="email"
                    />

                    <Title order={3}>Contact</Title>
                    <TextInput 
                        name = "Contact"
                        value = {contact}
                        onChange = {(e) => {setContact(e.target.value)}}
                        required
                    />

                    <Group justify="flex-start">
                        <Button variant="outline" color="teal.3" type="submit" w="15em" maw="400px" mt="lg"> {editingUser ? "Update" : "Add"} </Button>
                    </Group>
                </Stack>
            </form>
        </Flex>
    </>
}