import {createAsyncThunk,createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

const URL = 'http://localhost:3001/user/'

type AuthSliceTypes = {
   user:{
      name:string,
      token:string
      _id:string
   }|'',
   status:string,
   error:string,
   loading:boolean,
   toastConfig:{color:'info'| 'success'| 'warning'| 'error'|'default',message:string}
}

const initialState:AuthSliceTypes={
    user:'',
    status:'idle',
    error:'',
    toastConfig:{
      message:'',
      color:'default'
    },
    loading:false,

}

export const login = createAsyncThunk('auth/login',async(user:any)=>{
     
   try{
      const response = await axios.post(`${URL}login`,{
         ...user
      })
      
   // console.log(response.status);

    const  User = response.data;
    return User; 
   }catch(error:any){
     // console.log(error.response.data);
      return error.response.data
   }

})

export const register = createAsyncThunk('auth/login',async()=>{
    
})

export const getUser = createAsyncThunk('auth/getUser',async(token:string)=>{
     const isLogged = await axios.post(`${URL}getuser`,{
        token
     })

     console.log(isLogged.data);
     return isLogged.data;
     
   //   if(isLogged.data.user){
   //       return isLogged.data.user
   //   }
   //   else{
   //      console.log('not logged');
   //   }

})

export const logout = createAsyncThunk('auth/login',async()=>{
    
})

const AuthSlice = createSlice({
     name:'Auth',
     initialState:initialState,
     reducers:{},
     extraReducers:(builder)=>{
       builder
       .addCase(login.pending,(state)=>{

          state.status='Pending'
          state.error =''
          state.loading = true
       })
       .addCase(login.fulfilled,(state,action)=>{

          state.status ='Finish';
          state.loading = false
          

          if(action.payload.user){
            state.user= action.payload.user
          }
          if(action.payload.message){
             state.error= action.payload.message
             state.toastConfig.message= action.payload.message 
             state.toastConfig.color="error"
          }

       })
       .addCase(getUser.fulfilled,(state,action)=>{
           console.log(action.payload);
       })

     }
})

export default AuthSlice.reducer;