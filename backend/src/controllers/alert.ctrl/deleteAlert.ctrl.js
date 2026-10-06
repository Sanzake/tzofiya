import { deleteAlertById } from "../../db/alerts.dal.js";

export const deleteAlert = async (req, res) => {
	const id = req.params.id;

	await deleteAlertById(id);

	res.status(204).json({ success: true });
};
