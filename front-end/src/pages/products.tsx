import React from 'react'
import {Container} from '../components/Products/style'
import Product from '../components/Product'
import { SampleProducts } from '../data/data'
import styled from 'styled-components'
import { Ios } from '../Responsive'

const Navigation = styled.div`
  display:flex ;
  margin-bottom:1em ;
  justify-content:space-between ;
  width:100% ;
  font-family:'Poppins',sans-serif ;
  align-items:center ;
  ${Ios({flexDirection:'column',gap:'1em',alignItems:'stretch'})};
`;

const Select = styled.select`margin-left:0.5em;`;
const Options = <>
  <option value='all'>All Tools</option>
  <option value='powertools'>Power Tools</option>
  <option value='gardertools'>Garden Tools</option> 
  <option value='machinetools'>Machine Tools</option>
</>

const PriceOptions = <>
<option value='all'>Random</option>
<option value='highest'>Highest to Lowest</option>
<option value='lowest'>Lowest to Highest</option>
</>

const FilterHeading = styled.span``;
const Column = styled.div`
   ${Ios({display:'flex',justifyContent:'spaceBetween'})};
   *{
    ${Ios({width:'100%'})};
   }
`
const Products = () => {
  return (
    <Container>
    <Navigation>
        <Column>
        <FilterHeading>Sort by Type</FilterHeading>
        <Select>
         {Options}
         </Select>
        </Column>
        <Column>
          <FilterHeading>Sort by Pirce</FilterHeading>
          <Select>
            {PriceOptions}
          </Select>
        </Column>
    </Navigation>
    {SampleProducts.map((product)=>{
         return <Product key={product.id} product={product} />
    })}
   </Container>
  )
}

export default Products