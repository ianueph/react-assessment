import { User } from "@/types/User"
import { Button } from "@mantine/core";
import { useNavigate } from "react-router-dom"

export function UserDetails(
    {user} : {user: User}
) {
    const navigate = useNavigate();
    
    return <>
        <h1> Id: {user?.id} </h1>
        <h1> Name: {user?.name} </h1>
        <h1> Email: {user?.email} </h1>
        <h1> Contact: {user?.contact} </h1>
    </>
}