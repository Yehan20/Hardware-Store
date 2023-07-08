import React, { useEffect } from 'react'
import { useLocation } from 'react-router'
import { Outlet } from 'react-router'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { GlobalStyles } from '../styled/default'
import { useAppDispatch, useAppSelector } from '../hooks/redux_selectors'
import { loadCart } from '../slices/cartSlice'


const RootLayout = () => {
  const location = useLocation();
  const dispatch = useAppDispatch()

  const canShow=(location.pathname.split('/')[1])===('login') ||(location.pathname.split('/')[1]).includes('register') 
  
  // get cart code
  const {user,error,loading} = useAppSelector((state)=>state.Auth)
  const {cartId,cart}= useAppSelector((state)=>state.Cart)

  
  useEffect(()=>{

   //if user exists and cart Id is not there  only run this codes
   if(user && !cartId){
     // get your cart
     console.log('run');
     dispatch(loadCart(user._id))
    
   
   }
  },[user])





  return (
    <>
     <GlobalStyles/>
     {!canShow&& <Header/>}
     <Outlet/>
     <Footer/>
    </>
  )
}

export default RootLayout