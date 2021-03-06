import React from 'react'
import Link from 'gatsby-link'
import './Header.css'
import StripeCheckout from 'react-stripe-checkout'

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

  // Stripe purchase logic
  handlePurchase = (token) => {
    const amount = 5000
    const description = "Design goodies"
    const bodyObject = {
      tokenId: token.id,
      email: token.email,
      name: token.name,
      description,
      amount
    }

    fetch('http://localhost:9000/stripe-charge', {
      method: 'POST',
      body: JSON.stringify(bodyObject)
    })
  }

  render() {
    return (
      <div className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
        <div className="HeaderGroup">
          <Link to="/"><img src={require('../images/logo-designcode.svg')} width="30" /></Link>
          <Link to="/courses">Courses</Link>
          <Link to="/downloads">Downloads</Link>
          <Link to="/workshops">Workshops</Link>
          {/* Need this as it's a stateful React component */}
          <StripeCheckout
            amount={5000}
            image="https://drh2acu5z204m.cloudfront.net/items/0U2H3c3u2J3W1f140q1J/logo_iggyigner.png"
            token={this.handlePurchase}
            stripeKey={'pk_live_clFiAWkchCibKzZDoUriFtCi'}
            >
            <button>Buy</button>
          </StripeCheckout>
        </div>
      </div>
    )
  }
}
export default Header
