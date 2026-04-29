var express = require("express")
var app = express()
app.use(express.urlencoded())
app.get("/",(req,res)=>{
    res.send(`<form action="/data" method="post">
        NAME: <input type="text" name="un">
        <input type="submit"></form>`)
})
app.post("/data",(req,res)=>{
    console.log(req.body)
    res.send(`<h1> Welcome ${req.body.un}</h1>`)
})
app.use()
app.listen(3008)