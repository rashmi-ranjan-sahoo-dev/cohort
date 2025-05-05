               /*get
               put
               post
               delete
               */

const express = require('express');
const app = express();
const users = [{
    name:"john",
    kidneys:[{
        healthy:true
        },
        {
            healthy:false
        }
     ]
}]
app.use(express.json());

app.get("/",function(req,res) {
    const johnkidneys = users[0].kidneys;
     const totalkidneys = johnkidneys.length;
        let healthykidenys = 0;
        let unhealthykidenys = 0;
        for(let i = 0 ; i < totalkidneys ; i++ )
        {
            if(johnkidneys[i].healthy)
            {
               healthykidenys = healthykidenys + 1;
            }
            else 
            {
                unhealthykidenys = unhealthykidenys + 1;
            }
        }
        res.json({totalkidneys,
            healthykidenys,
            unhealthykidenys
        })
})

app.post("/",function(req,res){
    const ishealthy = req.body.ishealthy;
    users[0].kidneys.push({
        healthy:ishealthy
    })
    res.json({
        msg:"done"
    })
})

app.put("/",function(req,res){
    for(let i = 0 ; i < users[0].kidneys.length ; i++)
    {
        users[0].kidneys[i].healthy = true; 
    }
    res.json({})
})

// delete unhealthy kidneys 
 
app.delete("/",function(req,res){
    const newkidneys = [];
    for(let i = 0 ; i < users[0].kidneys.length ; i++)
    {
        if(users[0].kidneys[i].healthy)
        {
            newkidneys.push({
                healthy:true
            })
        }
    }
    users[0].kidneys = newkidneys;
    res.json({});
})
app.listen(3000)