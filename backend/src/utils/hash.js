import bcrypt from "bcrypt"

const SALT_ROUNDS = 10

export const createHash = async (password) => {
    return await bcrypt.hash(password, SALT_ROUNDS);
}

export const valifdatePassword = async (password, passwordHash) => {
    return await bcrypt.compare(password, passwordHash)
}