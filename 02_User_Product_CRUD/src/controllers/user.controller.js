
import { User } from '../models/User.model.js'

export const createUser = async (req, res) => {
    try {
        const data =  req.body

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