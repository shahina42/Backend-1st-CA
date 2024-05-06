const express=require("express")
const route=express.Router

route.get('/Main',(req,res)=>{
     res.send("this is the main pg")
 })
 module.exports=route