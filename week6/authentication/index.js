// import express from "express";
const express = require("express");
const app = express();

let users = [];

app.use(express.json())
app.post("/signup",(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
     users.push({
        username:username,
        password:password
     })
     res.json({
        msg:"you are successfully signup"
     })
})

function generateToken() {
    let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    let token = "";
    for (let i = 0; i < 32; i++) {
        token += options[Math.floor(Math.random() * options.length)];
    }
    return token;
}
app.post("/signin",(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    let token;
    for (let i = 0 ; i < users.length ; i++)
    {
        if (users[i].username == username && users[i].password ==password)
    {
            // if(!users[i].token)
            token = generateToken()
            users[i].token = token;
        }   
    }

    // const user = users.find(user => user.username === username && user.password === password);
    // if (user) {
    //     const token = generateToken();
    //     user.token = token;
    //     res.send({
    //         token
    //     })
    //     console.log(users);
    // } else {
    //     res.status(403).send({
    //         message: "Invalid username or password"
    //     })
    // }

    res.json({
        msg:"you are successfully signin",
        token: token
    })
})

app.get("/me", (req, res) => {
    const token = req.headers.token;
    const user = users.find(user => user.token === token);
    if (user) {
        res.send({
            username: user.username
        })
    } else {
        res.status(401).send({
            message: "Unauthorized"
        })
    }
})

    app.get("/",(req,res)=>{
        res.json(users)
    })

app.listen(3000)