var express = require("express")
var app= express()
var session = require("express-session")
app.use(session({secret:"LJU123",name:"save",resave:false,saveUninitialized:false, cookie:{maxAge:10000}}))
app.use(express.static(__dirname,{index:"task5.html"}))
app.use(express.urlencoded())
var dataw=(req,res,next)=>{
    res.type("text/html")
    res.write(`<h1> Welcome ${req.body.name} 
        Email is ${req.body.email} </h1>`)
    res.send()
    next()
}
app.post("/login",dataw,(req,res)=>{
    if(req.body.check==='on'){
        res.write(`<h1>Thank you for the subscription</h1>
            <a href="/">logout</a>`)
    }
    else{
        res.write(`<h1>You can subscribe to get daily updates</h1>
            <a href="/subscripition">subscribe</a>`)
    }
    res.send()
})
app.post("/subscripition",(req,res)=>{
    res.write(`<h1>Thank you for the subscription</h1>
            <a href="/">logout</a>`)
    res.send()
})
app.listen(8001)