var express = require("express")
var app = express()
student = {"name":"xyz","age":15}
app.get("/j1",(req,res)=>{
    res.send(student.age)
})
app.get("/j2",(req,res)=>{
    res.json(student.age)
})
app.get("/j3",(req,res)=>{
    //res.write(student)
    res.write(JSON.stringify(student.age))
    res.send()
})
app.listen(8000)

// j1,j2: {"name":"xyz","age":15}