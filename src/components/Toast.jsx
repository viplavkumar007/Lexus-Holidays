import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiCheckCircle, FiXCircle, FiX } from "react-icons/fi";

export default function Toast({ message, type = "success", onDismiss }) {
  useEffect(() => {
    const timer = setTimeout(onDismiss, 5000);
    return () => clearTimeout(timer);
  }, [onDismiss]);

  const isSuccess = type === "success";

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.95 }}
        role="alert"
        aria-live="assertive"
        className={`fixed bottom-6 right-6 z-[100] flex items-start gap-3 px-5 py-4 shadow-xl max-w-sm ${
          isSuccess ? "bg-navy-900 text-white" : "bg-red-600 text-white"
        }`}
      >
        <div className="flex-shrink-0 mt-0.5">
          {isSuccess ? (
            <FiCheckCircle size={20} className="text-gold-400" />
          ) : (
            <FiXCircle size={20} />
          )}
        </div>
        <p className="text-sm font-medium leading-snug flex-1">{message}</p>
        <button
          onClick={onDismiss}
          className="flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity"
          aria-label="Dismiss notification"
        >
          <FiX size={16} />
        </button>
      </motion.div>
    </AnimatePresence>
  );
}
