# Deploying Karvi Care to Azure Static Web Apps + Custom Domain

This is a static React app (no server-side code), which is exactly what **Azure Static Web Apps** is built for: free SSL, a global CDN, and free-tier hosting with a generous limit. This guide walks through going from your local project to a live site at your own domain.

---

## 0. Prerequisites

- An Azure account (https://azure.microsoft.com/free — free tier is enough for this site)
- A GitHub account (Azure Static Web Apps deploys straight from a GitHub repo)
- Your domain name — either already purchased, or buy one now from a registrar (e.g. GoDaddy, Namecheap, Crazy Domains, or [domains.google](https://domains.google)). A `.com.au` domain fits an Australian NDIS provider well, but any TLD works.

---

## 1. Push the project to GitHub

```bash
cd "C:/JobSearchResources/Learnings/KarviCare-Website"
git init
git add .
git commit -m "Initial Karvi Care website"
```

Create a new **private** GitHub repository (e.g. `karvicare-website`), then:

```bash
git remote add origin https://github.com/<your-username>/karvicare-website.git
git branch -M main
git push -u origin main
```

---

## 2. Contact form (Web3Forms)

The contact form posts to https://api.web3forms.com/submit using a public access key hardcoded in `src/components/ContactForm.jsx`. The key was created for `info@karvicare.com.au` at https://web3forms.com — no account, secrets, or build configuration needed. Email delivery requires the domain's Google Workspace MX records to be present in DNS.

---

## 3. Create the Azure Static Web App

1. In the [Azure Portal](https://portal.azure.com), search **Static Web Apps** → **Create**.
2. Fill in:
   - **Resource Group**: create new, e.g. `karvicare-rg`
   - **Name**: `karvicare-website`
   - **Plan type**: **Free**
   - **Region**: closest to Australia (e.g. East Asia) for the deployment API — the CDN itself is global regardless
   - **Deployment details**: source = **GitHub** → sign in → pick your `karvicare-website` repo and `main` branch
   - **Build details**:
     - Build Presets: **React**
     - App location: `/`
     - Api location: *(leave blank)*
     - Output location: `dist`
3. Click **Review + Create** → **Create**.

Azure will automatically commit a GitHub Actions workflow file (`.github/workflows/azure-static-web-apps-<random-name>.yml`) into your repo and trigger the first deployment. Within a few minutes your site will be live at a free `*.azurestaticapps.net` URL — check the **Overview** tab of the resource for the link.

---

## 4. Build secrets

None required — the Web3Forms access key is public and shipped with the client code. The auto-generated Azure workflow needs no `env:` additions.

```yaml
      - name: Build And Deploy
        id: builddeploy
        uses: Azure/static-web-apps-deploy@v1
        with:
          azure_static_web_apps_api_token: ${{ secrets.AZURE_STATIC_WEB_APPS_API_TOKEN_... }}
          repo_token: ${{ secrets.GITHUB_TOKEN }}
          action: "upload"
          app_location: "/"
          output_location: "dist"
```

3. Commit that change — it will trigger a rebuild, and the contact form will now send real emails.

---

## 5. Map your custom domain

1. In the Azure Portal, open your Static Web App → **Custom domains** → **+ Add**.
2. Choose **Custom domain on other DNS** and enter your domain — start with `www.karvicare.com.au` (subdomains are simpler to verify than the bare/apex domain).
3. Azure shows you a **CNAME** record to add. In your domain registrar's DNS settings, add:
   - Type: `CNAME`
   - Host: `www`
   - Value: *(the `xxxxx.azurestaticapps.net` hostname Azure gives you)*
4. For the **apex/root domain** (`karvicare.com.au` without `www`), most registrars don't allow a CNAME on the root. Instead:
   - If your registrar supports `ALIAS`/`ANAME` records, point the root at the same Azure hostname.
   - Otherwise, add the **TXT** validation record Azure asks for, then add an **A record** pointing to the IP address Azure provides for apex domains, or use Azure DNS (Azure can host your DNS zone directly, which handles apex domains cleanly — see [Microsoft's guide](https://learn.microsoft.com/en-us/azure/static-web-apps/custom-domain-azure-dns) if you'd like this route).
   - Simplest option: set up a redirect at your registrar from the apex domain to `www.karvicare.com.au`.
5. Back in Azure, click **Add** to validate. DNS changes can take a few minutes up to ~48 hours to propagate (usually under an hour). Azure automatically issues a free SSL certificate once validated — no extra steps needed.

---

## 6. Post-launch checklist

- [ ] Visit the live domain over `https://` and click through every page
- [ ] Submit a real test enquiry through the Contact page and confirm the email arrives
- [ ] Update Google Business Profile / any old listings to point at the new domain
- [ ] Update the Canva site (or take it down) once the new site is confirmed live, so people aren't split between two sites
- [ ] Consider adding the site to Google Search Console and submitting a sitemap once you're happy with the content
