import express from "express";
import jobsRouter from "./routes/jobs.js";

const app = express();
app.use(express.json())
app.use(jobsRouter);

export default app;
