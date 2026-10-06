import { deleteUserById } from "../../db/users.dal.js";

export const userDelete = async (req, res) => {
	const id = req.params.id;

	await deleteUserById(id);

	res.status(204).json({ success: true });
};
