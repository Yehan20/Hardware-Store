import {createAsyncThunk,createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'http://localhost:3001/orders/'

interface OrderInterface{
     status:string;
     orders:any[]
}

const OrderState:OrderInterface={
     orders:[],
     status:'idle'
}

export const getOrders = createAsyncThunk('orders/get',async(userId:string)=>{
    const token = localStorage.getItem('token');
    const orders = await axios.post(`${URL}view`,{
        userId:userId
    },{
        headers:{
            'Authorization':`Bearer ${token}`
        }
    })
    // console.log("orders",orders.data.orders)
    return orders.data.orders
})

export const  clearOrders = createAsyncThunk('orders/clear',async(userId:string)=>{

    const token = localStorage.getItem('token');
     await axios.post(`${URL}clear`,{
        userId:userId
    },{
        headers:{
            'Authorization':`Bearer ${token}`
        }
    })
    // console.log("orders",orders.data.orders)
    return true
})

const orderSlice = createSlice({
    name:'OrderSlice',
    initialState:OrderState,
    reducers:{
      clearHistory(state){
          state.orders = [];
      }

    },
    extraReducers:(builder)=>{
      builder.addCase(getOrders.pending,(state)=>{
         state.status = 'loading'
      }),
      builder.addCase(getOrders.fulfilled,(state,action)=>{
        state.status = 'fetched';
        if(action.payload){
            state.orders =action.payload
        };
      })
    }
})

export default orderSlice.reducer
export const {clearHistory} = orderSlice.actions