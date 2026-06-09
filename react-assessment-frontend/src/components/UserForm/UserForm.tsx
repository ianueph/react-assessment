import { addUser } from "@/services/userServices";
import { User, UserDTO } from "@/types/User";
import { Button, Group, Stack, TextInput } from "@mantine/core";
import { useState } from "react";

type UserFormProps = {
    onChange: () => Promise<void>
}

export function UserForm(
    {onChange}:
    UserFormProps
) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("")

    const handleSubmit = async (e: React.SubmitEvent) => {
        e.preventDefault();

        const user : UserDTO = {
            name: name,
            email: email,
            contact: contact,
        }
        
        const data = await addUser(user);

        await onChange();
    }

    return <>
        <form onSubmit={handleSubmit}>
            <Stack>
                <TextInput 
                name = "Name"
                value = {name}
                onChange = {(e) => {setName(e.target.value)}}
                required
                />

                <TextInput
                name = "E-mail"
                value = {email}
                onChange = {(e) => {setEmail(e.target.value)}}
                required
                />

                <TextInput 
                name = "Contact"
                value = {contact}
                onChange = {(e) => {setContact(e.target.value)}}
                required
                />

                <Group justify="flex-start">
                    <Button type="submit"> Add / Update </Button>
                </Group>
            </Stack>
        </form>
    </>
}