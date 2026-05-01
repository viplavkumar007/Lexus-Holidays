import React from "react";
import { motion } from "framer-motion";
import {
  FaPlane, FaHotel, FaRoute, FaPassport, FaShieldAlt, FaUsers
} from "react-icons/fa";

const iconMap = {
  FaPlane, FaHotel, FaRoute, FaPassport, FaShieldAlt, FaUsers
};

export default function ServiceCard({ service, index }) {
  const Icon = iconMap[service.icon] || FaPlane;

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: {
          opacity: 1, y: 0,
          transition: { duration: 0.5, delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1] }
        }
      }}
      whileHover={{ y: -4, rotateX: 1, rotateY: -1 }}
      className="group relative bg-white border border-gray-100 p-7 shadow-card hover:shadow-card-hover transition-all duration-300 cursor-default"
    >
      {/* Gold accent top border on hover */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gold-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="w-12 h-12 bg-navy-50 flex items-center justify-center mb-5 group-hover:bg-navy-900 transition-colors duration-300">
        <Icon className="text-navy-600 group-hover:text-gold-400 transition-colors duration-300" size={20} />
      </div>
      <h3 className="font-display font-semibold text-navy-900 text-lg mb-2">
        {service.title}
      </h3>
      <p className="text-navy-600 text-sm leading-relaxed">
        {service.description}
      </p>

      <div className="mt-5 flex items-center gap-1.5 text-xs font-semibold text-gold-600 tracking-wide uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span>Learn More</span>
        <span>→</span>
      </div>
    </motion.div>
  );
}
