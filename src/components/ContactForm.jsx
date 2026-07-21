import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import Icon from './Icon.jsx'
import './ContactForm.css'

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL || 'info@karvicare.com.au'

const isConfigured = Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY)

const ENQUIRY_TYPES = [
  'General Enquiry',
  'New Referral / Start Support',
  'Personal Care & Daily Living',
  'Community Participation',
  'Supported Independent Living (SIL)',
  'Careers',
]

function ContactForm() {
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Honeypot: bots fill hidden fields, real users never see this input.
    if (formRef.current.website.value) {
      return
    }

    if (!isConfigured) {
      setStatus('error')
      setErrorMsg(
        'The contact form is not fully set up yet. Please email us directly while we finish configuration.'
      )
      return
    }

    setStatus('sending')
    setErrorMsg('')

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, { publicKey: PUBLIC_KEY })
      setStatus('success')
      formRef.current.reset()
    } catch {
      setStatus('error')
      setErrorMsg('Something went wrong sending your message. Please try again, or email us directly.')
    }
  }

  if (status === 'success') {
    return (
      <div className="contact-form__success">
        <Icon name="check" size={32} />
        <h3>Thanks — your message is on its way!</h3>
        <p>Our team will get back to you within one business day. For anything urgent, call or email us directly.</p>
        <button type="button" className="btn btn--outline" onClick={() => setStatus('idle')}>
          Send Another Message
        </button>
      </div>
    )
  }

  return (
    <form ref={formRef} className="contact-form" onSubmit={handleSubmit} noValidate>
      <input
        type="text"
        name="website"
        tabIndex="-1"
        autoComplete="off"
        className="contact-form__honeypot"
        aria-hidden="true"
      />

      <div className="contact-form__row">
        <div className="contact-form__field">
          <label htmlFor="from_name">Full Name *</label>
          <input id="from_name" name="from_name" type="text" required placeholder="Jane Smith" />
        </div>
        <div className="contact-form__field">
          <label htmlFor="reply_to">Email Address *</label>
          <input id="reply_to" name="reply_to" type="email" required placeholder="jane@email.com" />
        </div>
      </div>

      <div className="contact-form__row">
        <div className="contact-form__field">
          <label htmlFor="phone">Phone Number</label>
          <input id="phone" name="phone" type="tel" placeholder="04xx xxx xxx" />
        </div>
        <div className="contact-form__field">
          <label htmlFor="enquiry_type">Enquiry Type</label>
          <select id="enquiry_type" name="enquiry_type" defaultValue={ENQUIRY_TYPES[0]}>
            {ENQUIRY_TYPES.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="contact-form__field">
        <label htmlFor="message">Message *</label>
        <textarea id="message" name="message" rows={5} required placeholder="Tell us a little about your support needs or NDIS plan..." />
      </div>

      <input type="hidden" name="to_email" value={CONTACT_EMAIL} />

      {status === 'error' && <p className="contact-form__error">{errorMsg}</p>}

      <button type="submit" className="btn btn--primary contact-form__submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Send Message'}
      </button>

      <p className="contact-form__note">
        Prefer email? Reach us directly at{' '}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>
    </form>
  )
}

export default ContactForm
