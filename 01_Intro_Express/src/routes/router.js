import express from "express";
import { getHome, getAbout, getServices } from "../controllers/controller.js";

const router = express.Router();

router.get('/', getHome);
router.get('/about', getAbout);
router.get('/services', getServices);


export default router;