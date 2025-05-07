const { default: axios } = require("axios");
const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const JWT_SECRET = "rinku";


let users = [];
app.use(express.json());

app.post("/signup",function(req,res){
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username:username,
        password:password
    })

    res.send({
        msg:"signuped"
    })
})


app.post("/signin",function(req,res){
    const username = req.body.username;
    const password = req.body.password;
    

    const user = users.find(u => u.username === username && u.password === password);

    if(user){
        const token = jwt.sign({username:user.username},JWT_SECRET);
        res.send({
            token:token
        })
    }else {
        res.status(403).send({
            message: "Invalid username or password"
        })
    }
})

async function auth(req,res,next) {
    const token = req.headers.token;

    const userDetails =jwt.verify(token,JWT_SECRET);

    const username = userDetails.username;
    
    if(!username){
        res.status(401).send({
            message: "Unauthorized"
        });
    }else{
        req.username = username;
        next();
    }
    
 }

app.get("/me" ,auth,(req,res) =>{

    const username = req.username;

    const user = users.find(u => u.username === username );

    if(user){
        res.send({
            username:user.username
        })
    }else {
        res.status(401).send({
            message: "Unauthorized"
        })
    }

})

app.listen(3000);

