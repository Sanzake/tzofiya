import { getAllAlerts } from "../db/alerts.dal.js";

export const getAlerts = async (_req, res) => {
	const alerts = await getAllAlerts();
    

	res.status(200).json(alerts);
};
