import React from 'react'
import Header from '../organisms/header'
import Footer from '../organisms/footer'

const Layout = ({children}) => {
    return (
        <>
            <Header />
                {children}
            <Footer />
        </>
    )
}

export default Layout
