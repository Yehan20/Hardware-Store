import React from 'react'
import { Link } from 'react-router-dom'
import { CategoryItemType } from '../../types/types'
import { CategoryItemContainer, Desc, Title,Image } from './style'

const CategoryItem= ({item}:CategoryItemType) => {
  return (
     <CategoryItemContainer>
         <Image src={item?.img} alt={item?.name}/>
         <Title>{item?.name}</Title>
         <Link to={'/product/'+item?.name}>View</Link>
     </CategoryItemContainer>
  )
}

export default CategoryItem