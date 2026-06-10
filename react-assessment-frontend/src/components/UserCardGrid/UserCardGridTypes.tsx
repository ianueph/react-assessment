import { User } from "@/types/User"
import { SetStateAction } from "react"

export type UserCardGridProps = {
    users: User[]
    onChange: () => Promise<void>
    onEdit: React.Dispatch<SetStateAction<User | null>>
}