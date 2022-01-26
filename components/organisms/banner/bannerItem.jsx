import React from 'react'
const BannerItem = ({ children, src }) => {
    return (
        <div className='d-flex justify-content-between align-items-start'>
        <div data-aos='fade-right' data-aos-duration='750' className='banner-text'>
            {children}
        </div>
        <div data-aos='fade-up' data-aos-duration='750' className="banner-image pl-4">
            <img src={src} alt="social media agency" />
        </div>
    </div>
    )
}

export default BannerItem
