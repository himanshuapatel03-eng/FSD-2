var express = require("express")
var app = express()
app.set("view engine","ejs")
app.get("/",(req,res)=>{
    res.render("EJS",{name:"ABC",age:20})
})
app.listen(8008)

