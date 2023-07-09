import {createAsyncThunk,createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import { Cart } from '../types/types';


interface CartTypes{
     total:{subtotal:number,discount:number,final:number};
     totalamount:number;
     cart:any[];
     userid?:string;
     cartId:string;
     status:string;
     notification:boolean;
     toastConfig:{color:'info'| 'success'| 'warning'| 'error'|'default',message:string},
     toggleSet:boolean;
}

const InitialState:CartTypes={
      totalamount:0,
      total:{
        subtotal:0,
        discount:1,
        final:0
      }, 
      cartId:'',
      cart:[],
      status:'idle',
      notification:false,
      toastConfig:{
        color:'default',
        message:''
      },
      toggleSet:false
      
}

const URL = 'http://localhost:3001/cart/'

export const loadCart = createAsyncThunk('cart/get',async(id:string)=>{

    const cart = await axios.post(`${URL}get`,{
        userId:id
    })
    console.log(cart.data);
    return cart.data;
});

export const setCart = createAsyncThunk('cart/set',async(cartDetails:{cart:CartTypes[],id:string})=>{

   console.log('method called',cartDetails.cart);

   const token  = localStorage.getItem('token');
   const newCartItems = await axios.post(`${URL}manage`,{
      cart:cartDetails.cart,id:cartDetails.id
   },{
    headers:{
        'Authorization':`Bearer ${token}`
    }
   })
   console.log(newCartItems.data);
   return newCartItems.data
});

const clearCart = createAsyncThunk('cart/clear',async()=>{

})


const cartSlice = createSlice({
    name:'Cart',
    initialState:InitialState,
    reducers:{
        addCart(state,action){

           const newCartItem:any = action.payload;

           // if the item already exsists in the cart
           const itemExists = state.cart.filter((cartItem:any)=>cartItem.name===newCartItem.name).length 
           if(itemExists>0){

            // update the particular item
            const newCartItems =  state.cart.map((item:any)=>{
                // find the same pair
                if(item.name===newCartItem.name){

                    let price = item.price / item.amount; // unit price
                    let total = item.amount + newCartItem.amount // total amount
                    return {
                      ...item,amount:total,price:price * total
                    }
                }
                return item
             })

             return {
                ...state,cart:newCartItems,totalamount:newCartItems.length,notification:true,
                toastConfig:{
                    color:'success',
                    message:"Added to Cart"
                 }
             }
           }

           state.cart = [...state.cart,newCartItem];
           state.notification = true
           state.totalamount = state.cart.length
           state.toastConfig={
            color:'success',
            message:"Added to Cart"
           }
           state.toggleSet = !state.toggleSet;
           

       
        },
        calculateTotal(state){
           const total = state.cart.reduce((prev,currentValue)=>{
               console.log('prev',prev);
               console.log(currentValue)
               prev += currentValue.price
               return prev;
           },0);
           
           let discountValue = 1;

           if(total>25000)  discountValue = 5
           if(total>50000) discountValue = 10
                
           state.total.subtotal = total
           state.total.discount = discountValue
           state.total.final= total * ((100 - discountValue)/100);
        },
        resetCartNotification(state){
            state.notification = false;
              
        },
        incrementItem(state,action){
          const itemName = action.payload; // get the name
          const updatedItems = state.cart.map((cartItem)=>{
              if(cartItem.name===itemName){
                 const newAmount = cartItem.amount + 1;
                 const newPrice =  (cartItem.price / cartItem.amount) * newAmount;
                 return {
                    ...cartItem,amount:newAmount,price:newPrice
                 }

              }
              return cartItem
          })
          state.cart = updatedItems;
        },
        decrementItem(state,action){
            const itemName = action.payload; // get the name
            const updatedItems = state.cart.map((cartItem)=>{

                if(cartItem.name===itemName && cartItem.amount>1){

                   const newAmount = cartItem.amount - 1;
                   const newPrice =  (cartItem.price / cartItem.amount) * newAmount;
                   return {
                      ...cartItem,amount:newAmount,price:newPrice
                   }
  
                }
                return cartItem
            })
            state.cart = updatedItems;
        },
        removeItem(state,action){

            const name = action.payload;
            const newItems = state.cart.filter((item)=>item.name !== name);

            state.toastConfig={
                color:'error',
                message:"Item Removed from cart"
               }

            state.cart = newItems;
            state.notification = true;
            state.totalamount = state.cart.length;


        },
        checkLogged(state){
          state.notification=true;
          state.toastConfig={
             color:'warning',
             message:'Sign In to make your payment'
          }
        }
    },
    extraReducers:(builder)=>{
      builder
      .addCase(loadCart.pending,(state)=>{
         state.status = 'loading'
      })
      .addCase(loadCart.fulfilled,(state,action)=>{
          console.log("payload",action.payload)
          state.status ='loaded'
          state.cart = action.payload.cart.cartItems;
          state.cartId = action.payload.cart._id;
          //state.userid=action.payload.cart.userId;
          state.totalamount = state.cart.length;
      })
      .addCase(loadCart.rejected,(state,action)=>{
         state.status = 'failed to fetch'
      })
      .addCase(setCart.pending,(state)=>{

     })
      .addCase(setCart.fulfilled,(state,action)=>{
       
        console.log(action.payload.cart);
         state.cart = action.payload.cart.cartItems;
         state.totalamount =action.payload.cart.cartItems.length;
      })
    }
})

export default cartSlice.reducer;
export const {addCart,calculateTotal,resetCartNotification,incrementItem,decrementItem,removeItem,
              checkLogged
} = cartSlice.actions