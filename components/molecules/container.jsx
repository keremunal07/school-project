import React from 'react'
import styled from 'styled-components'

const Container = ({ className, children, width }) => {
  const ContainerEl = styled.div`
    margin: 0 auto;
    width: ${width};
    max-width: unset;

    @media (max-width: ${width}) {
      width: 100%;
    }
  `

  return <ContainerEl className={[className]}>{children}</ContainerEl>
}

Container.defaultProps = {
  className: '',
  width: '1160px'
}

export default Container
