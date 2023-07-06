import styled from "styled-components";
import * as BreakPoints from "../../Responsive";
export const HeaderStyled = styled.header`


`
export const Container  = styled.div`
 

   
`
export const FirstHeaderSection  = styled.div`
   padding:0.8em 5em ;

   /* background-color:#ff5d00;  */
   background-color:#f5f5f5; 
   color:#fff;
   display:flex ;
   justify-content:space-between ;
   align-items:center ;

   ${BreakPoints.Tablet({padding:'2em 2em'})};
   ${BreakPoints.Andriod({flexWrap:'wrap'})};
   ${BreakPoints.Ios({gap:'1em'})};
   
`
export const SecondHeaderSection  = styled.div`
   padding:0.5em 5em ;
   display:flex ;
   justify-content:center ;
   text-align:center ;
   font-size:2rem ;
   ${BreakPoints.Tablet({padding:'2em 2em'})};
`
export const ThirdHeaderSection  = styled.div`
   padding:0.4em 5em ;
   display:flex ;
   justify-content:space-between ;
   background-color:#ff5d00; 
   align-items:center ;
   ${BreakPoints.Tablet({padding:'1em 2em'})};
   ${BreakPoints.Andriod({flexDirection:'column'})};
`

export const TitleHeader  = styled.h2`
  margin:0 ;
  font-family:'Rajdhani',sans-serif ;
  font-size:1.5rem ;
  color:#123;
  a{
   text-decoration:none ;
   color:inherit;
  }
`
export const HeaderButton = styled.button`
 color:#123;

`
export const HeaderPara = styled.p`
 color:#123;
 font-size:1rem ;
 margin:0 ;

`

export const HeaderText = styled.p`
margin:0 ;
font-weight:600 ;
font-family:'Poppins',sans-serif ;
color:#123;
font-size:1.1rem ;
`

export const Left = styled.div``

export const Right = styled.div`
   display:flex ;
   align-items:center ;
   gap:1em;
`
export const SearchContainer = styled.div`
 display:flex ;
  
 ${BreakPoints.Andriod({order:2,marginTop:'1em'})};
 /* align-items:center ; */
`
export const  Search  = styled.input`
border:0;
outline:0 ;
padding: 0.4em 1em;
font-family:'Poppins',sans-serif ;
${BreakPoints.Andriod({width:'100%'})};
`
export const SearchButton = styled.button`
  display:inline-block ;
  /* padding:1em 1em; */
  padding: 0.4em ;
  background-color:#fff ;
  border:0 ;

`