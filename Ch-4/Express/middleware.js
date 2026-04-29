var express = require("express")
var app = express()
var name = (req,res,next)=>{
    //req.name='Test'
    console.log("Name middleware")
    next()
}
var age=(req,res,next)=>{
    //var age = 20
    console.log("age middleware")
    next()
}
app.use("/",name)
app.use("/page",age)
app.get("/",(req,res)=>{
    res.send("home page")
})
app.get("/page/about",(req,res)=>{
    res.send("about page")
})
app.listen(7008)