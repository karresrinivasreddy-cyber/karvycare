import { Link } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import CtaBanner from '../components/CtaBanner.jsx'
import { images } from '../lib/images.js'
import { services } from '../lib/services.js'
import './Home.css'

const STATS = [
  { value: '8', label: 'Core NDIS support services' },
  { value: '100%', label: 'Person-centred support plans' },
  { value: 'NSW', label: 'Parramatta-based, community focused' },
]

const VALUES = [
  { icon: 'sparkles', title: 'Dignity & Respect', text: 'Every participant is treated as an individual — never just a plan or a number.' },
  { icon: 'shieldCheck', title: 'Safe & Inclusive', text: 'A supportive environment where people of all abilities feel welcome and valued.' },
  { icon: 'handshake', title: 'Trusted Relationships', text: 'We work closely with participants, families, and carers to build genuine trust.' },
  { icon: 'target', title: 'Goal-Driven Support', text: 'Support plans built around your goals, your pace, and your definition of progress.' },
]

function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero__grid">
          <div className="hero__copy">
            <span className="eyebrow">NDIS Registered Provider · Parramatta NSW</span>
            <h1>Person-centred NDIS support that puts your goals first.</h1>
            <p>
              Karvi Care is a dedicated NDIS provider committed to high-quality, person-centred support for
              people with disability. We help participants live independently, achieve their goals, and take
              part in their communities with confidence.
            </p>
            <div className="hero__actions">
              <Link to="/contact" className="btn btn--primary">Get in Touch</Link>
              <Link to="/services" className="btn btn--outline">Explore Our Services</Link>
            </div>
            <div className="hero__trust">
              <Icon name="award" />
              <span>Led by directors with 5+ years in community services</span>
            </div>
          </div>

          <div className="hero__media">
            <img src={images.homeHero} alt="A Karvi Care support worker sharing a joyful moment with a participant outdoors" />
            <div className="hero__badge">
              <Icon name="shieldCheck" />
              <div>
                <strong>NDIS Registered</strong>
                <span>Quality &amp; safeguards compliant</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="container stats__grid">
          {STATS.map((s) => (
            <div key={s.label} className="stats__item">
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container about-preview">
          <div className="about-preview__media">
            <img src={images.aboutTeam} alt="A Karvi Care support worker assisting a participant who uses a wheelchair" />
          </div>
          <div className="about-preview__copy">
            <span className="eyebrow">Who We Are</span>
            <h2>Care built on knowledge, compassion, and real commitment.</h2>
            <p>
              Our directors bring more than 5 years of experience in community services — knowledge,
              compassion, and a strong commitment to quality care. Our friendly, experienced team works
              closely with participants, families, and carers to provide personalised support that meets
              each person's individual needs and goals.
            </p>
            <p>
              At Karvi Care, we believe everyone deserves to be treated with dignity, respect, and kindness —
              in a safe, supportive, and inclusive environment where participants feel valued and empowered
              to live the life they choose.
            </p>
            <Link to="/about" className="link-arrow">Learn more about our story →</Link>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Our Services</span>
            <h2>Support designed around your everyday life</h2>
            <p>From personal care to community participation, our services flex to meet you where you are.</p>
          </div>

          <div className="service-grid">
            {services.slice(0, 6).map((service) => (
              <div key={service.title} className="service-card">
                <div className="service-card__icon">
                  <Icon name={service.icon} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.summary}</p>
              </div>
            ))}
          </div>

          <div className="service-grid__cta">
            <Link to="/services" className="btn btn--primary">View All Services</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Why Karvi Care</span>
            <h2>The values behind every support plan</h2>
          </div>

          <div className="values-grid">
            {VALUES.map((v) => (
              <div key={v.title} className="value-card">
                <div className="value-card__icon">
                  <Icon name={v.icon} />
                </div>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Ready to start your journey with Karvi Care?"
        text="Tell us about your support needs — our friendly team will respond within one business day."
      />
    </>
  )
}

export default Home
