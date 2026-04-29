// install npm i express-session
var express = require("express")
var app= express()
var session = require("express-session")
app.use(session({secret:"LJU123",resave:false,saveUninitialized:false,
    cookie:{maxAge:10000},name:"mysession" //cookie name change
}))
app.get("/",(req,res)=>{
    if(req.session.page_views){
        req.session.page_views++
        res.send(`<h1> You have visited ${req.session.page_views} times </h1>`)
    }
    else{
        req.session.page_views=1
        res.send(`<h1 style="color:purple"> Welcome to my website </h1>`)
    }
})
app.listen(8000)