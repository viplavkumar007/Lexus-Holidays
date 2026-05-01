import React from "react";
import { faqs } from "../data/siteContent";
import ScrollReveal, { StaggerContainer } from "../components/ScrollReveal";
import FAQAccordion from "../components/FAQAccordion";
import { motion } from "framer-motion";

export default function FAQ() {
  return (
    <section id="faq" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-14">
          {/* Left: Header */}
          <div className="lg:col-span-2">
            <ScrollReveal>
              <span className="section-label">FAQ</span>
              <h2 className="section-heading mb-4">
                Got Questions?
                <br />
                <span className="text-gradient-gold">We've Got Answers</span>
              </h2>
              <div className="gold-divider mb-6" />
              <p className="text-navy-600 text-base leading-relaxed mb-8">
                Everything you need to know before booking your dream holiday with Lexus Holidays.
              </p>

              <div className="p-6 bg-navy-50 border-l-4 border-gold-500">
                <p className="font-semibold text-navy-900 text-sm mb-1">Still have questions?</p>
                <p className="text-navy-500 text-sm mb-4">Our travel experts are available Mon–Sat, 9:30 AM – 7 PM.</p>
                <a
                  href="https://wa.me/919431600000?text=Hi!%20I%20have%20a%20question%20about%20booking%20a%20holiday."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-gold-600 hover:text-gold-700 transition-colors"
                >
                  Chat on WhatsApp →
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Accordion */}
          <div className="lg:col-span-3">
            <StaggerContainer staggerDelay={0.08} className="space-y-2">
              {faqs.map((faq, index) => (
                <motion.div key={faq.id} variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45, delay: index * 0.07 } } }}>
                  <FAQAccordion faq={faq} index={index} />
                </motion.div>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
