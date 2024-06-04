const { database } = require("../config/db")

module.exports.createUser = async (req, res) => {
    try {
        console.log(req.body)
        const result = await database.collection('users').updateOne(
            { uid: req.body.uid },
            { $setOnInsert: req.body },
            { upsert: true }
        )
        console.log()
        res.send(result)
    } catch (error) {
        console.log(error) 
    } finally {

    }

}

module.exports.getAllUsers = async (req, res) => {
    try {
        const result = await database.collection('users').find({}).toArray()
        res.send(result)
    } catch (error) {
        console.log(error)
    } finally {

    }

}
module.exports.getUserById = async (req, res) => {
    try {

    } catch (error) {
        console.log(error)
    } finally {

    }

}
module.exports.UpdateUserById = async (req, res) => {
    try {

    } catch (error) {
        console.log(error)
    } finally {

    }

}

module.exports.deleteUserById = async (req, res) => {
    try {

    } catch (error) {
        console.log(error)
    } finally {

    }

}