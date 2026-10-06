import { Router } from "express";
import { meGet } from "../controllers/meGet.ctrl.js";
import { userDelete } from "../controllers/userDelete.ctrl.js";
import { userLogin } from "../controllers/userLogin.ctrl.js";
import { userRegister } from "../controllers/userRegister.ctrl.js.js";
import { usersGet } from "../controllers/usersGet.ctrl.js";
import { loginBodySchema } from "../schemas/loginSchema.js";
import { userBodySchema } from "../schemas/userSchema.js";
import { validate } from "../utils/validation.js";

const router = Router();

router.post("/register", validate(userBodySchema), asyncWrapper(userRegister));

router.post("/login", validate(loginBodySchema), asyncWrapper(userLogin));

router.get("/users", asyncWrapper(usersGet));

router.delete("/users", asyncWrapper(userDelete));

router.get("/me", asyncWrapper(meGet));
