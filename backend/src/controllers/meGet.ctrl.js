import { getUserById } from "../db/users.dal.js";
import { AppError } from "../utils/errorHandler.js";
import { compareToken } from "../utils/token.js";

export const meGet = async (req, res) => {
    const authHeader = req.headers.authorization
    
    if (!authHeader?.startsWith("Bearer ")) {
        throw new AppError("Invalid token!", 401);
    }

    const token = authHeader.split(" ")[1]

    const {userId} = compareToken(token)

    const user = await getUserById(userId)

    delete user.passwordHash

    res.status(200).json({success: true, message: user})
}