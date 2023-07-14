import {createAsyncThunk,createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

const URL = 'https://toolandservice.onrender.com/user/'

type AuthSliceTypes = {
   user:{
      name:string,
      token:string
      _id:string
      isAdmin:boolean|'',
   },
   status:string,
   error:string,
   loading:boolean,

   users:[],

   showNotification:boolean
}

const initialState:AuthSliceTypes={
    user:{
      name:'',
      token:'',
      _id:'',
      isAdmin:''
    },
    status:'idle',
    error:'',
    loading:false,
    showNotification:false,
    users:[],

}

export const login = createAsyncThunk('auth/adminlogin',async(user:any)=>{
     
   try{
      const response = await axios.post(`${URL}adminlogin`,{
         ...user
      })
    

    const  User = response.data;
    console.log(user)
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
     return isLogged.data;
     
})

export const getUsers = createAsyncThunk('auth/getUsers',async(token:string)=>{
   // axios.defaults=
    const users = await axios.post(`${URL}viewUsers`,{
       token
    },{
       headers:{
         'Authorization':`bearer ${token}`
       }
    })
    console.log(users);
    return users.data.users;
    
})



const AuthSlice = createSlice({
     name:'Auth',
     initialState:initialState,
     reducers:{
       logout(state){
         localStorage.removeItem('adminToken');
         state.user={
            name:'',
            token:'',
            _id:'',
            isAdmin:'',
          };

         
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
            // localStorage.setItem('adminToken',action.payload.user.token)
          }
          // if the result has a message
          if(action.payload.message){
             state.error= action.payload.message
             state.showNotification=true
          }

       })
       .addCase(getUser.pending,(state,action)=>{
          state.loading = true;
       })
       .addCase(getUser.fulfilled,(state,action)=>{
           console.log(action.payload);
           if(action.payload.user){
              state.user =action.payload.user
              state.loading = false
           }
           else {
            state.user={
               name:'',
               token:'',
               _id:'',
               isAdmin:'',
             };
            state.loading = false;
           }

       })
       .addCase(getUsers.pending,(state)=>{
         state.status='pending'
       })
       .addCase(getUsers.fulfilled,(state,action)=>{
           console.log(action.payload)
           state.users = action.payload
           state.status='loaded'
       })
       
     

     }
})

export default AuthSlice.reducer;
export const {logout} = AuthSlice.actions