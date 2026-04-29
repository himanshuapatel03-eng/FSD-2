var express = require("express")
var app = express()
app.get("/",(req,res)=>{
    res.send(`<form action="/data" method="get">
        NAME: <input type="text" name="un">
        <input type="password" name="pass">
        <input type="submit"></form>`)
})
app.get("/data",(req,res)=>{
    console.log(req.query)
    res.send(`<h1> Welcome ${req.query.un}</h1>
        <h2> your pass is ${req.query.pass}</h2>`)
})

app.listen(8001)