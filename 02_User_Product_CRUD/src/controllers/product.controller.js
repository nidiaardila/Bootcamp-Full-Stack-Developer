import { Product } from "../models/Product.model.js"


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

export const getAllProducts = async (req, res) => {
    try {
        const data = await Product.findAll();

        if(!data) throw new Error('No existen datos')

        res.status(200).json({
            message: 'Products found',
            status: 200,
            data
        })
    } catch (error) {
        res.status(500).json({
            message: 'Error getting products',
            status: 500,
            error: error.message
        })  
    }
}

export const getProductById = async (req, res) => {
    try {
        const  { id } = req.params;
        const data = await Product.findById(id);

        if(!data) throw new Error('La data se encuentra vacia')

        res.status(200).json({
            message: 'Product found',
            status: 200,
            data
        })
    } catch (error) {
        res.status(500).json({
            message: 'Error getting product by id',
            status: 500,
            error: error.message
        })  
    }
}

export const updateProduct = async (req, res) => {
    try {
        const { id } = req.params
        const dataProduct = req.body

        const updateProduct = await Product.update(id, dataProduct)

        res.status(201).json({
            message: 'Product updated',
            status: 201,
            oldData: updateProduct,
            newData: dataProduct
        })
    } catch (error) {
        res.status(500).json({
            message: "Error error updating product",
            status: 500,
            error,
          });
    }
}

export const deletePermanentlyProduct = async (req, res) => {
    try {
        const { id } = req.params

        const deleteProduct = await Product.permanentlyDelete(id)

        res.status(200).json({
            message: `Producto con id ${id} eliminado con exito`,
            status: 201,
            dataDeleted: deleteProduct
        })
    } catch (error) {
        res.status(500).json({
            message: "Error al Eliminar el producto permanentemente",
            status: 500,
            error,
        });
    }
}