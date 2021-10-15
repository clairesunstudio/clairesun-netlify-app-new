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

export const AboutPageTemplate = ({ title, content, contentComponent, image, about: { name, job, blurb }, info, jobs }) => {
  const PageContent = contentComponent || Content
  const svgSize ={
    svgWidth: 30,
    svgHeight: 20
  }
  console.log(jobs)
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
                info.map((item, index) => (
                  <li>
                    <PreviewCompatibleImage imageInfo={item.icon} />
                    {
                      item.href ? (<a href={item.href}> <span>{item.text}</span></a>) : (<span> {item.text}</span>)
                    }
                  </li>
                ))
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
              <TimelineEvent title="UX Designer & Engineer"
                             sub="Digital Services, EOTSS, Commonwealth of Massachusetts
"
                             date={["Present","May 2015"]}>
                             <ul>
                              <li> UI/UX design, web front end development</li>
                              <li> Analyze and visualize data for Mass.gov social media accounts</li>
                              <li> Lead public facing marketing campaign branding and visual design</li>
                              <li> Direct and mentor design interns</li>
                             </ul>
              </TimelineEvent>
              <TimelineEvent title="Visual Designer"
                             sub="Confucius Institute, UMass Boston"
                             date={["Mar. 2014","June 2015"]}>
                             <ul>
                              <li> Design and create promotional collateral</li>
                              <li> Chinese Bridge contest event filming and post productions</li>
                             </ul>
              </TimelineEvent>
              <TimelineEvent title="Web/Graphic Designer"
                             sub="StudentUniverse, Waltham"
                             date={["May 2014","Oct 2014"]}>
                             <ul>
                              <li> Assist in the wire-framing and front-end design of company’s new website</li>
                              <li> Design website visuals and marketing collateral</li>
                              <li> Create HTML email campaigns and landing pages</li>
                             </ul>
              </TimelineEvent>
              <TimelineEvent title="Design Internship"
                             sub=" NH Division of Economic Development, Concord, NH"
                             date={["Feb. 2014","Sep. 2013"]}>
              </TimelineEvent>
            </Timeline>
        <SectionHeader>Projects<Icon name='project' {...svgSize} /></SectionHeader>
        <Timeline>
          <TimelineEvent title="The ABCs of High School Success"
                         sub="Mass.gov/SuccessABCs"
                         project="dese"
                         url="http://mass.gov/Chapter55"
                         date={["Launched","Oct. 2017"]}>
                        <p>
                        I worked closely with the Department of Education and Secondary Education on developing this interactive data story to highlight the impact of the ABCs by following a group of students from the time they entered 9th grade, to when each left or completed high school. In this project, my work includes storyboading with exisiting data, data visualization design, prototyping, website development and deployment and user testing. The site was built using React with a highly componentized front end and a light weight page load.
                        </p>
          </TimelineEvent>
          <TimelineEvent title="Redesigning Mass.gov"
                         sub="Mass.gov"
                         url="http://mass.gov/Chapter55"
                         date={["Launched","Sept. 2017"]}>
                         <ul>
                          <li> Work on design and front end development of the new Mass.gov and its design system 'Mayflower'</li>
                          <li> Research and build pilots on data visualization and search solutions</li>
                          <li> Extending the use of 'Mayflower' onto other web app and data dashboards</li>
                          <li> Vendor selection and RFR website construction</li>
                          <li> Quick wins on the classic Mass.gov homepage design and photo contest</li>
                         </ul>
          </TimelineEvent>
          <TimelineEvent title="Chapter 55"
                         sub="Mass.gov/Chapter55"
                         project="chapter55"
                         url="http://mass.gov/Chapter55"
                         date={["Launched","Dec. 2016"]}>
                        <p>
                        As the designer and developer of this interactive data story on the MA opioid epidemic, I worked from concept sketching, data visualization designing, prototyping, and iterating, into the final deployment. The code repository was also made public as the pilot project of Mass.gov’s open-source initiative. This project received the Innovation in Data Science Award at the Massachusetts Digital Government Summit 2017.
                        </p>
          </TimelineEvent>
          <TimelineEvent title="Artificial Bioluminescence"
                         project="freshmedia1"
                         sub="A sensory lighting installation exhibited at the Boston CyberArts Gallery"
                         date="April 2015">
          </TimelineEvent>
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
          descriptions
          endDate
          jobTitle
          startDate
          workPlace
        }
      }
    }
  }
`
