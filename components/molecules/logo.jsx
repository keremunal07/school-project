import React from 'react'
import Image from 'next/image'


const Logo = ({src, width, height, layout}) => {

    return (
        <Image 
        src={src}
        width={width}
        height={height}
        layout={layout}
        alt='social media agency'
        />
    )
}

Logo.defaultProps = {
    width:'80px',
    height:'26px'
}
export default Logo
