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