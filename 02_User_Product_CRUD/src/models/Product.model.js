import { v4 as uuidv4 } from 'uuid';
import { createDataFile, getAllData, getElementById, updateData } from '../utils/fileUtils.js'



export class Product {
    #id
    #name
    #description
    #price
    #stock
    #visible

    constructor(name, description, price, stock){
        this.#id = uuidv4()
        this.#name = name
        this.#description = description
        this.#price = price
        this.#stock = stock
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

    setName(newName){
        this.#name = newName
    }

    setDescription(newDescription){
        this.#description = newDescription
    }

    setPrice(newPrice){
        this.#price = newPrice
    }

    setStock(newStock){
        this.#stock = newStock
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
}
