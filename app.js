const express=require('express')
const app=express()
const cors =require('cors')

app.use(cors())

app.get('/api',(req,res)=>{
    res.send('hello from backend')
})



app.listen(8080,()=>console.log('hello from server 8080'))