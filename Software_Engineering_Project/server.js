const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { MongoClient } = require('mongodb');


// Connection URL and database name
const url = 'mongosh "mongodb+srv://cluster0.zh0mkpe.mongodb.net/myFirstDatabase" --apiVersion 1 --username nipunharshaeng';
const dbName = 'cluster0';


//create a instance of express
const app=express();


//create a route
app.get('/',(req,res)=>{
    res.send('Hello World');
});
//add middlware to parse request bodies as jason
app.use(bodyParser.json());
//add a middleware
app.use((req,res,next)=>{
    console.log('Middleware');
    next();
}); 

//connect mongodb database
// Create a new MongoClient
const client = new MongoClient(url, { useNewUrlParser: true });

// Connect to the MongoDB server
client.connect(function(err) {
  if (err) {
    console.error('Failed to connect to MongoDB:', err);
    return;
  }
  console.log('Connected successfully to MongoDB');
});


//start the servernode 
const port=process.env.PORT || 3000;
app.listen(port,()=>console.log(`Server is running on port ${port}`))
