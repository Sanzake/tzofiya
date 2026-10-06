import {z} from "zod"

export const userBodySchema = z.object({
    body: z.object({
        username: z.string().min(4, "Username too short!").max(20, "Username too long!"),
        password: z.string().min(8, "Password too short!"),
        email: z.email("Incorrect email!"),
        role: z.enum(["admin", "general_user", "arena_user"]),
        assignedArena: z.enum(["all", "North", "Central", "South"])
    })
})