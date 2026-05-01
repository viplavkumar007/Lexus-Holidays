import React from "react";
import { motion } from "framer-motion";
import { testimonials } from "../data/siteContent";
import ScrollReveal, { StaggerContainer, staggerItem } from "../components/ScrollReveal";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-14">
            <span className="section-label">Client Stories</span>
            <h2 className="section-heading mb-4">
              5,000+ Travellers,
              <br />
              <span className="text-gradient-gold">5,000+ Smiles</span>
            </h2>
            <div className="gold-divider mx-auto" />
            <p className="text-navy-500 text-sm mt-4 max-w-md mx-auto">
              Don't just take our word for it — here's what our travellers say about their Lexus Holidays experience.
            </p>
          </div>
        </ScrollReveal>

        {/* Testimonials grid */}
        <StaggerContainer staggerDelay={0.12} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.id}
              variants={staggerItem}
              whileHover={{ y: -4 }}
              className="relative bg-white border border-gray-100 p-6 shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              {/* Gold top accent */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gold-gradient" />

              {/* Quote icon */}
              <FaQuoteLeft size={24} className="text-navy-100 mb-4" />

              {/* Stars */}
              <div className="flex items-center gap-1 mb-3">
                {[...Array(t.rating)].map((_, i) => (
                  <FaStar key={i} size={12} className="text-gold-400" />
                ))}
              </div>

              {/* Package label */}
              <div className="inline-block px-2.5 py-1 bg-navy-50 text-navy-600 text-xs font-semibold mb-3">
                {t.package}
              </div>

              {/* Review */}
              <p className="text-navy-600 text-sm leading-relaxed mb-5 italic">
                "{t.review}"
              </p>

              {/* Reviewer */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-10 h-10 bg-navy-gradient flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold text-navy-900 text-sm">{t.name}</p>
                  <div className="flex items-center gap-1 text-navy-400 text-xs">
                    <FiMapPin size={10} />
                    <span>{t.location}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>

        {/* Google rating strip */}
        <ScrollReveal delay={0.2}>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 p-6 bg-white border border-gray-100 max-w-lg mx-auto">
            <div className="flex items-center gap-2">
              <svg viewBox="0 0 24 24" className="w-8 h-8">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} size={14} className="text-gold-400" />
                  ))}
                </div>
                <p className="text-xs text-navy-500 mt-0.5">4.9 / 5 on Google Reviews</p>
              </div>
            </div>
            <div className="sm:border-l border-gray-200 sm:pl-4">
              <p className="font-bold text-navy-900 text-lg">320+ Reviews</p>
              <p className="text-xs text-navy-400">Verified customer feedback</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
