
const express=require('express');
require('dotenv').config();
const app=express()
const mongoose=require('mongoose');
const cors=require('cors')
const route=require('./route');

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("connected successfully...")
}).catch((err)=>{
    console.log(err,"something went wrong");
});

app.use(express.json())
app.use(cors());
//app.use(route);

// app.post("/reg",route);

  app.use("/",route)


app.listen(process.env.PORT,()=>{
    console.log("server started.....");
})