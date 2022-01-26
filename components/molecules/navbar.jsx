import React from 'react'
import Container from './container'
import Logo from './logo'
import Anchor from '../atoms/anchor'
const Navbar = () => {
    return (
        <Container className={'navbar'}>
            <Anchor to={'/#'}>
                <Logo src={'/balevim-logo.svg'} width={'275px'} height={'60px'} />
            </Anchor>
            <div className='d-flex justify-content-evenly'>
                <Anchor to={'/#services'} className={'mx-4 mt-2 mb-1 mr-1'} color={'#546182'}>Ürünlerimiz</Anchor>
                <Anchor to={'/#footer'} className={'contact-us'} color={'white'}>İletişim</Anchor>
            </div>
        </Container>
    )
}

export default Navbar
