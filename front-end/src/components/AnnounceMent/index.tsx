import React from 'react'
import { Title,Container, Desc, StyledLink } from './style'

const AnnounceMent = () => {
  return (
    <Container>
         <Title  data-aos='fade-up' data-aos-duration='2000'>Hundereds of Tools</Title>
         <Desc  data-aos='fade-up' data-aos-duration='2000'>
           Hammers, Chisels, Universal Pliers, Nippers, Jigsaws, Saws
         </Desc>
         <StyledLink data-aos='fade-up' data-aos-duration='2000' to='/products/type/All'>Show more</StyledLink>
    </Container>
  )
}

export default AnnounceMent