/* fs
   path
   http
   all are internal package
   */

   const fs = require('fs')
   const path = require('path');
   // console.log(__dirname)   current path
   const filepath = path.join(__dirname,"a.txt");
   //  console.log(filepath); current file path
   fs.readFile(filepath,'utf8',(deta,err)=>{
    if(!err) console.log(deta);
    else console.error(err);
   })
