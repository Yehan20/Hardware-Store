import {Request,Response} from 'express'
import Stripe from "stripe";
import dotenv from 'dotenv';
import order from '../model/order';
import { CustomRequest } from '../middlewares/verify_tokens';



dotenv.config();

const STRIPE_KEY = process.env.STRIPE_KEY  ;

const stripe = new Stripe(`${STRIPE_KEY}`,{
    apiVersion: '2022-11-15',
 })

const makePayment = async(req:CustomRequest,res:Response)=>{
    // add to the orders
    const userId = req.user.id;
    const address = req.body.address
    const totalPrice = req.body.price;
    const items = req.body.items;
   
    try{
        const charge=  await stripe.charges.create({
            source:req.body.tokenId,
            amount:req.body.amount,
            currency:'lkr',
        })

        const newOrder  =await order.create({
            userId:userId,
            total:totalPrice,
            products:items,
            address:address,
            recipt:charge.receipt_url
        });

        res.json({order:newOrder,charge}).status(200)

    } catch(e){
        res.json(e).status(400)
    }

}

export default {
    makePayment
}