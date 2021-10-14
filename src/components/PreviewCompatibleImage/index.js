import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

const PreviewCompatibleImage = ({ imageInfo, ...rest }) => {
  const { alt = '', childImageSharp, image, extension, publicURL } = imageInfo

  if (!!image && !!image.childImageSharp) {
    return (
      <Img fluid={image.childImageSharp.fluid} alt={alt} {...rest} />
    )
  }

  if (!!childImageSharp) {
    return <Img fluid={{ ...childImageSharp.fluid, aspectRatio: 1.67 }} alt={alt} {...rest} />
  }

  if (!!image && typeof image === 'string')
    return <img src={image} alt={alt} {...rest} />

  if (!childImageSharp && extension === 'svg') {
    return <img src={publicURL} alt={alt} />
  }

  return null
}

PreviewCompatibleImage.propTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    style: PropTypes.object,
  }).isRequired,
}

export default PreviewCompatibleImage
