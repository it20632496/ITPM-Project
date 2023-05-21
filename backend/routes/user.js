import express, { Router } from "express";

import { addUser, findUserByEmail } from "../controllers/user.js";
import { catchAsync } from "../utils/catchAsync.js";

const router = express.Router();

router.post("/", catchAsync(addUser));
router.get("/find/:email", catchAsync(findUserByEmail));

export default router;
