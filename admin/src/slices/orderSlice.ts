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

export const allOrders = createAsyncThunk('auth/getOrders',async(token)=>{
   // axios.defaults=
    const users = await axios.get(`${URL}viewAll`,{
       headers:{
         'Authorization':`bearer ${token}`
       }
    })
    console.log(users);
    return users.data.orders;
    
})



const OrderSlice = createSlice({
     name:'Auth',
     initialState:OrderState,
     reducers:{
     },
     extraReducers:(builder)=>{
       builder.addCase(allOrders.pending,(state)=>{
           state.status = 'pending';
          
       }).addCase(allOrders.fulfilled,(state,action)=>{
           state.status= 'fetched'
           state.orders = action.payload;
       })

     }
})

export default OrderSlice.reducer;
// export const {logout,resetNotification} = OrderSlice.actions