import React, { useState } from 'react';
import { Mail, MessageSquare, Send, CheckCircle2, Shield, Info } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Campaign Feedback / Project Inquiry',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 bg-[#85866A]/10 text-[#85866A] text-xs font-semibold px-3 py-1.5 rounded-full">
          <MessageSquare className="w-3.5 h-3.5 text-[#B77D5C]" />
          <span>Case Study Inquiries</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl text-[#493323] font-normal">
          Contact & Project Evaluation
        </h1>
        <p className="text-sm sm:text-base text-[#85866A] max-w-xl mx-auto leading-relaxed">
          Have questions or feedback regarding the Haven & Hue digital marketing case study? Send a message through this demonstration interface.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Project Contact Info Box */}
        <div className="md:col-span-5 space-y-6">
          <div className="bg-white p-6 rounded-3xl border border-[#E8E3DA] shadow-soft space-y-4">
            <h2 className="font-serif text-lg font-medium text-[#493323]">
              Demonstration Contact Details
            </h2>
            <p className="text-xs text-[#85866A] leading-relaxed">
              This project is built for an academic college evaluation in Digital Marketing and Google Ads strategy.
            </p>

            <div className="space-y-3 pt-2 text-xs">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#F8F5EF] text-[#B77D5C] flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="block font-semibold text-[#493323]">Case Study Email</span>
                  <span className="text-[#85866A]">demo-casestudy@haven-and-hue.local</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#F8F5EF] text-[#85866A] flex items-center justify-center flex-shrink-0">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <span className="block font-semibold text-[#493323]">Storefront Status</span>
                  <span className="text-[#85866A]">Simulated Educational Storefront</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#F8F5EF] p-5 rounded-3xl border border-[#E8E3DA] space-y-2 text-xs text-[#85866A]">
            <div className="flex items-center gap-1.5 font-semibold text-[#493323]">
              <Info className="w-4 h-4 text-[#B77D5C]" />
              <span>Project Transparency</span>
            </div>
            <p className="leading-relaxed">
              No real telephone numbers, corporate registration, or physical storefront locations are published to maintain strict ethical academic integrity.
            </p>
          </div>
        </div>

        {/* Contact Demonstration Form */}
        <div className="md:col-span-7 bg-white p-8 rounded-3xl border border-[#E8E3DA] shadow-soft">
          {submitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-14 h-14 rounded-full bg-[#85866A]/15 text-[#85866A] mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-2xl font-medium text-[#493323]">
                Feedback Simulated Successfully
              </h3>
              <p className="text-xs text-[#85866A] max-w-sm mx-auto leading-relaxed">
                Thank you for submitting feedback on the Haven & Hue project. Your message has been logged for this academic review.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', email: '', subject: 'Campaign Feedback / Project Inquiry', message: '' });
                }}
                className="bg-[#493323] hover:bg-[#382618] text-white px-6 py-2.5 rounded-xl text-xs font-semibold transition-colors"
              >
                Send Another Note
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="font-serif text-xl font-medium text-[#493323]">
                Leave Evaluator Feedback
              </h3>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-[#493323]">Your Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Professor Sharma / Evaluator"
                  className="w-full bg-[#F8F5EF] border border-[#E8E3DA] rounded-xl px-4 py-2.5 text-xs text-[#493323] focus:outline-none focus:border-[#B77D5C]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-[#493323]">Email Address</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="evaluator@university.edu"
                  className="w-full bg-[#F8F5EF] border border-[#E8E3DA] rounded-xl px-4 py-2.5 text-xs text-[#493323] focus:outline-none focus:border-[#B77D5C]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-[#493323]">Subject</label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-[#F8F5EF] border border-[#E8E3DA] rounded-xl px-4 py-2.5 text-xs text-[#493323] focus:outline-none focus:border-[#B77D5C]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-[#493323]">Message</label>
                <textarea
                  rows="4"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Enter evaluation remarks, campaign observations, or feedback..."
                  className="w-full bg-[#F8F5EF] border border-[#E8E3DA] rounded-xl px-4 py-2.5 text-xs text-[#493323] focus:outline-none focus:border-[#B77D5C]"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#B77D5C] hover:bg-[#9f6545] text-white py-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-colors shadow-sm"
              >
                <Send className="w-4 h-4" />
                <span>Submit Evaluation Feedback</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

