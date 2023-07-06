import React from 'react'
import { HeaderStyled, Container, TitleHeader, Left, Right, HeaderButton, HeaderText, FirstHeaderSection, SecondHeaderSection, ThirdHeaderSection, SearchContainer, Search, SearchButton, HeaderPara } from './styled'
import { FaChevronDown ,FaSearch} from 'react-icons/fa'
import Navigation from '../Navigation'
import { Link } from 'react-router-dom'
import Notfication from '../Notifcation'
const Header = () => {
  return (
    <Container>

      <FirstHeaderSection>
        <Left><TitleHeader><Link to={'/'}>Tools Suppliers</Link></TitleHeader></Left>
        <Right>
          <HeaderPara>Language : EN</HeaderPara>
          <HeaderButton>My Account <FaChevronDown /></HeaderButton>
        </Right>
      </FirstHeaderSection>

      {/* <SecondHeaderSection>
        <HeaderText>Super Deal All Products 50% off</HeaderText>
      </SecondHeaderSection> */}

      <ThirdHeaderSection>
        <SearchContainer>
          <Search placeholder='Search' />
          <SearchButton><FaSearch/></SearchButton>
        </SearchContainer>
        <Navigation />
      </ThirdHeaderSection>
    </Container>
  )
}

export default Header