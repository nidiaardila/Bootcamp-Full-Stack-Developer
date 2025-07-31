import { Router } from "express";
import { createUser, getAllUsers } from "../controllers/user.controller.js";


const router = Router();

router.post('/user', createUser)
router.get('/user', getAllUsers)

export default router
