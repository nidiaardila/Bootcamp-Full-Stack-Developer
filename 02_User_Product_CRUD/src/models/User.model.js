import { v4 as uuidv4 } from 'uuid';
import { 
    createDataFile, 
    getAllData, 
    getElementById, 
    permanentlyDeleteData, 
    updateData 
} from '../utils/fileUtils.js';

import { Validate } from "../utils/validaciones.js";
import { VALID_ROLES } from '../utils/constantes/validRoles.js';
import { InternalServerError, ValidationError } from '../error/typesError.js';


export class User {
    #id
    #name
    #lastname
    #email
    #rol
    #active
    

    constructor (name, lastname, email, rol) {
        this.#id = uuidv4()
        this.#name = Validate.userName(name, 'Nombre'); 
        this.#lastname = Validate.userName(lastname, 'Apellido');
        this.#email = Validate.email(email);
        this.#rol = Validate.rol(rol, VALID_ROLES);
        this.#active = true;
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
        try {
            Validate.userName(newName, 'Nombre');
            this.#name = newName
        } catch (error) {
            // console.error(error)
            throw new ValidationError('Error al modificar el campo name',error)
            }
    }

    setLastname(newLastname){
        try {
            Validate.userName(newLastname, 'Apellido');
            this.#lastname = newLastname
        } catch (error) {
            // console.error(error)
            throw new ValidationError('Error al modificar el campo no lastname',error)
        }
    }

    setEmail(newEmail){
        try {
            Validate.email(email)
            this.#email = newEmail
        } catch (error) {
            // console.error(error)
            throw new ValidationError('Error al modificar el campo email',error);
        }
    }

    setRol(newRol){
        try {
            Validate.rol(newRol, VALID_ROLES)
            this.#rol = newRol
        } catch (error) {
            // console.error(error);
            throw new ValidationError('Error al modificar el campo rol',error);
        }
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
            // throw new Error(`Error al crear el usuario, Error: ${error}`),
            throw new InternalServerError(`Error al crear el usuario, Error:`, error)
        }
    }

    static async findAll(){
        try {
            const data = await getAllData('users.json')
            return data
        } catch (error) {
            // throw new Error(`Error al obtener los datos de usuarios`)
            throw new InternalServerError(`Error al obtener los datos de usuarios`, error)

        }
    }

    static async findById(id){
        try {
            const data = await getElementById(id, 'users.json')
            return data
        } catch (error) {
            // throw new Error(`Error al obtener los datos de usuarios por Id`)
            throw new InternalServerError(`Error al obtener los datos de usuarios por Id`, error)

        }
    }

    static async update(id, data){
        try {
            const updateUser = await updateData(id, data, 'users.json');
            return updateUser
        } catch (error) {
            // throw new Error (`Error al actualizar el usuario, Error: ${error}`);
            throw new InternalServerError (`Error al actualizar el usuario, Error:`, error);

        }
    }

    static async permanentlyDelete(id){
        try {
            const deleteUser = await permanentlyDeleteData(id, 'users.json');
            return deleteUser 
        } catch (error) {
            // throw new Error (`Fallo al eliminar permanente el usuario, Error: ${error}`);
            throw new InternalServerError (`Fallo al eliminar permanente el usuario, Error:`, error);
        }
    }
}