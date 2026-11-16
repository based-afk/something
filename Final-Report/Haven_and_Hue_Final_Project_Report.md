# Haven & Hue — Complete Website & Digital Marketing Case Study
## Final Academic Project Report & Technical Documentation

---

### Project Title
**Haven & Hue: Integrated E-Commerce Storefront, Google Search Advertising Campaigns & Multi-Metric Marketing Analytics Dashboard**

- **Course:** Digital Marketing & E-Commerce Strategy (College Case Study)
- **Role:** Full-Stack Frontend Developer, UI/UX Designer & Data Visualization Engineer
- **Brand:** Haven & Hue Home Decor
- **Brand Tagline:** *"Make Your Space Feel Like Home."*
- **Primary Market:** Urban Indian D2C Home Decor (Bengaluru, Mumbai, Delhi-NCR, Pune, Hyderabad)

---

## Table of Contents
1. Executive Summary & Brand Foundation
2. Brand Identity & Visual Design System
3. Full-Stack E-Commerce Web Storefront
4. Dedicated Google Search Advertising Landing Pages
5. Google Ads Campaign Architecture & Keyword Strategy
6. Analytics Engine & Streamlit Performance Dashboard
7. 3-Day Campaign Performance Evaluation & ROAS Analysis
8. Strategic Marketing Insights & Optimization Roadmap
9. Technical Deployment Architecture & Run Instructions
10. Academic Integrity & Ethics Statement

---

## 1. Executive Summary & Brand Foundation

The objective of this comprehensive project is to design, engineer, and analytically evaluate a production-grade digital marketing apparatus for **Haven & Hue**, a fictional Indian home decor brand.

Modern direct-to-consumer (D2C) brands frequently struggle with high customer acquisition costs (CAC) due to mismatched ad messaging and generic landing page experiences. This project tackles that exact challenge by establishing an end-to-end synchronized ecosystem:
1. **An editorial, responsive e-commerce storefront** built with React, Vite, Tailwind CSS, and Lucide React.
2. **Three dedicated Google Ads landing pages** engineered to mirror the exact search intent of specific keyword clusters.
3. **Three rigorously planned Google Search campaigns** with negative keyword hygiene, tailored responsive search ad (RSA) copies, and target bidding frameworks.
4. **An interactive Python Streamlit analytics dashboard** reading from CSV datasets to monitor daily impression volume, CTR, CPC, conversion rate, and return on ad spend (ROAS).

---

## 2. Brand Identity & Visual Design System

### 2.1 Brand Positioning
Haven & Hue caters to young urban professionals (ages 20–35), homeowners, and modern renters seeking minimalist, warm contemporary interior accents at accessible prices (₹399 to ₹1,299).

### 2.2 Color Palette Specifications
| Role | Hex Code | Color Name | Application |
|---|---|---|---|
| **Background** | `#F8F5EF` | Warm Cream | Canvas, page backgrounds, light cards |
| **Primary Text** | `#493323` | Deep Espresso | Headings, primary buttons, high-contrast text |
| **Secondary Accent** | `#85866A` | Muted Olive | Category tags, subheadings, supporting elements |
| **Primary Accent** | `#B77D5C` | Warm Terracotta | Highlights, CTA buttons, active links, accents |
| **Surfaces** | `#FFFFFF` | Pure White | Elevated product cards, modals, dropdowns |
| **Borders** | `#E8E3DA` | Sandstone | Subtle dividers and card outlines |

### 2.3 Typography Reference
- **Headings & Display:** *Playfair Display* — an editorial, refined serif reflecting calm elegance and quality.
- **Body & Controls:** *Inter* — a clean, legible grotesque sans-serif ensuring effortless mobile readability.

### 2.4 Approved Brand Assets
All brand marks, icons, and hero photography are drawn directly from the provided brand guide assets:
- Official logo: `Brand-Identity/logo.png` (featured across header, hero, footer, and analytics dashboard).
- High-resolution hero image: `hero_livingroom.jpg`.
- Individual product photography: `wall_art.jpg`, `ceramic_vase.jpg`, `table_lamp.jpg`, `cushions.jpg`, `scented_candle.jpg`.
- Collection banners: `wall_art_banner.jpg`, `home_accessories_banner.jpg`, `lighting_banner.jpg`.
- Master favicon: `favicon.png` and `favicon.ico`.

---

## 3. Full-Stack E-Commerce Web Storefront

### 3.1 Technology Stack
- **Framework:** React 19 + Vite 8 (Lightning-fast build, optimized bundle size)
- **Styling:** Tailwind CSS v4 (Zero-runtime utility engine with custom brand design tokens)
- **Routing:** React Router DOM v7 (Full client-side SPA routing with Netlify rewrite rules)
- **Icons:** Lucide React (Minimalist vector icon suite)

