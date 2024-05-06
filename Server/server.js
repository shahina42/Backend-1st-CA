const express=require("express")
const app=express()


app.get('/',(req,res)=>{
    res.send("react app")
})
const exjs=require('.express')

app.use('/Main',exjs)

const port=3000
app.listen(port,()=>{
    console.log("Server is running on port:",port)
})