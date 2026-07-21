import { Link } from 'react-router-dom'
import Logo from './Logo.jsx'
import './Footer.css'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div className="site-footer__brand">
          <Logo light />
          <p>
            A Parramatta-based, person-centred NDIS provider helping participants live independently,
            achieve their goals, and take part in their communities with confidence.
          </p>
          <span className="pill">NDIS Registered Provider</span>
        </div>

        <div className="site-footer__col">
          <h4>Explore</h4>
          <ul>
            <li><Link to="/our-mission">Our Mission</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Our Services</Link></li>
            <li><Link to="/testimonials">Testimonials</Link></li>
          </ul>
        </div>

        <div className="site-footer__col">
          <h4>Contact</h4>
          <ul>
            <li>Suite 2, Level 3, 1 Horwood Place<br />Parramatta NSW 2150</li>
            <li><a href="mailto:info@karvicare.com.au">info@karvicare.com.au</a></li>
          </ul>
        </div>
      </div>

      <div className="site-footer__bottom container">
        <span>© {year} Karvi Care. All rights reserved.</span>
        <span className="site-footer__handle">@Karvicare</span>
      </div>
    </footer>
  )
}

export default Footer
