const express = require('express')
const { getAllBooks, postBook, getBookById, deleteBookById, updateBookById } = require('../controllers/book.Controller')

const bookRouter = express.Router()

bookRouter.route("/")
    .get(getAllBooks)
    .post(postBook)
bookRouter.route("/:id")
    .get(getBookById)
    .post(updateBookById)
bookRouter.route("/delete/:id")
    .post(deleteBookById)

module.exports = bookRouter
