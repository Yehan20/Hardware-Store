import { Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`


`

export const Ul = styled.ul`
  display:flex ;
  list-style:none ;
  margin:0 ;
  gap:1em;
  align-items:baseline ;
`
 
export const Li = styled.li`
     position:relative;
     font-family:'Poppins',sans-serif ;
     color:#fff;
  a{
    text-decoration:none ;
    font-family:'Poppins',sans-serif ;
    color:#fff;
    font-size:1rem ;
    word-spacing:1px ;
    font-weight:500 ;
  }
`
 
export const NavLink = styled.a`

`
export const Button = styled(Link)`
  display:inline-block ;
  padding-top:0.2em ;
   background-color:transparent ;
   border:0 ;
`
 