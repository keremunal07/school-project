import React from 'react'
import Container from '../molecules/container'
import Title from '../atoms/title'
import Paragraph from '../atoms/paragraph'
import BannerItem from './banner/bannerItem'
import Button from '../atoms/button'
import { Navigation, EffectFade, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import "swiper/css/effect-fade"
import 'swiper/css/navigation'
import 'swiper/css/autoplay'



const Banner = () => {
    const settings_swiper = {
        observeParents: true, 
        observer: true,
        autoplay:{
              delay: 2500,
              disableOnInteraction: false
            },
        effect:'fade',
  
        fadeEffect:{
           crossFade: true
           },
                
        navigation:false,
    }
    return (
            <Swiper
            modules={[Navigation, EffectFade, Autoplay]}
            {...settings_swiper}
            className='mySwiper' >
                    <SwiperSlide>
                        <Container>
                            <BannerItem src={'/slider-1.png'}>
                                <Title color={'#32325c'} size={'3.5rem'} weight={600} letterSpacing={'-,03rem'} >
                                    Ürünlerimizi daha önce denediniz mi?
                                </Title>
                                <Paragraph className={'mb-5 mt-4'} size={'1.30rem'} weight={400} lineHeight={'30px'} >
                                Uzun yıllara dayanan deneyimimiz ile arılardan gelen saf lezzetleri sofralarınızla buluşturuyoruz. Balevim ürünleri ile doğallığın tadını keşfedin.
                                </Paragraph>
                                <Button
                                href={'#services'}
                                className={'btn-middle'}
                                color={'white'} 
                                size={'20px'}>
                                    Ürünlerimize Göz Atın!
                                </Button>
                            </BannerItem>
                        </Container>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Container>
                            <BannerItem src={'/slider-2.png'}>
                                    <Title color={'#32325c'} size={'3rem'} weight={600}>
                                        Balevim Arı Ürünlerimizi Keşfedin!
                                    </Title>
                                    <Paragraph className={'mb-5 mt-4'} size={'1.30rem'} weight={400} lineHeight={'30px'} >
                                    Doğanın en çalışkan yardımcıları olan arıların ürettiği birbirinden değerli besinler, lezzetli ve pratik tüketim imkanı ile bir arada!
                                    </Paragraph>
                                    <Button className={'btn-middle'} color={'white'} size={'20px'}>
                                        Ürünlerimize Göz Atın!
                                    </Button>
                                </BannerItem>
                        </Container>
                    </SwiperSlide>
                </Swiper>
    )
}

export default Banner
