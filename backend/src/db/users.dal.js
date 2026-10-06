import { AppError } from "../utils/errorHandler.js";
import { db } from "./db.js";

const collection = db.collection("users");

export const createUser = async (userData) => {
	await collection.insertOne(userData);
    
	delete userData.passwordHash;
    
	return userData;
};

export const getUserByEmail = async (email) => {
    const user = await collection.findOne({email})

    return user
}

export const getUserByUsername = async (username) => {
    const user = await collection.findOne({username})

    if (!user) throw new AppError("Invalid username!", 404)

    return user
}

export const getUserById = async (id) => {
    const user = await collection.findOne({ _id: new ObjectId(id) })

    if (!user) throw new AppError("User not found!", 404)

    return user
}

export const getUsers = async () => {
    const users = collection.find()

    if (!users) throw new AppError("There is no users!", 404)
        
    return await users.toArray()
}

export const deleteUserById = async () => {
    const result = await collection.deleteOne({ _id: new ObjectId(id) });
        
    if (result.deletedCount === 0) throw new AppError("User not found!", 404)
    
    return result
}