import PageHero from '../components/PageHero.jsx'
import Icon from '../components/Icon.jsx'
import CtaBanner from '../components/CtaBanner.jsx'
import { images } from '../lib/images.js'
import './Mission.css'

const PRINCIPLES = [
  { icon: 'target', title: 'Person-Centred Planning', text: 'Every support plan starts with what matters to you — your goals, your routine, your pace.' },
  { icon: 'handshake', title: 'Genuine Partnership', text: 'We work alongside participants, families, and carers as one connected team.' },
  { icon: 'sparkles', title: 'Everyday Independence', text: 'Support that builds skills and confidence, not dependence.' },
  { icon: 'shieldCheck', title: 'Safety & Quality', text: 'Registered, compliant, and held to the standards the NDIS Commission expects.' },
]

function Mission() {
  return (
    <>
      <PageHero
        eyebrow="Our Mission & Vision"
        title="Why we do what we do"
        subtitle="Two simple statements guide every decision at Karvi Care — from how we plan support to how we show up for participants each day."
        image={images.missionUnity}
      />

      <section className="section">
        <div className="container mv-grid">
          <div className="mv-card mv-card--vision">
            <span className="pill">Our Vision</span>
            <h2>An inclusive community for everyone.</h2>
            <p>
              Our vision is to create an inclusive community where people with disability are empowered to
              live independently, pursue their goals, and enjoy equal opportunities with confidence and
              dignity.
            </p>
          </div>

          <div className="mv-card mv-card--mission">
            <span className="pill pill--orange">Our Mission</span>
            <h2>Caring, reliable, person-centred support.</h2>
            <p>
              At Karvi Care, our mission is to provide caring, reliable, and person-centred support that
              helps people with disability live independently, achieve their goals, and enjoy a better
              quality of life.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">How We Deliver On It</span>
            <h2>The principles behind every support plan</h2>
          </div>

          <div className="principle-grid">
            {PRINCIPLES.map((p) => (
              <div key={p.title} className="principle-card">
                <div className="principle-card__icon">
                  <Icon name={p.icon} />
                </div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="See our mission in action."
        text="Learn more about the team and story behind Karvi Care."
        ctaLabel="About Our Team"
        ctaTo="/about"
      />
    </>
  )
}

export default Mission
