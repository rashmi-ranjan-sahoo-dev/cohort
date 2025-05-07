const express = require("express");

const jwt = require("jsonwebtoken");
const JWT_SECRET = "rinku";
const app = express();

const users = [];

app.use(express.json());

app.get("/",function(req,res){
    res.sendFile(__dirname + "/Public/index.html")
})

app.post("/signup",function(req,res){
    console.log("hi")
    const username = req.body.username
    const password = req.body.password
    
    users.push({
        username:username,
        password:password
    })

    res.send({
        msg:"signup successful"
    })
})



app.post("/signin",function(req,res){
    const username = req.body.username
    const password = req.body.password

    const user = users.find(u => u.username === username && u.password === password)

    if(user){
        let token = jwt.sign({
            username:username
        },JWT_SECRET);
        console.log(token)
        if(token){
            user.token = token
            res.json({
                token:token
            })
        }} else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    res.send({
        msg:"signup successful"
    })
})

app.get('/me',function(req,res){
    const token = req.headers.token
    const getToken = jwt.verify(token,JWT_SECRET)

    const username = getToken.username;

     const user = users.find(u => u.username === username)

     if(user){
        res.json({
            username:user.username,
            password:user.password
        })
     } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }

    res.send({
        msg:"signup successful"
    })

})


app.listen(3000);