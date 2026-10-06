import { Router } from "express";
import { meGet } from "../controllers/meGet.ctrl.js";
import { userDelete } from "../controllers/userDelete.ctrl.js";
import { userLogin } from "../controllers/userLogin.ctrl.js";
import { userRegister } from "../controllers/userRegister.ctrl.js.js";
import { usersGet } from "../controllers/usersGet.ctrl.js";

const router = Router();

router.post("/register", userRegister);

router.post("/login", userLogin);

router.get("/users", usersGet);

router.delete("/users", userDelete);

router.get("/me", meGet);
