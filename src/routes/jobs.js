import { Router } from "express";
import {
  countJobs,
  createJobs,
  deleteJobs,
  getJob,
  getJobs,
  updateJobs,
} from "../controllers/jobs.controllers.js";
const router = Router();

router.get("/jobs", getJobs);
router.get("/jobs/count", countJobs);
router.get("/jobs/:id", getJob);
router.post("/jobs", createJobs);
router.put("/jobs/:id", updateJobs);
router.delete("/jobs/:id", deleteJobs);
export default router;
