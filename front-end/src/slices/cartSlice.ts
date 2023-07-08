import {createAsyncThunk,createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

interface CartTypes{
     total:{subtotal:number,discount:number,final:number};
     totalamount:number;
     cart:any[];
     userid?:string;
     cartId:string;
     status:string;
     notification:boolean;
     toastConfig:{color:'info'| 'success'| 'warning'| 'error'|'default',message:string},
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
      }
      
}

const URL = 'http://localhost:3001/cart/'

export const loadCart = createAsyncThunk('cart/get',async(id:string)=>{

    const cart = await axios.post(`${URL}get`,{
        userId:id
    })

    return cart.data;
});

const setCart = createAsyncThunk('cart/set',async(cart)=>{
   const token  = localStorage.getItem('token');
   const newCartItems = await axios.post(`${URL}manage`,{
      cart
   },{
    headers:{
        'Authorization':`Bearer ${token}`
    }
   })
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
              
        }
    },
    extraReducers:(builder)=>{
      builder
      .addCase(loadCart.pending,(state)=>{
         state.status = 'loading'
      })
      .addCase(loadCart.fulfilled,(state,action)=>{
          state.status ='loaded'
          state.cart = action.payload.cart.cartItems;
          state.cartId = action.payload.cart._id;
          state.userid=action.payload.cart.userId;
      })
      .addCase(loadCart.rejected,(state,action)=>{
         state.status = 'failed to fetch'
      })
      .addCase(setCart.fulfilled,(state,action)=>{
         state.cart = action.payload.cart;
         state.totalamount = state.cart.length;
      })
    }
})

export default cartSlice.reducer;
export const {addCart,calculateTotal,resetCartNotification} = cartSlice.actions