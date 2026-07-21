import PageHero from '../components/PageHero.jsx'
import Icon from '../components/Icon.jsx'
import CtaBanner from '../components/CtaBanner.jsx'
import { images } from '../lib/images.js'
import { services } from '../lib/services.js'
import './Services.css'

const STEPS = [
  { icon: 'compass', title: 'Have a Conversation', text: 'We start by listening — to your goals, your plan, and what independence looks like for you.' },
  { icon: 'target', title: 'Build a Support Plan', text: 'We tailor a support plan around your NDIS goals, preferences, and everyday routine.' },
  { icon: 'handshake', title: 'Deliver Ongoing Support', text: 'Our team delivers consistent, respectful support — and adjusts as your goals evolve.' },
]

function Services() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="NDIS support, tailored to your goals"
        subtitle="Every service is delivered with the same commitment to dignity, respect, and person-centred care — whether at home, in the community, or in group settings."
        image={images.serviceCommunity}
      />

      <section className="section">
        <div className="container">
          <div className="services-full">
            {services.map((service) => (
              <div key={service.title} className="service-row">
                <div className="service-row__icon">
                  <Icon name={service.icon} size={28} />
                </div>
                <div className="service-row__body">
                  <h3>{service.title}</h3>
                  <p>{service.summary}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container services-showcase">
          <div className="services-showcase__media">
            <img src={images.servicePersonalCare} alt="A Karvi Care support worker assisting an elderly participant" />
          </div>
          <div className="services-showcase__copy">
            <span className="eyebrow">Household & Personal Care</span>
            <h2>Support that respects your home, your routine, your pace.</h2>
            <p>
              Whether it's help getting ready for the day, keeping the home tidy, or preparing meals, our
              support workers step in exactly where it's useful — never more, never less than what you need.
            </p>
            <ul className="check-list">
              <li><Icon name="check" size={18} /> Personal hygiene and daily routines</li>
              <li><Icon name="check" size={18} /> Meal preparation and household tasks</li>
              <li><Icon name="check" size={18} /> Medication and appointment reminders</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">How It Works</span>
            <h2>Getting started is simple</h2>
          </div>

          <div className="steps-grid">
            {STEPS.map((step, i) => (
              <div key={step.title} className="step-card">
                <div className="step-card__num">{i + 1}</div>
                <div className="step-card__icon">
                  <Icon name={step.icon} />
                </div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Not sure which support fits your plan?"
        text="Send us your NDIS plan details and goals — we'll help you work out the right mix of supports."
      />
    </>
  )
}

export default Services
