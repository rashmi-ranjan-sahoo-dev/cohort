const express = require('express');
const app = express();

const users = [
    {
        name:'Rinku',
        kidneys:[{
            healthy:false
        },{
            healthy:true
        }]
    }
]

app.use(express.json());

app.get('/',function(req,res){
    const RinkuKidneys = users[0].kidneys;
    const NumberofKidneys = RinkuKidneys.length;
    let HealthyKidneys = 0;
    for(let i = 0; i < NumberofKidneys ;i++){
        if(RinkuKidneys[i].healthy) HealthyKidneys = HealthyKidneys +1;
    }
    let UnHealthyKidneys = 0;
    for(let i = 0; i < NumberofKidneys ;i++){
        if(!RinkuKidneys[i].healthy) UnHealthyKidneys = UnHealthyKidneys +1;
    }
   res.json({NumberofKidneys,HealthyKidneys,
    UnHealthyKidneys}
   )
})

app.post('/',function(req,res){
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy:isHealthy});
    res.json({msg:"Done"});
})

app.put('/',function(req,res){
    for(let i = 0 ;i < users[0].kidneys.length ;i++){
     users[0].kidneys[i].healthy = true;
    }
    res.json({});
})

app.delete('/',function(req,res){
    const newKidneys = [];
    for(let i = 0 ;i < users[0].kidneys.length ;i++){
        if(users[0].kidneys[i].healthy){
            newKidneys.push({
                healthy:true
            })
        }
       }
       users[0].kidneys = newKidneys;
       res.json({});
})

app.listen(3000);