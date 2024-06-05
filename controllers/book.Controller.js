const { ObjectId } = require("mongodb");
const { database } = require("../config/db")

module.exports.postBook= async (req,res) =>{
    try{
        const result = await database.collection('books').insertOne(req.body);
        res.send(result)
    }catch(error){
        console.log(error)
    }finally{
        
    }
}
module.exports.getAllBooks= async (req,res) =>{
    try{
        const result =await database.collection('books').find({}).toArray()
        res.send(result)
    }catch(error){
        console.log(error)
    }finally{
        
    }
}
module.exports.getBookById= async (req,res) =>{
    try{
        console.log(req.params)
        const id=req.params.id;
        const result=await database.collection('books').findOne({ _id: new ObjectId(id) })
        res.send(result)
    }catch(error){
        console.log(error)
    }finally{

    }
}
module.exports.updateBookById= async (req,res) =>{
    try{
        const {id}=req.params
        const bookInfo=req.body
        console.log(bookInfo)
        const result = await database.collection('books').updateOne({_id:new ObjectId(id)},{$set:bookInfo})
        res.send(result)
    }catch(error){
        console.log(error)
    }finally{

    }
}
module.exports.deleteBookById= async (req,res) =>{
    try{
        const id=req.params.id
        console.log(id)
        const result=database.collection('books').deleteOne({_id:new ObjectId(id)})
        res.send(result)
        console.log(result)
    }catch(error){
        console.log(error)
    }finally{

    }
}