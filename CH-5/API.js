var express = require("express")
var app = express()
const api= require("./REST")
app.use("/student",api)
app.listen(7009)

// localhost:7009/student/id/103