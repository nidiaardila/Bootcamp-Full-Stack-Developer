import { Router } from "express";
import { createUser, getAllUsers, getUserById } from "../controllers/user.controller.js";


const router = Router();

router.post('/user', createUser)
router.get('/user', getAllUsers)
router.get('/user/:id', getUserById)

export default router
