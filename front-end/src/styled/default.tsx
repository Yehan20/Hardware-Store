import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

   :root {

    --toastify-color-dark: #000 !important;
    --toastify-text-color-light: #000;
    
   }
   
   .StripeCheckout{
     background:rgb(255, 93, 0) !important;
      color:#fff;
      border:0 !important;
      padding:0.5em 1em;
      &:hover{
        opacity:0.7;
      }
      border-radius:0 !important;
   }

   .StripeCheckout span{
      background-image:none !important;
      background:rgb(255, 93, 0);
      color:#fff;
      border:0 !important;
      padding:0.5em 1em;
      box-shadow: 0 !important;
      text-shadow: 0 !important;
      border-radius: 0 !important;
      &:hover{
        opacity:0.7;
      }
      font-family:'Poppins',sans-serif !important;
   }

   .toastify{
     font-family:'Poppins',sans-serif !important;
   }
   .Toastify__toast-body{
    font-family:'Poppins',sans-serif !important;
   }

   *::after,*::before,*{
     box-sizing:border-box ;
   }


   body{
     margin:0;
    
   }
   

   .App{
     display:flex ;
     flex-direction:column ;
     min-height:100vh ;
   }
   
   .carousel-item img {
  max-height: 550px; /* Adjust the height value as per your requirement */
   }
.fixed-caption {
  position: absolute;
  top: 50%;
  left: 310px;
  display:flex ;
  justify-content:center ;
  width:100% ;
  max-width:470px ;
  min-height:200px ;
  transform: translate(-50%, -50%);
  z-index: 1;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.8);
  padding: 20px;
  color: #fff;
}


`