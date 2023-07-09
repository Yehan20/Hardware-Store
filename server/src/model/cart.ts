import {model,Schema,Document,ObjectId} from 'mongoose';

type cartItemType={
   id:ObjectId,
   productName:string,
   amount:number,
   price:number,
   image:string
}

interface cartInterface extends Document {
     userId:string;
     cartItems:cartItemType[]
}

const cartItemSchema = new Schema({

        name:{
            type:String
        },
        category:{
            type:String
        },
        amount:{
            type:Number,
            default:1,
        },price:{
            type:Number,
            default:0
        },
        img:{
            type:String
        }
    
})

const cartSchema = new Schema({
    userId:{
        type:String,
        required:true
    },
    cartItems:[cartItemSchema]
})

export default model<cartInterface>("carts",cartSchema);