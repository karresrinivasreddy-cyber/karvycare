import { Link } from 'react-router-dom'
import './Logo.css'

function Logo({ light = false }) {
  if (light) {
    return (
      <Link to="/" className="logo logo--light" aria-label="Karvi Care home">
        <span className="logo__badge">
          <img src="/logo-full.png" alt="Karvi Care — Your Goal, Our Motto" className="logo__full" />
        </span>
      </Link>
    )
  }

  return (
    <Link to="/" className="logo" aria-label="Karvi Care home">
      <img src="/logo-full.png" alt="Karvi Care — Your Goal, Our Motto" className="logo__full" />
    </Link>
  )
}

export default Logo
