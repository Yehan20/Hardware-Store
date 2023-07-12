import {createAsyncThunk,createSlice} from '@reduxjs/toolkit'
import axios from 'axios';

interface productInterface{
    status:string,
    products:[],
    singleProduct:{
        _id:string,
        img:string,
        desc:string,
        category:string,
        price:number,
        name:string,
        color:string,
        inStock:boolean,
     },
}

const initialState:productInterface = {
    status:'',
    products:[],
    singleProduct:{
        _id:'',
        img:'',
        desc:'',
        category:'',
        price:0,
        name:'',
        color:'',
        inStock:false,
     },
}

const URL = 'http://www.localhost:3001/products/'

export const getProducts = createAsyncThunk('proudcts/get',async()=>{
      const response = await axios.get(URL+'all');
      const products = response.data.products;
      console.log("products",products)
      return products
})

export const getSingleProduct = createAsyncThunk('products/getOne',async(name:string)=>{
    const response = await axios.get(`${URL}product/${name}`);
    const product = response.data.product;
   // console.log("products",product)
    return product
})


const productSlice = createSlice({
    name:'productSlice',
    initialState:initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getProducts.pending,(state)=>{
             state.status='loading'
        }).
        addCase(getProducts.fulfilled,(state,action)=>{
             state.status = 'fetheced',
             state.products =action.payload
        }).
        addCase(getProducts.rejected,(state)=>{
             state.status = 'rejected'
        }).
         addCase(getSingleProduct.fulfilled,(state,action)=>{
            state.singleProduct = action.payload;
        })
     
    }
})
export default productSlice.reducer