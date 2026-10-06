import { createAlert } from "../../db/alerts.dal.js";

export const addAlert = async (req, res) => {
	const body = req.body;

	const result = await createAlert(body);

	res.status(201).json({ success: true, message: result });
};
