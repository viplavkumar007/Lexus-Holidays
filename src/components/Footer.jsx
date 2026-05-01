import React from "react";
import { brand, navLinks } from "../data/siteContent";
import logo from "../assets/logo.png";
import { FiPhone, FiMail, FiMapPin, FiInstagram, FiFacebook, FiYoutube } from "react-icons/fi";

export default function Footer() {
  const year = new Date().getFullYear();
  const whatsappUrl = `https://wa.me/${brand.whatsapp}?text=Hello!%20I'd%20like%20to%20enquire%20about%20holiday%20packages.`;

  return (
    <footer className="bg-navy-950 text-white">
      {/* Gold top border */}
      <div className="h-0.5 bg-gold-gradient" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <img src={logo} alt="Lexus Holidays" className="h-12 w-auto" />
              <div>
                <div className="font-display font-bold text-lg leading-none">LEXUS</div>
                <div className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-400">Holidays</div>
              </div>
            </div>
            <p className="text-navy-300 text-sm leading-relaxed mb-5">
              Jharkhand's premier travel company crafting extraordinary journeys since 2012. Your adventure begins here.
            </p>
            <div className="flex items-center gap-3">
              <a href={brand.socialLinks.instagram} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 bg-navy-800 flex items-center justify-center hover:bg-gold-500 hover:text-navy-900 transition-colors duration-200">
                <FiInstagram size={15} />
              </a>
              <a href={brand.socialLinks.facebook} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 bg-navy-800 flex items-center justify-center hover:bg-gold-500 hover:text-navy-900 transition-colors duration-200">
                <FiFacebook size={15} />
              </a>
              <a href={brand.socialLinks.youtube} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 bg-navy-800 flex items-center justify-center hover:bg-gold-500 hover:text-navy-900 transition-colors duration-200">
                <FiYoutube size={15} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-sm tracking-[0.15em] uppercase text-gold-400 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}
                    className="text-navy-300 text-sm hover:text-white transition-colors duration-200 flex items-center gap-2 group">
                    <span className="w-4 h-px bg-gold-600 group-hover:w-6 transition-all duration-200" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Destinations */}
          <div>
            <h3 className="font-semibold text-sm tracking-[0.15em] uppercase text-gold-400 mb-4">Popular Destinations</h3>
            <ul className="space-y-2">
              {["Goa", "Kerala", "Rajasthan", "Bali", "Thailand", "Maldives", "Char Dham", "Manali"].map((dest) => (
                <li key={dest}>
                  <a href="#packages"
                    className="text-navy-300 text-sm hover:text-white transition-colors duration-200 flex items-center gap-2 group">
                    <span className="w-4 h-px bg-gold-600 group-hover:w-6 transition-all duration-200" />
                    {dest}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-sm tracking-[0.15em] uppercase text-gold-400 mb-4">Get in Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FiMapPin size={15} className="text-gold-400 mt-0.5 flex-shrink-0" />
                <span className="text-navy-300 text-sm">{brand.address}</span>
              </li>
              <li>
                <a href={`tel:${brand.phone}`}
                  className="flex items-center gap-3 text-navy-300 hover:text-gold-400 transition-colors text-sm">
                  <FiPhone size={15} className="text-gold-400 flex-shrink-0" />
                  {brand.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${brand.email}`}
                  className="flex items-center gap-3 text-navy-300 hover:text-gold-400 transition-colors text-sm">
                  <FiMail size={15} className="text-gold-400 flex-shrink-0" />
                  {brand.email}
                </a>
              </li>
            </ul>
            <a
              href={whatsappUrl} target="_blank" rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366] text-white text-xs font-bold tracking-wider uppercase hover:bg-[#1ebe5d] transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-navy-400 text-xs">
            © {year} Lexus Holidays. All rights reserved. | {brand.gst}
          </p>
          <p className="text-navy-400 text-xs">
            Ranchi, Jharkhand | Crafting Extraordinary Journeys
          </p>
        </div>
      </div>
    </footer>
  );
}
