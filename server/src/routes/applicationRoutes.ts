import express from "express";
import { authMiddleware } from "../middleware/authMiddleware";
import {
  createApplication,
  listApplications,
  updateApplicationsStatus,
} from "../controllers/applicationControllers";

const router = express.Router();

router.post("/", authMiddleware(["tenant"]), createApplication);
router.put(
  "/:id/status",
  authMiddleware(["manager"]),
  updateApplicationsStatus
);
router.get("/", authMiddleware(["manager", "tenant"]), listApplications);

export default router;
