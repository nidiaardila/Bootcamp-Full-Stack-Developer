import { Router } from "express";
import { 
    createUser, 
    deletePermanentlyUser, 
    getAllUsers, 
    getUserById, 
    updateUser 
} from "../controllers/user.controller.js";


const router = Router();

router.post('/user', createUser)
router.get('/user', getAllUsers)
router.get('/user/:id', getUserById)
router.put('/user/:id', updateUser)
router.delete('/user/:id', deletePermanentlyUser)

export default router
