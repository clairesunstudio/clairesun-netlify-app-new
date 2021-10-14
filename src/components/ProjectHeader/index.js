import React from 'react'
import { Col, Button, Row, Container } from 'react-bootstrap'
import './index.scss'

const Header = ({title,subtitle, live_site}) => (
    <header className="project-header">
      <Container>
        <Row>
          <Col md={8}>
            <h1>{title}</h1>
            <hr />
            <p>{subtitle}</p>
            {
              (live_site != "") && (
                <Button className="btn-project" href={live_site}>Visit Live Site</Button>
              )
            }
          </Col>
        </Row>
      </Container>
    </header>
);

export default Header
