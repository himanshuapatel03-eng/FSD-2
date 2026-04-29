var express = require("express")
var app = express()
var entrylog = (req,res,next)=>{
    console.log("Student entered")
    next()
}
var checkid=(req,res,next)=>{
    var hasid=true
    if(hasid){
        req.name="Nidhi"
        console.log("Verified student")
        next()
    }
    else{
        console.log("Not verified")
        res.send("No id available")
    }
}
app.use("/student",entrylog,checkid)
app.get("/student",(req,res)=>{
    res.send(`Welcome ${req.name}`)
})

// app.get("/student",entrylog,checkid,(req,res)=>{
//     res.send(`Welcome ${req.name}`)
// })
app.listen(8001)

// output:-Student entered
// Verified student