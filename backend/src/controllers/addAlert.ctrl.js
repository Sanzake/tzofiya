import { createAlert } from "../db/alerts.dal.js";

export const addAlert = (req, res) => {
	const body = req.body;

	const result = createAlert(body);

	res.status(201).json(result);
};
