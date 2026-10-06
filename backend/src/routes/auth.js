import { Router } from "express";
import { meGet } from "../controllers/auth.ctrl/meGet.ctrl.js";
import { userDelete } from "../controllers/auth.ctrl/userDelete.ctrl.js";
import { userLogin } from "../controllers/auth.ctrl/userLogin.ctrl.js";
import { userRegister } from "../controllers/auth.ctrl/userRegister.ctrl.js.js";
import { usersGet } from "../controllers/auth.ctrl/usersGet.ctrl.js";
import { loginBodySchema } from "../schemas/loginSchema.js";
import { userBodySchema } from "../schemas/userSchema.js";
import { asyncWrapper } from "../utils/asyncWrapper.js";
import { validate } from "../utils/validation.js";

const router = Router();

router.post("/register", validate(userBodySchema), asyncWrapper(userRegister));

router.post("/login", validate(loginBodySchema), asyncWrapper(userLogin));

router.get("/users", asyncWrapper(usersGet));

router.delete("/users/:id", asyncWrapper(userDelete));

router.get("/me", asyncWrapper(meGet));

export default router;
