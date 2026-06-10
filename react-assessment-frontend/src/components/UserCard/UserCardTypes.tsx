import { User } from "@/types/User"
import { SetStateAction } from "react"

export type UserCardProps = {
    user: User,
    onEdit: React.Dispatch<SetStateAction<User | null>>
}