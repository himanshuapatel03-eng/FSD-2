var express = require("express")
var app = express()
app.use(express.static("frontend",{index:"1.html"}))
app.listen(8001)