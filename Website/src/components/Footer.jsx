import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, Heart, ShieldCheck, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#FFFFFF] border-t border-[#E8E3DA] mt-auto">
      {/* Brand value propositions banner */}
      <div className="border-b border-[#E8E3DA] bg-[#F8F5EF]/60">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#B77D5C]/15 flex items-center justify-center text-[#B77D5C]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-sm text-[#493323]">Authentic Editorial Quality</h4>
              <p className="text-xs text-[#85866A]">Curated minimalist designs in natural earth materials.</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#85866A]/15 flex items-center justify-center text-[#85866A]">
              <Heart className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-sm text-[#493323]">Affordable Modern Decor</h4>
              <p className="text-xs text-[#85866A]">Premium living room accents starting at just ₹399.</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#493323]/10 flex items-center justify-center text-[#493323]">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-sm text-[#493323]">Dedicated Case Study Hub</h4>
              <p className="text-xs text-[#85866A]">Engineered for Google Ads campaign performance testing.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand Info */}
          <div className="space-y-4 md:col-span-1">
            <img
              src="/assets/logo.png"
              alt="Haven & Hue Home Decor"
              className="h-14 w-auto object-contain"
            />
            <p className="text-xs text-[#85866A] italic">
              "Make Your Space Feel Like Home."
            </p>
            <p className="text-xs text-[#493323]/80 leading-relaxed">
              Haven & Hue is a fictional Indian home decor brand curated for modern living. Designed to provide warm, minimalist interiors accessible to young professionals and contemporary homes.
            </p>
          </div>

          {/* Quick Shop Links */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#493323]">Shop Catalogue</h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/shop" className="text-[#85866A] hover:text-[#B77D5C] transition-colors">
                  All Decor Products
                </Link>
              </li>
              <li>
                <Link to="/product/decorative-wall-art" className="text-[#85866A] hover:text-[#B77D5C] transition-colors">
                  Decorative Wall Art (₹799)
                </Link>
              </li>
              <li>
                <Link to="/product/ceramic-vases" className="text-[#85866A] hover:text-[#B77D5C] transition-colors">
                  Ceramic Vases Duo (₹599)
                </Link>
              </li>
              <li>
                <Link to="/product/table-lamps" className="text-[#85866A] hover:text-[#B77D5C] transition-colors">
                  Ceramic Table Lamps (₹1,299)
                </Link>
              </li>
              <li>
                <Link to="/product/decorative-cushions" className="text-[#85866A] hover:text-[#B77D5C] transition-colors">
                  Bouclé Cushions (₹499)
                </Link>
              </li>
              <li>
                <Link to="/product/scented-candles" className="text-[#85866A] hover:text-[#B77D5C] transition-colors">
                  Soy Scented Candles (₹399)
                </Link>
              </li>
            </ul>
          </div>

          {/* Google Ads Landing Destinations */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#493323]">Google Ads Landings</h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link
                  to="/collections/wall-art"
                  className="text-[#85866A] hover:text-[#B77D5C] transition-colors flex items-center gap-1"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B77D5C]"></span>
                  Campaign 1: Wall Art & Decor
                </Link>
              </li>
              <li>
                <Link
                  to="/collections/home-accessories"
                  className="text-[#85866A] hover:text-[#B77D5C] transition-colors flex items-center gap-1"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#85866A]"></span>
                  Campaign 2: Home Accessories
                </Link>
              </li>
              <li>
                <Link
                  to="/collections/lighting"
                  className="text-[#85866A] hover:text-[#B77D5C] transition-colors flex items-center gap-1"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#493323]"></span>
                  Campaign 3: Lighting & Ambience
                </Link>
              </li>
              <li className="pt-2">
                <Link to="/about" className="text-[#85866A] hover:text-[#B77D5C] transition-colors">
                  About Our Brand
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-[#85866A] hover:text-[#B77D5C] transition-colors">
                  Contact Demonstration
                </Link>
              </li>
            </ul>
          </div>

          {/* Demonstration Notice Box */}
          <div className="bg-[#F8F5EF] p-4 rounded-xl border border-[#E8E3DA] space-y-2">
            <h4 className="text-xs font-semibold text-[#493323] flex items-center gap-1.5">
              <span>Academic Notice</span>
            </h4>
            <p className="text-[11px] text-[#85866A] leading-relaxed">
              This website serves as an academic demonstration for a college Digital Marketing case study evaluating Google Search advertising strategies. All products, prices, and orders are strictly simulated.
            </p>
            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#493323] bg-white border border-[#E8E3DA] rounded-lg hover:border-[#B77D5C] hover:text-[#B77D5C] transition-colors"
              >
                <ArrowUp className="w-3.5 h-3.5" /> Back to Top
              </button>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 border-t border-[#E8E3DA] flex flex-col sm:flex-row items-center justify-between text-xs text-[#85866A] gap-4">
          <p>© {new Date().getFullYear()} Haven & Hue. Digital Marketing Academic Demonstration Project.</p>
          <p className="flex items-center gap-1 text-[11px]">
            Brand Identity: Cream #F8F5EF • Primary #493323 • Olive #85866A • Terracotta #B77D5C
          </p>
        </div>
      </div>
    </footer>
  );
}
