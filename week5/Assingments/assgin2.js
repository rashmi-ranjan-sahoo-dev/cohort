const express = require("express")
const app = express();
// app.use(express.json())
 let counter = 0 ;
app.use(function(req,res,next){
 counter++;
next();
})

app.get("/",function(req,res)
{
    res.json({
        count:counter,
        msg:"ok"
    })
})

app.listen(3000);