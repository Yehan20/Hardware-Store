import React, { useEffect, useState } from 'react'
import {Container} from '../components/Products/style'
import Product from '../components/Product'
import { animateScroll as scroll } from 'react-scroll';
import styled from 'styled-components'
import { Ios } from '../Responsive'
import { useAppDispatch, useAppSelector } from '../hooks/redux_selectors'
import { getProductCat, sortProduct } from '../slices/productSlice'

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
  <option value=''>All Tools</option>
  <option value='Power Tools'>Power Tools</option>
  <option value='Garden Tools' >Garden Tools</option> 
  <option value='Machine Tools'>Machine Tools</option>
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
  const products = useAppSelector(state=>state.Products.productCategory)
  const [sortCri,setSortCri] = useState('');
  const [category,setCategory] = useState('');

  const filteredProducts=category?products.filter((product)=>product.category===category):products;

  const dispatch = useAppDispatch();

  useEffect(()=>{
    scroll.scrollToTop({
      duration: 150, // Specify the duration in milliseconds (e.g., 250ms)
      smooth: true, 
  })
    document.title='Products'
    dispatch(getProductCat("All"))
  },[])
  
  useEffect(()=>{
    dispatch(sortProduct(sortCri))     
  },[sortCri])

  return (
    <Container>
    <Navigation>
        <Column>
        <FilterHeading>Sort by Type</FilterHeading>
        <Select onChange={(e)=>setCategory(e.target.value)}>
         {Options}
         </Select>
        </Column>
        <Column>
          <FilterHeading>Sort by Price</FilterHeading>
          <Select onChange={(e)=>setSortCri(e.target.value)}>
            {PriceOptions}
          </Select>
        </Column>
    </Navigation>
    {filteredProducts.map((product,index)=>{
         return <Product key={index} product={product} />
    })}
   </Container>
  )
}

export default Products