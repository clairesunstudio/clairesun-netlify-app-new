import React from 'react'
import { Col, Button, Row, Container } from 'react-bootstrap'
import './index.scss'

const Header = ({title, subtitle, url}) => (
    <header className="project-header">
      <Container>
        <Row>
          <Col md={8}>
            <h1>{title}</h1>
            <hr />
            <p>{subtitle}</p>
            {
              url && (
                <a className="btn btn-primary btn-project" href={live_site}>Visit Live Site</a>
              )
            }
          </Col>
        </Row>
      </Container>
    </header>
);

export default Header
