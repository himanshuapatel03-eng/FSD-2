var express = require("express")
var app = express()
var mult = require("multer")
app.use(express.static(__dirname,{index:"mult2.html"}))
var store = mult.diskStorage({destination:"myImage",
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})
var upload = mult({storage:store,limits:{fileSize:10*1024*1024}})
app.post("/upload",upload.array("test",5),(req,res)=>{
    const files = req.files
    if(files){
        res.type("text/html")
        for(f of files){
            res.write(`<h1> ${f.originalname} has been uploaded </h1>`)
        }
    }
    res.send()
})
app.listen(8003)