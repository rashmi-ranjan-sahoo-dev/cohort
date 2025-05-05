const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const JWT_SECRET = "rinku";

const users = []


app.use(express.json());

app.get("/",function(req,res){

    let token = req.headers.token;
    let userDetails = jwt.verify(token, JWT_SECRET);

    const username =  userDetails.username;
    console.log(username)
    const user = users.find(user => user.username === username);

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

app.post('/signup',function(req,res){
   const username = req.body.username;
   const password = req.body.password;

   users.push({
    username:username,
    password:password
   })

   res.send({
    message :"You have signed up"
   })
})



app.post("/signin", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        const token = jwt.sign({username:user.username},JWT_SECRET);
        console.log(token);
        user.token = token;
        res.send({
            token
        })
        console.log(users);
    } else {
        res.status(403).send({
            message: "Invalid username or password"
        })
    }
});

app.listen(3000,()=>console.log("runing"));