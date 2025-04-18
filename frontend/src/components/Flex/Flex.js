import React from 'react'
import { Container, Row } from 'react-bootstrap'
import "../Flex/Flex.css"

const Flex = ({title,heading,children}) => {
  return (
    <div className='flexContainer'>
        <Container>
            <Row>
                <div className='flexMain'>
                    {title && (
                        <>
                        <h1 className='title'>{title}</h1>
                        <hr/>
                        </>
                    )}
                    {heading && (
                        <>
                        <p className='heading'>{heading}</p>
                        <hr/>
                        </>
                    )}
                    {children}
                </div>
            </Row>
        </Container>

    </div>
  )
}

export default Flex