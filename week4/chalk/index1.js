const fs = require("fs");


function find(file){
    fs.readFile(file,"utf-8",function(err,data){
        let total = 0 ;
        for(let i = 0 ;i < data.length; i++){
            if(data[i] === " ") total++;
        }
        console.log(total);
    })
}

find("a.txt");