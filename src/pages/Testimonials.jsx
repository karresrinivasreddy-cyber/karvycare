import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import Icon from '../components/Icon.jsx'
import CtaBanner from '../components/CtaBanner.jsx'
import { images } from '../lib/images.js'
import './Testimonials.css'

const TRUST_POINTS = [
  { icon: 'shieldCheck', title: 'NDIS Registered Provider', text: 'Verified against the NDIS Commission\'s quality and safeguarding standards.' },
  { icon: 'award', title: '5+ Years of Experience', text: 'Our directors bring hands-on community services experience.' },
  { icon: 'sparkles', title: 'Person-Centred, Always', text: 'Support plans are built around individual goals — not a one-size-fits-all model.' },
]

function Testimonials() {
  return (
    <>
      <PageHero
        eyebrow="Testimonials"
        title="Client stories, coming soon"
        subtitle="We're gathering feedback from the participants and families we support. In the meantime, here's why families across NSW trust NDIS providers like Karvi Care."
        image={images.trustCircle}
      />

      <section className="section">
        <div className="container">
          <div className="testimonial-notice card">
            <Icon name="sparkles" size={30} />
            <div>
              <h2>We're collecting real client stories</h2>
              <p>
                Karvi Care is a growing provider, and we'd rather show you genuine feedback than invent
                quotes. If you're a current participant, family member, or carer and would like to share
                your experience, we'd love to feature it here — <Link to="/contact">get in touch</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Why Families Choose an NDIS Provider Like Karvi Care</span>
            <h2>What matters most when choosing disability support</h2>
            <p>
              As of May 2026, over 774,000 Australians are benefiting from the NDIS. Choosing the right
              provider comes down to a few consistent factors families tell us matter most.
            </p>
          </div>

          <div className="trust-grid">
            {TRUST_POINTS.map((t) => (
              <div key={t.title} className="trust-card">
                <div className="trust-card__icon">
                  <Icon name={t.icon} />
                </div>
                <h3>{t.title}</h3>
                <p>{t.text}</p>
              </div>
            ))}
          </div>

          <p className="testimonial-source">
            Source: NDIS participant figures, National Disability Insurance Agency (May 2026).
          </p>
        </div>
      </section>

      <CtaBanner
        title="Been supported by Karvi Care?"
        text="We'd be grateful to hear about your experience — and to feature it here for other families."
        ctaLabel="Share Your Story"
      />
    </>
  )
}

export default Testimonials
