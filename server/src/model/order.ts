import {Schema,Document,model} from 'mongoose'

interface orderInterface extends Document{
  userId:string;
  total:number;
  address:{
     country:string,
     city:string,
     number?:string
  }
  recipt:string
}


const productSchema = new Schema({
     name:{
        type:String
     },
     amount:{
        type:Number
     },
     category:{
      type:String,
     },
     price:{
      type:Number
     },
     img:{
      type:String
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
    ,
    recipt:{
      type:String,
    }
},{timestamps:true})

export default model<orderInterface>("orders",orderSchema);

