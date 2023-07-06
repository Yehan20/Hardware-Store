import styled from "styled-components";
import { Ios,LG } from "../../Responsive";
export const CategoryItemContainer=styled.div`
  min-width:20rem ;
  flex-grow:1 ;
  background-color:rgba(0,0,0,0.5) ;
  padding:3em 2em 3em 2em;
  flex-basis:20% ;
  position:relative ;
  min-height:350px ;
  display:flex ;
  flex-direction:column ;
  justify-content:center ;
  text-align:center ;
  a{
    display:inline-block ;
    padding:0.5em 3em ;
    color:#000;
    background-color:#fff;
    align-self:center ;
    font-family:'Poppins',sans-serif ;
    text-decoration:none ;
    transition:all 350ms ease-in ;
    &:hover{
        transform:translateX(10px) ;
    }
  
}
${Ios({minWidth:'10rem'})};
${LG({minHeight:'450px'})};
`
export const Title = styled.h3`
 font-size:2.5rem ;
 font-family: 'Rajdhani';
 color:#fff;
 font-weight:700 ;
 margin-bottom:0.7em ;
`

export const Desc = styled.p``

export const Image = styled.img`
   width:100% ;
   /* max-width:300px ; */
   position:absolute ;
   top:0;
   left:0 ;
   width:100% ;
   height:100% ;
   z-index:-1 ;
`