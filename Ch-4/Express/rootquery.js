var express = require("express")
var app= express()
app.get("/user/:uid",(req,res)=>{
    console.log(req.params)
    console.log(req.query)
    res.write(`<h1> Welcome ${req.query.name}</h1> 
        <h2> Your id is ${req.params.uid} </h2>`)
    if(parseInt(req.query.age)<18){
        res.write("you are minor")
    }
    else{
        res.write("u are an adlut")
    }
    res.send()
})
app.listen(8000)

// run:http://localhost:8000/user/1001?name=xyz&age=20