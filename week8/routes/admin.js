const { Router, json } = require("express")
const adminRouter = Router();
const { adminModel, courseModel } = require("../db/db.js")
const { z } = require("zod");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const JWT_ADMIN = require("../config.js")
const { adminMiddleWare } = require("../middleware/adminMid.js");


adminRouter.post("/signup",async function (req,res){
 
    const validedData = z.object({
        email:z.string().min(4).max(40).email(),
        password:z.string().min(8).regex(/[A-Z]/)
                                  .regex(/[a-z]/)
                                  .regex(/[0-9]/)
                                  .regex(/[^A-Za-z0-9]/,),
       firstName:z.string(),
       lastName:z.string()
    })

    const parsedDataWithsuccess = validedData.safeParse(req.body);

    if(!parsedDataWithsuccess.success){
        res.json({
            msg:"incorext format",
            error:parsedDataWithsuccess.error
        })
        return
    }

    const email = req.body.email;
    const password = req.body.password;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
 try{

     const hashedpassword = await bcrypt.hash(password,5)
     const r = await adminModel.create({
        email:email,
        password:hashedpassword,
        firstName:firstName,
        lastName:lastName
    })

     res.json({
        message: "you are signed up"
     })
 }catch (error){
    console.error("Error during admin signup:", error);
    res.status(500).json({
        message: "An error occurred during signup",
        error: error.message
    });
 }
  
}); 

adminRouter.post("/signin",async function (req,res){
    
   const validedData = z.object({
     email:z.string().min(4).max(40).email(),
        password:z.string().min(8).regex(/[A-Z]/)
                                  .regex(/[a-z]/)
                                  .regex(/[0-9]/)
                                  .regex(/[^A-Za-z0-9]/)
   })

    const parsedDataWithsuccess = validedData.safeParse(req.body);

    if(!parsedDataWithsuccess.success){
       res.json({
        msg:"increct format",
        error:parsedDataWithsuccess.error
       })
        return
    }

    const { email ,password} = req.body;

    try{
        const response = await adminModel.findOne({
            email:email,
        })
        if(!response){
            res.status(403).json({
                msg:"user not found"
            })
        }

        const passwordMatch = bcrypt.compare(password,response.password)

        if(passwordMatch){
            const token = jwt.sign({id:response._id.toString()},JWT_ADMIN.JWT_ADMIN_SECRET)
            res.json({
                token
            })
        }else{
            res.status(403).json({
                message:"Incorrect creds"
            })
        }
    }catch (error) {
    console.error("Error during admin signin:", error);
    res.status(500).json({
        message: "An error occurred during sign",
        error: error.message
    });
}

}); 

adminRouter.post("/course",adminMiddleWare,async function (req,res){
    
    const adminId = req.userId;

    const { title, description, imageUrl, price} = req.body

    const course = await courseModel.create({
        title:title,
        description:description,
        price:price,
        creatorId:adminId,
        imageUrl:imageUrl
    })

    res.json({
        message:"Course created",
        courseId:course._id
    })
    

}); 

adminRouter.put("/course",adminMiddleWare,async function (req,res){

    const adminId = req.userId;
    console.log(adminId)

    const { title, description,price,imageUrl,courseId} = req.body;

    const course = await courseModel.updateOne({
        _id:courseId,
        creatorId:adminId
    },{
        title:title,
        description:description,
        imageUrl:imageUrl,
        price:price
    })

    res.json({
        message:"Course updated",
        course:course
    })
    
}); 

adminRouter.get("/course/bulk",adminMiddleWare,async function (req,res){

    const adminId = req.userId

    const courses = await courseModel.find({
        creatorId:adminId
    })

    res.json({
        courses
    })
}); 

adminRouter.delete("/course",adminMiddleWare,async function (req,res){

    const adminId = req.userId;
    const courseId = req.body.courseId;
    
    const course = await courseModel.deleteOne({ _id: courseId,creatorId:adminId})
    
  if(course){
     const courses = await courseModel.find({
        creatorId:adminId
    })

    res.json({
        courses
    })
  }
}); 



module.exports = {
    adminRouter: adminRouter
}