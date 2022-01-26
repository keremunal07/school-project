import React from 'react'
import Container from '../molecules/container'
import Logo from '../molecules/logo'
import Paragraph from '../atoms/paragraph'
import Anchor from '../atoms/anchor'
import Title from '../atoms/title'
import { FaFacebook, FaTwitter, FaInstagram, FaTelegramPlane } from 'react-icons/fa'

const Footer = () => {
    return (
        <Container width={'100%'} className={'footer-fluid'}>
            <Container className={'pb-5 pt-5'}>
                <div id='footer' className='d-flex justify-content-between pb-3 pt-3' >
                    <div className='left'>
                        <Logo src={'/balevim-logo-footer.svg'} width={'240px'} height={'100px'} />
                        <Paragraph className={'mt-4 mb-4'} size={'16px'} color={'#7c7c7c'} weight={400}>
                            100% doğal bal ürünlerimize sahip olabileceğiniz platform.
                        </Paragraph>
                        <Anchor
                        color={'#7c7c7c'}
                        >@2022 Balevim</Anchor>
                    </div>
                    <div className='right'>
                        <div className='d-flex items'>
                            <ul className='footer-item'>
                                <Title size={'15px'} weight={600} color={'white'}>İletişim</Title>
                                <li>
                                    <Anchor to={'tel:+905458305545'} size={'15px'} color={'#7c7c7c'}>
                                        +90 545 830 55 45
                                    </Anchor>
                                </li>
                                <li>
                                    <Anchor to={'mailto:erkanosmanoglu91@gmail.com'} size={'15px'} color={'#7c7c7c'}>
                                        erkanosmanoglu91@gmail.com
                                    </Anchor>
                                </li>
                                <li>
                                    <Anchor size={'15px'} color={'#7c7c7c'}>
                                        Bursa/Türkiye
                                    </Anchor>
                                </li>
                            </ul>
                            <ul className='footer-item'>
                                <Title size={'15px'} weight={600} color={'white'}>Sosyal Medya</Title>
                                <li className='d-flex align-items-start'>
                                    <div className='footer-icon'>
                                        <FaInstagram size={'15px'} color='white' />
                                    </div>
                                    <Anchor style={{padding:'15px'}} size={'15px'} color={'#7c7c7c'}>
                                        Instagram
                                    </Anchor>
                                </li>
                                <li className='d-flex align-items-start'>
                                    <div className='footer-icon'>
                                        <FaFacebook size={'15px'} color='white' />
                                    </div>
                                    <Anchor style={{padding:'15px'}} size={'15px'} color={'#7c7c7c'}>
                                        Facebook
                                    </Anchor>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
        </Container>
    )
}

export default Footer
