import React, { useState, useEffect } from 'react'
import { useTransition, a } from 'react-spring'
import { Button, Container } from 'react-bootstrap'
import classNames from 'classnames'
import useMeasure from './useMeasure'
import useMedia from './useMedia'
import { graphql, StaticQuery } from 'gatsby'
import ProjectCard, { cardWidth, cardPadding } from '../ProjectCard'
// import data from './data'
import './index.scss'


const Masonry = ({ data, tags, filterPath }) => {
  const { edges: projects } = data.allMarkdownRemark
  // Hook1: Tie media queries to the number of columns
  const columns = useMedia([
    `(min-width: ${(cardWidth + cardPadding * 2) * 5}px)`,
    `(min-width: ${(cardWidth + cardPadding * 2) * 4}px)`,
    `(min-width: ${(cardWidth + cardPadding * 2) * 3}px)`,
    `(min-width: ${(cardWidth + cardPadding * 2) * 2}px)`],
    [5, 4, 3, 2], 1
  )
  // Hook2: Measure the width of the container element
  // const [bind, { width }] = useMeasure()
  const target = React.useRef()
  console.log(target)
  const size = useMeasure(target)
  const width = size ? size.width : 0;
  console.log(width)
  // Hook3: Hold items
  const [items, setItems] = useState(projects)
  const [filter, setFilter] = useState('all')
  const filterButtonClasses = (value) => classNames({
    'filter-button': true ,
    'active': filter === value
  });
  const setItemsByTag = (tag) => {
    const filterdItems = projects.filter((project) => {
      const { tags } = project.node.frontmatter;
      return tags && tags.includes(tag)
    })
    setItems(filterdItems);
    setFilter(tag)
  }
  useEffect(() => {
    const regexp = /\?tag=(.*)/;
    const hasTag = decodeURIComponent(filterPath).match(regexp);
    const tag = hasTag && hasTag[1];
    const isTagValid = tags.find((item) => item.fieldValue === tag)
    if (isTagValid) {
      setItemsByTag(tag)
    }
  }, [])
  // Hook4: shuffle data every 2 seconds
  // useEffect(() => void setInterval(() => set(shuffle), 2000), [])
  // Form a grid of stacked items using width & columns we got from hooks 1 & 2
  let heights = new Array(columns).fill(0) // Each column gets a height starting with zero
  let gridItems = items.map(({ node: item }) => {
    const column = heights.indexOf(Math.min(...heights)) // Basic masonry-grid placing, puts tile into the smallest column using Math.min
    const columnWidth = width / columns;
    const rowHeight = 400;
    const xy = [columnWidth * column, (heights[column] += rowHeight) - rowHeight] // X = container width / number of columns * column index, Y = it's just the height of the current column
    return { ...item, xy, width: columnWidth, height: rowHeight  }
  })

  const FilterList = tags.map((tag,i) => {
    if (tag) {
      const value = tag.fieldValue;
      return (
        <Button
          variant="outline-primary"
          className={filterButtonClasses(value)}
          value={value}
          key={i}
          onClick={() => setItemsByTag(value)}
        >
          {tag.fieldValue}
        </Button>
      )
    }
  })

  // Hook5: Turn the static grid values into animated transitions, any addition, removal or change will be animated
  const transitions = useTransition(gridItems, item => item.id, {
    from: ({ xy, width, height }) => ({ xy, width, height, opacity: 0 }),
    enter: ({ xy, width, height }) => ({ xy, width, height, opacity: 1 }),
    update: ({ xy, width, height }) => ({ xy, width, height }),
    leave: { height: 0, opacity: 0 },
    config: { mass: 5, tension: 500, friction: 100 },
    trail: 25
  })
  // Render the grid
  return (
    <React.Fragment>
    <Container>
      <div className="filters">
        <Button
          variant="outline-primary"
          className={filterButtonClasses('all')}
          value={'all'}
          onClick={() => {
            setItems(projects)
            setFilter('all')
            }
          }
        >
          All
        </Button>
        {FilterList}
      </div>
    </Container>
    <div ref={target} className="masonry" style={{ height: Math.max(...heights) }}>
      {transitions.map(({ item, props: { xy, ...rest }, key }) => {
        return(<a.div key={key} style={{ transform: xy.interpolate((x, y) => `translate3d(${x}px,${y}px,0)`), ...rest }}>
          <ProjectCard title={item.frontmatter.title} text={item.frontmatter.description} image={item.frontmatter.image} link={item.fields.slug}/>

        </a.div>)
      })}
    </div>
    </React.Fragment>
  )
}

export default ({ tags, filterPath }) => (
  <StaticQuery
    query={graphql`
      query ProjectRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "project" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 200)
              id
              fields {
                slug
              }
              frontmatter {
                tags
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                description
                image {
                  childImageSharp {
                    fluid(maxWidth: 240, quality: 64) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <Masonry data={data} tags={tags} filterPath={filterPath} />}
  />
)
