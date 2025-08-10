import { v4 as uuidv4 } from 'uuid';
import { createDataFile, getAllData, getElementById, permanentlyDeleteData, updateData } from '../utils/fileUtils.js'
import { Validate } from '../utils/validaciones.js';



export class Product {
    #id
    #name
    #description
    #price
    #stock
    #visible

    constructor(name, description, price, stock){
        this.#id = uuidv4()
        this.#name = Validate.userName(name, 'Nombre')
        this.#description = Validate.userName(description, 'Descripcion')
        this.#price = Validate.amount(price, 'Precio');
        this.#stock =Validate.amount(stock, 'Stock');
        this.#visible = stock > 0
    }

    get id(){
        return this.#id
    }

    get name(){
        return this.#name
    }

    get description(){
        return this.#description
    }

    get price(){
        return this.#price
    }

    get stock(){
        return this.#stock
    }

    setName(newName) {
        try {
            Validate.userName(newName, "Nombre");
            this.#name = newName;
        } catch (error) {
            console.error(error);
        }
    }

    setDescription(newDescription) {
        try {
            Validate.userName(newDescription, "Descripción");
            this.#name = newName;
        } catch (error) {
            console.error(error);
        }
    }

    setPrice(newPrice) {
        try {
            Validate.amount(newPrice, "Precio");
            this.#price = newPrice;
        } catch (error) {
            console.error(error);
        }
    }

    setStock(newStock){
        try {
            Validate.amount(newStock, 'Stock');
            this.#stock = newStock;
        } catch (error) {
            console.error(error);
        }
    }

    getAllProperties(){
        return {
            id: this.#id,
            name: this.#name,
            description: this.#description,
            price: this.#price,
            stock: this.#stock,
            visible: this.#visible
        }
    }

    static async createProduct(data){
        try {
            const {name, description, price, stock} = data;
            const product = new Product(name, description, price, stock);
            const productObject = product.getAllProperties();

            await createDataFile(productObject, 'products.json');
            return productObject;
        } catch (error) {
            throw new Error(`Error al crear el producto, Error: ${error}`)
        }
    }

    static async findAll(){
        try {
            const data = await getAllData('products.json')
            return data
        } catch (error) {
            throw new Error (`Error al obtener los datos de los productos, Error ${error}`)
        }
    }

    static async findById(id){
        try {
            const product = await getElementById(id, 'products.json')
            return product
        } catch (error) {
            throw new Error (`Error al obtener los datos del el producto, Error ${error}`)
        }
    }

    static async update(id, data){
        try {
            const updateProduct = await updateData(id, data, 'products.json')
            return updateProduct
        } catch (error) {
            throw new Error (`Error al actualizar el producto, Error: ${error}`);
        }
    }

    static async permanentlyDelete(id){
        try {
            const deleteProduct = await permanentlyDeleteData(id, 'products.json')
            return deleteProduct
        } catch (error) {
            throw new Error (`Fallo al eliminar permanente el producto, Error: ${error}`);
        }
    }
}
