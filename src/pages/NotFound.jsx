import { Link } from 'react-router-dom'
import './NotFound.css'

function NotFound() {
  return (
    <section className="not-found">
      <div className="container">
        <span className="eyebrow">404</span>
        <h1>Page not found</h1>
        <p>The page you're looking for doesn't exist or may have moved.</p>
        <Link to="/" className="btn btn--primary">Back to Home</Link>
      </div>
    </section>
  )
}

export default NotFound
