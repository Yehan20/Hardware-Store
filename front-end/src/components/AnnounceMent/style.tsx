import styled from "styled-components";
import {Link} from 'react-router-dom'
import Bg from '../../assets/images/banner-1.jpg'
export const Container = styled.div`

  text-align:center ;
  padding:4em 1em ;
  background-image:url(${Bg}) ;
  background-repeat:no-repeat ;
  background-size:cover ;
  background-color:rgba(0,0,0,0.7) ;
  background-blend-mode:multiply ;
  color:#fff ;
`
export const Title = styled.h3`
  font-family:'Rajdhani',sans-serif ;
  font-size:3rem ;
  font-weight:600;
`
export const StyledLink= styled(Link)`
   display:inline-block;
   padding:0.5em 2em ;
   background-color:rgb(255, 93, 0) ;
   color:#fff;
   font-family:'Poppins',sans-serif ;
   text-decoration:none ;
   &:hover{
     opacity:0.7 ;
     color:#fff;
   }
`

export const Desc = styled.p`
  font-family:'Poppins',sans-serif ;
  font-size:1rem ;
  font-weight:300;

`