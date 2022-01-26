import React from 'react'
import Link from 'next/link'

const Anchor = ({ children, to, color, weight, size, style, className}) => {
    return (
            <Link href={`${to}`}>
                <a 
                href={`${to}`}
                style={{color:`${color}`,fontSize:`${size}`,fontWeight:`${weight}`,textDecoration:'none'}}
                className={className}
                >
                    {children}
                </a>
            </Link>
    )
}

Anchor.defaultProps= {
    to:'/',
    color:'#32325c',
    weight:'500',
    size:'16px',
    style:{},
    className:'',
}

export default Anchor
