import React from 'react'
import Title from '../atoms/title'
import Paragraph from '../atoms/paragraph'
import Button from '../atoms/button'

const ServicesItem = ({className, item}) => {
    return (
        <div data-aos='fade-up' className={ className }>
            <div className="service-item text-center align-items-center m-3 p-4">
                    <div className="image">
                        <img src={`${item.image}`} width={'150px'} height={'150px '} alt='balevim' />
                    </div>
                    <Title className={'m-2'} size={'20px'} weight={'bold'}>
                        {item.title}
                    </Title>
                    <Paragraph color={'#546182'} lineHeight={'25px'} size={'15px'} weight={'400'}> 
                        {item.paragraph}
                    </Paragraph>
                    <div className='price'>
                        {item.price}
                    </div>
                    <div className='submit-button'>
                        <Button weight={500} >
                            <Title size={'15px'} color={'white'} className={'m-2'}>Sipariş Ver</Title>
                        </Button>
                    </div>
                </div>
        </div>
    )
}

export default ServicesItem
