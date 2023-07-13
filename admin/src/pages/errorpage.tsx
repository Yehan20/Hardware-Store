import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
  padding:3em 2em;
  font-family:'Poppins',sans-serif;
`
const Title = styled.h3`
  font-size:3rem !important;
  text-align:center;
`
const Desc = styled.p`
  font-size:1.3rem;
  text-align:center;
`
const ErrorPage = () => {
  return (
    <Container>
      <Title>404</Title>
      <Desc>Page Doesn't exist <br />
          <Link to={'/'}>Go Home</Link>
      </Desc>
    </Container>
  )
}

export default ErrorPage