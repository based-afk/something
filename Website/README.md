# Haven & Hue — E-Commerce Storefront

> Thoughtful Decor. Beautiful Living.

A modern, responsive e-commerce demonstration storefront and Google Search Ads landing destination for **Haven & Hue**, a fictional Indian home decor brand created for a college Digital Marketing case study.

---

## 🎨 Visual Identity & Design System

- **Background:** `#F8F5EF` (Warm Cream)
- **Primary Text:** `#493323` (Deep Espresso)
- **Secondary / Accents:** `#85866A` (Muted Olive)
- **Primary Accent:** `#B77D5C` (Warm Terracotta)
- **Surfaces / Cards:** `#FFFFFF` (Clean White)
- **Typography:**
  - Headings: *Playfair Display* (Editorial Serif)
  - Body Text: *Inter* (Clean Modern Sans)

---

## 🛍️ Product Catalogue

| Product | Price | Category | Destination Route |
|---|---|---|---|
| Decorative Wall Art | ₹799 | Wall Decor | `/collections/wall-art` |
| Ceramic Vases Duo | ₹599 | Home Accessories | `/collections/home-accessories` |
| Ceramic Table Lamps | ₹1,299 | Lighting | `/collections/lighting` |
| Decorative Cushions | ₹499 | Soft Furnishings | `/collections/home-accessories` |
| Scented Soy Candles | ₹399 | Home Accessories | `/collections/home-accessories` |

---

## 🎯 Google Search Ads Landing Pages

This storefront hosts 3 dedicated, fully responsive landing pages designed as destinations for targeted Google Ads campaigns:

1. **Campaign 1: Wall Art & Decor** (`/collections/wall-art`)
   - **Headline:** *"Transform Your Walls with Timeless Decor."*
   - Featured Product: Decorative Wall Art (₹799)
   - Ad extensions: Ready-to-hang pine frames, 300 GSM archival print, free shipping.

2. **Campaign 2: Home Accessories** (`/collections/home-accessories`)
   - **Headline:** *"Thoughtful Accessories for Beautiful Homes."*
   - Featured Products: Ceramic Vases (₹599), Cushions (₹499), Soy Candles (₹399)
   - Ad extensions: Handcrafted ceramic stoneware, pure soy wax, tactile bouclé.

3. **Campaign 3: Lighting & Ambience** (`/collections/lighting`)
   - **Headline:** *"Create the Perfect Ambience for Every Room."*
   - Featured Product: Table Lamps (₹1,299)
   - Ad extensions: Fluted ceramic base, natural flax linen drum shade, 2700K warm diffused glow.

---

## 🚀 Key Website Features

- **Full SPA Routing:** Powered by React Router DOM v7
- **Responsive Navigation:** Desktop nav + smooth mobile drawer menu
- **Interactive Catalogue:** Filter by category, search by keyword, sort by price & name
- **Reusable Product Detail Page:** Complete with specs, image gallery, quantity controls, and related products
- **Demonstration Cart & Wishlist:** Flyout drawers, local persistence, simulated conversion logging
- **SEO & Performance:** Optimized metadata, semantic HTML, robots.txt, sitemap.xml, official brand favicon
- **Netlify-Ready:** Includes `_redirects` and `netlify.toml` for seamless SPA rewrite rules

---

## 💻 Local Setup & Execution

### Prerequisites
- Node.js (v18+)
- npm (v9+)

### Installation
```bash
# Navigate to Website directory
cd Website

# Install dependencies
npm install

# Run local development server
npm run dev
```

### Production Build
```bash
npm run build
npm run preview
```

---

## 🌐 Netlify Deployment

1. **Build Command:** `npm run build`
2. **Publish Directory:** `dist`
3. SPA redirects configured in `public/_redirects` and `netlify.toml`.
