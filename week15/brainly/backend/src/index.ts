import express, { Request,Response} from 'express';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken'
//@ts-ignore
import { JWT_SECRET, MONGO_URL } from '../config';
import {z} from 'zod'
import bcrypt from 'bcrypt'
import { UsernModel } from './db';

const app = express();
app.use(express.json());

app.post('/api/v1/signup',async function(req:Request,res: Response){
     
    const validedDate = z.object({
        email:z.string().min(4).max(40).email(),
        password:z.string().min(8).regex(/[A-Z]/, "Must include at least one uppercase letter")
                                  .regex(/[a-z]/, "Must include at least one lowercase letter")
                                  .regex(/[0-9]/, "Must include at least one digit")
                                  .regex(/[^A-Za-z0-9]/, "Must include at least one special character") 
    })

    const parsedDataWithSuccess = validedDate.safeParse(req.body);

    if(!parsedDataWithSuccess.success){
        res.json({
            message: "incorrect format",
            error:parsedDataWithSuccess.error
        })

        return
    }

    const {emial,password} = req.body;

    try{

        const existingUser = await UsernModel.findOne({ emial })

        if(existingUser){
            return res.status(409).json({ message: "user already exists"})
        }

        const hashedPassword = await bcrypt.hash(password,10);  


        const user = await UsernModel.create({
            emial:emial,
            password:password
        })

        res.json({
            message: "you are signend up"
        })
    } catch(error: any) {
        console.error("Error during user signup:", error);
        res.status(500).json({
            message: "An error occurred during signup",
            error:error.message
        })
    }

})

app.post('/api/v1/signin',async function(req: Request,res: Response){
     const validedDate = z.object({
        email:z.string().min(4).max(40).email(),
        password:z.string().min(8).regex(/[A-Z]/, "Must include at least one uppercase letter")
                                  .regex(/[a-z]/, "Must include at least one lowercase letter")
                                  .regex(/[0-9]/, "Must include at least one digit")
                                  .regex(/[^A-Za-z0-9]/, "Must include at least one special character") 
    })

    const parsedDataWithSuccess = validedDate.safeParse(req.body);

    if(!parsedDataWithSuccess.success){
        res.json({
            message: "incorrect format",
            error:parsedDataWithSuccess.error
        })

        return
    }
    const {email,password} = req.body;

    try {
        const response: any = await UsernModel.findOne({ email: email })

        if(!response){
            res.status(403).json({
                message: "User not found"
            })
        }

        const passwordMatch = await bcrypt.compare(password,response.password)

        if(passwordMatch){
            const token: any = jwt.sign({ id: response._id,}, JWT_SECRET);

            res.json({
                token
            })
        }  else {
            res.status(403).json({
                message: "Incorrect credentials"
            })
        }
    } catch (error: any){
        res.status(500).json({
            message: "An error occurred during signin",
            error: error.message
        })
    }

})

app.post('/api/v1/content',function(req,res){

})

app.get('/api/v1/content',function(req,res){
    
})

app.delete('/api/v1/content',function(req,res){
    
})

app.get('/api/v1/brain/":shareLink',function(req,res){
    
})

function main(){
    mongoose.connect(MONGO_URL)
    app.listen(3000, () => console.log("app listening on the port no 3000"));
}


main();

