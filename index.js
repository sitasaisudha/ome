const express = require('express')
app = express()
app.get("/",(req,res)=>{
    res.send("hello dont worry")
})
app.listen(3000,()=>{
    console.log("server running")
})