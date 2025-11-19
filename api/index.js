const express=require('express')
const app=express()
const cors =require('cors')

app.use(cors())

app.get('/',(req,res)=>{
    res.send('hello from backend')
})


module.exports=app