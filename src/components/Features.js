import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Container } from 'react-bootstrap'
import ProjectCard from './ProjectCard'

const FeatureGrid = ({ gridItems }) => (
  <Row noGutters>
    {gridItems.map(item => (
      <Col>
        <ProjectCard image={item} text={item.text} buttonText="Learn More"/>
      </Col>
    ))}
  </Row>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
}

export default FeatureGrid
