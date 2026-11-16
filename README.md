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

*(Simulated Data – Academic Case Study: 3-Day Student Advertising Experiment)*

| Metric | Campaign 1 (Wall Art) | Campaign 2 (Accessories) | Campaign 3 (Lighting) | Overall Total |
|---|---|---|---|---|
| **Impressions** | 580 | 820 | 450 | **1,850** |
| **Clicks** | 19 | 28 | 14 | **61** |
| **CTR (%)** | 3.28% | 3.41% | 3.11% | **3.30%** |
| **Spend (Cost)** | ₹410.00 | ₹470.00 | ₹340.00 | **₹1,220.00** |
| **Avg. CPC** | ₹21.58 | ₹16.79 | ₹24.29 | **₹20.00** |
| **Conversions** | 1 | 1 | 0 | **2** |
| **Conv. Rate (%)** | 5.26% | 3.57% | 0.00% | **3.28%** |
| **Conversion Value** | ₹799.00 | ₹599.00 | ₹0.00 | **₹1,398.00** |
| **ROAS** | **1.95x** | **1.27x** | **0.00x** | **1.15x** |

### Conversion Funnel Summary:
- **Impressions:** 1,850 (Ad view exposures)
- **Clicks:** 61 (Storefront visitors)
- **Add to Cart:** 6 (High intent)
- **Purchases:** 2 (Simulated orders)

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

