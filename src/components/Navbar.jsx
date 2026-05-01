import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { brand, navLinks } from "../data/siteContent";
import logo from "../assets/logo-transparent.png";
import { FiPhone, FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (href) => {
    setMobileOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-navy border-b border-gray-100"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo */}
            <a
              href="#hero"
              onClick={(e) => { e.preventDefault(); handleNav("#hero"); }}
              className={`flex items-center gap-3 focus:outline-none px-3 py-2 transition-all duration-300 ${
                scrolled
                  ? "bg-transparent"
                  : "bg-white/10 border border-white/25 backdrop-blur-sm"
              }`}
            >
              <img src={logo} alt="Lexus Holidays" className="h-14 md:h-16 w-auto" />
              <div className={`hidden sm:block transition-colors duration-300 ${scrolled ? "text-navy-900" : "text-white"}`}>
                <div className="font-display font-bold text-lg leading-none tracking-wide">
                  LEXUS
                </div>
                <div className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-500">
                  Holidays
                </div>
              </div>
            </a>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const id = link.href.replace("#", "");
                const isActive = activeSection === id;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                    className={`relative px-3 py-2 text-sm font-medium tracking-wide transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gold-400 rounded-sm ${
                      scrolled
                        ? isActive
                          ? "text-navy-900"
                          : "text-navy-600 hover:text-navy-900"
                        : isActive
                        ? "text-white"
                        : "text-white/80 hover:text-white"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="nav-indicator"
                        className="absolute bottom-0 left-3 right-3 h-0.5 bg-gold-gradient"
                      />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* CTA + Hamburger */}
            <div className="flex items-center gap-3">
              <a
                href={`tel:${brand.phone}`}
                className={`hidden md:flex items-center gap-2 px-4 py-2 text-sm font-semibold tracking-wide transition-all duration-300 ${
                  scrolled
                    ? "bg-navy-900 text-white hover:bg-navy-700"
                    : "bg-white/10 text-white border border-white/30 hover:bg-white hover:text-navy-900 backdrop-blur-sm"
                }`}
              >
                <FiPhone size={14} />
                {brand.phone}
              </a>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={`lg:hidden p-2 focus:outline-none transition-colors ${
                  scrolled ? "text-navy-900" : "text-white"
                }`}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <FiX size={22} /> : <FiMenu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-navy-950 pt-20 lg:hidden"
          >
            <nav className="flex flex-col p-6 gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                  className="py-4 px-4 text-white font-semibold text-lg border-b border-navy-800 hover:text-gold-400 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={`tel:${brand.phone}`}
                className="mt-6 btn-primary justify-center"
              >
                <FiPhone /> {brand.phone}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
