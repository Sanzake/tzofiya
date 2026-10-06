import {z} from "zod"

export const loginBodySchema = z.object({
    body: z.object({
        username: z.string().min(4, "Username too short!").max(20, "Username too long!"),
        password: z.string().min(8, "Password too short!"),
    })
})