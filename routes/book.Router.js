const express = require('express')
const { getAllBooks, postBook, getBookById } = require('../controllers/book.Controller')

const bookRouter = express.Router()

bookRouter.route("/")
    .get(getAllBooks)
    .post(postBook)
bookRouter.route("/:id")
    .get(getBookById)

module.exports = bookRouter
