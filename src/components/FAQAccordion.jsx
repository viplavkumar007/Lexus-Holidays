import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";

export default function FAQAccordion({ faq, index }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 16 },
        visible: {
          opacity: 1, y: 0,
          transition: { duration: 0.45, delay: index * 0.07 }
        }
      }}
      className="border border-gray-200 bg-white"
    >
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full flex items-center justify-between px-6 py-5 text-left group focus:outline-none focus:ring-2 focus:ring-inset focus:ring-navy-400"
      >
        <span className={`font-semibold text-base transition-colors duration-200 ${open ? "text-navy-900" : "text-navy-700 group-hover:text-navy-900"}`}>
          {faq.question}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className={`flex-shrink-0 ml-4 p-1 transition-colors duration-200 ${open ? "text-gold-500" : "text-navy-400"}`}
        >
          <FiChevronDown size={18} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 pt-0 border-t border-gray-100">
              <p className="text-navy-600 text-sm leading-relaxed mt-4">
                {faq.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
