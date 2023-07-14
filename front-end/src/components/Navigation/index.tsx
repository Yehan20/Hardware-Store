import React from 'react'
import { Link } from 'react-router-dom'
import { Li, Nav, Ul, Button, NavigationLink } from './style'
import { FaShoppingCart } from 'react-icons/fa'
import { useAppSelector } from '../../hooks/redux_selectors'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const CartAmount = styled.span`
   color:#fff;
   font-size:0.9rem;
   font-weight:500;
   position:absolute;
   font-family:'Poppins',sans-serif;
   right:-10px;
   top:-5px;

`

const Navigation = () => {
    const user = useAppSelector(state => state.Auth.user)
    const totalAmount = useAppSelector(state => state.Cart.totalamount)
    return (
        <Nav>
            <Ul>
             <Li>
                <NavigationLink to='/products'>Products</NavigationLink>
            </Li>
                {user.name && <Li>Hello {user.name}</Li>}
                {!user.name && <>
                    <Li>
                        <Link to='/register'> Register </Link>
                    </Li>

                    <Li>
                        <Link to='/login'> Login</Link>
                    </Li>
                </>}
                <Li>
                    <Button to='/cart'>
                        <FaShoppingCart color='#fff' size={'18px'} />
                    </Button>
                    <CartAmount>{totalAmount > 0 ? totalAmount : ''}</CartAmount>
                </Li>
            </Ul>
        </Nav>
    )
}

export default Navigation