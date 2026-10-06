import { createUser, getUserByEmail } from "../../db/users.dal.js";
import { AppError } from "../../utils/errorHandler.js";
import { createHash } from "../../utils/hash.js";

export const userRegister = async (req, res) => {
	const authHeader = req.headers.authorization;
	if (!authHeader?.startsWith("Bearer ")) {
		throw new AppError("Invalid token!", 401);
	}

	const token = authHeader.split(" ")[1];

	const { role } = compareToken(token);

	if (role !== "admin") throw new AppError("Permission denied!", 403);

	const userData = req.body;

	const user = await getUserByEmail(userData.email);

	if (user) throw new AppError("Email already in use!", 409);

	userData.passwordHash = await createHash(userData.password);

	delete userData.password;

	const result = await createUser(userData);

	res.status(201).json({ success: true, message: result });
};
