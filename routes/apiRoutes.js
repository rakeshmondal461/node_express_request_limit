import express from "express";
import apiController from "../controllers/apiController.js";
import limiter from "../middleware/rateLimiter.js";

const router = express.Router();

router.get("/data", limiter, apiController.getData);

export default router;
