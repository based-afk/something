import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { Sparkles, CheckCircle2, ArrowRight, Tag, Target, Lightbulb } from 'lucide-react';

export default function LightingLandingPage() {
  const lampProduct = products.find((p) => p.id === 'table-lamps');
  const complementaryLighting = products.filter((p) => p.id !== 'table-lamps');

  return (
    <div className="space-y-14 pb-16">
      {/* Campaign 3 Top Ad Tracker Pill */}
      <div className="bg-[#493323] text-[#F8F5EF] py-2 px-4 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Target className="w-3.5 h-3.5 text-[#B77D5C]" />
            <span className="font-semibold text-[#B77D5C]">Google Ads Campaign 3 Destination:</span>
            <span>Lighting & Ambient Lamps Search Ad Group</span>
          </div>
          <div className="flex items-center gap-4 text-[11px] text-[#F8F5EF]/80">
            <span>Primary Keyword: <code>[ceramic bedside table lamp warm light]</code></span>
            <span>Target CPC: ₹15.80</span>
          </div>
        </div>
      </div>

      {/* Hero Banner for Lighting Campaign */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl overflow-hidden border border-[#E8E3DA] shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Copy */}
            <div className="lg:col-span-6 p-8 sm:p-12 lg:p-14 space-y-6">
              <div className="inline-flex items-center gap-2 bg-[#B77D5C]/15 text-[#B77D5C] text-xs font-semibold px-3 py-1.5 rounded-full">
                <Lightbulb className="w-3.5 h-3.5" />
                <span>Ambient Lighting • ₹1,299</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl text-[#493323] font-normal leading-tight">
                Create the Perfect Ambience for Every Room.
              </h1>

              <p className="text-sm sm:text-base text-[#85866A] leading-relaxed">
                Transform ordinary spaces into cozy personal sanctuaries with soothing, diffused lighting. Hand-fluted ceramic stoneware paired with natural woven flax linen.
              </p>

              {/* Value Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-[#493323]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#85866A]" />
                  <span>Fluted Matte Ceramic Stoneware</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#85866A]" />
                  <span>Natural Flax Linen Drum Shade</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#85866A]" />
                  <span>Soothing Warm Diffused Glow</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#85866A]" />
                  <span>Braided Fabric Cord with Inline Switch</span>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <Link
                  to="/product/table-lamps"
                  className="bg-[#493323] hover:bg-[#382618] text-[#F8F5EF] px-8 py-3.5 rounded-full text-xs font-semibold flex items-center justify-center gap-2 transition-all shadow-sm"
                >
                  <span>Shop Ceramic Table Lamp (₹1,299)</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="#mood-pairs"
                  className="bg-[#F8F5EF] hover:bg-[#E8E3DA] text-[#493323] px-6 py-3.5 rounded-full text-xs font-semibold flex items-center justify-center gap-2 border border-[#E8E3DA] transition-colors"
                >
                  <span>View Complementary Accents</span>
                </a>
              </div>
            </div>

            {/* Campaign Banner Visual */}
            <div className="lg:col-span-6 bg-[#F8F5EF] p-4 sm:p-8 flex items-center justify-center">
              <div className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-soft border border-[#E8E3DA]">
                <img
                  src="/assets/lighting_banner.jpg"
                  alt="Create the Perfect Ambience for Every Room"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Lamp Spotlight */}
      {lampProduct && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#F8F5EF] rounded-3xl p-6 sm:p-10 border border-[#E8E3DA] grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-5">
              <img
                src={lampProduct.image}
                alt={lampProduct.name}
                className="w-full aspect-square object-cover rounded-2xl shadow-card bg-white"
              />
            </div>
            <div className="md:col-span-7 space-y-4">
              <span className="text-xs uppercase tracking-widest text-[#B77D5C] font-semibold">
                Featured Campaign Product
              </span>
              <h2 className="font-serif text-3xl text-[#493323] font-normal">
                {lampProduct.name}
              </h2>
              <p className="text-sm text-[#85866A] leading-relaxed">
                {lampProduct.description}
              </p>
              <div className="text-2xl font-semibold text-[#493323]">
                ₹{lampProduct.price.toLocaleString('en-IN')}
              </div>
              <div className="pt-2">
                <Link
                  to={`/product/${lampProduct.id}`}
                  className="inline-flex items-center gap-2 bg-[#B77D5C] hover:bg-[#9f6545] text-white px-7 py-3 rounded-xl text-xs font-semibold shadow-sm transition-colors"
                >
                  <span>View Lamp Specifications & Details</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Ambience & Pairing Decor */}
      <section id="mood-pairs" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <span className="text-xs uppercase tracking-widest text-[#85866A] font-semibold">
            Ambient Pairings
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-[#493323] font-normal mt-1">
            Complementary Decor for Warm Living
          </h2>
          <p className="text-xs text-[#85866A] mt-1">
            Combine your ambient lighting with scented soy candles, ceramic vases, and textured cushions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {complementaryLighting.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}

