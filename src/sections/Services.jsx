import React from "react";
import { motion } from "framer-motion";
import { services } from "../data/siteContent";
import ScrollReveal, { StaggerContainer } from "../components/ScrollReveal";
import ServiceCard from "../components/ServiceCard";

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-end mb-14">
          <ScrollReveal>
            <div>
              <span className="section-label">What We Do</span>
              <h2 className="section-heading mb-4">
                Complete Travel
                <br />
                <span className="text-gradient-gold">Solutions Under One Roof</span>
              </h2>
              <div className="gold-divider" />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="text-navy-600 text-base leading-relaxed lg:text-right">
              We handle domestic and international hotel bookings, flights, visa support,
              tour packages, and one-place-to-another taxi services so your trip is managed in one place.
            </p>
          </ScrollReveal>
        </div>

        <StaggerContainer staggerDelay={0.08} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </StaggerContainer>

        <ScrollReveal delay={0.2}>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-gray-100">
            {[
              { value: "200+", label: "Destinations Covered" },
              { value: "50+", label: "Visa Countries" },
              { value: "24/7", label: "Travel Support" },
              { value: "100%", label: "Transparent Pricing" },
            ].map((item) => (
              <div key={item.label} className="bg-navy-900 px-6 py-6 text-center">
                <div className="font-display font-bold text-2xl text-gold-400 mb-1">{item.value}</div>
                <div className="text-navy-300 text-xs font-medium tracking-wide uppercase">{item.label}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
