import { Router } from "express";
import { addAlert } from "../controllers/addAlert.ctrl.js";
import { deleteAlert } from "../controllers/deleteAlert.ctrl.js";
import { getAlerts } from "../controllers/getAlerts.ctrl.js";
import { getSingleAlert } from "../controllers/getSingleAlert.ctrl.js";
import { updateAlert } from "../controllers/updateAlert.ctrl.js";
import { asyncWrapper } from "../utils/asyncWrapper.js";

const router = Router();

router.get("/alerts", asyncWrapper(getAlerts));

router.get("/alerts/:id", asyncWrapper(getSingleAlert));

router.post("/alerts", asyncWrapper(addAlert));

router.delete("/alerts/:id", asyncWrapper(deleteAlert));

router.put("/alerts/:id", asyncWrapper(updateAlert));

export default router;
