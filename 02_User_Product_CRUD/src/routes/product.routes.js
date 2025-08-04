import { Router } from "express";
import { createProduct, getAllProducts, getProductById } from '../controllers/product.controller.js'


const router = Router();

router.post('/product', createProduct)
router.get('/product', getAllProducts)
router.get('/product/:id', getProductById)

export default router;
