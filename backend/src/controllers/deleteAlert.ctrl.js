import { deleteAlertById } from "../db/alerts.dal.js";

export const deleteAlert = (req, res) => {
	const id = req.params.id;

	deleteAlertById(id);

	res.status(204).json({ success: true, message: "Successfull deleted!"});
};
