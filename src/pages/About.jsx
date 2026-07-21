import PageHero from '../components/PageHero.jsx'
import Icon from '../components/Icon.jsx'
import CtaBanner from '../components/CtaBanner.jsx'
import { images } from '../lib/images.js'
import './About.css'

const FOCUS_AREAS = [
  { icon: 'heartHand', title: 'Personal Care & Daily Living', text: 'Assistance with everyday routines delivered with patience and respect.' },
  { icon: 'users', title: 'Community Participation', text: 'Helping participants get out, connect, and stay engaged with their community.' },
  { icon: 'home', title: 'Domestic Support', text: 'Practical help around the home so day-to-day life runs smoothly.' },
  { icon: 'building', title: 'Supported Independent Living', text: 'In-home support that builds skills and long-term independence.' },
]

function About() {
  return (
    <>
      <PageHero
        eyebrow="About Karvi Care"
        title="Trusted relationships. Meaningful support."
        subtitle="We're a Parramatta-based NDIS provider dedicated to compassionate, person-centred care for people with disability."
        image={images.aboutDailyLiving}
      />

      <section className="section">
        <div className="container about-lead">
          <div className="about-lead__copy">
            <span className="eyebrow">Our Story</span>
            <h2>Built on years of community-services experience.</h2>
            <p>
              At Karvi Care, we are dedicated to providing compassionate, person-centred NDIS support that
              helps people with disability live independently and achieve their goals. We believe every
              individual deserves to be treated with dignity, respect, and care.
            </p>
            <p>
              Our experienced team works closely with participants, families, and carers to deliver tailored
              support that meets each person's unique needs and aspirations. From personal care and daily
              living assistance to community participation, domestic support, and Supported Independent
              Living (SIL), we are committed to making a positive difference in the lives of those we
              support.
            </p>
            <p>
              At Karvi Care, our focus is on building trusted relationships, promoting independence, and
              empowering participants to live fulfilling and meaningful lives.
            </p>
          </div>
          <div className="about-lead__media">
            <img src={images.aboutTeam} alt="A Karvi Care support worker and participant sharing a supportive moment" />
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">What We Focus On</span>
            <h2>Support that meets you where you are</h2>
          </div>

          <div className="focus-grid">
            {FOCUS_AREAS.map((f) => (
              <div key={f.title} className="focus-card">
                <div className="focus-card__icon">
                  <Icon name={f.icon} />
                </div>
                <div>
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container leadership">
          <span className="eyebrow">Our Leadership</span>
          <h2>Directors with more than 5 years in community services</h2>
          <p>
            Our directors bring more than five years of hands-on experience across community and disability
            services, bringing deep knowledge, compassion, and an unwavering commitment to quality care.
            That experience shapes everything from how we recruit support workers to how we design each
            participant's individual support plan.
          </p>
        </div>
      </section>

      <CtaBanner
        title="Curious how we could support you or a loved one?"
        text="Our team is ready to talk through your goals and support needs — no obligation."
      />
    </>
  )
}

export default About
