import { Link } from "react-router-dom";
import styled from "styled-components";
import {ColoumnProp} from '../../types/types'
export const Container  = styled.footer`

`
export const FirstFooter = styled.div`
  display:flex ;
  padding:2em 5em ;
  justify-content:space-between ;
`
export const SecondFooter = styled.div`
  text-align:center ;
  padding:1em ;
  background-color:rgb(245, 245, 245) ;
`
export const Column  = styled.div<ColoumnProp>`
   flex-grow:1 ;
   width:${(props)=>props.width?props.width+'%':'auto'} ;
`
export const Title  = styled.h3`
   font-family:'Rajdhani' ;
   margin-bottom:1em ;
`
export const List  = styled.ul`
  margin-top:0.5em ;
   list-style:none ;
   padding-left:0 ;
`
export const ListItem  = styled.li`
  margin-bottom:0.5em ;
  font-family:'Poppins',sans-serif ;


`
export const ListLink= styled(Link)`
  text-decoration:none ;
  color:#123;
`
export const Input = styled.input`

padding:0em 1em ;
  &:focus{
    outline:0 ;
    border:1px solid #123;
  }
`


export const SearchContainer = styled.div`
  margin-top:1em ;
  display:flex ;
  gap:0.5em;
`
export const Button = styled.button`
  display:inline-block ;
  border:0 ;
  background-color:rgb(255, 93, 0) ;
  padding:0.4em 1em ;
  color:#fff;
  font-family:'Poppins',sans-serif ;
  &:hover{
    opacity:0.7 ;
  }
`
export const Icon = styled.a<ColoumnProp>`
  background:${props=>props.bg};
  padding:0.5em 0.6em;
  border-radius:50%;
  cursor:pointer ;
`
export const Icons = styled.div`
  display:flex ;
  margin-top:1em ;
  gap:10px;
`
export const Desc = styled.p`
  margin:0 ;
  font-family:'Poppins',sans-serif ;
`

