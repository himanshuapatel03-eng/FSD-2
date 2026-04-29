var express=require("express")
var app=express()
app.use(express.urlencoded())

var path =require("path")
var hp=path.join(__dirname,"../HTML")
var cp=path.join(__dirname,"../CSS")
var ip=path.join(__dirname,"../images")

app.use(express.static(cp))
app.use(express.static(ip))
app.use(express.static(hp,{index:"my.html"}))
app.post("/data",(req,res)=>{
    res.type("text/html")
    res.write(` <h2> Welcome ${req.body.un}</h2> 
        <h4> Your msg is ${req.body.msg} </h4>`)
    var m=(req.body.msg).split(".")
    for(i in m){
        res.write(m[i]+"<br>")
    }
    res.write(`Click link to check number of vowels 
        <a href="/message?m=${req.body.msg}">Count</a>`)
    res.send()
})
app.get("/message",(req,res)=>{
    var msg=req.query.m
    let c=0
    for(m of msg.toLowerCase()){
        if("aeiou".includes(m)){
            c++
        }
    }
     res.send(`Vowels are: ${c}`)
})
app.listen(8001)