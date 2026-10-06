import { AppError } from "../utils/errorHandler.js";

import { compareToken } from "../utils/token.js";
export const authMiddleware = (req, _res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader?.startsWith("Bearer ")) {
        throw new AppError("Invalid token!", 401);
    }

    const token = authHeader.split(" ")[1];

    const { role } = compareToken(token);

    if (role !== "admin") throw new AppError("Permission denied!", 403);

    next()
}