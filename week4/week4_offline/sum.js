const express = require ('express');
const app = express();

function sum(a,b){
    return a+b;
}

app.get("/",(req,res)=>{
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  const ans = sum(a,b);
  res.send(`the ans is ${ans.toString()}`)
})

app.listen(3000);