import { Router } from "express";
import { addAlert } from "../controllers/addAlert.ctrl.js";
import { deleteAlert } from "../controllers/deleteAlert.ctrl.js";
import { getAlerts } from "../controllers/getAlerts.ctrl.js";
import { getSingleAlert } from "../controllers/getSingleAlert.ctrl.js";
import { updateAlert } from "../controllers/updateAlert.ctrl.js";
import { alertBodySchema } from "../schemas/alertSchema.js";
import { asyncWrapper } from "../utils/asyncWrapper.js";
import { validate } from "../utils/validation.js";

const router = Router();

router.get("/", asyncWrapper(getAlerts));

router.get("/:id", asyncWrapper(getSingleAlert));

router.post("/", validate(alertBodySchema), asyncWrapper(addAlert));

router.delete("/:id", asyncWrapper(deleteAlert));

router.put("/:id",  asyncWrapper(updateAlert));

export default router;
