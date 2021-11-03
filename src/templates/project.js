import React from 'react'
import PropTypes from 'prop-types'
import rehypeReact from 'rehype-react'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import { Row, Col } from 'react-bootstrap'
import Layout from '../components/Layout'
import Pager from '../components/Pager'
import ProjectHeader from '../components/ProjectHeader'
import Content, { HTMLContent } from '../components/Content'
import Counter from "../components/Counter"
import Icon from "../components/Icon"
import LightBox from "../components/LightBox"
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import './project.scss';

const ClickableImage = (props) => {
  return (
    <div onClick={props.onClick}>
      <PreviewCompatibleImage imageInfo={props.childImageSharp} />
    </div>
  );
};

export const ProjectTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  url,
  helmet,
  allImageSharp
}) => {
  const PostContent = contentComponent || Content;
  console.log(url)
  const projectHeaderProps = {
    title,
    subtitle: description,
    url
  }
  const renderAst = new rehypeReact({
    createElement: React.createElement,
    components: {
      'counter': Counter,
      'icon': Icon,
      "lightbox": (props) => {
        const { children } = props
        const images = [];
        React.Children.forEach(children, element => {
          if (React.isValidElement(element)) {
            const match = allImageSharp.edges.find((image) => image.node.parent.relativePath === element.props.src);
            images.push({ source: match.node.parent.childImageSharp.fluid.src })
            //do something with source..
          }
        })
        return (
          <LightBox {...props} images={images} />
        )
      },
      'rehype-image': (props) => {
        const { src } = props;
        const match = allImageSharp.edges.find((image) => image.node.parent.relativePath === src);
        //console.log(match.node.parent.childImageSharp)
        return (
          <ClickableImage {...props} childImageSharp={match.node.parent} />
        )
      }
    }
  }).Compiler

  return (
    <section className="section">
      {helmet || ''}
      <ProjectHeader {...projectHeaderProps}/>
      <div className="container content">
            {
              // In admin, body (content) is a React component vs a data object containing an array of children html objects in the page.
              React.isValidElement(content) ? <PostContent content={content} /> : renderAst(content)
            }
            {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <hr />
                <ul className="taglist">
                  {tags.map(tag => (
                    <li key={tag + `tag`}>
                      <Link
                        className="filter-button btn btn-outline-primary"
                        to={`/?tag=${encodeURIComponent(tag)}`}
                      >
                        {tag}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
    </section>
  )
}

ProjectTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const Project = ({ data: { project: {id, htmlAst, frontmatter: { title, description, url, tags }}, pagers, allImageSharp } }) => {
  const pager = pagers.edges.find((pager) => pager.node.id === id);
  const pagerProps = {
    left: {
      slug: pager.previous && pager.previous.fields.slug,
      title: pager.previous && pager.previous.frontmatter.title
    },
    right: {
      slug: pager.next && pager.next.fields.slug,
      title: pager.next && pager.next.frontmatter.title
    }
  }
  return (
    <Layout>
      <ProjectTemplate
        content={htmlAst}
        contentComponent={HTMLContent}
        description={description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${title}`}</title>
            <meta
              name="description"
              content={`${description}`}
            />
          </Helmet>
        }
        tags={tags}
        title={title}
        url={url}
        allImageSharp={allImageSharp}
      />
      <section className="section">
        {
          <Pager {...pagerProps} />
        }
      </section>
    </Layout>
  )
}

Project.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default Project

export const pageQuery = graphql`
  query ProjectByID($id: String!) {
    project: markdownRemark(id: { eq: $id }) {
      id
      htmlAst
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        url
        tags
      }
    }
    pagers: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "project" } } }
    ) {
      edges {
        node {
          id
        }
        next {
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
        previous {
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
    allImageSharp {
          edges {
            node {
              parent {
                ... on File {
                  id
                  name
                  relativePath
                  childImageSharp {
                    fluid(quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
  }
`
