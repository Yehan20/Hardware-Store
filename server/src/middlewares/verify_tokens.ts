// import jwt from 'json'
import jwt from 'jsonwebtoken';
import {Request,Response,NextFunction, json} from 'express'
import dotenv from 'dotenv';
import Logger from '../logger/logger';

dotenv.config();

const SECRET_KEY = process.env.SECRET_KEY || '';

// interface CustomReq extends Request{
//      user:any
// }

export const verifyToken = (req:Request,res:Response,next:NextFunction)=>{

       const token = req.headers['authorization']?.split(' ')[1]; // token
       Logger.info(token)

       if(!token){
         return res.json({message:'no token available'}).status(400);
       }
       jwt.verify(token,SECRET_KEY,(err,data)=>{
           if(err){
               return res.json({message:"token not verifed"}).status(400)
           }

           next();
       })
}


export const verifyTokenAdmin = (req:Request,res:Response,next:NextFunction)=>{

    const token = req.headers['authorization']?.split(' ')[1]; // token
    Logger.info(token)

    if(!token){
      return res.json({message:'no token available'}).status(400);
    }
    jwt.verify(token,SECRET_KEY,(err,data:any)=>{
        if(err){
            return res.json({message:"token not verifed"}).status(400)
        }
        if(!data.isAdmin){
            return res.json({message:"you are not an Admin to delete"}).status(400)
        }    
        next();
    })
} 


export const genToken =(username:string,isAdmin:boolean)=>{
    const user = {
        username,isAdmin
    }
    console.log(user);
    const token = jwt.sign(user,SECRET_KEY,{expiresIn:"2days"})
    return token
}