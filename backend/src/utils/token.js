import jwt from "jsonwebtoken"
import "dotenv/config"

export const generateToken = (userId, role) => {
    return jwt.sign({userId, role}, process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXPIRES_IN})
}

export const compareToken = (token) => {
    return jwt.verify(token, process.env.JWT_SECRET)
}