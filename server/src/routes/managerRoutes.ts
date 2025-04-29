import express from "express";
import {
  getManager,
  createManager,
  updateManager,
} from "../controllers/managerController";

const router = express.Router();

router.get("/:cognitoId", getManager);
router.put("/:cognitoId", updateManager);
router.post("/", createManager);

export default router;
