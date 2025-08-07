import { v4 as uuidv4 } from 'uuid';
import { createDataFile, getAllData, getElementById, permanentlyDeleteData, updateData } from '../utils/fileUtils.js';


export class User {
    #id
    #name
    #lastname
    #email
    #active
    #rol

    constructor (name, lastname, email, rol) {
        this.#id = uuidv4()
        this.#name = name
        this.#lastname = lastname
        this.#email = email
        this.#active = true
        this.#rol = rol
    }

    get id(){
        return this.#id
    }

    get nameComplete(){
        return `${this.#name} ${this.#lastname}`
    }

    get name(){
        return this.#name
    }

    get lastname(){
        return this.#lastname
    }

    get email(){
        return this.#email
    }

    get rol(){
        return this.#rol
    }

    get active(){
        return this.#active
    }

    setName(newName){
        this.#name = newName
    }

    setLastname(newLastname){
        this.#lastname = newLastname
    }

    setEmail(newEmail){
        this.#email = newEmail
    }

    setRol(newRol){
        this.#rol = newRol
    }

    setActive (){
        this.#active = !this.#active
    }

    getAllProperties(){
        return {
            id: this.#id,
            name: this.#name,
            lastname: this.#lastname,
            email: this.#email,
            rol: this.#rol,
            active: this.#active
        }
    }

    static async createUser(data){
        try {
            const {name, lastname, email, rol} = data
            const user = new User(name, lastname, email, rol) 
            const userObject = user.getAllProperties()

            await createDataFile(userObject, 'users.json')

            return userObject   
        } catch (error) {
            throw new Error(`Error al crear el usuario, Error: ${error}`)
        }
    }

    static async findAll(){
        try {
            const data = await getAllData('users.json')
            return data
        } catch (error) {
            throw new Error(`Error al obtener los datos de usuarios`)
        }
    }

    static async findById(id){
        try {
            const data = await getElementById(id, 'users.json')
            return data
        } catch (error) {
            throw new Error(`Error al obtener los datos de usuarios por Id`)
        }
    }

    static async update(id, data){
        try {
            const updateUser = await updateData(id, data, 'users.json');
            return updateUser
        } catch (error) {
            throw new Error (`Error al actualizar el usuario, Error: ${error}`);
        }
    }

    static async permanentlyDelete(id){
        try {
            const deleteUser = await permanentlyDeleteData(id, 'users.json');
            return deleteUser 
        } catch (error) {
            throw new Error (`Fallo al eliminar permanente el usuario, Error: ${error}`);
        }
    }
}