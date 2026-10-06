import { Router } from "express";
import { meGet } from "../controllers/auth.ctrl/meGet.ctrl.js";
import { userDelete } from "../controllers/auth.ctrl/userDelete.ctrl.js";
import { userLogin } from "../controllers/auth.ctrl/userLogin.ctrl.js";
import { userRegister } from "../controllers/auth.ctrl/userRegister.ctrl.js.js";
import { usersGet } from "../controllers/auth.ctrl/usersGet.ctrl.js";
import { authenticate } from "../middleware/authentication.middleware.js";
import { loginBodySchema } from "../schemas/loginSchema.js";
import { userBodySchema } from "../schemas/userSchema.js";
import { asyncWrapper } from "../utils/asyncWrapper.js";
import { validate } from "../utils/validation.js";

const router = Router();

router.post(
	"/register",
	validate(userBodySchema),
	authenticate(["admin"]),
	asyncWrapper(userRegister),
);

router.post("/login", validate(loginBodySchema), asyncWrapper(userLogin));

router.get("/users", authenticate(["admin"]), asyncWrapper(usersGet));

router.delete("/users/:id", authenticate(["admin"]), asyncWrapper(userDelete));

router.get("/me", asyncWrapper(meGet));

export default router;
