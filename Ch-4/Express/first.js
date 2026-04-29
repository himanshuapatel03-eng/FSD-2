//  file.js na hoy IPE ma to banavi devi
var express =require("express");
var app= express();

// Basic
// app.get(Path,callback)
// app.get("/",(req,res)=>{})
// app.get("/about",(req,res)=>{})
// app.listen(3000,localhost,100,()=>{console.log("Server started")})

app.get("/",(req,res)=>{
    //res.set("content-type","text/html")
    res.type("text/html")
    //res.setHeader("Content-Type","text/html")
    res.write("<h1> Hello </h1>")
    res.send()
})

app.get("/about",(req,res)=>{
    //res.set("content-type","text/html")
    //res.type("text/html")
    //res.setHeader("Content-Type","text/html")
    res.write("<h3> Hello!! </h3>") //write pachi send ma kai lakhvu nahi 
    res.send()
})
app.listen(8000)
