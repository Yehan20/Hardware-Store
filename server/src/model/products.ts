import {model, Schema, Model, Document} from 'mongoose'

interface productInterface extends Document {
    name: string;
    price: number;
    category: string;
    inStock: boolean;
    desc: string,
    img: string
}

const ProductSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    inStock: {
        type: Boolean,
         default:true
    },
    img: {
        type: String,
        required: true
    },
    desc:{
        type:String,
        required:true,
    }
},{timestamps:true})


export default model<productInterface>('products',ProductSchema)
