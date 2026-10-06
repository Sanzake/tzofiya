import { getUsers } from "../../db/users.dal.js";
import { AppError } from "../../utils/errorHandler.js";
import { compareToken } from "../../utils/token.js";

export const usersGet = async (req, res) => {
	const authHeader = req.headers.authorization;
	if (!authHeader?.startsWith("Bearer ")) {
		throw new AppError("Invalid token!", 401);
	}

	const token = authHeader.split(" ")[1];

	const { role } = compareToken(token);

	if (role !== "admin") throw new AppError("Permission denied!", 403);

	const users = await getUsers();

	res.status(200).json({ success: true, message: users });
};
