import React from 'react'
import styled from 'styled-components'

const Title = ({children, className, color, size, weight, lineHeight, letterSpacing, style}) => {
    const TitleEl = styled.div`
        line-height:${lineHeight};
        color: ${color};
        font-size:${size};
        font-weight:${weight};
        letter-spacing:${letterSpacing}
    `
    return (
        <TitleEl style={style} className={className} >
            {children}
        </TitleEl>
    )
}

Title.defaultProps = {
    lineHeight:'1em',
    color:'#32325c',
    size:'18px',
    weight:400,
    letterSpacing:''

}

export default Title
