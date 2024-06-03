const express = require('express')
const { getAllBooks, postBook } = require('../controllers/book.Controller')

const bookRouter = express.Router()

bookRouter.route("/")
    .get(getAllBooks)
    .post(postBook)

module.exports = bookRouter
