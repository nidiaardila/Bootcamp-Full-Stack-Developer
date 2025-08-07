import { Router } from "express";
import { 
    createProduct, 
    deletePermanentlyProduct, 
    getAllProducts, 
    getProductById, 
    updateProduct 
} from '../controllers/product.controller.js'


const router = Router();

router.post('/product', createProduct)
router.get('/product', getAllProducts)
router.get('/product/:id', getProductById)
router.put('/product/:id', updateProduct)
router.delete('/product/:id', deletePermanentlyProduct)

export default router;
