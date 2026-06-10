import { ErrorDetails } from "@/components/ErrorDetails/ErrorDetails";
import { UserDetails } from "@/components/UserDetails/UserDetails";
import { getUserById } from "@/services/userServices";
import { User } from "@/types/User";
import {
    Button,
    Center,
    Container,
    Group,
    Loader,
    Paper,
} from "@mantine/core";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export function ContactDetails() {
    const [user, setUser] = useState<User>();
    const [error, setError] = useState<unknown>(null);

    const { id } = useParams();
    const navigate = useNavigate();

    const loadUser = async () => {
        if (!id) return;

        try {
            const response = await getUserById(parseInt(id));

            setUser(response);
            setError(null);
        } catch (err) {
            setError(err);
        }
    };

    useEffect(() => {
        loadUser();
    }, [id]);

    return (
        <Center h="100vh" w="100%" maw="100%">
            <Container size="md" py="xl">
                <Paper
                    withBorder
                    radius="lg"
                    shadow="md"
                    p="xl"
                >
                    {error ? (
                        <ErrorDetails />
                    ) : user ? (
                        <UserDetails user={user} />
                    ) : (
                        <Group justify="center">
                            <Loader />
                        </Group>
                    )}

                    <Group mt="xl" justify="flex-end">
                        <Button
                            variant="light"
                            onClick={() => navigate("/")}
                        >
                            Back
                        </Button>
                    </Group>
                </Paper>
            </Container>
        </Center>
    );
}