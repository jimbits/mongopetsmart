const express = require('express');
const mongodb = require('mongodb');
const mongoose = require('mongoose')
const Pet = require('./models/pets.model')
const server = express();

/* 
CONNECTION TO MONGODB ATLAS 
    --check security best practices for connections
    --check env variable support lynda.com video
*/
(mongoose.connect('mongodb+srv://test:test@testcluster-zmpfh.mongodb.net/petsmartdb?retryWrites=true',  { useNewUrlParser: true }))
.then((types)=>{
    console.log("db connection made successtully")
    const cat = new Pet({name:"jflasjdflsdjfldsj", age:"4", comments:{body:"googd", teeth:"good"}})
    cat.save()
})
.catch((error)=>{
    console.log("there has been an erro", error)
})


 


server.listen('4000', (req, res)=>{
    console.log("server listening on http://localhost:4000")
})