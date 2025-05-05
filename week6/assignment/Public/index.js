const express = require("express");
const cors = require("cors")
const jwt = require("jsonwebtoken");
const JWT_SECRET = "rinku";
const app = express();

const users = [];

app.use(cors());
app.use(express.json());

app.post("/signup",function(req,res){
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


 function genereteToken(){
    let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    let token = "";

    for(let i = 1; i<= 32 ; i++){
        token += options[Math.floor(Math.random() * options.length)]
    }

    return token;
 }


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

app.post('/me',function(req,res){
    const token = req.body.token
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