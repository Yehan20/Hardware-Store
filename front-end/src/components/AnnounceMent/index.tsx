import React from 'react'
import { Title,Container, Desc, StyledLink } from './style'

const AnnounceMent = () => {
  return (
    <Container>
         <Title>Hundereds of Tools</Title>
         <Desc>
           Hammers, Chisels, Universal Pliers, Nippers, Jigsaws, Saws
         </Desc>
         <StyledLink to='/products/type/All'>Show more</StyledLink>
    </Container>
  )
}

export default AnnounceMent