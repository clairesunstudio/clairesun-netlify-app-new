import React from 'react'
import { Link } from 'gatsby'
import { Nav, Navbar, Container } from 'react-bootstrap'
import './index.scss'

class SiteHeader extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        fixedTop: false,
        brandName: 'clairesunstudio',
        connect: 'collapsed'
      };
      this.handleScroll = this.handleScroll.bind(this);
    }

      handleScroll() {
      if (window.pageYOffset >=  30) {
        this.setState({
          fixedTop: true,
          brandName: 'css'
        });
      } else {
        this.setState({
          fixedTop: false,
          brandName: 'clairesunstudio'
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
    const {fixedTop, brandName, connect} = this.state
    const socialIconStyle ={
      width:30,
      height:30,
      margin:3
    }
    const socialIconColor = "#263238"
    return(
      <Navbar className={connect} fixed={fixedTop ? 'top' : false }>
        <Container>
        <Navbar.Brand>
          <Link to="/">{brandName}</Link>
        </Navbar.Brand>
        <Nav pullRight>
          <Link to="/"><span>Portfolio</span></Link>
          <Link to="/about"><span>Resume</span></Link>
        </Nav>
        </Container>
      </Navbar>
    )
  }

}

export default SiteHeader
