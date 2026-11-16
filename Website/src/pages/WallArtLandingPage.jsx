import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { Sparkles, CheckCircle2, ArrowRight, ShieldCheck, Tag, Target } from 'lucide-react';

export default function WallArtLandingPage() {
  const wallArtProduct = products.find((p) => p.id === 'decorative-wall-art');
  const complementaryDecor = products.filter((p) => p.id !== 'decorative-wall-art');

  return (
    <div className="space-y-14 pb-16">
      {/* Campaign 1 Top Ad Tracker Pill */}
      <div className="bg-[#493323] text-[#F8F5EF] py-2 px-4 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Target className="w-3.5 h-3.5 text-[#B77D5C]" />
            <span className="font-semibold text-[#B77D5C]">Google Ads Campaign 1 Destination:</span>
            <span>Wall Art & Decor Search Ad Group</span>
          </div>
          <div className="flex items-center gap-4 text-[11px] text-[#F8F5EF]/80">
            <span>Primary Keyword: <code>[modern wall art for living room]</code></span>
            <span>Target CPC: ₹12.50</span>
          </div>
        </div>
      </div>

      {/* Hero Banner for Wall Art Campaign */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl overflow-hidden border border-[#E8E3DA] shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Copy */}
            <div className="lg:col-span-6 p-8 sm:p-12 lg:p-14 space-y-6">
              <div className="inline-flex items-center gap-2 bg-[#B77D5C]/15 text-[#B77D5C] text-xs font-semibold px-3 py-1.5 rounded-full">
                <Tag className="w-3.5 h-3.5" />
                <span>Special Case Study Offer • ₹799</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl text-[#493323] font-normal leading-tight">
                Transform Your Walls with Timeless Decor.
              </h1>

              <p className="text-sm sm:text-base text-[#85866A] leading-relaxed">
                Elevate bare walls with minimalist geometric art prints framed in solid natural pine wood. Warm desert terracotta tones created to blend into modern Indian living spaces.
              </p>

              {/* Value Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-[#493323]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#85866A]" />
                  <span>300 GSM Archival Matte Paper</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#85866A]" />
                  <span>Solid Natural Pine Frame</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#85866A]" />
                  <span>Pre-installed Hanging Hardware</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#85866A]" />
                  <span>Free Express Nationwide Delivery</span>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <Link
                  to="/product/decorative-wall-art"
                  className="bg-[#493323] hover:bg-[#382618] text-[#F8F5EF] px-8 py-3.5 rounded-full text-xs font-semibold flex items-center justify-center gap-2 transition-all shadow-sm"
                >
                  <span>Shop Decorative Wall Art (₹799)</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="#collection-grid"
                  className="bg-[#F8F5EF] hover:bg-[#E8E3DA] text-[#493323] px-6 py-3.5 rounded-full text-xs font-semibold flex items-center justify-center gap-2 border border-[#E8E3DA] transition-colors"
                >
                  <span>Explore Pairing Accents</span>
                </a>
              </div>
            </div>

            {/* Campaign Banner Visual */}
            <div className="lg:col-span-6 bg-[#F8F5EF] p-4 sm:p-8 flex items-center justify-center">
              <div className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-soft border border-[#E8E3DA]">
                <img
                  src="/assets/wall_art_banner.jpg"
                  alt="Transform Your Walls with Timeless Decor"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Primary Product Spotlight */}
      {wallArtProduct && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#F8F5EF] rounded-3xl p-6 sm:p-10 border border-[#E8E3DA] grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-5">
              <img
                src={wallArtProduct.image}
                alt={wallArtProduct.name}
                className="w-full aspect-square object-cover rounded-2xl shadow-card bg-white"
              />
            </div>
            <div className="md:col-span-7 space-y-4">
              <span className="text-xs uppercase tracking-widest text-[#B77D5C] font-semibold">
                Featured Campaign Product
              </span>
              <h2 className="font-serif text-3xl text-[#493323] font-normal">
                {wallArtProduct.name}
              </h2>
              <p className="text-sm text-[#85866A] leading-relaxed">
                {wallArtProduct.description}
              </p>
              <div className="text-2xl font-semibold text-[#493323]">
                ₹{wallArtProduct.price.toLocaleString('en-IN')}
              </div>
              <div className="pt-2">
                <Link
                  to={`/product/${wallArtProduct.id}`}
                  className="inline-flex items-center gap-2 bg-[#B77D5C] hover:bg-[#9f6545] text-white px-7 py-3 rounded-xl text-xs font-semibold shadow-sm transition-colors"
                >
                  <span>View Product Details & Specs</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Related Pairing Accents Grid */}
      <section id="collection-grid" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <span className="text-xs uppercase tracking-widest text-[#85866A] font-semibold">
            Styling Combinations
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-[#493323] font-normal mt-1">
            Complementary Decor Pieces
          </h2>
          <p className="text-xs text-[#85866A] mt-1">
            Pair your wall art with matching sculptural vases, ambient lamps, and soft cushions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {complementaryDecor.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
