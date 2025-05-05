// import express from "express";
const express = require("express")
const jwt = require("jsonwebtoken");
const app = express();
const JWT_SECRET = 'rinku';
const users = []

app.use(express.json());

app.post("/signup",function(req,res){
      const username = req.body.username;
      const password = req.body.password;
      users.push({
        username:username,
        password:password
      })
      res.json({
        msg:"you are successfully sign up"
      })
      })

      app.post("/signin",function(req,res){
        const username = req.body.username;
        const password = req.body.password;

        const user = users.find(user => user.username == username && user.password == password)
        if(user)
        {
            const token = jwt.sign({username:user.username}, JWT_SECRET);
            user.token = token;
            res.json({
                token:token,
                msg:"you are successfully sign in"
              })
        }
        else{
            res.status(403).send({
                msg:"Invalid username and passord"
            })
        }
  })
   function auth(req,res,next)
   {
    const token = req.headers.token;
    if(!token)
    {
        return res.status(401).send({msg:"token is required"})
    }
    const userDetails = jwt.verify(token,JWT_SECRET)
      console.log(userDetails);
       if(!userDetails.username)
       {
        res.status(401).send({
            message: "Unauthorized"
        });
       }else{
        req.username = userDetails.username;
        next();
       }
   }
  app.get("/me",auth, (req, res) => {
    const user = users.find(user => user.username === req.username);
    console.log(user);
    if (user) {
        res.json({
            username: user.username,
            password: user.password,
        });
    } else {
        res.status(401).send({
            message: "Unauthorized"
        });
    }
});

    app.get("/",(req,res)=>{
        res.json(users)
    })

  app.listen(3000);