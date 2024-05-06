const express=require("express")
const app=express()
const axios=require('axios')

app.get('/',(req,res)=>{
    res.send("react app")
})

async function apiData(){
        const response=await axios.get("https://jsonplaceholder.typicode.com/posts")
        console.log(response.data)      
    }


const port=3000
app.listen(port,async()=>{
    console.log("Server is running on port:",port)
    await apiData();
})