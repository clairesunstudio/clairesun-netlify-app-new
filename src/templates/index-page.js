import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet';
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Masonry from '../components/Masonry'

export const IndexPageTemplate = ({ group: tags, filterPath }) => (
  <Fragment>
    <Masonry tags={tags} filterPath={filterPath} />
  </Fragment>
)

IndexPageTemplate.propTypes = {
  heading: PropTypes.string,
  description: PropTypes.string,
}

const IndexPage = ({ data, location }) => {
  const { tags, site: { siteMetadata} } = data;
  const { search } = location;
  console.log(location)
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
      <Layout>
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
