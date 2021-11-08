import React, { Fragment, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet';
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Masonry from '../components/Masonry'

export const IndexPageTemplate = ({ group: tags, filterPath }) => {
  // useLayoutEffect in Masonry can't run until the JavaScript is downloaded in SSR
  // Lazily show component with useLayoutEffect: https://gist.github.com/gaearon/e7d97cdf38a2907924ea12e4ebdf3c85
  const [showChild, setShowChild] = useState(false);
  // Wait until after client-side hydration to show
  useEffect(() => {
    setShowChild(true);
  }, []);
  
  if (!showChild) {
    // You can show some kind of placeholder UI here
    return null;
  }
  return(
    <Fragment>
      <Masonry tags={tags} filterPath={filterPath} />
    </Fragment>
  )
}

IndexPageTemplate.propTypes = {
  heading: PropTypes.string,
  description: PropTypes.string,
}

const IndexPage = ({ data, location }) => {
  const { tags, site: { siteMetadata} } = data;
  const { search, pathname } = location;
  return (
    <Fragment>
      <Helmet
        // eslint-disable-next-line react/prop-types
        title={`${siteMetadata.title}`}
        meta={[
          { name: 'description', content: siteMetadata.description },
          { name: 'keywords', content: siteMetadata.keywords }
        ]}
      />
      <Layout path={pathname}>
        <IndexPageTemplate {...tags} filterPath={search} />
      </Layout>
    </Fragment>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    site {
      ...SiteMetadata
    }
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        intro {
          heading
          description
        }
      }
    }
    tags: allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
