import React from 'react'
import Link from 'gatsby-link'
import './Header.css'

// Stateful component
class Header extends React.Component {
  // Setup constants and constructors
  constructor(props) {
    super(props)

    this.state = {
      hasScrolled: false
    }
  }

  // Listen to specific events
  componentDidMount() {
    window.addEventListener('scroll',
      this.handleScroll)
  }

  // Do something when those events occur
  handleScroll = (event) => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 50) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }

  render() {
    return (
      <div className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
        <div className="HeaderGroup">
          <Link to="/"><img src={require('../images/logo-designcode.svg')} width="30" /></Link>
          <Link to="/courses">Courses</Link>
          <Link to="/downloads">Downloads</Link>
          <Link to="/workshops">Workshops</Link>
          <Link to="/buy"><button>Buy</button></Link>
        </div>
      </div>
    )
  }
}
export default Header
