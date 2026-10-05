import { ObjectId } from "mongodb";
import { AppError } from "../utils/errorHandler.js";
import { db } from "./db.js";

const collection = db.collection("alerts");

export const createAlert = async (alert) => {
	const result = await collection.insertOne(alert);
	return result;
};

export const getAlertById = async (id) => {
	const result = await collection.findOne({ _id: new ObjectId(id) });
    
	if (!result) throw new AppError("Error! Alert not found!", 404);

	return result;
};

export const getAllAlerts = () => {
	const result = collection.find();

	return result.toArray();
};
