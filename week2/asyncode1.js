const fs = require("fs");

function print (err,data)
{
    if(!err)
    {
        console.log(data);
    }
    else{
        console.log(err);
    }
}
fs.readFile("a.txt","utf-8",print);

fs.readFile("b.txt","utf-8" ,print);

fs.readFile("ab.txt","utf-8",print);

console.log("data is here");









































// const fs = require("fs");

// const file = fs.readFileSync("a.txt","utf-8");

// console.log(file);