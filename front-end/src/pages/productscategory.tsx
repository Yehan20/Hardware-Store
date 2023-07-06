import React, { useEffect, useState } from 'react'
import {Container} from '../components/Products/style'
import Product from '../components/Product'
import { SampleProducts } from '../data/data'
import styled from 'styled-components'
import { Ios } from '../Responsive'
import { useParams } from 'react-router'
import { useAppDispatch, useAppSelector } from '../hooks/redux_selectors'
import { getProductCat,sortProduct } from '../slices/productSlice'

const Navigation = styled.div`
  display:flex ;
  margin-bottom:1em ;
  justify-content:space-between ;
  width:100% ;
  font-family:'Poppins',sans-serif ;
  align-items:center ;
  ${Ios({flexDirection:'column',gap:'1em',alignItems:"start"})};
`;

const Select = styled.select`
   padding:0.5em ;
   margin-left:0.5em ;
   ${Ios({padding:'0 .5em'})};
`;


const PriceOptions = <>
<option value='all'>Random</option>
<option value='highest'>Highest to Lowest</option>
<option value='lowest'>Lowest to Highest</option>
</>

const FilterHeading = styled.span`
  font-size:1.2rem ;
  ${Ios({fontSize:'1rem'})};
`;
const Column = styled.div`
  ${Ios({display:'flex'})};
  *{
    ${Ios({width:'100%'})};
  }
`
const ProductsCategory = () => {

  const {type} = useParams();
  const dispatch = useAppDispatch();
  const [sortCri,setSortCri] = useState('');

  const productsCategory = useAppSelector(state=>state.Products.productCategory)
  
  useEffect(()=>{
       dispatch(sortProduct(sortCri))     
  },[sortCri])


  useEffect(()=>{
     document.title='Products'
     dispatch(getProductCat(type as string))
  },[])
  return (
    <Container>
    <Navigation>
        <Column>
         <FilterHeading>Type : {type}</FilterHeading>
        </Column>
        <Column>
          <FilterHeading>Sort by Price</FilterHeading>
          <Select onChange={(e)=>setSortCri(e.target.value)}>
            {PriceOptions}
          </Select>
        </Column>
    </Navigation>
    {productsCategory.map((product,index)=>{
         return <Product key={index} product={product} />
    })}
   </Container>
  )
}

export default ProductsCategory