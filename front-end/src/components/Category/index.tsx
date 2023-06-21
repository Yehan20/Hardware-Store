import React from 'react'
import { Container } from './style'
import { data } from '../../data/data'
import CategoryItem from '../CategoryItem'
const Category = () => {
  return (
    <Container>
       {data.map((item)=>{
           return <CategoryItem item={item} key={item.id}/>
       })}
    </Container>
  )
}

export default Category