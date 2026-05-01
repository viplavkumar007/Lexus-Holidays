import React from "react";
import { motion } from "framer-motion";
import { hotelPackages, brand } from "../data/siteContent";
import ScrollReveal, { StaggerContainer, staggerItem } from "../components/ScrollReveal";
import { FaStar, FaWifi } from "react-icons/fa";
import { FiMapPin, FiArrowRight } from "react-icons/fi";

export default function Hotels() {
  const handleEnquire = (hotel) => {
    const msg = encodeURIComponent(
      `Hi! I'm interested in *${hotel.name}* (${hotel.location}) at ${hotel.pricePerNight}/night. Please share availability and booking details.`
    );
    window.open(`https://wa.me/${brand.whatsapp}?text=${msg}`, "_blank");
  };

  return (
    <section id="hotels" className="py-20 lg:py-28 bg-navy-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-14">
            <span className="section-label text-gold-400">Luxury Accommodations</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
              Stay Where Every Room
              <br />
              <span className="text-gradient-gold">Tells a Story</span>
            </h2>
            <div className="gold-divider mx-auto" />
            <p className="text-navy-300 text-base max-w-xl mx-auto mt-4">
              We partner with India's finest hotels and resorts to offer you unbeatable rates and exclusive perks.
            </p>
          </div>
        </ScrollReveal>

        {/* Hotels grid */}
        <StaggerContainer staggerDelay={0.1} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {hotelPackages.map((hotel) => (
            <motion.div
              key={hotel.id}
              variants={staggerItem}
              whileHover={{ y: -5 }}
              className="group relative bg-navy-900 border border-navy-800 overflow-hidden hover:border-gold-600/50 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-52">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/20 to-transparent" />

                {/* Stars */}
                <div className="absolute top-3 left-3 flex items-center gap-0.5">
                  {[...Array(hotel.stars)].map((_, i) => (
                    <FaStar key={i} size={10} className="text-gold-400" />
                  ))}
                </div>

                {/* Category badge */}
                <span className="absolute top-3 right-3 px-2.5 py-1 bg-gold-500 text-navy-900 text-xs font-bold tracking-wide">
                  {hotel.category}
                </span>

                {/* Hotel name overlay */}
                <div className="absolute bottom-3 left-4 right-4">
                  <h3 className="font-display font-bold text-white text-lg leading-tight">
                    {hotel.name}
                  </h3>
                  <div className="flex items-center gap-1 text-gold-400 text-xs mt-0.5">
                    <FiMapPin size={11} />
                    <span>{hotel.location}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <p className="text-navy-300 text-xs leading-relaxed mb-4">
                  {hotel.description}
                </p>

                {/* Amenities */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {hotel.amenities.slice(0, 4).map((a) => (
                    <span key={a} className="px-2 py-0.5 bg-navy-800 text-navy-300 text-xs border border-navy-700">
                      {a}
                    </span>
                  ))}
                  {hotel.amenities.length > 4 && (
                    <span className="px-2 py-0.5 bg-gold-900/30 text-gold-400 text-xs border border-gold-800/30">
                      +{hotel.amenities.length - 4}
                    </span>
                  )}
                </div>

                {/* Price + CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-navy-800">
                  <div>
                    <p className="text-navy-400 text-xs mb-0.5">From</p>
                    <p className="font-display font-bold text-xl text-gold-400">
                      {hotel.pricePerNight}
                    </p>
                    <p className="text-navy-400 text-xs">per night</p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => handleEnquire(hotel)}
                    className="flex items-center gap-1.5 px-4 py-2.5 bg-gold-gradient text-navy-900 text-xs font-bold tracking-wide uppercase hover:shadow-gold transition-all duration-200"
                  >
                    Book Now
                    <FiArrowRight size={12} />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>

        {/* Bottom note */}
        <ScrollReveal delay={0.2}>
          <div className="text-center mt-12">
            <p className="text-navy-400 text-sm mb-4">
              ✦ All hotel bookings include complimentary travel insurance consultation ✦
            </p>
            <a href="#contact"
              onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
              className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-gold-500 text-gold-400 font-semibold text-sm tracking-wider uppercase transition-all duration-300 hover:bg-gold-500 hover:text-navy-900">
              Request Hotel Package
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
