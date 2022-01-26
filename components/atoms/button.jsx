import React from 'react'
import styled from 'styled-components'
import Paragraph from './paragraph'

const Button = ({children, className, buttonColor, color, size, weight  }) => {
    const Button = styled.button`
    background: ${buttonColor};
    border:0;
    border-radius:0.3125rem;
    
    `
    return (
        <Button className={className}>
             <Paragraph className={'m-0'} size={size} color={color} weight={weight} >
                {children}
             </Paragraph>
        </Button>
    )
}
Button.defaultProps = {
    buttonColor: 'linear-gradient(135deg, rgb(255, 136, 0), rgb(171, 88, 2) 75%);',
    color:'white',
    size:'18px',
    weight:600,
    className:''
    
}

export default Button
