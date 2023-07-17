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

export interface CustomRequest  extends Request {
   user?:{
     username:string|'',
     _id:string,
     isAdmin:boolean
     iat:string,
   }|any;
}
export const verifyToken = (req:CustomRequest,res:Response,next:NextFunction)=>{

       const token = req.headers['authorization']?.split(' ')[1]; // token
       Logger.info(token)

       if(!token){
         return res.json({message:'no token available'}).status(400);
       }
       jwt.verify(token,SECRET_KEY,(err,data)=>{
           if(err){
               return res.json({message:"token not verifed"}).status(400)
           }
           console.log('data',data);

           req.user = data

           next();
       })
}


export const verifyTokenAdmin = (req:Request,res:Response,next:NextFunction)=>{

    const token = req.headers['authorization']?.split(' ')[1]; // token
    Logger.info(token)

    if(!token){
      return res.status(400).json({message:'no token available'})
    }
    jwt.verify(token,SECRET_KEY,(err,data:any)=>{
        if(err){
            return res.status(400).json({message:"token not verifed"})
        }
        if(!data.isAdmin){
            return res.status(400).json({message:"you are not an Admin to delete"})
        }    
        next();
    })
} 


export const genToken =(id:string,username:string,isAdmin:boolean)=>{
    const user = {
        username,isAdmin,_id:id
    }
    console.log(user);
    const token = jwt.sign(user,SECRET_KEY,{expiresIn:"2days"})
    return token
}