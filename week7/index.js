const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "rinku"
const { UserModel , TodoModel}  = require('./db.js')
const mongoose = require("mongoose");
const { z } = require("zod");


mongoose.connect("mongodb+srv://rinkuasahoo04:rinku1234@cluster0.9as9pzb.mongodb.net/todo");
app.use(express.json());


app.post("/signup",async function(req,res){

    const validedData = z.object({
        email:z.string().min(4).max(30).email(),
        password:z.string().min(8).regex(/[A-Z]/, "Password must include at least one uppercase letter")
                                  .regex(/[a-z]/, "Password must include at least one lowercase letter")
                                  .regex(/[0-9]/, "Password must include at least one number")
                                  .regex(/[^A-Za-z0-9]/, "Password must include at least one special character"),
        name:z.string()                         
    })

    const parsedDataWithsuccess = validedData.safeParse(req.body);

    if(!parsedDataWithsuccess.success){
        res.json({
            msg:"incorest format",
            error:parsedDataWithsuccess.error
        })
        return
    }

    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;
        try{
         const hashedpassword = await bcrypt.hash(password,5);
        
            const r = await UserModel.create({
                email:email,
                password:hashedpassword,
                name:name
            })
            console.log(hashedpassword);
        
            res.json({
                message: "You are signed up"
            })
        }catch (error) {
    console.error("Error during user signup:", error);
    res.status(500).json({
        message: "An error occurred during signup",
        error: error.message
    });
}

})

app.post("/signin",async function(req,res){
      const email = req.body.email;
    const password = req.body.password;
    console.log(password)

    try{
        const response = await UserModel.findOne({
        email:email,
       })
       console.log(response)
       
       if(!response){
         res.status(403).json({
             msg:"user not found"
         })
       }

      const passwordMatch = bcrypt.compare(password, response.password)

       if(passwordMatch){
        const token = jwt.sign({
            id:response._id.toString()
            
        },JWT_SECRET)
        
          res.json({
            token
          })
       }else{
        res.status(403).json({
            message:"Incorrect creds"
        })
       }
    }catch (error) {
    console.error("Error during user signin:", error);
    res.status(500).json({
        message: "An error occurred during sign",
        error: error.message
    });
}

})

function auth(req,res,next){
    const token = req.headers.token;
try{
    const decodedData = jwt.verify(token,JWT_SECRET);

    if(decodedData){
        req.UserId = decodedData.id;
        console.log("second id ",req.UserId);
        next();
    }else {
        res.status(403).json({
            message: "Incorrect creds"
        })
    }
   }catch (error) {
    console.error("Error during todo add:", error);
    res.status(500).json({
        message: "An error occurred during todo add",
        error: error.message
    });
}
}

app.post("/todo",auth,async function(req,res){
    const userId = req.UserId;
    const title = req.body.title;
    const done = req.body.done;

   await TodoModel.create({
      title:title,
      done:done,
      userId:userId
   })
 res.json({
        message: "Todo created"
    })

})

app.get("/todos", auth, async function(req, res) {
    const userId = req.UserId;
    console.log("second id ",userId);

    const todos = await TodoModel.find({
        userId
    });

    res.json({
        todos
    })
});


app.listen(3000,() => console.log("app listening in the port no. 3000"))