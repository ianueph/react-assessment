import { getUserById } from "@/services/userServices";
import { User } from "@/types/User"
import { Button } from "@mantine/core";
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";

export function ContactDetails() {
    const [user, setUser] = useState<User>();
    const { id } = useParams();

    const navigate = useNavigate();

    const loadUser = async () => {
        if (!id) {return;}
        const parsedId = parseInt(id);

        setUser(await getUserById(parsedId));
    }
    
    useEffect(() => {
        loadUser();
    }, []);

    return <>
        <h1> Id: {user?.id} </h1>
        <h1> Name: {user?.name} </h1>
        <h1> Email: {user?.email} </h1>
        <h1> Contact: {user?.contact} </h1>

        <Button onClick={() => {navigate("/")}}> Back </Button>
    </>
}