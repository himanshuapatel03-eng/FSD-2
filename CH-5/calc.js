var express = require("express")
var app = express()
app.use(express.static(__dirname,{index:"calc.html"}))
app.get("/calc",(req,res,next)=>{
    if(req.query.n1<0){
        res.send("please enter number grater than 0")
    }
    else{
        next()
    }
}, (req,res)=>{
    if(req.query.operation==="square"){
        res.send(`Square is ${req.query.n1*req.query.n1}`)
    }
    else if(req.query.operation==="cube"){
        res.send(`Cube is ${req.query.n1*req.query.n1*req.query.n1}`)
    }
    else{
        res.send("not valid")
    }
})
app.listen(8001)