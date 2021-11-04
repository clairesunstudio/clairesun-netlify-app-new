import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

const PreviewCompatibleImage = ({ imageInfo, aspectRatio, ...rest }) => {
  const { alt = '', childImageSharp, image, extension, publicURL } = imageInfo

  if (!!image && !!image.childImageSharp) {
    return (
      <Img fluid={image.childImageSharp.fluid} alt={alt} {...rest} />
    )
  }

  if (!!childImageSharp) {
    const fluid = {
      ...childImageSharp.fluid
    }
    if (aspectRatio) {
      fluid.aspectRatio = aspectRatio;
    }
    return <Img fluid={{ ...fluid }} alt={alt} {...rest} />
  }

  if (!!image && typeof image === 'string')
    return <img src={image} alt={alt} {...rest} />

  // svg or gif don't get processed by gatsby image, render them directly
  if (!childImageSharp && (extension === 'svg' || extension === 'gif')) {
    return <img src={publicURL} alt={alt} />
  }

  return null
}

PreviewCompatibleImage.propTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    style: PropTypes.object,
  }).isRequired,
}

export default PreviewCompatibleImage
