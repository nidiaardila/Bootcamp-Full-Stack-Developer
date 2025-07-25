import { v4 as uuidv4 } from 'uuid';


export class User {
    #id
    #name
    #lastname
    #email
    #active
    #rol

    constructor (name, lastname, email) {
        this.#id = uuidv4()
        this.#name = name
        this.#lastname = lastname
        this.#email = email
        this.#active = true
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

    get AllProperties(){
        return {
            id: this.#id,
            nombre: this.#name,
            lastname: this.#lastname,
            email: this.#email,
            rol: this.#rol,
            active: this.#active


        }
    }
}