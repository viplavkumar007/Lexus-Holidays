import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Packages from "./sections/Packages";
import Services from "./sections/Services";
import Hotels from "./sections/Hotels";
import About from "./sections/About";
import Testimonials from "./sections/Testimonials";
import FAQ from "./sections/FAQ";
import Contact from "./sections/Contact";
import CTAStrip from "./components/CTAStrip";
import Footer from "./components/Footer";
import Toast from "./components/Toast";

export default function App() {
  const [toast, setToast] = useState(null);

  const showToast = (message, type = "success") => {
    setToast({ message, type });
  };

  const dismissToast = () => setToast(null);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Packages />
        <Services />
        <Hotels />
        <About />
        <CTAStrip />
        <Testimonials />
        <FAQ />
        <Contact showToast={showToast} />
      </main>
      <Footer />
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onDismiss={dismissToast}
        />
      )}
    </div>
  );
}
