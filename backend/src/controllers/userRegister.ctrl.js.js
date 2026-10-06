import { createUser, getUserByEmail } from "../db/users.dal.js"
import { AppError } from "../utils/errorHandler.js"
import { createHash } from "../utils/hash.js"

export const userRegister = async (req, res) => {
    const userData = req.body

    const user = await getUserByEmail(userData.email)

    if (user) throw new AppError("Email already in use!", 409)

    userData.passwordHash = await createHash(userData.password)
    
    delete userData.password

    const result = await createUser(userData) 
    
    res.status(201).json({success: true, message: result})
}