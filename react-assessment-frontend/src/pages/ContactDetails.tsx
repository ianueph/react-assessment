import { ErrorDetails } from "@/components/ErrorDetails/ErrorDetails";
import { UserDetails } from "@/components/UserDetails/UserDetails";
import { getUserById } from "@/services/userServices";
import { User } from "@/types/User"
import { Button } from "@mantine/core";
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";

export function ContactDetails() {
    const [user, setUser] = useState<User>();
    const [error, setError] = useState<unknown>(null);
    const { id } = useParams();

    const navigate = useNavigate();

    const loadUser = async () => {
        if (!id) return;

        try {
            const parsedId = parseInt(id);
            const response = await getUserById(parsedId);

            setUser(response);
            setError(null);
        } catch (err) {
            setError(err);
        }
    };
    
    useEffect(() => {
        loadUser();
    }, [id]);

    return <>
        {error ? (
            <ErrorDetails />
        ) : (
            user && <UserDetails user={user} />
        )}
        
        <Button onClick={() => {navigate("/")}}> Back </Button>
    </>
}