import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/organisms/header'
import Container from '../components/molecules/container'
import Anchor from '../components/atoms/anchor'
import Banner from '../components/organisms/banner'
import Achievements from '../components/organisms/achievements'
import Services from '../components/organisms/services'


export default function Home() {
  return (
    <>
      <Container width={'100%'}>
        <section className='sectionBanner'>
          <Banner  />
        </section>
        <section className='sectionAchievements'>
          <Achievements />
        </section>
        <section className='sectionServices'>
          <Services />
        </section>
      </Container>
    </>
  )
}
