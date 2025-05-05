const express = require("express");
const app = express();
// app.use(express.json());

app.use(function(req,res,next){
     console.log("request responced");
      next();
})

app.get("/",(res,req)=>{
         req.json({
            msg:"let's start"
         })
})

app.listen(3000);