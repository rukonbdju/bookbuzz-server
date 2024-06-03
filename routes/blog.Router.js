const express = require('express')
const { getAllBlogs, postBlog } = require('../controllers/blog.Controller')

const blogRouter = express.Router()

blogRouter.route("/")
    .get(getAllBlogs)
    .post(postBlog)

module.exports = blogRouter