const express = require('express')
const { createUser, getAllUsers, getUserById, UpdateUserById } = require('../controllers/user.Controller')
const userRouter = express.Router()

userRouter.route('/')
    .get(getAllUsers)
    .post(createUser)
userRouter.route('/:id')
    .get(getUserById)
    .post(UpdateUserById)

module.exports = userRouter