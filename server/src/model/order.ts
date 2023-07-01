import {Schema,Document,model} from 'mongoose'

interface orderInterface extends Document{
  userId:string;
  total:number;
  address:{
     street:string,
     city:string,
     number:string
  }
}


const productSchema = new Schema({
     productName:{
        type:String
     },
     amount:{
        type:Number
     }
})

const orderSchema = new Schema({
    userId:{
         type:String
    },
    products:[productSchema],
    total:{
        type:Number
    },
    addres:{
       street:String,
       city:String,
       number:String
    }
})

export default model<orderInterface>("orders",orderSchema);

