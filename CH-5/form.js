var express=require("express")
var app=express()
app.use(express.urlencoded())
var cp=require("cookie-parser")
app.use(cp())
app.use(express.static(__dirname,{index:"form.html"}))
app.post("/data",(req,res)=>{
    res.cookie("fn",req.body.fn)
    res.cookie("ln",req.body.ln)
    res.cookie("pass",req.body.pass)
    res.redirect("/admin")
})
app.get("/admin",(req,res)=>{
    res.clearCookie("ln")
    res.send(`<h1> Welcome ${req.cookies.fn} 
        ${req.cookies.ln} </h1>
        <h2>Password is: ${req.cookies.pass}`)
})
app.listen(8000)
// after redirect then always get method is used