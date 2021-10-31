import React from 'react'
import { Link } from 'gatsby'
import { Nav, Navbar, Container } from 'react-bootstrap'
import './index.scss'

const brandName = {
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

class SiteHeader extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        fixedTop: false,
        brandName: brandName.full,
        connect: 'collapsed'
      };
      this.handleScroll = this.handleScroll.bind(this);
    }

      handleScroll() {
      if (window.pageYOffset >=  30) {
        this.setState({
          fixedTop: true,
          brandName: brandName.short
        });
      } else {
        this.setState({
          fixedTop: false,
          brandName: brandName.full
        });
      }
    }

    componentDidMount() {
      window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
      window.removeEventListener("scroll", this.handleScroll);
    }
    onConnectClick(){
      this.state.connect == 'collapsed'? this.setState({connect: 'expanded'}): this.setState({connect: 'collapsed'})
    }

  render(){
    const {fixedTop, brandName, connect} = this.state;
    const activeClass = ({path, currentPath}) => path === currentPath ? 'active' : null; 
    return(
      <Navbar className={connect} fixed={fixedTop ? 'top' : false }>
        <Container>
        <Navbar.Brand>
          <Link to="/">{brandName}</Link>
        </Navbar.Brand>
        <Nav pullRight>
          {
            navLinks.map(({ text, path }) => (
              <Link className={activeClass({path, currentPath: '/'})} to={path}><span>{text}</span></Link>
            ))
          }
        </Nav>
        </Container>
      </Navbar>
    )
  }

}

export default SiteHeader
