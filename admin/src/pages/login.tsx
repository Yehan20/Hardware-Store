import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/redux_selectors'
import { login } from '../slices/authSlice'
import { useNavigate } from 'react-router'

const Login = () => {
 const [username,setUsername] = useState('')
 const [password,setPassword] = useState('')

 const dispatch = useAppDispatch();
 const {user,error} = useAppSelector(state=>state.Auth)
 const navigate = useNavigate()
 

 const handleClick = ()=>{
      dispatch(login({username,password}))
 }
 console.log(user)

 useEffect(()=>{
   if(user.name){
      localStorage.setItem('adminToken',user.token);
      navigate('/');
   }
},[user])

  return (
     <div className='login container'>
        <form>
           <div>
            <label htmlFor="username">Username</label>
            <input value={username} onChange={(e)=>setUsername(e.target.value)} type="text" placeholder='username' id='username' />
           </div>
           <div>
            <label htmlFor="password">Password</label>
            <input value={password}  onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='username' id='password' />
           </div>
           <button type='button' onClick={handleClick}>Login</button>
           <div className='err'>
              <p>{error}</p>
           </div>
        </form>
     </div>
  )
}

export default Login