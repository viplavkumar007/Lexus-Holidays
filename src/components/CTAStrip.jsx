import React from "react";
import { motion } from "framer-motion";
import { brand } from "../data/siteContent";
import { FiPhone, FiMessageSquare } from "react-icons/fi";

export default function CTAStrip() {
  const whatsappUrl = `https://wa.me/${brand.whatsapp}?text=Hello!%20I'm%20interested%20in%20booking%20a%20holiday%20package.`;

  return (
    <section className="relative overflow-hidden bg-navy-900 py-14">
      {/* Animated background glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-32 rounded-full blur-3xl"
        style={{ background: "radial-gradient(ellipse, rgba(245,196,94,0.4) 0%, transparent 70%)" }}
      />

      {/* Gold top border */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gold-gradient" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label text-gold-400 mb-2">Limited Time Offers</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Your Dream Holiday is{" "}
            <span className="text-gradient-gold">One Call Away</span>
          </h2>
          <p className="text-navy-200 text-base md:text-lg mb-8 max-w-xl mx-auto">
            Talk to our travel expert today. Free consultation, instant quotes, and exclusive deals for Jharkhand travellers.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`tel:${brand.phone}`}
              className="animate-pulse-gold inline-flex items-center gap-2 px-8 py-4 bg-gold-gradient text-navy-900 font-bold text-sm tracking-wider uppercase transition-all duration-300 hover:-translate-y-0.5 hover:shadow-gold"
            >
              <FiPhone size={16} />
              Call Now: {brand.phone}
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] text-white font-bold text-sm tracking-wider uppercase transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1ebe5d]"
            >
              <FiMessageSquare size={16} />
              WhatsApp Us
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold-gradient" />
    </section>
  );
}
