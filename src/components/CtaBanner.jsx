import { Link } from 'react-router-dom'
import './CtaBanner.css'

function CtaBanner({ title, text, ctaLabel = 'Contact Us Today', ctaTo = '/contact' }) {
  return (
    <section className="cta-banner">
      <div className="container cta-banner__inner">
        <div>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <Link to={ctaTo} className="btn btn--primary">{ctaLabel}</Link>
      </div>
    </section>
  )
}

export default CtaBanner
