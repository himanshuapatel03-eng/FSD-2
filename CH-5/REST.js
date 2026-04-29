// Representational State Transfer

const express= require("express")
const router =  express.Router()
var obj = [{name:"x",id:101,branch :"CSE",city:"Abd",age:30},
    {name:"y",id:102,branch:"CE",city:"Rajkot",age:20},
    {name:"z",id:103,branch:"CSE",city:"Surat",age:25},
    {name:"w",id:104,branch:"CE",city:"Mumbai",age:20},
    {name:"t",id:105,branch:"EC",city:"Abd",age:23}]
router.get("/",(req,res)=>{
    res.type("text/html")
    for(o of obj){
        res.write(`<h2> Name: ${o.name}
            ID: ${o.id}
            Branch: ${o.branch}
            City: ${o.city}
            Age: ${o.age}`)
    }
    res.send()
})
router.get("/id/:id",(req,res)=>{
    var data= obj.filter((i)=>i.id==req.params.id)
    if(data.length>0){
        res.send(data)
    }
    else{
        res.send("No student data found")
    }
})
router.get("/branch/:branch",(req,res)=>{
    var data= obj.filter((b)=>b.branch.toLowerCase()==req.params.branch.toLowerCase())
    if(data.length>0){
        res.send(data)
    }
    else{
        res.send("No student data found")
    }
})
module.exports=router;

//USING GET METHOD

// var express = require("express")
// var app = express()
// const api= require("./REST")
// var obj=[{},{},{}]
// app.get("/employee/:id",(req,res)=>{
//     var d =obj.filter((o)=>o.eid==req.params.id)
// })