const express = require("express")
const app = express();
const cors= require("cors");


app.use(express.json());
app.use(cors());

app.post("/sum",(req,res)=>{
    let a =parseInt(req.body.a);
    let b = parseInt(req.body.b);
    res.json({
        ans:a+b
    })
})

app.listen(3000);