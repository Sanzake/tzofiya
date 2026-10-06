import { getUserByUsername } from "../../db/users.dal.js";
import { AppError } from "../../utils/errorHandler.js";
import { valifdatePassword } from "../../utils/hash.js";
import { generateToken } from "../../utils/token.js";

export const userLogin = async (req, res) => {
	const { username, password } = req.body;

	const user = await getUserByUsername(username);
	if (!user) throw new AppError("Invalid username or password!", 409);

	const validPassword = await valifdatePassword(password, user.passwordHash);
	if (!validPassword) throw new AppError("Invalid username or password!", 409);

	const token = generateToken(user._id, user.role);

	res.status(200).json({ success: true, message: { token } });
};
