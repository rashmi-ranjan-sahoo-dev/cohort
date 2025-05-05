const express = require("express");
const app = express();

app.use(function(req,res,next){
    console.log(`HTTP method is ${req.method}`)
    console.log(`URL is ${req.url}`);
    const date = new Date();
    console.log(date);
    next();
})

app.get("/",function(req,res){
      res.send("ok")
})

app.listen(3000)