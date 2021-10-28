import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import Divider from '../components/Divider'
import { Container, Row, Col, Button } from 'react-bootstrap'
import './About.scss'
import WordCloud from '../components/WordCloud'
import SectionHeader from '../components/SectionHeader'
import DonutChart from '../components/DonutChart'
import TagPill from '../components/Pill'
import { Timeline, TimelineEvent } from '../components/Timeline'
import Icon from '../components/Icon'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'


export const AboutPageTemplate = ({ title, content, contentComponent, image, about: { name, job, blurb }, info, jobs, highlights }) => {
  const PageContent = contentComponent || Content
  const svgSize ={
    svgWidth: 30,
    svgHeight: 20
  }
  return (
    <Fragment>
      <Divider />
      <Container>
        <Row>
        <Col>
          <div className="about-row">
            <div className="about-section">
              <PreviewCompatibleImage imageInfo={image} className="profile_pic" />
              <h2>{name}</h2>
              <h4>{job}</h4>
              <p>{blurb}</p>
              <Button bsStyle='tab' onClick={() => window.print()} download="Minghua's Resume">Print Resume</Button>
            </div>
            <div className="about-section">
              <ul className="info_list">
              {
                info.map((item, index) => {
                console.log(item.icon)
                  return(
                    <li>
                      <Icon name={item.icon} />
                      {
                        item.href ? (<a href={item.href}> <span>{item.text}</span></a>) : (<span> {item.text}</span>)
                      }
                    </li>
                  )
                })
              }
              </ul>
            </div>
          </div>
          <div className="about-section">
            <SectionHeader>Design Tools proficiency</SectionHeader>
            <DonutChart/>
          </div>
          <div className="about-section">
            <SectionHeader>WordCloud</SectionHeader>
            <WordCloud/>
          </div>
          <div className="about-section">
            <SectionHeader>languages</SectionHeader>
            <TagPill />
          </div>
        </Col>
        <Col>
        <SectionHeader>Education<Icon name='education' {...svgSize} /></SectionHeader>
            <Timeline>
              <TimelineEvent title="Graduate Certificate in Interactive Design"
                             sub="Dynamic Media Institute, MassArt, Boston, MA"
                             date="May 2015">
              </TimelineEvent>
              <TimelineEvent title="Interactive Environment Group"
                             sub="MIT Media Lab, Cambridge, MA"
                             date="May 2015">
              </TimelineEvent>
              <TimelineEvent title="B.S. in Applied Mathematics, B.A. in Graphic Design"
                             sub="New England College, Henniker, NH"
                             date="May 2013">
                             <ul>
                              <li> Magna Cum Laude Graduate, GPA: 3.77/4.0</li>
                              <li> Academic Achievement Award for Mathematic Program</li>
                              <li> 4-year Presidential Scholarship and Dean’s List Recipient</li>
                              <li> National College Honor Scholarship Society (Alpha Chi) Member</li>
                             </ul>
              </TimelineEvent>
            </Timeline>
        <SectionHeader>Experience<Icon name='job' {...svgSize} /></SectionHeader>
            <Timeline>
              { jobs.map((job, i) => (
                  <TimelineEvent
                    key={`job_${i}`}
                    title={job.jobTitle}
                    sub={job.workPlace}
                    date={[job.endDate, job.startDate]}>
                    {job.descriptions}
                  </TimelineEvent>
                ))
              }
            </Timeline>
        <SectionHeader>Highlights<Icon name='project' {...svgSize} /></SectionHeader>
        <Timeline>
            { highlights.map((highlight, i) => (
                  <TimelineEvent
                    key={`highlight_${i}`}
                    title={highlight.title}
                    sub={highlight.subTitle}
                    date={[highlight.endDate, highlight.startDate]}>
                    {highlight.descriptions}
                  </TimelineEvent>
                ))
            }
        </Timeline>
        <SectionHeader>volunteer<Icon name='volunteer' {...svgSize} /></SectionHeader>
        <Timeline>
          <TimelineEvent title="Bright & Beautiful (有灵且美)"
                         sub="Design Director, Facebook Admin"
                         date="April 2015">
          </TimelineEvent>
        </Timeline>
        </Col>
        </Row>
      </Container>
    </Fragment>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data
  const { title, ...rest } = post.frontmatter;
  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        { ...rest }
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String = "/about-page/") {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        about {
          name
          job
          blurb
        }
        image {
          childImageSharp {
            fluid(maxWidth: 240, quality: 64) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        info {
          icon
          href
          text
        }
        jobs {
          jobTitle
          workPlace
          descriptions
          startDate
          endDate
        }
        highlights {
          title
          subTitle
          descriptions
          startDate
          endDate
        }
      }
    }
  }
`
