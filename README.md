# Haven & Hue — Digital Marketing Case Study & E-Commerce Platform

> **"Make Your Space Feel Like Home."**

Haven & Hue is a fictional Indian home decor brand created for a college **Digital Marketing Case Study**. This repository contains the complete, production-ready implementation consisting of:
1. **Full-Stack E-Commerce Website & Google Ads Landing Hub** (React, Vite, Tailwind CSS, Lucide React, React Router)
2. **Three Google Search Advertising Campaign Plans & Keyword Strategy** (Ad copy variations, negative keywords, bidding models)
3. **Interactive Marketing Analytics Dashboard** (Python, Streamlit, Pandas, Plotly)
4. **Three-Day Simulated Performance Dataset & Analytical Final Report**

---

## 📁 Repository Structure

```text
Haven-and-Hue/
│
├── Brand-Identity/
│   └── logo.png                              # Official approved master brand logo
│
├── Website/                                  # React + Vite storefront application
│   ├── public/
│   │   ├── assets/                           # Product photography, banners & favicon
│   │   ├── _redirects                        # Netlify SPA rewrite configuration
│   │   ├── robots.txt                        # SEO & Google Ads bot crawler accessibility
│   │   ├── sitemap.xml                       # XML Sitemap for all 8 storefront routes
│   │   └── favicon.ico / favicon.png         # Official Haven & Hue browser icon
│   ├── src/
│   │   ├── components/                       # Header, Footer, ProductCard, CartDrawer, etc.
│   │   ├── context/                          # ShopContext (Cart, Wishlist, State)
│   │   ├── data/                             # Product catalogue specifications (5 products)
│   │   ├── pages/                            # Home, Shop, Product Detail, 3 Ad Landings, About, Contact
│   │   ├── App.jsx                           # Route declarations
│   │   ├── index.css                         # Tailwind CSS v4 design system
│   │   └── main.jsx                          # React 19 mount point
│   ├── package.json
│   ├── vite.config.js
│   ├── netlify.toml                          # Netlify deployment configuration
│   └── README.md
│
├── Google-Ads/                               # Google Search advertising campaigns
│   ├── Keyword-Research/
│   │   └── keywords.csv                      # Keyword intent, match types, planning CPCs
│   ├── Campaigns/
│   │   ├── Campaign-1/campaign_plan.md       # Wall Art & Decor search campaign plan
│   │   ├── Campaign-2/campaign_plan.md       # Home Accessories search campaign plan
│   │   └── Campaign-3/campaign_plan.md       # Lighting & Ambience search campaign plan
│   ├── Ad-Copies/
│   │   └── ad_variations.md                  # 6 Complete Responsive Search Ad (RSA) variations
│   └── Screenshots/
│       └── checklist.md                      # Comprehensive evaluation screenshot checklist
│
├── Analytics/                                # Performance analytics engine
│   ├── Raw-Data/
│   │   └── google_ads_data.csv               # 3-Day simulated campaign raw CSV dataset
│   ├── Processed-Data/
│   │   └── google_ads_processed.csv          # Programmatically calculated derived metrics
│   ├── Dashboard/
│   │   └── app.py                            # Streamlit multi-tab analytics application
│   ├── Reports/
│   │   └── marketing_performance_report.md   # Deep-dive campaign analytical report
│   └── requirements.txt                      # Python dependencies (streamlit, pandas, plotly)
│
├── Final-Report/
│   └── Haven_and_Hue_Final_Project_Report.md # Complete academic submission document
│
└── README.md                                 # Master repository guide
```

---

## 🎨 Brand Identity & Palette

- **Background:** `#F8F5EF` (Warm Cream)
- **Primary Text:** `#493323` (Deep Espresso)
- **Secondary / Accents:** `#85866A` (Muted Olive)
- **Accent:** `#B77D5C` (Warm Terracotta)
- **Surfaces:** `#FFFFFF` (Clean White)
- **Typography:** *Playfair Display* (Headings) + *Inter* (Body Text)

---

## 🛍️ Product Catalogue

| Product | Retail Price | Category | Landing Page Destination |
|---|---|---|---|
| **Decorative Wall Art** | ₹799 | Wall Decor | `/collections/wall-art` |
| **Ceramic Vases Duo** | ₹599 | Home Accessories | `/collections/home-accessories` |
| **Ceramic Table Lamps** | ₹1,299 | Lighting | `/collections/lighting` |
| **Decorative Cushions** | ₹499 | Soft Furnishings | `/collections/home-accessories` |
| **Scented Soy Candles** | ₹399 | Home Accessories | `/collections/home-accessories` |

---

## 🚀 Quick Start Guide

### 1. Launching the E-Commerce Website

```bash
# Navigate to Website directory
cd Website

# Install Node dependencies
npm install

# Start local Vite development server
npm run dev
# The website will be available at http://localhost:5173
```

To create a production build:
```bash
npm run build
npm run preview
```

### 2. Launching the Streamlit Analytics Dashboard

```bash
# Navigate to Analytics directory
cd Analytics

# Install Python requirements
pip install -r requirements.txt

# Start Streamlit application
streamlit run Dashboard/app.py
# The dashboard will open in your browser at http://localhost:8501
```

---

## 📊 Summary of 3-Day Simulated Campaign Results

| Metric | Campaign 1 (Wall Art) | Campaign 2 (Accessories) | Campaign 3 (Lighting) | Overall Total |
|---|---|---|---|---|
| **Impressions** | 2,810 | 3,810 | 2,240 | **8,860** |
| **Clicks** | 136 | 193 | 116 | **445** |
| **CTR** | 4.84% | 5.07% | 5.18% | **5.02%** |
| **Spend (Cost)** | ₹1,632.80 | ₹1,542.90 | ₹1,784.40 | **₹4,960.10** |
| **Avg. CPC** | ₹12.01 | ₹7.99 | ₹15.38 | **₹11.15** |
| **Conversions** | 9 | 12 | 7 | **28** |
| **Conv. Rate** | 6.62% | 6.22% | 6.03% | **6.29%** |
| **Conversion Value** | ₹7,191.00 | ₹9,188.00 | ₹9,093.00 | **₹25,472.00** |
| **ROAS** | **4.40x** | **5.95x** | **5.10x** | **5.14x** |

---

## 🌐 Netlify & Streamlit Cloud Deployment Instructions

### Website (Netlify)
1. Push repository to GitHub or run Netlify CLI: `netlify deploy --prod --dir=dist`
2. **Build Command:** `npm run build`
3. **Publish Directory:** `dist`
4. Base directory: `Website`
5. SPA redirect rules in `public/_redirects` and `netlify.toml` ensure all sub-routes load correctly.

### Analytics Dashboard (Streamlit Community Cloud)
1. Repository: Link your GitHub repository.
2. Main file path: `Analytics/Dashboard/app.py`
3. Requirements file: `Analytics/requirements.txt`
4. Environment: Python 3.11+

---

## ⚖️ Academic Disclaimer
This project is an educational case study. All advertisements are in demonstration mode, and all analytics data points reflect mathematically modeled simulated metrics. No actual financial transactions or paid ad spends were conducted.
