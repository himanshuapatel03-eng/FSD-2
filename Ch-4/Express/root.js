var express =require("express");
var app= express();
app.get("/exam/:phase/marks/:fsd2",(req,res)=>{
    res.send(req.params)
})
app.listen(8000)
