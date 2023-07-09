import { useEffect } from 'react'
import {ToastContainer,toast} from 'react-toastify'
import {resetNotification} from '../../slices/authSlice'
import { useAppDispatch, useAppSelector } from '../../hooks/redux_selectors'
import { resetCartNotification } from '../../slices/cartSlice'

const Notfication = () => {

   const {toastConfig,error,showNotification} = useAppSelector(state=>state.Auth)
   const {cart,toastConfig:CartToastConfig,notification} = useAppSelector(state=>state.Cart)

   const dispatch = useAppDispatch();
 
   
   // login and sign up toas 
   useEffect(()=>{
      if(!showNotification) return;
      toast(toastConfig.message,{
        position: "top-center",
        autoClose: 1000,
      //   onClose:onClose,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        type:toastConfig.color,
        progress: undefined,
        theme: "light",
        
    
      })

      setTimeout(()=>{
         dispatch(resetNotification())
      },2000)

      
      return ()=>{
         console.log('cleam up');
         dispatch(resetNotification())
         toast.dismiss()
      }
         ;
   },[showNotification])

   // cart notification
   useEffect(()=>{
      console.log(CartToastConfig);
      
      if(!CartToastConfig.message || !notification ) return;
      
      toast(CartToastConfig.message,{

        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        type:CartToastConfig.color,
        progress: undefined,
        theme: "light",
        
    
      })
      setTimeout(()=>{
         dispatch(resetCartNotification())
      },2000)

      return ()=>{
         dispatch(resetCartNotification())
         toast.dismiss()  
      }
         
   },[cart,notification])


  return (
     <ToastContainer  style={{fontFamily:'Poppins'}}/>
  )
}

export default Notfication