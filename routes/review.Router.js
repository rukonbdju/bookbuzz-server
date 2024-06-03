const express = require('express')
const { getAllReviews, postReview } = require('../controllers/review.Controller')

const reviewRouter = express.Router()

reviewRouter.route("/")
    .get(getAllReviews)
    .post(postReview)

module.exports = reviewRouter