# Karvi Care Website

A modern, professional website for **Karvi Care**, an NDIS (disability support) provider based in Parramatta, NSW. Rebuilt from the original Canva presentation-style site into a fast, responsive, accessible React application with a real working contact form.

## Tech Stack

- **React 19 + Vite** — static single-page app, no server required
- **React Router** — client-side routing (Home, Our Mission, About Us, Our Services, Testimonials, Contact)
- **EmailJS** — sends contact form submissions straight to an inbox with no backend server
- Plain CSS with a shared design-system (`src/index.css`) — no framework lock-in

## Project Structure

```
src/
  components/   Header, Footer, PageHero, ContactForm, Icon, CtaBanner, Logo
  pages/        Home, Mission, About, Services, Testimonials, Contact, NotFound
  lib/          images.js (stock photo URLs), services.js (service list content)
  index.css     Design tokens (colors, fonts, spacing) + shared utility classes
staticwebapp.config.json   Azure Static Web Apps SPA routing config
```

## Running Locally

```bash
npm install
npm run dev
```

Visit http://localhost:5173

## Building for Production

```bash
npm run build   # outputs to dist/
npm run preview # preview the production build locally
```

## Contact Form Setup (required before the form will actually send email)

The contact form uses [EmailJS](https://www.emailjs.com) so it can send email without a backend server. Until it's configured, the form still validates and displays a friendly "not set up yet" message instead of failing silently.

1. Create a free EmailJS account and an Email Service (e.g. connect your Gmail/Outlook).
2. Create an Email Template with these variables: `from_name`, `reply_to`, `phone`, `enquiry_type`, `message`, `to_email`.
3. Copy `.env.example` to `.env.local` and fill in:
   ```
   VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
   VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
   VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxx
   VITE_CONTACT_EMAIL=info@karvicare.com.au
   ```
4. Restart `npm run dev` — the form will now send real emails.

**Important:** these are Vite build-time variables, so when deploying they must be set as build secrets (see [DEPLOYMENT.md](./DEPLOYMENT.md)), not just as Azure runtime app settings.

## Editing Content

- **Text content** — edit directly inside each file in `src/pages/`.
- **Services list** — `src/lib/services.js`.
- **Images** — `src/lib/images.js`. Currently uses free-license Unsplash stock photography as placeholders; swap in real Karvi Care team/participant photos when available (see notes in that file).
- **Brand colors/fonts** — CSS variables at the top of `src/index.css`.

## Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for the full step-by-step guide to deploying on Azure Static Web Apps and mapping your custom domain.
