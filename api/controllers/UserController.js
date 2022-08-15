const bcrypt = require('bcryptjs')
const User = require('../models/UserModel')

exports.getAllUsers = async (req, h) => {
    const users = await User.find().exec()
    return users
}

exports.userAuthentication = async (req, h) => {
    const { username, password } = req.payload
    try {
        const user = await User.findOne({ username }).exec()
        if (!user) {
            const newUser = await User.create({ username, password })
            return h.response({ user: newUser }).code(201)
        } else {
            const isMatchingPassword = await bcrypt.compare(password, user.password)
            if (!isMatchingPassword) {
                return h.response({ error: 'Invalid login credentials' }).code(503)
            }
            return h.response({ user }).code(200)
        }
    } catch (error) {
        return h.response({ error: 'Login failed! Check authentication credentials' }).code(503)
    }
}