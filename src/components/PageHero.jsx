import './PageHero.css'

function PageHero({ eyebrow, title, subtitle, image }) {
  return (
    <section className="page-hero" style={image ? { '--hero-image': `url(${image})` } : undefined}>
      <div className="page-hero__overlay" />
      <div className="container page-hero__content">
        {eyebrow && <span className="eyebrow eyebrow--light">{eyebrow}</span>}
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </section>
  )
}

export default PageHero
