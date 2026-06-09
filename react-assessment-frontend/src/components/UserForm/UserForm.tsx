import { addUser, updateUser } from "@/services/userServices";
import { User, UserDTO } from "@/types/User";
import { Button, Group, Stack, TextInput } from "@mantine/core";
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
        <form onSubmit={handleSubmit}>
            <Stack>
                <h2>Name</h2>
                <TextInput 
                name = "Name"
                value = {name}
                onChange = {(e) => {setName(e.target.value)}}
                required
                />

                <h2>E-mail</h2>
                <TextInput
                name = "E-mail"
                value = {email}
                onChange = {(e) => {setEmail(e.target.value)}}
                required
                />

                <h2>Contact</h2>
                <TextInput 
                name = "Contact"
                value = {contact}
                onChange = {(e) => {setContact(e.target.value)}}
                required
                />

                <Group justify="flex-start">
                    <Button type="submit"> {editingUser ? "Update" : "Add"} </Button>
                </Group>
            </Stack>
        </form>
    </>
}