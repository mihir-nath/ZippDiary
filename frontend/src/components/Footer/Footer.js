import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';

const footer = () => {
  return (
    <footer style={
      {
        width: "100%",
        position:"relative",
        buttom:0,
        display:"flex",
        justifyContent:"center"
       }
    }>
      <Container>
        <Row>
          <Col className='text-center py-3'>Made by Mihir : Copyright &copy; ZippDiary</Col>
        </Row>
      </Container>
    </footer>
  )
}

export default footer;