### 3.2 Product Catalogue
The storefront features 5 signature home accents:
1. **Decorative Wall Art (₹799 | Wall Decor):** Minimalist geometric arches in terracotta and sand tones in a natural pine wood frame with 300 GSM archival paper.
2. **Ceramic Vases Duo (₹599 | Home Accessories):** Artisan unglazed textured ivory stoneware featuring a hollow donut vase and a fluted bottle.
3. **Ceramic Table Lamps (₹1,299 | Lighting):** Fluted ceramic base bedside lamp with a natural flax linen drum shade and warm 2700K ambient illumination.
4. **Decorative Cushions (₹499 | Soft Furnishings):** Textured bouclé and waffle cotton accent cushion in desert sand with hypoallergenic microfibre insert.
5. **Scented Soy Candles (₹399 | Home Accessories):** Hand-poured 100% natural soy wax candle infused with Mysore sandalwood, golden amber, and vanilla bean.

### 3.3 Core Storefront Pages
- **Homepage (`/`):** Hero headline *"Thoughtful Decor. Beautiful Living."*, category exploration cards, 5-product grid, brand introduction, and value propositions.
- **Shop Catalogue (`/shop`):** Category filter tabs, search filter, price sorting (Low to High, High to Low, Name A-Z), and product cards.
- **Reusable Product Detail View (`/product/:id`):** Large image display, detailed product specifications table (dimensions, materials, finish, care), quantity selector, and related pairing accents.
- **About Brand (`/about`):** Detailed narrative of design philosophy, accessibility commitment, and college project disclosure.
- **Contact (`/contact`):** Demonstration inquiry form with simulated feedback submission.
- **Interactive Bag & Wishlist Drawers:** LocalStorage-backed state, simulated conversion trigger, and academic demonstration modals.

---

## 4. Dedicated Google Search Advertising Landing Pages

A critical requirement of this project is providing high-converting, dedicated destination routes for paid search campaigns:

### 4.1 Campaign 1 Destination: Wall Art & Decor
- **Route:** `/collections/wall-art`
- **Headline:** *"Transform Your Walls with Timeless Decor."*
- **Target Audience:** Interior decorators and homeowners looking for ready-to-hang art.
- **Featured Spotlight:** Decorative Wall Art (₹799) with full specifications.
- **Ad Extension Congruence:** Ready-to-hang pine frames, 300 GSM archival paper, free express shipping.

### 4.2 Campaign 2 Destination: Home Accessories
- **Route:** `/collections/home-accessories`
- **Headline:** *"Thoughtful Accessories for Beautiful Homes."*
- **Target Audience:** Apartment renters and young professionals styling living room tables and shelves.
- **Featured Spotlight:** Ceramic Vases (₹599), Decorative Cushions (₹499), Scented Candles (₹399).
- **Ad Extension Congruence:** Artisan stoneware, 100% pure soy wax, tactile bouclé.

### 4.3 Campaign 3 Destination: Lighting & Ambience
- **Route:** `/collections/lighting`
- **Headline:** *"Create the Perfect Ambience for Every Room."*
- **Target Audience:** Bedroom decorators, night readers, and cozy home seekers.
- **Featured Spotlight:** Ceramic Table Lamps (₹1,299).
- **Ad Extension Congruence:** Warm 2700K diffused glow, fluted ceramic base, flax linen drum shade.

---

## 5. Google Ads Campaign Architecture & Keyword Strategy

Three search campaigns were planned and documented:

### 5.1 Campaign Architecture Summary
```text
Google Ads Account: Haven & Hue (Demonstration)
├── Campaign 1: HH_Search_WallArt_Decor_India
│   ├── Budget: ₹500/day | Bidding: Max Clicks (Cap ₹15.00)
│   ├── Landing Page: /collections/wall-art
│   └── Top Keyword: "modern wall art for living room" [Phrase]
├── Campaign 2: HH_Search_HomeAccessories_India
│   ├── Budget: ₹450/day | Bidding: Max Clicks (Cap ₹10.50)
│   ├── Landing Page: /collections/home-accessories
│   └── Top Keyword: "modern ceramic vases online india" [Phrase]
└── Campaign 3: HH_Search_Lighting_Ambience_India
    ├── Budget: ₹550/day | Bidding: Target ROAS (Target: 350%)
    ├── Landing Page: /collections/lighting
    └── Top Keyword: "ceramic bedside table lamp warm light" [Exact]
```

