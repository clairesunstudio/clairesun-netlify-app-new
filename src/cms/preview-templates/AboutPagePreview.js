import React from 'react'
import PropTypes from 'prop-types'
import { AboutPageTemplate } from '../../templates/about-page'
import '../templates/About.scss'

const AboutPagePreview = ({ entry, getAsset, widgetFor, widgetsFor }) => {
  const info = widgetsFor('info').map((item) => ({
    icon: item.getIn(['data', 'icon']),
    href: item.getIn(['data', 'href']),
    text: item.getIn(['data', 'text'])
  }))

  const aboutEntry = entry.getIn(['data', 'about'])
  console.log(entry.getIn(['data', 'image']))
  console.log(getAsset(entry.getIn(['data', 'image'])))

  // const about = widgetsFor('about').map((item) => ({
  //   name: item.getIn(['data', 'name']),
  //   job: item.getIn(['data', 'job']),
  //   blurb: item.getIn(['data', 'blurb'])
  // }))

  return (
    <AboutPageTemplate
      title={entry.getIn(['data', 'title'])}
      content={widgetFor('body')}
      info={info}
      about={{
        name: entry.getIn(['data', 'about', 'name']),
        job: entry.getIn(['data', 'about', 'job']),
        blurb: entry.getIn(['data', 'about', 'blur'])
      }}
      description={entry.getIn(['data', 'description'])}
      image={getAsset(entry.getIn(['data', 'image']))}
    />
  )
}

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default AboutPagePreview
