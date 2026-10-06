import { getAlertById } from "../../db/alerts.dal.js";

export const getSingleAlert = async (req, res) => {
	const id = req.params.id;

	const result = await getAlertById(id);

	res.status(200).json(result);
};
