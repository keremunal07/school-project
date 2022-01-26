import React from 'react'
import Container from '../molecules/container'
import Anchor from '../atoms/anchor'
import Paragraph from '../atoms/paragraph'
import Title from '../atoms/title'
import Image from 'next/image'
import ServicesItem from '../molecules/servicesItem'

const Services = () => {
    
    const servicesItem = [
        {
            id:1,
            title:'Organik Çiçek Balı',
            price:'80,00 TL',
            image:'/cicek-bali.jpeg',
        },
        {
            id:2,
            title:'Organik Çam Balı',
            price:'100,00 TL',
            image:'/cam-bali.jpeg',
        },
        {
            id:3,
            title:'Organik Polen',
            price:'75.00 TL',
            image:'/polen.jpeg',
        },
        {
            id:4,
            title:'Organik Kestane Balı',
            price:'200,00 TL',
            image:'/kestane-bali.jpeg',
        },
        {
            id:5,
            title:'Organik Ihlamur Balı',
            price:'160,00 TL',
            image:'/ihlamur-bali.jpeg',
        },
        {
            id:6,
            title:'Organik Kekik Balı',
            price:'100,00 TL',
            image:'/kekik-bali.jpeg',
        }
    ]
    return (
        <Container className={'text-center pt-5 services-wrapper'}>
            <div id='services' data-aos='fade-up'>
                <Title className={'m-4'} size={'36px'} weight={'bold'}>Ürünlerimiz</Title>
                <Paragraph className={'pb-4'} size={'18px'} lineHeight={'24px'}> 
                    Arılardan gelen 100% doğal ürünlerimiz
                </Paragraph>
            </div>
            <div className='row'>
                {
                    servicesItem.map((item) => {
                        return (
                            <ServicesItem
                            key={item.id}
                            className={'col-4'}
                            item={item}
                            />
                        )
                    })
                }
            </div>
        </Container>
    )
}

export default Services
