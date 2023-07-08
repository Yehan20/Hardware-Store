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
   toastConfig:{color:'info'| 'success'| 'warning'| 'error'|'default',message:string},
   showNotification:boolean
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
    showNotification:false,

}

export const login = createAsyncThunk('auth/login',async(user:any)=>{
     
   try{
      const response = await axios.post(`${URL}login`,{
         ...user
      })

    const  User = response.data;
    return User; 

   }catch(error:any){

      return error.response.data
   }

})

export const register = createAsyncThunk('auth/register',async(user:{username:string,password:string})=>{
   try{
      const response = await axios.post(`${URL}register`,{
         ...user
      })
      
    const  User = response.data;
    return User;

   }catch(error:any){

      return error.response.data
   }
})

export const getUser = createAsyncThunk('auth/getUser',async(token:string)=>{
    // axios.defaults=
     const isLogged = await axios.post(`${URL}getuser`,{
        token
     },{
        headers:{
          'Authorization':`bearer ${token}`
        }
     })

    // console.log(isLogged.data);
     return isLogged.data;
     
})

// export const logout = createAsyncThunk('auth/login',async()=>{
    
// })

const AuthSlice = createSlice({
     name:'Auth',
     initialState:initialState,
     reducers:{
       logout(state){
         state.user='';
         localStorage.removeItem('token');
         state.toastConfig.color='info';
         state.toastConfig.message ='You are Logged out'
         state.showNotification=true
       },
       resetNotification(state){
         state.showNotification = false;
       }
       

     },
     extraReducers:(builder)=>{
       builder
       .addCase(login.pending,(state)=>{

          state.status='Pending'
          state.error =''
          state.loading = true
          state.showNotification = false;
       })
       .addCase(login.fulfilled,(state,action)=>{

          state.status ='Finish';
          state.loading = false
          

          if(action.payload.user){
            state.user= action.payload.user
          }
          // if the result has a message
          if(action.payload.message){
             state.error= action.payload.message
             state.toastConfig.message= action.payload.message 
             state.toastConfig.color="error"
             state.showNotification=true
          }

       })
       .addCase(getUser.fulfilled,(state,action)=>{
           console.log(action.payload);
           if(action.payload.user){
              state.user =action.payload.user
              state.loading = false
           }
           else {
            state.user = ''
            state.loading = false;
           }

       })
       
       .addCase(register.pending,(state)=>{

         state.status='Pending'
         state.error =''
         state.loading = true
         state.showNotification = false;
      })
    
      .addCase(register.fulfilled,(state,action)=>{
         state.status ='Finish';
         state.loading = false


         if(action.payload.user){
           state.user= action.payload.user
           localStorage.setItem('token',action.payload.user.token);
         }
         if(action.payload.message){
            state.error= action.payload.message
            state.toastConfig.message= action.payload.message 
            state.toastConfig.color="error"
            state.showNotification=true
         }
       })

     }
})

export default AuthSlice.reducer;
export const {logout,resetNotification} = AuthSlice.actions