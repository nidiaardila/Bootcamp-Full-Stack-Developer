import { Router } from "express";
import { createProduct, getAllProducts, getProductById, updateProduct } from '../controllers/product.controller.js'


const router = Router();

router.post('/product', createProduct)
router.get('/product', getAllProducts)
router.get('/product/:id', getProductById)
router.put('/product/:id', updateProduct)

export default router;
