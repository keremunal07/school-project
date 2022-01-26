import React from 'react'
import styled from 'styled-components'

const Paragraph = ({children, className, color, size, weight, lineHeight, style}) => {
    const ParagraphEl = styled.p`
        line-height:${lineHeight};
        color:${color};
        font-size:${size};
        font-weight:${weight};

    `
    return (
        <ParagraphEl className={className} style={style}>
            { children }
        </ParagraphEl>
    )
}

Paragraph.defaultProps = {
    color:'#32325c',
    className:null,
    size:'14px',
    weight:300,
    lineHeight:'30px',
    style:{},

}

export default Paragraph
