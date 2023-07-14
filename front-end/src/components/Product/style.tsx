import styled from "styled-components";
import * as BreakPoints from '../../Responsive';

export const Image=styled.img`
  width:100% ;
  height:170px;
  ${BreakPoints.Andriod({maxWidth:'400px',height:'350px',margin:'0 auto',display:'block'})};
`
export const ButtonContainer=styled.div`
   position:absolute ;
   background-color:rgba(0,0,0,0.6) ;
   top:0;
   left:0 ;
   height:100% ;
   width:100% ;
   display:flex ;
   justify-content:center ;
   align-items:center ;
   gap:1em;
   opacity:0 ;
   cursor:pointer ;
   transition: all 650ms ease-in ;
`

export const ProductContainer=styled.div`
   
   width:11rem ;
   position:relative ;
   &:hover ${ButtonContainer}{
      opacity:1 ;
   }
   ${BreakPoints.TabVertical({width:'45%'})}
   ${BreakPoints.Andriod({width:'100%'})};
   margin-bottom:1em;
`
export const Button=styled.button`
  background-color:#fff ;
  border:0 ;
  border-radius:100% ;
  display:inline-block ;
  padding:0.6em 0.8em;
  a{
   color:inherit;
  }

`
