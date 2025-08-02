import { Router } from "express";
import { createProduct, getAllProducts } from '../controllers/product.controller.js'


const router = Router();

router.post('/product', createProduct)
router.get('/product', getAllProducts)

export default router
