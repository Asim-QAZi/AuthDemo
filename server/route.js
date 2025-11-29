const express=require('express')
const rout=express.Router();
const mongoose=require('mongoose')
const usermodel=require('./mdl')
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken')
const app=express();
var token=""
app.use(express.json())

rout.get("/show",async (req,res)=>{

    token=req.headers['authorization'].split(' ')[1];

    if(!token){
        return res.json({message:"token not provided..."})
    }

    const check=await jwt.decode(token,process.env.TOKEN_KEY);

    if(!check){
        return res.json({message:"invalid token"})
    }

    const lst=await usermodel.find();
    
    res.json(lst)

})



rout.post("/reg",async(req,res)=>{


    const pswd=req.body.password;

    const hsh=await bcrypt.hash(pswd,10);

    req.body.password=hsh;

    const newModel=await new usermodel(req.body);

    await newModel.save();

    console.log("saved successfully..");

    res.json({message:"user registered successfully"})




})

rout.post("/log",async (req,res)=>{
 
    const pass=req.body.password;
    const username=req.body.password;

    const exist=await usermodel.findOne({username:username});

    if(!exist){

        return res.json({message:"user not existed..."});
  
    }

    const match=await bcrypt.compare(pass,exist.password);

      if(!match){
       return res.json({message:"username or password incorrect.."});
      }

      const token=await jwt.sign({name:exist.name,role:exist.role},process.env.TOKEN_KEY,{expiresIn:"1h"});

      if(!token){
           res.json({message:"token not created.."});
      }

      res.json({message:token});

     

      console.log("successfully loged-in.")





})

module.exports=rout;