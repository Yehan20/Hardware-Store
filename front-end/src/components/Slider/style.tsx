import styled from "styled-components";
import * as BreakPoints from '../../Responsive';

export const Container=styled.div`

  position:relative ;
`
export const CarouselContainer=styled.div`
  /* position:absolute ; */
  /* background-color:rgba(0,0,0,0.7);
  padding:1em ; */
  /* top:-360px;
  right:-140px ; */
  /* width:500px ;
  height:230px ; */

  display:flex ;
  text-align:start ;
  flex-direction:column ;
  justify-content:space-around ;
  align-items:flex-end ;
  font-family:'Poppins',sans-serif ;
  a{
    display:inline-block ;
    padding:0.75em  1em;
    text-decoration:none ;
    background-color:rgb(255, 93, 0) ;
    color:#fff;
    align-self:flex-start ;
    &:hover{
      opacity:0.7 ;
    }
  }
  ${BreakPoints.Andriod({display:'none'})};
`

export const Title = styled.h3`
 font-size:1.7rem ;
`
export const Details = styled.p``
