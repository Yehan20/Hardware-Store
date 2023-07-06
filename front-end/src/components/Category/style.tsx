import styled from "styled-components";
import * as BreakPoints from '../../Responsive';
export const Container = styled.div`
  display:flex ;
  flex-wrap:wrap ;
  padding:1em 5em ;
  gap:0.5em;
  ${BreakPoints.Tablet({padding:'2em 2em'})};
`