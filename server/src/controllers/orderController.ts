import {Request,Response} from 'express'
import orderModel from '../model/order';

const addOrder = async(req:Request,res:Response)=>{

    const {userId,order,price,address} = req.body;

    try {
     const newOrder = await orderModel.create({
         userId:userId,
         total:price,
         address:address,
         products:order
     }) ;
     res.json({order:newOrder}).status(200)
    }
     catch (error:unknown) {
          if(error instanceof Error){
             res.json({message:error.message}).status(4500)
          }
    }
}

const clearOrders = async(req:Request,res:Response)=>{
     const {userId} = req.body;
     try{
        await orderModel.deleteMany({userId:userId})
        res.json({message:'delete'}).status(200)
     }catch(e){
        res.json({error:e.message}).status(400)
     }
}

const veiwOrders =  async(req:Request,res:Response)=>{
    const {userId} = req.body;

    try {
     const orders = await orderModel.find({userId:userId}) ;
     res.json({orders}).status(200)
    }
     catch (error:unknown) {
          if(error instanceof Error){
             res.json({message:error.message}).status(450)
          }
    }
}

const viewAllOrders =  async(req:Request,res:Response)=>{

        try {
        const orders = await orderModel.find({}).sort({createdAt:-1}) ;
        res.json({orders}).status(200)
       }
        catch (error:unknown) {
             if(error instanceof Error){
                res.json({message:error.message}).status(400)
       }
    }
}

const calcualteRevanue =  async(req:Request,res:Response)=>{
    const {userId,order,price,address} = req.body;

    try {
     const newOrder = await orderModel.create({
         userId:userId,
         total:price,
         address:address,
         products:order
     }) ;
     res.json({order:newOrder}).status(200)
    }
     catch (error:unknown) {
          if(error instanceof Error){
             res.json({message:error.message}).status(4500)
          }
    }
}
export default {
    addOrder,calcualteRevanue,veiwOrders,viewAllOrders,clearOrders
}