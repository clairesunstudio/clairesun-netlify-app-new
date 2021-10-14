import React from 'react'
import PropTypes from 'prop-types'
import { ProjectTemplate } from '../../templates/project'

const ProjectPreview = ({ entry, widgetFor }) => (
  <ProjectTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
  />
)

ProjectPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ProjectPreview
