import {Request,Response} from 'express'

import userModel from '../model/user';
import cart from '../model/cart';

import {CustomRequest, genToken} from '../middlewares/verify_tokens'
import dotenv from 'dotenv';

dotenv.config();

const KEY = process.env.SECRET_KEY||'';

const register =async(req:Request,res:Response)=>{

  const {username,password:Pwd} = req.body;
  try{
     const createdUser = await  userModel.Register(username,Pwd)
     
     let newCart;

     if(!createdUser.isAdmin){

        newCart = await cart.create({
          userId:createdUser._id,
          products:[]
        })
     }


     const token = genToken(createdUser.name,createdUser.isAdmin);

     const {password,...rest} = createdUser._doc;
     rest.token = token;

     if(!createdUser.isAdmin){
      return res.status(200).json({user:rest,cart:newCart});
     }
     else{
       return res.status(200).json({user:rest});
     }


  }catch(e:unknown){
    if(e instanceof Error){
       res.status(400).json({message:e.message})
    }
  }
}

const login =async(req:Request,res:Response)=>{

    const {username,password:pwd} = req.body;

    try{
       const user = await userModel.Login(username,pwd);
       const token = genToken(user.name,user.isAdmin);
       const {password,...rest} = user._doc;
       rest.token = token;
       res.status(200).json({user:rest});
  
    }catch(e:unknown){
      if(e instanceof Error){
         res.status(400).json({message:e.message})
      }
    }
}

const getUser = async(req:CustomRequest,res:Response)=>{
  const user = req.user;
  console.log('user from the middle where',user);
  try {

    const userExists = await userModel.GetUser(user.username)
    const {password,...rest} = userExists._doc
    res.status(200). json({user:rest})   

   } catch (error) {
     res.status(400).json({error:error})
   }

}

const viewUsers = async(req:Request,res:Response)=>{

    try{
      const  allUsers = await userModel.find({});
      res.json({users:allUsers}).status(200);
    }catch(e:unknown){
      if(e instanceof Error){
         res.json({message:e.message}).status(400)
      }
    }
}  
export default {
     register,login,viewUsers,getUser
}