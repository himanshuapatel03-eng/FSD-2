var express = require("express")
var app = express()
app.use(express.urlencoded())
app.get("/login",(req,res)=>{
    res.send(`<form action="/data" method="post">
        NAME: <input type="text" name="un">
        Pass: <input type="password" name="pass">
        Confirm pass: <input type="password" name="pwd">
        <input type="submit"></form>`)
})
var check=(req,res,next)=>{
    if(req.body.pass==req.body.pwd){
    console.log("Matched")
    next()}
    else{
        console.log("not matched")
    }
}
app.post("/data",check,(req,res)=>{
    res.send(`<h1> Welcome ${req.body.un}</h1>`)
})
app.listen(8000)