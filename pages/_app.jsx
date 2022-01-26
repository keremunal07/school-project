import { useEffect } from 'react'
import '../styles/globals.css'
import Layout from '../components/templates/layout'
import Head from 'next/head'
import AOS from 'aos';
import 'aos/dist/aos.css';

function MyApp({ Component, pageProps }) {

  useEffect( () => {
    AOS.init({
      offset: 100,
    })
  },[])

  return (
    <>
    <Head>
      <title>Balevim - Bal Platformu</title>
          <meta
            name="description"
            content="Your Social Media Agency"
          />
          <meta 
            name="keywords"
            content=''
          />
          <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous"></link>

    </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>

  )
}

export default MyApp
