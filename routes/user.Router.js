const express = require('express')
const { createUser, getAllUsers } = require('../controllers/user.Controller')
const userRouter = express.Router()

userRouter.route('/')
    .get(getAllUsers)
    .post(createUser)

module.exports = userRouter