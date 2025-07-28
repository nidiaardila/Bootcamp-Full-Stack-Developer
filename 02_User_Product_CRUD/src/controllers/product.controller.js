import { Product } from "../models/Product.model.js";

export const createProduct = async(req, res) => {
    try {
        const data = req.body;
        const product = await Product.createProduct(data)
        res.status(201).json({
            message: 'Product created successfully',
            status: 201,
            data: product
        })

    } catch (error) {
        res.status(500).json({
            message: 'Error creating product',
            status: 500,
            error: error.message,
            // stack: error.stack
        })
    }
}
