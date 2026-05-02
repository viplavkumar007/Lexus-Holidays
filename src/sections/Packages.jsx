import React, { useState } from "react";
import { motion } from "framer-motion";
import { holidayPackages, brand } from "../data/siteContent";
import ScrollReveal, { StaggerContainer, staggerItem } from "../components/ScrollReveal";
import { FiClock, FiMapPin, FiArrowRight } from "react-icons/fi";
import { FaStar } from "react-icons/fa";

const categories = ["All", "Domestic", "International", "Pilgrimage"];

const badgeColors = {
  "Best Seller": "bg-gold-500 text-navy-900",
  "Popular": "bg-navy-700 text-white",
  "Trending": "bg-amber-warm text-white",
  "Premium": "bg-navy-900 text-gold-400",
  "Luxury": "bg-gold-gradient text-navy-900",
  "Hot Deal": "bg-amber-fire text-white",
  "Spiritual": "bg-indigo-700 text-white",
  "Adventure": "bg-green-700 text-white",
};

export default function Packages() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? holidayPackages
      : holidayPackages.filter((p) => p.category === activeCategory);

  const handleEnquire = (pkg) => {
    const msg = encodeURIComponent(
      `Hi! I'm interested in the *${pkg.destination}* package (${pkg.duration}). Please share more details.`
    );
    window.open(`https://wa.me/${brand.whatsapp}?text=${msg}`, "_blank");
  };

  return (
    <section id="packages" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="section-label">Holiday Packages</span>
            <h2 className="section-heading mb-4">
              Curated Journeys,
              <br />
              <span className="text-gradient-gold">Unforgettable Memories</span>
            </h2>
            <div className="gold-divider mx-auto" />
            <p className="text-navy-600 text-base max-w-xl mx-auto mt-4">
              From 4 Dham Yatra and Manali tours to international holidays, pick a package or ask us to build one for you.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 text-sm font-semibold tracking-wide transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-navy-400 ${
                  activeCategory === cat
                    ? "bg-navy-900 text-white"
                    : "bg-white text-navy-600 border border-gray-200 hover:border-navy-400"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <StaggerContainer staggerDelay={0.08} className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((pkg) => (
            <motion.div
              key={pkg.id}
              variants={staggerItem}
              whileHover={{ y: -6 }}
              className="group bg-white border border-gray-100 overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={pkg.image}
                  alt={pkg.destination}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 to-transparent" />

                <span className={`absolute top-3 left-3 px-2.5 py-1 text-xs font-bold tracking-wide uppercase ${badgeColors[pkg.badge] || "bg-navy-700 text-white"}`}>
                  {pkg.badge}
                </span>

                <span className="absolute top-3 right-3 px-2.5 py-1 text-xs font-semibold bg-white/90 text-navy-700 tracking-wide">
                  {pkg.category}
                </span>

                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-white">
                  <FiMapPin size={12} />
                  <span className="font-semibold text-sm">{pkg.destination}</span>
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} size={10} className="text-gold-400" />
                  ))}
                </div>
                <div className="flex items-center gap-1.5 text-navy-500 text-xs mb-3">
                  <FiClock size={11} />
                  <span>{pkg.duration}</span>
                </div>
                <p className="text-navy-600 text-xs leading-relaxed mb-4 line-clamp-2">
                  {pkg.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {pkg.highlights.slice(0, 3).map((h) => (
                    <span key={h} className="px-2 py-0.5 bg-navy-50 text-navy-600 text-xs font-medium">
                      {h}
                    </span>
                  ))}
                  {pkg.highlights.length > 3 && (
                    <span className="px-2 py-0.5 bg-gold-50 text-gold-700 text-xs font-medium">
                      +{pkg.highlights.length - 3} more
                    </span>
                  )}
                </div>

                <div className="pt-3 border-t border-gray-100">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => handleEnquire(pkg)}
                    className="flex w-full items-center justify-center gap-1.5 px-4 py-2 bg-navy-900 text-white text-xs font-bold tracking-wide uppercase hover:bg-gold-500 hover:text-navy-900 transition-colors duration-200"
                  >
                    Enquire
                    <FiArrowRight size={12} />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>

        <ScrollReveal delay={0.2}>
          <div className="text-center mt-12">
            <p className="text-navy-500 text-sm mb-4">
              Don't see your destination? We create fully custom packages.
            </p>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
              className="btn-outline"
            >
              Request Custom Package
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
