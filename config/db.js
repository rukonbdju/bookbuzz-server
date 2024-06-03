const dotenv = require('dotenv') 
dotenv.config()

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@bookbuzz.c10bi50.mongodb.net/?retryWrites=true&w=majority&appName=Bookbuzz`;
console.log(uri)
const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

 module.exports.database=client.db('bookbuzz');