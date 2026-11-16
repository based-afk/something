import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Feather, ShieldCheck, RefreshCw, Compass } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function HomePage() {
  const categoriesList = [
    {
      title: "Wall Art & Decor",
      description: "Transform your walls with timeless art.",
      image: "/assets/wall_art_banner.jpg",
      route: "/collections/wall-art",
      badge: "Google Ads Campaign 1"
    },
    {
      title: "Home Accessories",
      description: "Elevate your space with thoughtful accents.",
      image: "/assets/home_accessories_banner.jpg",
      route: "/collections/home-accessories",
      badge: "Google Ads Campaign 2"
    },
    {
      title: "Lighting & Ambience",
      description: "Create the perfect mood for every room.",
      image: "/assets/lighting_banner.jpg",
      route: "/collections/lighting",
      badge: "Google Ads Campaign 3"
    }
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-6 sm:pt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Text Content */}
            <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-[#85866A]/10 text-[#85866A] text-xs font-semibold px-3 py-1.5 rounded-full border border-[#85866A]/20">
                <Sparkles className="w-3.5 h-3.5 text-[#B77D5C]" />
                <span>Modern Living • Minimalist Aesthetics</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#493323] leading-[1.15] tracking-tight">
                Thoughtful Decor. <br />
                <span className="italic font-normal text-[#B77D5C]">Beautiful Living.</span>
              </h1>

              <p className="text-base sm:text-lg text-[#85866A] max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Discover timeless home accents that bring warmth, comfort and personality to every corner.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  to="/shop"
                  className="w-full sm:w-auto bg-[#493323] hover:bg-[#382618] text-[#F8F5EF] px-8 py-3.5 rounded-full text-sm font-medium transition-all shadow-sm flex items-center justify-center gap-2 group"
                >
                  <span>Explore Collection</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href="#campaign-collections"
                  className="w-full sm:w-auto bg-white hover:bg-[#F8F5EF] text-[#493323] border border-[#E8E3DA] px-7 py-3.5 rounded-full text-sm font-medium transition-colors flex items-center justify-center gap-2"
                >
                  <span>View Ad Landings</span>
                </a>
              </div>

              <div className="pt-4 flex items-center justify-center lg:justify-start gap-8 text-xs text-[#85866A]">
                <div>
                  <span className="block font-serif text-xl font-semibold text-[#493323]">₹399+</span>
                  <span>Accessible luxury</span>
                </div>
                <div className="w-px h-8 bg-[#E8E3DA]" />
                <div>
                  <span className="block font-serif text-xl font-semibold text-[#493323]">100%</span>
                  <span>Authentic design</span>
                </div>
                <div className="w-px h-8 bg-[#E8E3DA]" />
                <div>
                  <span className="block font-serif text-xl font-semibold text-[#493323]">4.9★</span>
                  <span>Demonstration rating</span>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="lg:col-span-7">
              <div className="relative rounded-3xl overflow-hidden border border-[#E8E3DA] shadow-card bg-white p-2 sm:p-3">
                <img
                  src="/assets/hero_livingroom.jpg"
                  alt="Haven & Hue Curated Living Room Decor"
                  className="w-full h-[320px] sm:h-[460px] object-cover rounded-2xl"
                />
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-xl border border-[#E8E3DA] hidden sm:flex items-center justify-between text-xs">
                  <div>
                    <p className="font-serif font-semibold text-sm text-[#493323]">Haven & Hue Living Room Sanctuary</p>
                    <p className="text-[#85866A]">Harmonious neutrals: Terracotta, Linen, Ivory Stone & Natural Oak</p>
                  </div>
                  <Link
                    to="/shop"
                    className="text-[#B77D5C] font-semibold hover:text-[#9f6545] flex items-center gap-1"
                  >
                    <span>Shop Look</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Introduction Section */}
      <section className="bg-white border-y border-[#E8E3DA] py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className="text-xs uppercase tracking-widest text-[#B77D5C] font-semibold">
            Brand Philosophy
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl text-[#493323] font-normal max-w-2xl mx-auto leading-snug">
            Thoughtful living begins with pieces that inspire comfort, balance and quiet elegance.
          </h2>
          <p className="text-sm text-[#85866A] max-w-3xl mx-auto leading-relaxed">
            At Haven & Hue, we believe home decor should be both deeply aesthetic and genuinely accessible. Our curated catalogue brings together minimalist geometric wall art, artisan ceramic pottery, calming ambient table lighting, plush tactile bouclé cushions, and clean-burning soy candles—designed to seamlessly complement modern contemporary homes.
          </p>
        </div>
      </section>

      {/* Shop By Category & Campaign Landings */}
      <section id="campaign-collections" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs uppercase tracking-widest text-[#85866A] font-semibold">
            Curated Themes
          </span>
          <h2 className="font-serif text-3xl text-[#493323] font-normal">
            Shop by Category
          </h2>
          <p className="text-xs text-[#85866A]">
            Explore our collections and Google Search ad campaign landing destinations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categoriesList.map((cat) => (
            <Link
              key={cat.title}
              to={cat.route}
              className="group bg-white rounded-2xl overflow-hidden border border-[#E8E3DA] hover:border-[#B77D5C] shadow-soft hover:shadow-card transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-[#F8F5EF]">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-[#493323]/85 text-[#F8F5EF] text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full backdrop-blur-xs">
                    {cat.badge}
                  </span>
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl font-medium text-[#493323] group-hover:text-[#B77D5C] transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-[#85866A] mt-1">
                    {cat.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#E8E3DA]/60 flex items-center justify-between text-xs font-semibold text-[#B77D5C]">
                  <span>Explore Destination</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between mb-10 gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#B77D5C] font-semibold">
              The Essentials
            </span>
            <h2 className="font-serif text-3xl text-[#493323] font-normal mt-1">
              Featured Home Accents
            </h2>
          </div>
          <Link
            to="/shop"
            className="text-xs font-semibold text-[#493323] hover:text-[#B77D5C] flex items-center gap-1.5 transition-colors"
          >
            <span>View All 5 Catalogue Products</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Why Choose Haven & Hue */}
      <section className="bg-white border-y border-[#E8E3DA] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest text-[#85866A] font-semibold">
              The Haven & Hue Standard
            </span>
            <h2 className="font-serif text-3xl text-[#493323] font-normal mt-1">
              Why Choose Haven & Hue
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 rounded-2xl bg-[#F8F5EF] border border-[#E8E3DA] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#B77D5C]/15 text-[#B77D5C] flex items-center justify-center">
                <Feather className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-medium text-[#493323]">Editorial Craftsmanship</h3>
              <p className="text-xs text-[#85866A] leading-relaxed">
                Sculpted from stone ceramics, natural linen, solid pine and pure soy wax with an eye for quiet luxury.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8F5EF] border border-[#E8E3DA] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#85866A]/15 text-[#85866A] flex items-center justify-center">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-medium text-[#493323]">Timeless Neutrals</h3>
              <p className="text-xs text-[#85866A] leading-relaxed">
                Warm cream, desert terracotta, olive, and espresso tones designed to effortlessly harmonise.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8F5EF] border border-[#E8E3DA] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#493323]/10 text-[#493323] flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-medium text-[#493323]">Fair & Accessible</h3>
              <p className="text-xs text-[#85866A] leading-relaxed">
                Direct-to-consumer pricing starting at ₹399 without inflated retail markups or compromise.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8F5EF] border border-[#E8E3DA] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#B77D5C]/15 text-[#B77D5C] flex items-center justify-center">
                <RefreshCw className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-medium text-[#493323]">Marketing Analytics Hub</h3>
              <p className="text-xs text-[#85866A] leading-relaxed">
                Built as a live digital marketing testing ground with dedicated search campaign landing pages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Callout Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#493323] text-[#F8F5EF] rounded-3xl p-8 sm:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl text-center md:text-left">
            <span className="text-xs font-semibold tracking-wider text-[#B77D5C] uppercase">
              Digital Marketing Case Study
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-normal leading-snug">
              Connected with Google Ads Campaigns & Analytics Dashboard
            </h2>
            <p className="text-xs sm:text-sm text-[#F8F5EF]/80 leading-relaxed">
              This storefront works seamlessly alongside three planned Google Search campaigns and a Streamlit analytics dashboard tracking impressions, CTR, CPC, conversions, and ROAS.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <Link
              to="/collections/wall-art"
              className="bg-[#B77D5C] hover:bg-[#9f6545] text-white px-6 py-3 rounded-full text-xs font-semibold text-center transition-colors shadow-sm"
            >
              Test Ad Landing 1
            </Link>
            <Link
              to="/about"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3 rounded-full text-xs font-semibold text-center transition-colors"
            >
              Read Project Case Study
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

