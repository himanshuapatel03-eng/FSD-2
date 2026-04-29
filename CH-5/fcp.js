var express=require("express")
var app=express()
app.use(express.urlencoded())
var cp=require("cookie-parser")
app.use(cp())
app.use(express.static(__dirname,{index:"fcp.html"}))
app.post("/submit",(req,res)=>{
    var{name,email,msg,rating}=req.body;
    var feedback = {name,email,msg,rating}
    res.cookie("feedback",feedback,{maxAge:10000})
    res.send(`<h1> thanks!! </h1>
        <a href="/details">View Feedback </a>`)
})
app.get("/details",(req,res)=>{
    var fb=req.cookies.feedback;
    if(fb){
        res.send(`<h1>hello ${fb.name}</h1>
            <h2>Your msg is ${fb.msg}</h2>
            <h2> Your rating is ${fb.rating}</h2>
            <a href="/">Logout </a>`)
    }
    else{
        res.send(`No feedback available <a href="/">Logout</a>`)
    }
})
app.listen(7008)