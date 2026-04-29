var express = require("express")
var app = express()

app.use(express.urlencoded())
app.get("/",(req,res)=>{
    res.send(`<form action="/data" method="post">
        NAME: <input type="text" name="un">
        <input type="password" name="pass">
        <input type="submit"></form>`)
})
app.post("/data",(req,res)=>{
    console.log(req.body)
    res.send(`<h1> Welcome ${req.body.un}</h1>
        <h2> your pass is ${req.body.pass}</h2>`)
})

app.listen(8002)

// app.use(express.urlencoded({extended:true}))
// extended=true qs nested object accepted
// false querystring simple object accepted