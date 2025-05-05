const express = require("express")
const app = express();
// function sum(n){
//     const a = 0;
//     for(let i = 0; i<n ; i++)
//     {
//         a+=i;
//     }
//     return a;
// }
app.get("/",function(req,res)
    {
        // res.send("hi there");
        function sum(n){
            let a = 0;
            for(let i = 0; i<n ; i++)
            {
                a+=i;
            }
            return a;
        }
        const n = req.query.n;
            const ans = sum(n);
            res.send(ans.toString())
    }
)
app.listen(3000);