const express = require("express");
const app = express();
function middleware(req,res,next)
{
    const age =req.query.age;
    if(age>=14)
    {
        next();
    }
    else{
        res.json({
            msg:"sorry you are not age of yet"
        })
    }
}
//    app.use(middleware)   defining all the routes (global middleware)

app.get("/ride1",middleware,function(req,res){
        res.json({
            msg:"you have successfully riden the ride1"
        })
   
})

app.get("/ride2",middleware,function(req,res){
        res.json({
            msg:"you have successfully riden the ride2"
})
})

app.listen(3000)

