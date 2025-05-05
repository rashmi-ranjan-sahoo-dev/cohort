const express = require("express");
const app = express();
function sum(n){
    let a = 0;
    for(i = 1 ;i < n ;i++){
         a = a+i;
    }
    return a;
}
app.get("/",function(req,res){
    const n = req.query.n;
    const ans = sum(n);
    res.send("the ans is" + ans);
})

app.listen(3000);