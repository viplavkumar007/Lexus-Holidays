import React, { useState } from "react";
import { motion } from "framer-motion";
import { contactInfo, brand } from "../data/siteContent";
import { FiSend, FiLoader } from "react-icons/fi";

const initialForm = {
  name: "",
  phone: "",
  email: "",
  destination: "",
  travelDate: "",
  travellers: "",
  budget: "",
  message: "",
};

const destinations = [
  "Goa", "Kerala", "Rajasthan", "Himachal Pradesh", "Uttarakhand",
  "Bali", "Thailand", "Maldives", "Dubai", "Singapore", "Europe",
  "Char Dham Yatra", "Other / Custom"
];

export default function ContactForm({ showToast }) {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.phone.trim() || !/^\d{10}$/.test(form.phone.replace(/\s/g, "")))
      errs.phone = "Valid 10-digit phone number required";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = "Valid email address required";
    if (!form.destination) errs.destination = "Please select a destination";
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const buildWhatsAppMessage = () => {
    return encodeURIComponent(
      `*Enquiry from Lexus Holidays Website*\n\n` +
      `*Name:* ${form.name}\n` +
      `*Phone:* ${form.phone}\n` +
      `*Email:* ${form.email}\n` +
      `*Destination:* ${form.destination}\n` +
      `*Travel Date:* ${form.travelDate || "Not specified"}\n` +
      `*Travellers:* ${form.travellers || "Not specified"}\n` +
      `*Budget:* ${form.budget || "Not specified"}\n` +
      `*Message:* ${form.message || "—"}`
    );
  };

  const buildEmailBody = () => {
    return encodeURIComponent(
      `Holiday Package Enquiry\n\n` +
      `Name: ${form.name}\n` +
      `Phone: ${form.phone}\n` +
      `Email: ${form.email}\n` +
      `Destination: ${form.destination}\n` +
      `Travel Date: ${form.travelDate || "Not specified"}\n` +
      `Travellers: ${form.travellers || "Not specified"}\n` +
      `Budget: ${form.budget || "Not specified"}\n` +
      `Message: ${form.message || "—"}`
    );
  };

  const handleSubmit = (e, channel) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);

      if (channel === "whatsapp") {
        const url = `https://wa.me/${contactInfo.whatsapp}?text=${buildWhatsAppMessage()}`;
        window.open(url, "_blank");
        showToast("Opening WhatsApp with your enquiry details!");
      } else {
        const subject = encodeURIComponent(contactInfo.emailSubject);
        const body = buildEmailBody();
        window.location.href = `mailto:${contactInfo.email}?subject=${subject}&body=${body}`;
        showToast("Opening your email client with enquiry details!");
      }

      setForm(initialForm);
    }, 800);
  };

  return (
    <form noValidate className="space-y-5">
      {/* Row 1 */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-xs font-semibold text-navy-700 mb-1.5 tracking-wide uppercase">
            Full Name *
          </label>
          <input
            id="name" name="name" type="text"
            value={form.name} onChange={handleChange}
            placeholder="Your full name"
            className={`input-field ${errors.name ? "border-red-400 bg-red-50" : ""}`}
          />
          {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="block text-xs font-semibold text-navy-700 mb-1.5 tracking-wide uppercase">
            Phone Number *
          </label>
          <input
            id="phone" name="phone" type="tel"
            value={form.phone} onChange={handleChange}
            placeholder="10-digit mobile number"
            className={`input-field ${errors.phone ? "border-red-400 bg-red-50" : ""}`}
          />
          {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
        </div>
      </div>

      {/* Row 2 */}
      <div>
        <label htmlFor="email" className="block text-xs font-semibold text-navy-700 mb-1.5 tracking-wide uppercase">
          Email Address *
        </label>
        <input
          id="email" name="email" type="email"
          value={form.email} onChange={handleChange}
          placeholder="your@email.com"
          className={`input-field ${errors.email ? "border-red-400 bg-red-50" : ""}`}
        />
        {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
      </div>

      {/* Row 3 */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="destination" className="block text-xs font-semibold text-navy-700 mb-1.5 tracking-wide uppercase">
            Destination *
          </label>
          <select
            id="destination" name="destination"
            value={form.destination} onChange={handleChange}
            className={`input-field ${errors.destination ? "border-red-400 bg-red-50" : ""}`}
          >
            <option value="">Select destination</option>
            {destinations.map((d) => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>
          {errors.destination && <p className="mt-1 text-xs text-red-500">{errors.destination}</p>}
        </div>
        <div>
          <label htmlFor="travelDate" className="block text-xs font-semibold text-navy-700 mb-1.5 tracking-wide uppercase">
            Travel Date
          </label>
          <input
            id="travelDate" name="travelDate" type="date"
            value={form.travelDate} onChange={handleChange}
            min={new Date().toISOString().split("T")[0]}
            className="input-field"
          />
        </div>
      </div>

      {/* Row 4 */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="travellers" className="block text-xs font-semibold text-navy-700 mb-1.5 tracking-wide uppercase">
            No. of Travellers
          </label>
          <select
            id="travellers" name="travellers"
            value={form.travellers} onChange={handleChange}
            className="input-field"
          >
            <option value="">Select</option>
            {["1", "2", "3-4", "5-8", "9-15", "15+"].map((n) => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="budget" className="block text-xs font-semibold text-navy-700 mb-1.5 tracking-wide uppercase">
            Budget Range
          </label>
          <select
            id="budget" name="budget"
            value={form.budget} onChange={handleChange}
            className="input-field"
          >
            <option value="">Select range</option>
            {[
              "Under ₹15,000",
              "₹15,000 – ₹30,000",
              "₹30,000 – ₹60,000",
              "₹60,000 – ₹1,00,000",
              "Above ₹1,00,000",
            ].map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-xs font-semibold text-navy-700 mb-1.5 tracking-wide uppercase">
          Special Requests
        </label>
        <textarea
          id="message" name="message"
          value={form.message} onChange={handleChange}
          rows={3}
          placeholder="Any special requirements, preferences or questions..."
          className="input-field resize-none"
        />
      </div>

      {/* Submit buttons */}
      <div className="flex flex-col sm:flex-row gap-3 pt-2">
        <motion.button
          type="button"
          onClick={(e) => handleSubmit(e, "whatsapp")}
          disabled={loading}
          whileHover={{ y: -2 }}
          whileTap={{ y: 0 }}
          className="flex-1 flex items-center justify-center gap-2 py-4 bg-[#25D366] text-white font-bold text-sm tracking-wider uppercase transition-all duration-200 hover:bg-[#1ebe5d] disabled:opacity-60"
        >
          {loading ? (
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }}>
              <FiLoader size={16} />
            </motion.div>
          ) : (
            <>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Send via WhatsApp
            </>
          )}
        </motion.button>

        <motion.button
          type="button"
          onClick={(e) => handleSubmit(e, "email")}
          disabled={loading}
          whileHover={{ y: -2 }}
          whileTap={{ y: 0 }}
          className="flex-1 flex items-center justify-center gap-2 py-4 bg-navy-900 text-white font-bold text-sm tracking-wider uppercase transition-all duration-200 hover:bg-navy-700 disabled:opacity-60"
        >
          <FiSend size={15} />
          Send via Email
        </motion.button>
      </div>

      <p className="text-xs text-navy-400 text-center">
        Our travel expert will contact you within 2 hours during business hours.
      </p>
    </form>
  );
}
