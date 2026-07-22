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

## Contact Form

The contact form uses [Web3Forms](https://web3forms.com) (free, 250 submissions/month) so it can send email without a backend server. Submissions are delivered to `info@karvicare.com.au`.

The public access key is hardcoded in `src/components/ContactForm.jsx` — Web3Forms access keys are designed to be exposed in client-side code. No env vars or build secrets are required. To change the destination inbox, create a new access key for the new address at web3forms.com and swap it in.

## Editing Content

- **Text content** — edit directly inside each file in `src/pages/`.
- **Services list** — `src/lib/services.js`.
- **Images** — `src/lib/images.js`. Currently uses free-license Unsplash stock photography as placeholders; swap in real Karvi Care team/participant photos when available (see notes in that file).
- **Brand colors/fonts** — CSS variables at the top of `src/index.css`.

## Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for the full step-by-step guide to deploying on Azure Static Web Apps and mapping your custom domain.
