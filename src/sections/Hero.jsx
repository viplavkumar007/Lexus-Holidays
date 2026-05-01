import React from "react";
import { motion } from "framer-motion";
import { hero, brand } from "../data/siteContent";
import { FiArrowRight, FiMessageSquare } from "react-icons/fi";

const heroImages = [
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=85",
  "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=1600&q=85",
  "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1600&q=85",
];

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } },
};

export default function Hero() {
  const whatsappUrl = `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(brand.tagline + " – I'd like to explore holiday packages!")}`;

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImages[0]}
          alt="Luxury travel destination"
          className="w-full h-full object-cover"
          loading="eager"
        />
        {/* Layered overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-900/75 to-navy-800/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-10"
        style={{ background: "linear-gradient(135deg, transparent 0%, rgba(245,196,94,0.15) 100%)" }} />

      {/* Gold vertical accent line */}
      <div className="absolute left-0 top-1/4 bottom-1/4 w-1 bg-gold-gradient hidden lg:block" />

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="max-w-3xl">
          <motion.div variants={stagger} initial="hidden" animate="visible">
            {/* Badge */}
            <motion.div variants={fadeUp} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-xs font-semibold tracking-[0.2em] uppercase">
                <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
                {hero.badge}
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1 variants={fadeUp} className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] text-white mb-4">
              {hero.heading}
              <br />
              <span className="text-gradient-gold">{hero.headingAccent}</span>
            </motion.h1>

            {/* Divider */}
            <motion.div variants={fadeUp} className="w-20 h-0.5 bg-gold-gradient mb-6" />

            {/* Subheading */}
            <motion.p variants={fadeUp} className="text-lg md:text-xl text-white/80 leading-relaxed max-w-xl mb-8">
              {hero.subheading}
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
              <a
                href="#packages"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("packages")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="animate-pulse-gold inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold-gradient text-navy-900 font-bold text-sm tracking-wider uppercase transition-all duration-300 hover:-translate-y-0.5 hover:shadow-gold active:translate-y-0"
              >
                Explore Packages
                <FiArrowRight size={16} />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] text-white font-bold text-sm tracking-wider uppercase transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1ebe5d] active:translate-y-0"
              >
                <FiMessageSquare size={16} />
                WhatsApp Expert
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.7 }}
          className="absolute bottom-8 left-4 right-4 sm:left-6 sm:right-6 lg:left-8 lg:right-8"
        >
          <div className="max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 backdrop-blur-sm border border-white/10">
            {hero.stats.map((stat) => (
              <div key={stat.label} className="bg-navy-900/60 px-6 py-4 text-center">
                <div className="font-display font-bold text-2xl md:text-3xl text-gold-400 leading-none mb-1">
                  {stat.value}
                </div>
                <div className="text-white/70 text-xs font-medium tracking-wide uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-32 right-8 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-white/50 text-xs font-medium tracking-[0.2em] uppercase rotate-90 mb-4">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-12 bg-gradient-to-b from-gold-400 to-transparent"
        />
      </motion.div>
    </section>
  );
}
