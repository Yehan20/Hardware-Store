import React from 'react'
import { useParams } from 'react-router'
import Product from '../components/Product';
import { Container } from '../components/Products/style';
import { useAppDispatch, useAppSelector } from '../hooks/redux_selectors';
import styled from 'styled-components';
const Title = styled.h2`
  font-family:'Rajdhani',sans-serif;
  text-align:center;
  margin-top:1em;
`
const Colored = styled.span`
  color:rgb(255, 93, 0);
  font-weight:600;
`
const Desc= styled.p`
  color:orangered;
  font-family:'Poppins',sans-serif;
  font-size:1.5rem;
  font-weight:500;
`
const Search = () => {
    const { query } = useParams();
    let search = new RegExp(query as string, 'i')
    const { products } = useAppSelector(state => state.Products)

    const searchedProduct = products.filter((product: any) => search.test(product.name))

    return (
        <>
            <Title>Searched Results for  <Colored>*{query}</Colored></Title>
            <Container>

                {searchedProduct.map((product, index) => {
                    return <Product key={index} product={product} />
                })}
                {searchedProduct.length<1 && <Desc>No Matching Results</Desc>}
            </Container>
        </>

    )
}

export default Search