import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import { Nav, Navbar, Container } from 'react-bootstrap'
import './index.scss'

const brandNameData = {
  full: 'clairesunstudio',
  short: 'css'
}

const navLinks = [{
  text: 'Portfolio',
  path: '/'
},{
  text: 'Resume',
  path: '/about'
}]

const SiteHeader = ({ currentPath }) => {
  const [fixedTop, setFixedTop] = useState(false);
  const [brandName, setBrandName] = useState(brandNameData.full);

  const handleScroll = () => {
    if (window.pageYOffset >=  30) {
      setFixedTop(true);
      setBrandName(brandNameData.short);
    } else {
      setFixedTop(false);
      setBrandName(brandNameData.full);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  })

  const activeClass = ({path, currentPath}) => path === currentPath ? 'active' : null; 
  return(
    <Navbar fixed={fixedTop ? 'top' : false }>
      <Container>
      <Navbar.Brand>
        <Link to="/">{brandName}</Link>
      </Navbar.Brand>
      <Nav>
        {
          navLinks.map(({ text, path }) => (
            <Link key={`navlink_${path}`} className={activeClass({path, currentPath})} to={path}><span>{text}</span></Link>
          ))
        }
      </Nav>
      </Container>
    </Navbar>
  )
}

export default SiteHeader;