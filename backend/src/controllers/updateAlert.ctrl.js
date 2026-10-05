import { updateAlertById } from "../db/alerts.dal.js";

export const updateAlert = async (req, res) => {
	const id = req.params.id;
	const newAlert = req.body;

	const result = await updateAlertById(id, newAlert);

	res.status(201).json(result);
};
