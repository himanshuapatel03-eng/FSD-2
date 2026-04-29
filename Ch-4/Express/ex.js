var express =require("express");
var app= express();
data = [{"name":"x","age":20},{"name":"y","age":23},{"name":"z","age":25}]
app.get("/",(req,res)=>{
    res.send(data)
})
app.get("/sort",(req,res)=>{
    var temp= data.sort((a,b)=>b.age-a.age)
    res.type("text/html")
    res.write(`<table border="2">
        <tr><th>Name</th> <th>Age</th></tr>`);
    for(t of temp){
        res.write(`<tr><td> ${t.name}</td> <td> ${t.age} </td> </tr>`)
    }
    res.write(`</table>`)
    res.send()
})
app.listen(8000)