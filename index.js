const express = require('express')
const cors = require('cors')
const userRouter = require('./routes/user.Router')
const bookRouter = require('./routes/book.Router')
const blogRouter = require('./routes/blog.Router')
const reviewRouter = require('./routes/review.Router')
const app = express()


app.use(cors())
app.use(express.json())

const port = process.env.PORT || 3000

//api router
app.use("/api/users", userRouter)
app.use("/api/books", bookRouter)
app.use("/api/blogs", blogRouter)
app.use("/api/reviews", reviewRouter)

app.get("/", (req, res) => {
    res.send("server is running")
})
app.all('*', (req, res) => {
    res.send('Not found')
})
app.listen(port, () => {
    console.log("server listening on port : ", port)
})
