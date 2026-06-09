import { User, UserDTO } from "@/types/User";
import axios from "axios";

const apiUrl = "http://localhost:8080/api"

export async function getUsers() : Promise<User[]> {
    const response = await axios.get(apiUrl + "/users");
    return response.data;
}

export async function getUserById(id: number) {
    const response = await axios.get(apiUrl + `/users/${id}`);
    return response.data;
}

export async function addUser(user: UserDTO) {
    const response = await axios.post(apiUrl + "/add",
        {
            name: user.name,
            email: user.email,
            contact: user.contact,
        }
    );

    return response.data;
}

export async function updateUser(id: number, user: UserDTO) {
    const response = await axios.put(apiUrl + `/users/${id}`,
        {
            name: user.name,
            email: user.email,
            contact: user.contact,
        }
    )

    return response.data;
}

export async function deleteUser(id: number) {
    const response = await axios.delete(apiUrl + `/delete/${id}`);

    return response.data;
}
