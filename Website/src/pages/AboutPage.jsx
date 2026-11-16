import React from 'react';
import { Sparkles, Shield, Compass, Heart, Feather } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 bg-[#85866A]/10 text-[#85866A] text-xs font-semibold px-3 py-1.5 rounded-full">
          <Sparkles className="w-3.5 h-3.5 text-[#B77D5C]" />
          <span>Our Story & Philosophy</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl text-[#493323] font-normal">
          Making Spaces Feel Like Home.
        </h1>
        <p className="text-sm sm:text-base text-[#85866A] max-w-2xl mx-auto leading-relaxed">
          Haven & Hue was conceptualized around a simple belief: beautiful living should never be out of reach.
        </p>
      </div>

      {/* Visual Break */}
      <div className="rounded-3xl overflow-hidden border border-[#E8E3DA] shadow-card bg-white p-2">
        <img
          src="/assets/hero_livingroom.jpg"
          alt="Haven & Hue Aesthetic Living Room"
          className="w-full h-72 sm:h-96 object-cover rounded-2xl"
        />
      </div>

      {/* Design Philosophy */}
      <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E8E3DA] shadow-soft space-y-6">
        <h2 className="font-serif text-2xl text-[#493323] font-normal">
          The Design Philosophy
        </h2>
        <p className="text-sm text-[#493323]/80 leading-relaxed">
          Modern living often feels fast, cluttered and overwhelming. At Haven & Hue, we curate home decor that acts as an antidote—inviting calm, tactile warmth and visual equilibrium into everyday spaces. We draw inspiration from contemporary minimalism, Japandi simplicity and warm Mediterranean earth tones.
        </p>
        <p className="text-sm text-[#493323]/80 leading-relaxed">
          Every piece in our five-item signature catalogue—from textured ceramic vases to fluted bedside lamps—is selected to harmonize seamlessly with neutral furniture, indoor greenery, and soft natural daylight.
        </p>
      </div>

      {/* Three Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-[#E8E3DA] space-y-3">
          <div className="w-10 h-10 rounded-xl bg-[#B77D5C]/15 text-[#B77D5C] flex items-center justify-center">
            <Feather className="w-5 h-5" />
          </div>
          <h3 className="font-serif text-lg font-medium text-[#493323]">Curated Restraint</h3>
          <p className="text-xs text-[#85866A] leading-relaxed">
            Rather than offering endless uncoordinated items, we offer a tightly curated collection where every element complements the next.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-[#E8E3DA] space-y-3">
          <div className="w-10 h-10 rounded-xl bg-[#85866A]/15 text-[#85866A] flex items-center justify-center">
            <Heart className="w-5 h-5" />
          </div>
          <h3 className="font-serif text-lg font-medium text-[#493323]">Warm Accessibility</h3>
          <p className="text-xs text-[#85866A] leading-relaxed">
            Premium design shouldn't require luxury designer budgets. Our pricing ranges from ₹399 to ₹1,299, making tasteful spaces accessible to all.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-[#E8E3DA] space-y-3">
          <div className="w-10 h-10 rounded-xl bg-[#493323]/10 text-[#493323] flex items-center justify-center">
            <Compass className="w-5 h-5" />
          </div>
          <h3 className="font-serif text-lg font-medium text-[#493323]">Tactile Materials</h3>
          <p className="text-xs text-[#85866A] leading-relaxed">
            Authentic natural textures: stone ceramics, pure soy wax, linen shades, pine wood frames, and bouclé fabrics that feel as good as they look.
          </p>
        </div>
      </div>

      {/* Academic Demonstration Transparency Notice */}
      <div className="bg-[#F8F5EF] p-8 rounded-3xl border border-[#E8E3DA] space-y-4">
        <div className="flex items-center gap-2 text-sm font-semibold text-[#493323]">
          <Shield className="w-5 h-5 text-[#B77D5C]" />
          <span>Case Study & Project Context</span>
        </div>
        <p className="text-xs text-[#85866A] leading-relaxed">
          <strong>Haven & Hue</strong> is a fictional Indian home decor brand created specifically as part of a comprehensive <strong>college Digital Marketing case study</strong>.
        </p>
        <p className="text-xs text-[#85866A] leading-relaxed">
          The brand serves as the operational foundation to demonstrate the entire lifecycle of a digital marketing campaign: from brand identity, typography, and web storefront development to Google Search ad copy creation, keyword research, negative keyword pruning, and multi-metric analytics tracking via a dedicated Python Streamlit dashboard.
        </p>
        <p className="text-xs text-[#85866A] leading-relaxed italic">
          No real orders are processed, and no real commercial trade occurs on this website.
        </p>
      </div>
    </div>
  );
}
