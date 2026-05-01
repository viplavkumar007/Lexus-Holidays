import React from "react";
import { motion } from "framer-motion";
import { brand, contactInfo } from "../data/siteContent";
import ContactForm from "../components/ContactForm";
import ScrollReveal from "../components/ScrollReveal";
import { FiPhone, FiMail, FiMapPin, FiClock } from "react-icons/fi";

const contactCards = [
  {
    icon: FiPhone,
    label: "Call Us",
    value: brand.phone,
    sub: "Mon–Sat, 9:30 AM – 7 PM",
    href: `tel:${brand.phone}`,
    bg: "bg-navy-900",
    accent: "text-gold-400",
  },
  {
    icon: () => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-white">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
      </svg>
    ),
    label: "WhatsApp",
    value: brand.phone,
    sub: "Instant response",
    href: `https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(contactInfo.whatsappMessage)}`,
    bg: "bg-[#25D366]",
    accent: "text-white",
    external: true,
  },
  {
    icon: FiMail,
    label: "Email Us",
    value: brand.email,
    sub: "We reply within 4 hours",
    href: `mailto:${brand.email}?subject=${encodeURIComponent(contactInfo.emailSubject)}`,
    bg: "bg-amber-warm",
    accent: "text-white",
  },
];

export default function Contact({ showToast }) {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-14">
            <span className="section-label">Contact Us</span>
            <h2 className="section-heading mb-4">
              Start Your Journey
              <br />
              <span className="text-gradient-gold">With a Conversation</span>
            </h2>
            <div className="gold-divider mx-auto" />
            <p className="text-navy-600 text-base max-w-lg mx-auto mt-4">
              Fill out the form and we'll connect you to the right package. Get a free personalised quote in 2 hours.
            </p>
          </div>
        </ScrollReveal>

        {/* Contact cards */}
        <ScrollReveal delay={0.1}>
          <div className="grid sm:grid-cols-3 gap-4 mb-12 max-w-3xl mx-auto">
            {contactCards.map((card) => {
              const Icon = card.icon;
              return (
                <a
                  key={card.label}
                  href={card.href}
                  target={card.external ? "_blank" : undefined}
                  rel={card.external ? "noopener noreferrer" : undefined}
                  className={`group flex flex-col items-center text-center p-6 ${card.bg} transition-all duration-200 hover:-translate-y-1`}
                >
                  <div className="w-11 h-11 bg-white/10 flex items-center justify-center mb-3">
                    <Icon size={20} className="text-white" />
                  </div>
                  <p className="text-white/70 text-xs font-semibold tracking-wide uppercase mb-1">{card.label}</p>
                  <p className="text-white font-semibold text-sm">{card.value}</p>
                  <p className="text-white/60 text-xs mt-0.5">{card.sub}</p>
                </a>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Main grid */}
        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Form */}
          <ScrollReveal direction="right" className="lg:col-span-3">
            <div className="bg-white border border-gray-100 p-8 shadow-card">
              <div className="flex items-center gap-3 mb-7">
                <div className="w-1 h-8 bg-gold-gradient" />
                <div>
                  <h3 className="font-display font-bold text-xl text-navy-900">Holiday Enquiry Form</h3>
                  <p className="text-navy-400 text-xs mt-0.5">Free consultation · No obligation</p>
                </div>
              </div>
              <ContactForm showToast={showToast} />
            </div>
          </ScrollReveal>

          {/* Info panel */}
          <ScrollReveal direction="left" className="lg:col-span-2">
            <div className="space-y-6">
              {/* Office details */}
              <div className="bg-navy-900 text-white p-7">
                <div className="h-0.5 bg-gold-gradient -mx-7 -mt-7 mb-6" />
                <h3 className="font-display font-bold text-lg text-white mb-5">Our Office</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <FiMapPin size={16} className="text-gold-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-white text-sm font-medium mb-0.5">Address</p>
                      <p className="text-navy-300 text-sm leading-relaxed">{contactInfo.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FiClock size={16} className="text-gold-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-white text-sm font-medium mb-0.5">Working Hours</p>
                      <p className="text-navy-300 text-sm">{contactInfo.hours}</p>
                    </div>
                  </div>
                </div>

                {/* Map link */}
                <a
                  href={contactInfo.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-1.5 text-gold-400 text-sm font-semibold hover:text-gold-300 transition-colors"
                >
                  View on Google Maps →
                </a>
              </div>

              {/* Why choose us */}
              <div className="bg-white border border-gray-100 p-6 shadow-card">
                <h4 className="font-semibold text-navy-900 text-sm mb-4 tracking-wide uppercase">Why Book With Us?</h4>
                {[
                  "Best price guarantee",
                  "Free itinerary customisation",
                  "24/7 support during travel",
                  "Secure online payments",
                  "Instant WhatsApp confirmation",
                ].map((point) => (
                  <div key={point} className="flex items-center gap-2.5 mb-2.5">
                    <div className="w-4 h-4 bg-gold-gradient flex items-center justify-center flex-shrink-0">
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <path d="M1 4L3 6L7 2" stroke="#102e50" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="text-navy-600 text-sm">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
