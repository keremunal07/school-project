import React from 'react'
import Container from '../molecules/container'
import Navbar from '../molecules/navbar'
const Header = () => {
    return (
        <Container className={'navbar-fluid'} width={'100%'}>
          <Navbar/>
        </Container>
    )
}

export default Header