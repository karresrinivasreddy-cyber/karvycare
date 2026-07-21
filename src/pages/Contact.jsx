import PageHero from '../components/PageHero.jsx'
import Icon from '../components/Icon.jsx'
import ContactForm from '../components/ContactForm.jsx'
import { images } from '../lib/images.js'
import './Contact.css'

const MAP_QUERY = encodeURIComponent('Suite 2 Level 3, 1 Horwood Place, Parramatta NSW 2150')

function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="We're here to support your NDIS journey"
        subtitle="Whether you're looking for personal care, daily living support, community participation, or Supported Independent Living, our friendly team is ready to help."
        image={images.contactHero}
      />

      <section className="section">
        <div className="container contact-grid">
          <div className="contact-info">
            <span className="eyebrow">Get In Touch</span>
            <h2>Let's talk about your goals</h2>
            <p>
              Get in touch with Karvi Care today to find out how we can support you in achieving your goals
              and living more independently. We aim to respond to every enquiry within one business day.
            </p>

            <ul className="contact-info__list">
              <li>
                <Icon name="mapPin" />
                <div>
                  <strong>Address</strong>
                  <span>Suite 2, Level 3, 1 Horwood Place<br />Parramatta NSW 2150</span>
                </div>
              </li>
              <li>
                <Icon name="mail" />
                <div>
                  <strong>Email</strong>
                  <span><a href="mailto:info@karvicare.com.au">info@karvicare.com.au</a></span>
                </div>
              </li>
              <li>
                <Icon name="clock" />
                <div>
                  <strong>Office Hours</strong>
                  <span>Monday – Friday, 9:00 AM – 5:00 PM AEST</span>
                </div>
              </li>
            </ul>

            <div className="contact-map">
              <iframe
                title="Karvi Care location on Google Maps"
                src={`https://www.google.com/maps?q=${MAP_QUERY}&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="contact-form-card card">
            <h2>Send us a message</h2>
            <p>Fill in the form and a member of our team will be in touch shortly.</p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
