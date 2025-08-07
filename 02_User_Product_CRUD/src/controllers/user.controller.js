import { User } from '../models/User.model.js'

export const createUser = async (req, res) => {
    try {
        const data =  req.body;
        const user = await User.createUser(data)
        res.status(201).json({
            message: 'User created successfully',
            status: 201,
            data: user
        })

    } catch (error) {
        res.status(500).json({
            message: 'Error creating user',
            status: 500,
            error: error.message
        })
    }
}  

export const getAllUsers = async (req, res) => {
    try {
        const data = await User.findAll()

        if(!data) throw new Error('No existen datos')

        res.status(200).json({
            message: 'Users found',
            status: 200,
            data
        })
    } catch (error) {
        res.status(500).json({
            message: 'Error getting users',
            status: 500,
            error: error.message
        })
    }
}

export const getUserById = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await User.findById(id);

        if(!data) throw new Error('DLa data se encuentra vacia')

        res.status(200).json({
            message: 'User found',
            status: 200,
            data
        })
    } catch (error) {
        res.status(500).json({
            message: 'Error getting user by id',
            status: 500,
            error: error.message
        })
    }
}

export const updateUser = async (req, res) => {
    try {
        const { id } = req.params
        const dataUser = req.body

        const updateUser = await User.update(id, dataUser)

        res.status(201).json({
            message: 'User updated',
            status: 201,
            oldData: updateUser,
            newData: dataUser
        })
    } catch (error) {
        res.status(500).json({
            message: "Error error updating user",
            status: 500,
            error,
          });
    }
}

export const deletePermanentlyUser = async (req, res) => {
    try {
        const { id } = req.params

        const deleteUser = await User.permanentlyDelete(id)

        res.status(200).json({
            message: `Usuario con id ${id} eliminado con exito`,
            status: 201,
            dataDeleted: deleteUser
        })
    } catch (error) {
        res.status(500).json({
            message: "Error al Eliminar el usuario permanentemente",
            status: 500,
            error,
        });
    }
}