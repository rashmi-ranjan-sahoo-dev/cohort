const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const JWT_SECRET = "rinku"
const { UserModel , TodoModel}  = require('./db.js')
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://rinkuasahoo04:rinku1234@cluster0.9as9pzb.mongodb.net/todo");
app.use(express.json());


app.post("/signup",async function(req,res){
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    const r = await UserModel.create({
        email:email,
        password:password,
        name:name
    })
    console.log(r);

    res.json({
        message: "You are signed up"
    })
})

app.post("/signin",async function(req,res){
      const email = req.body.email;
    const password = req.body.password;

   const response = await UserModel.findOne({
    email:email,
    password:password
   })
   console.log("first id ",response._id.toString());
   if(response){
    const token = jwt.sign({
        id:response._id.toString()
        
    },JWT_SECRET)
    
      res.json({
        token
      })
   }else{
    res.status(403).json({
        message:"Incorrect creds"
    })
   }
})

function auth(req,res,next){
    const token = req.headers.token;

    const decodedData = jwt.verify(token,JWT_SECRET);

    if(decodedData){
        req.UserId = decodedData.id;
        console.log("second id ",req.UserId);
        next();
    }else {
        res.status(403).json({
            message: "Incorrect creds"
        })
    }
}

app.post("/todo",auth,async function(req,res){
    const userId = req.UserId;
    const title = req.body.title;
    const done = req.body.done;

   await TodoModel.create({
      title:title,
      done:done,
      userId:userId
   })
 res.json({
        message: "Todo created"
    })

})

app.get("/todos", auth, async function(req, res) {
    const userId = req.UserId;
    console.log("second id ",userId);

    const todos = await TodoModel.find({
        userId
    });

    res.json({
        todos
    })
});


app.listen(3000,() => console.log("app listening in the port no. 3000"))