import  {createGlobalStyle} from 'styled-components'

export const GlobalStyles = createGlobalStyle`
   *::after,*::before,*{
     box-sizing:border-box ;
   }

   body{
     margin:0 !important ;
   }
   .carousel-item img {
  max-height: 550px; /* Adjust the height value as per your requirement */
}

`