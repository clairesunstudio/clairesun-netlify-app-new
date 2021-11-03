import React from 'react'
import PropTypes from 'prop-types'
import { AboutPageTemplate } from '../../templates/about-page'

const AboutPagePreview = ({ entry, getAsset, widgetFor, widgetsFor }) => {
  console.log(entry)
  if(entry) {
    const info = widgetsFor('info').map((item) => ({
      icon: item.getIn(['data', 'icon']),
      href: item.getIn(['data', 'href']),
      text: item.getIn(['data', 'text'])
    }))

  
    const skills = {
      toolSet: entry.getIn(['data', 'toolSet']),
      skillSet: entry.getIn(['data', 'skillSet']),
      code: entry.getIn(['data', 'code']),
      languages: entry.getIn(['data', 'languages'])
    }
  
    return (
      <AboutPageTemplate
        title={entry.getIn(['data', 'title'])}
        info={info}
        about={{
          name: entry.getIn(['data', 'about', 'name']),
          job: entry.getIn(['data', 'about', 'job']),
          blurb: entry.getIn(['data', 'about', 'blur'])
        }}
        image={getAsset(entry.getIn(['data', 'image']))}
        skills={skills}
      />
    )
  }
}

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default AboutPagePreview
