import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { Sparkles, CheckCircle2, ArrowRight, Tag, Target } from 'lucide-react';

export default function HomeAccessoriesLandingPage() {
  const accessoriesProducts = products.filter(
    (p) =>
      p.id === 'ceramic-vases' ||
      p.id === 'decorative-cushions' ||
      p.id === 'scented-candles'
  );

  return (
    <div className="space-y-14 pb-16">
      {/* Campaign 2 Top Ad Tracker Pill */}
      <div className="bg-[#493323] text-[#F8F5EF] py-2 px-4 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Target className="w-3.5 h-3.5 text-[#85866A]" />
            <span className="font-semibold text-[#85866A]">Google Ads Campaign 2 Destination:</span>
            <span>Home Accessories & Table Accents Search Ad Group</span>
          </div>
          <div className="flex items-center gap-4 text-[11px] text-[#F8F5EF]/80">
            <span>Primary Keyword: <code>[modern ceramic vases online india]</code></span>
            <span>Target CPC: ₹8.40</span>
          </div>
        </div>
      </div>

      {/* Hero Banner for Home Accessories Campaign */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl overflow-hidden border border-[#E8E3DA] shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Copy */}
            <div className="lg:col-span-6 p-8 sm:p-12 lg:p-14 space-y-6">
              <div className="inline-flex items-center gap-2 bg-[#85866A]/15 text-[#85866A] text-xs font-semibold px-3 py-1.5 rounded-full">
                <Tag className="w-3.5 h-3.5" />
                <span>Curated Living Room Essentials • From ₹399</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl text-[#493323] font-normal leading-tight">
                Thoughtful Accessories for Beautiful Homes.
              </h1>

              <p className="text-sm sm:text-base text-[#85866A] leading-relaxed">
                Add warmth and organic texture to your coffee tables, shelves, and entryways. Discover sculpted ceramic stone vases, textured bouclé cushions, and clean soy candles.
              </p>

              {/* Value Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-[#493323]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#85866A]" />
                  <span>High-Fired Ceramic Stoneware</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#85866A]" />
                  <span>100% Biodegradable Soy Wax</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#85866A]" />
                  <span>Plush Hypoallergenic Cushion Inserts</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#85866A]" />
                  <span>Curated Neutral Earth Palette</span>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <a
                  href="#accessories-collection"
                  className="bg-[#493323] hover:bg-[#382618] text-[#F8F5EF] px-8 py-3.5 rounded-full text-xs font-semibold flex items-center justify-center gap-2 transition-all shadow-sm"
                >
                  <span>Browse Campaign Products</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  to="/shop"
                  className="bg-[#F8F5EF] hover:bg-[#E8E3DA] text-[#493323] px-6 py-3.5 rounded-full text-xs font-semibold flex items-center justify-center gap-2 border border-[#E8E3DA] transition-colors"
                >
                  <span>View All Decor</span>
                </Link>
              </div>
            </div>

            {/* Campaign Banner Visual */}
            <div className="lg:col-span-6 bg-[#F8F5EF] p-4 sm:p-8 flex items-center justify-center">
              <div className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-soft border border-[#E8E3DA]">
                <img
                  src="/assets/home_accessories_banner.jpg"
                  alt="Thoughtful Accessories for Beautiful Homes"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Campaign Products Grid */}
      <section id="accessories-collection" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs uppercase tracking-widest text-[#B77D5C] font-semibold">
            Campaign Selection
          </span>
          <h2 className="font-serif text-3xl text-[#493323] font-normal">
            Handpicked Home Accessories
          </h2>
          <p className="text-xs text-[#85866A]">
            Direct destination items highlighted in our Google Search Home Accessories advertising campaign.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {accessoriesProducts.map((p) => (
            <div key={p.id} className="flex flex-col">
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
