const express = require("express");
const app = express();

const users = []

function generateToken() {
    let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    let token = "";
    for (let i = 0; i < 32; i++) {
        // use a simple function here
        token += options[Math.floor(Math.random() * options.length)];
    }
    return token;
}

app.use(express.json());

app.get("/",function(req,res){

    let token = req.headers.token;

    let user = users.find(u => u.token === token);
    
    if(user){
    res.send({
        username:user.username,
        password:user.password
    })
   }else{
    res.send({
        msg:"error"
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
        const token = generateToken();
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