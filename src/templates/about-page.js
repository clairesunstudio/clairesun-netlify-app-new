import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Container, Row, Col, Button } from 'react-bootstrap'
import './About.scss'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import Divider from '../components/Divider'
import WordCloud from '../components/WordCloud'
import SectionHeader from '../components/SectionHeader'
import DonutChart from '../components/DonutChart'
import Pills from '../components/Pills'
import { Timeline, TimelineEvent } from '../components/Timeline'
import Icon from '../components/Icon'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const svgSize ={
  svgWidth: 30,
  svgHeight: 20
}

export const AboutPageTemplate = ({ image, about: { name, job, blurb }, info, education, jobs, highlights, volunteer, skills: { code, languages, skillSet, toolSet } }) => {
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
            <SectionHeader>Design Tools Proficiency</SectionHeader>
            <DonutChart data={toolSet} />
          </div>
          <div className="about-section">
            <SectionHeader>Skill Set Cloud</SectionHeader>
            <WordCloud data={skillSet}/>

          </div>
          <div className="about-section">
            <SectionHeader>Languages and Frameworks</SectionHeader>
            <Pills data={code} />
            <hr />
            <Pills data={languages} />
          </div>
        </Col>
        <Col>
        <SectionHeader>Education<Icon name='education' {...svgSize} /></SectionHeader>
            <Timeline>
              { education.map((ed, i) => (
                    <TimelineEvent
                      key={`ed_${i}`}
                      title={ed.title}
                      sub={ed.subTitle}
                      date={[ed.endDate, ed.startDate]}>
                      {ed.descriptions}
                    </TimelineEvent>
                  ))
                }
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
            { volunteer.map((item, i) => (
                    <TimelineEvent
                      key={`item_${i}`}
                      title={item.title}
                      sub={item.subTitle}
                      date={[item.endDate, item.startDate]}>
                      {item.descriptions}
                    </TimelineEvent>
                  ))
            }
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

const AboutPage = ({ data, location: { pathname } }) => {
  const { markdownRemark: post } = data
  const { title, ...rest } = post.frontmatter;
  return (
    <Layout path={pathname} >
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
        skills {
          code
          languages
          skillSet {
            name
            value
          }
          toolSet {
            name
            value
            size
          }
        }
        education {
          title
          startDate
          subTitle
          endDate
          descriptions
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
        volunteer {
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
