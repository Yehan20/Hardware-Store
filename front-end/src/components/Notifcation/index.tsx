import React, { useEffect } from 'react'
import {ToastContainer,toast} from 'react-toastify'
import { useAppSelector } from '../../hooks/redux_selectors'
const Notfication = () => {
   const {toastConfig,error} = useAppSelector(state=>state.Auth)
   console.log(toastConfig.color)
   useEffect(()=>{
      if(!error) return;
      toast(toastConfig.message,{
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        type:toastConfig.color,
        progress: undefined,
        theme: "light",
    
      })
      return ()=>toast.dismiss();
   },[error])

  return (
     <ToastContainer style={{fontFamily:'Poppins'}}/>
  )
}

export default Notfication