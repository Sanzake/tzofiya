import { Router } from "express";
import { addAlert } from "../controllers/addAlert.ctrl.js";
import { deleteAlert } from "../controllers/deleteAlert.ctrl.js";
import { getAlerts } from "../controllers/getAlerts.ctrl.js";
import { getSingleAlert } from "../controllers/getSingleAlert.ctrl.js";
import { updateAlert } from "../controllers/updateAlert.ctrl.js";

const router = Router();

router.get("/alerts", getAlerts);

router.get("/alerts/:id", getSingleAlert);

router.post("/alerts", addAlert);

router.delete("/alerts/:id", deleteAlert);

router.put("/alerts/:id", updateAlert);

export default router;
