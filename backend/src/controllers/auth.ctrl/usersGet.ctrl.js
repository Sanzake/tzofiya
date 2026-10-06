import { getUsers } from "../../db/users.dal.js";

export const usersGet = async (_req, res) => {
	const users = await getUsers();

	res.status(200).json({ success: true, message: users });
};
