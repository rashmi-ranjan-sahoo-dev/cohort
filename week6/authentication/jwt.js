
const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
let users = [];
app.use(express.json())
const JWT_SECRET = "rinku";
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

app.post("/signin", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
        const token = jwt.sign({
            username: user.username
        }, JWT_SECRET);

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

app.get("/me", (req, res) => {
    const token = req.headers.token;

    if (!token) {
        return res.status(401).send({ message: "Token is required" });
    }

    const userDetails = jwt.verify(token, JWT_SECRET);
    const username = userDetails.username;
    console.log(username);

    const user = users.find(user => user.username === username);
    console.log(user);

    if (user) {
        res.json({
            username: user.username,
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

app.listen(3000)