### 5.2 Negative Keyword Strategy
Negative keywords prevent wasteful ad spend on non-commercial search intent:
- **Universal Negatives:** `free download`, `pdf`, `wallpaper hd`, `cheap 99 rs`, `second hand`, `diy tutorial`, `olx`, `repair`, `wholesale bulk`.
- **Lighting Negatives:** `tube light`, `industrial flood light`, `solar street light`, `emergency bulb`.
- **Wall Art Negatives:** `printable sketch`, `drawing tutorial`, `canvas painting class`.

---

## 6. Analytics Engine & Streamlit Performance Dashboard

### 6.1 Architectural Design
Built as a standalone Python analytics application (`Haven-and-Hue/Analytics/Dashboard/app.py`), the dashboard reads dynamically from `google_ads_data.csv`. This decouples the analytics layer from the data generation layer, enabling real-time re-analysis when CSV files are updated.

### 6.2 Key Formula Implementations
All metrics are derived programmatically with division-by-zero exception guards:
$$\text{CTR} = \left(\frac{\text{Clicks}}{\text{Impressions}}\right) \times 100$$
$$\text{CPC} = \frac{\text{Total Spend}}{\text{Clicks}}$$
$$\text{Conversion Rate} = \left(\frac{\text{Conversions}}{\text{Clicks}}\right) \times 100$$
$$\text{ROAS} = \frac{\text{Conversion Value}}{\text{Advertising Spend}}$$

### 6.3 Dashboard Features
- **9 Executive KPI Cards:** Impressions, Clicks, CTR, Total Spend, Avg CPC, Conversions, Conv Rate, Value, ROAS.
- **Interactive Plotly Visualizations:**
  1. Daily Impressions vs. Clicks (Dual-axis chart).
  2. Daily CTR Trend across campaigns.
  3. Advertising Spend Distribution (Donut chart).
  4. Conversion Value vs. ROAS Bar & Line chart.
  5. Customer Journey Conversion Funnel.
- **Target vs. Actual Matrix:** Comparison table highlighting performance variances.
- **Strategic Insights:** Formatted takeaway briefings.

---

## 7. 3-Day Campaign Performance Evaluation & ROAS Analysis

### 7.1 Aggregate Results (3-Day Simulation)
- **Total Impressions:** 8,860
- **Total Clicks:** 445
- **Aggregate CTR:** **5.02%**
- **Total Spend:** **₹4,960.10**
- **Average CPC:** **₹11.15**
- **Total Conversions:** 28 orders
- **Conversion Rate:** **6.29%**
- **Conversion Value:** **₹25,472.00**
- **Overall ROAS:** **5.14x**

### 7.2 Campaign Breakdown
1. **Campaign 2 (Home Accessories):** Top performer in volume and efficiency. Recorded **3,810 impressions**, **193 clicks**, lowest CPC (**₹7.99**), and highest ROAS (**5.95x**).
2. **Campaign 3 (Lighting & Ambience):** Top performer in CTR (**5.18%**) and high Average Order Value (₹1,299), yielding **₹9,093.00** revenue on 116 clicks (**5.10x ROAS**).
3. **Campaign 1 (Wall Art & Decor):** Strong conversion rate (**6.62%**) with **136 clicks** yielding **₹7,191.00** (**4.40x ROAS**).

---

## 8. Strategic Marketing Insights & Optimization Roadmap

1. **Shift Budget to High-ROAS Inventory:** Reallocate 15% of budget from Wall Art to Home Accessories to maximize the lower CPC auction space.
2. **Leverage Ad Variation B:** Messaging emphasizing entry price points (₹399) drove 14% higher engagement than pure brand copy.
3. **Sitelink Extension Expansion:** Add sitelinks for "Customer Styling Guides" and "Free Delivery Thresholds" to lift Quality Scores to 9/10.

---

## 9. Technical Deployment Architecture & Run Instructions

### 9.1 React Website
```bash
# Navigate to website
cd Haven-and-Hue/Website

# Install dependencies
npm install

# Local development
npm run dev

# Production build for Netlify
npm run build
```
Netlify configuration includes `public/_redirects` and `netlify.toml` for seamless client-side SPA routing.

### 9.2 Streamlit Analytics Dashboard
```bash
# Navigate to analytics
cd Haven-and-Hue/Analytics

# Install Python requirements
pip install -r requirements.txt

# Launch dashboard
streamlit run Dashboard/app.py
```

---

## 10. Academic Integrity & Ethics Statement

This project is an **academic demonstration** created for a college Digital Marketing case study:
- All financial spend, impression counts, clicks, and conversion data are **simulated** using grounded statistical models.
- No live Google Ads campaigns were activated, no real credit cards were charged, and no real customer payments or orders were processed.
- The website and analytics dashboard are designed to showcase professional digital marketing competency, UI/UX execution, and data-driven optimization methodology.
