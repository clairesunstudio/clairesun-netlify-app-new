import React from 'react'
import SocialMedia from '../SocialMedia'
import { Col, Row, Container } from 'react-bootstrap'

import './index.scss'

const today = new Date();
const currentYear = today.getFullYear()

const Footer = () => {
  const socialIconStyle ={
    width:30,height:30, margin:3
  }
  const socialIconColor = "#fff"
  return (
    <footer>
      <Container>
        <Row>
          <Col sm={12} md ={6}>
            <p><strong>© {currentYear} CLAIRESUNSTUDIO </strong></p>
          </Col>
          <Col sm ={12} md={6}>
            <SocialMedia socialIconStyle={socialIconStyle} socialIconColor={socialIconColor}/>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer
