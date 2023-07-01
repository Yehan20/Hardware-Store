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

const veiwOrders =  async(req:Request,res:Response)=>{
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

const viewAllOrders =  async(req:Request,res:Response)=>{
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
    addOrder,calcualteRevanue,veiwOrders,viewAllOrders
}