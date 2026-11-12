# DELIVERYLINK LLC — Company Website

React + Vite + Tailwind CSS static website. Contact is WhatsApp and email only; there is no backend and no secrets.

## Local Development

```bash
npm install
npm run dev
```

## Deploy to Cloudflare Pages

### 1. Create GitHub Repository

```bash
cd deliverylink-website
git init
git add .
git commit -m "Initial commit — DELIVERYLINK website"
gh repo create deliverylink-website --private --source=. --push
```

### 2. Connect Cloudflare Pages

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com) → **Workers & Pages** → **Create**
2. Select **Pages** → **Connect to Git**
3. Authorize GitHub and select the `deliverylink-website` repository
4. Configure build settings:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Node.js version:** 18 (or latest LTS)
5. Click **Save and Deploy**

### 3. Environment variables

None are needed. Do not add API keys or `VITE_*` secrets: anything prefixed `VITE_` is embedded in the public bundle.

### 4. Custom Domain (deliverylinktech.com)

1. Go to project → **Custom domains** → **Set up a custom domain**
2. Enter `deliverylinktech.com`
3. Follow DNS instructions (add CNAME record pointing to your Pages project)
4. Also add `www.deliverylinktech.com` as a redirect

## Tech Stack

- **React 18** + **Vite 4**
- **Tailwind CSS 3** for styling
- **Lucide React** for icons
- **Cloudflare Pages** for hosting
