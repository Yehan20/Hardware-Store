import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
import { SingleProductType } from '../types/types'

interface ProductInterface {
      status:string,
      products:[],
      productCategory:SingleProductType[],
      singleProduct:SingleProductType 
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
    console.log("products",product)
    return product
})

export const getProductCat = createAsyncThunk('products/getCat',async(cat:string)=>{
     const response = await axios.get(`${URL}${cat}`);
     const products = response.data.products;
     console.log("products",products)
     return products
 })

const productInitalState:ProductInterface = {
     status:'idle',
     products:[],
     singleProduct:{
        img:'',
        desc:'',
        category:'',
        price:0,
        name:'',
        color:'',
        inStock:'',
     },
     productCategory:[]
}

const productSlice = createSlice({
    name:'Product',
    initialState:productInitalState,
    reducers:{
        sortProduct(state,action){
            
            const newProducts =[...state.productCategory];
             if(action.payload==='highest'){

                let sortedProducts = newProducts.sort((x:any,y:any)=>((x.price<y.price)? 1 : (x.price>y.price? -1 : 0))
                )

               return {...state,productCategory:[...sortedProducts]} 
             }
             if(action.payload==='lowest'){
                let sortedProducts = newProducts.sort(
                    (x:any,y:any)=>(x.price<y.price)?-1:(x.price>y.price?1:0)
                )

                return {...state,productCategory:[...sortedProducts]} 
             }
           
        }
    },
    extraReducers:builder=>{
        builder.addCase(getProducts.pending,(state,action)=>{
             state.status = 'pending'
        })
        .addCase(getProducts.fulfilled,(state,action)=>{
             state.status = 'feteched',
             state.products = action.payload   
        })
        .addCase(getProducts.rejected,(state,action)=>{
             if(action.error.message){
               state.status = action.error.message
            }
        })
        .addCase(getSingleProduct.fulfilled,(state,action)=>{
            state.singleProduct = action.payload;
        })
        .addCase(getProductCat.fulfilled,(state,action)=>{
          state.productCategory = action.payload;
      })
    }
})

export default productSlice.reducer;
export const {sortProduct}  = productSlice.actions