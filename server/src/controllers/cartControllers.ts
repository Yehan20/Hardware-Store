import {Request,Response,NextFunction} from 'express';
import cart from '../model/cart';
import { CustomRequest } from '../middlewares/verify_tokens';

const manageCart =async(req:Request,res:Response,next:NextFunction)=>{
    // find the users whos cart belong
    const {cart:Cart,id} = req.body;
    console.log(Cart,id);
 
    try{
      const  newCart = await cart.findOneAndUpdate({userId:id},{
         $set:{cartItems:Cart}
       },{new:true});

       res.json({cart:newCart}).status(200);

    }catch(error:unknown){
       if(error instanceof Error){
         res.json({message:error.message}).status(4)
       }
    }
    
}
const clearCart = async(req:Request,res:Response,next:NextFunction)=>{
    // find the users whos cart belong
    const {userId} = req.body;

    try{
      const  newCart = await cart.findOneAndUpdate({userId:userId},{
         $set:{cartItems:[]}
       },{new:true});

       res.json({cart:newCart}).status(200);

    }catch(error:unknown){
       if(error instanceof Error){
         res.json({message:error.message}).status(4)
       }
    }
    
}

const getCart= async(req:Request,res:Response,next:NextFunction)=>{
    // find the users whos cart belong
    const {userId} = req.body;

    try{
      const  newCart = await cart.findOne({userId:userId})
       res.json({cart:newCart}).status(200);

    }catch(error:unknown){
       if(error instanceof Error){
         res.json({message:error.message}).status(4)
       }
    }
    
}

export default {
     clearCart,getCart,manageCart
}
