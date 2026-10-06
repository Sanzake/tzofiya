import { AppError } from "../utils/errorHandler.js";
import { db } from "./db.js";

const collection = db.collection("users");

export const createUser = async (userData) => {
	const result = await collection.insertOne(userData);

	delete userData.passwordHash;

	return { id: result.insertedId, ...userData };
};

export const getUserByEmail = async (email) => {
    const user = await collection.findOne({email})

    if (!user) throw new AppError("Invalid email", 404)

    return user
}

export const getUserById = async () => {

}

export const getUsers = () => {
    const users = collection.find()

    if (!users) throw new AppError("There is no users", 404)

    return users
}