var express = require("express")
var app = express()

app.use(express.urlencoded())
app.get("/",(req,res)=>{
    res.send(`<form action="/data" method="post">
        N1 <input type="numeric" name="num1">
        
        <input type="submit"></form>`)
})
app.post("/data",(req,res)=>{
    console.log(req.body)
    res.send(`<h1> n1 is  ${req.body.num1}  &  n2 is ${req.body.num2} <br>
        Sum is ${parseInt(req.body.num1)+parseInt(req.body.num2)}</h1>`)
})

app.listen(8003)


