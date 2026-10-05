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

export const deleteAlertById = async (id) => {
	const result = await collection.deleteOne({ _id: new ObjectId(id) });
    
    if (result.deletedCount === 0) throw new AppError("Alert not found!", 404)
    
    return result
};

export const updateAlertById = async (id, newAlert) => {
	const result = await collection.updateOne(
		{ _id: new ObjectId(id) },
		{$set: newAlert},
	);
	return result;
};
