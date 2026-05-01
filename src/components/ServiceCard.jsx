import React from "react";
import { motion } from "framer-motion";
import { brand } from "../data/siteContent";
import {
  FaPlane,
  FaHotel,
  FaRoute,
  FaPassport,
  FaShieldAlt,
  FaUsers,
  FaCarSide,
} from "react-icons/fa";

const iconMap = {
  FaPlane,
  FaHotel,
  FaRoute,
  FaPassport,
  FaShieldAlt,
  FaUsers,
  FaCarSide,
};

const accentMap = {
  "Domestic & International Flights": {
    iconBg: "from-sky-400 via-cyan-400 to-blue-500",
    iconColor: "text-white",
    glow: "bg-cyan-300/40",
    tint: "from-sky-50 via-white to-cyan-50",
    border: "group-hover:border-sky-200",
    chip: "text-sky-700",
  },
  "Domestic & International Hotel Booking": {
    iconBg: "from-rose-400 via-pink-400 to-orange-400",
    iconColor: "text-white",
    glow: "bg-rose-300/40",
    tint: "from-rose-50 via-white to-orange-50",
    border: "group-hover:border-rose-200",
    chip: "text-rose-700",
  },
  "Visa Apply Services": {
    iconBg: "from-violet-500 via-fuchsia-500 to-purple-500",
    iconColor: "text-white",
    glow: "bg-fuchsia-300/35",
    tint: "from-fuchsia-50 via-white to-violet-50",
    border: "group-hover:border-fuchsia-200",
    chip: "text-fuchsia-700",
  },
  "Tour Packages": {
    iconBg: "from-amber-400 via-gold-300 to-orange-400",
    iconColor: "text-navy-900",
    glow: "bg-amber-300/45",
    tint: "from-amber-50 via-white to-yellow-50",
    border: "group-hover:border-amber-200",
    chip: "text-amber-700",
  },
  "Taxi Transfer Services": {
    iconBg: "from-emerald-400 via-lime-400 to-green-500",
    iconColor: "text-navy-900",
    glow: "bg-emerald-300/40",
    tint: "from-emerald-50 via-white to-lime-50",
    border: "group-hover:border-emerald-200",
    chip: "text-emerald-700",
  },
  "Group & Family Travel": {
    iconBg: "from-indigo-400 via-blue-500 to-navy-500",
    iconColor: "text-white",
    glow: "bg-indigo-300/35",
    tint: "from-indigo-50 via-white to-blue-50",
    border: "group-hover:border-indigo-200",
    chip: "text-indigo-700",
  },
  "Complete Travel Support": {
    iconBg: "from-gold-300 via-amber-warm to-amber-fire",
    iconColor: "text-white",
    glow: "bg-gold-300/40",
    tint: "from-gold-50 via-white to-orange-50",
    border: "group-hover:border-gold-200",
    chip: "text-gold-700",
  },
};

const defaultAccent = {
  iconBg: "from-navy-500 via-navy-600 to-navy-800",
  iconColor: "text-white",
  glow: "bg-navy-300/30",
  tint: "from-navy-50 via-white to-white",
  border: "group-hover:border-navy-200",
  chip: "text-navy-700",
};

export default function ServiceCard({ service, index }) {
  const Icon = iconMap[service.icon] || FaPlane;
  const accent = accentMap[service.title] || defaultAccent;
  const whatsappUrl = `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(
    `Hello! I'm interested in your ${service.title} service. Please share more details.`
  )}`;

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1] },
        },
      }}
      whileHover={{ y: -8, rotateX: 1, rotateY: -1 }}
      className={`group relative overflow-hidden border border-gray-100 bg-gradient-to-br ${accent.tint} p-7 shadow-card transition-all duration-300 hover:shadow-card-hover ${accent.border}`}
    >
      <div className="absolute inset-0 bg-noise opacity-50" />
      <div className="absolute inset-x-0 top-0 h-1 bg-gold-gradient opacity-80" />
      <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-white/70 blur-2xl transition-transform duration-500 group-hover:scale-125" />
      <div className={`absolute -left-6 bottom-10 h-20 w-20 rounded-full blur-2xl transition-opacity duration-300 ${accent.glow} opacity-70 group-hover:opacity-100`} />

      <div className="relative z-10">
        <div className="mb-5 flex items-start justify-between gap-4">
          <div className={`relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${accent.iconBg} shadow-lg`}>
            <div className="absolute inset-[1px] rounded-2xl bg-white/12" />
            <div className="absolute left-2 top-2 h-3 w-6 rounded-full bg-white/35 blur-sm" />
            <Icon className={`relative ${accent.iconColor}`} size={22} />
          </div>
          <span className={`text-[11px] font-bold uppercase tracking-[0.24em] ${accent.chip}`}>
            Premium Service
          </span>
        </div>

        <h3 className="font-display text-lg font-semibold text-navy-900 mb-2">
          {service.title}
        </h3>
        <p className="text-sm leading-relaxed text-navy-700">
          {service.description}
        </p>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-navy-900 transition-all duration-300 hover:text-gold-700"
        >
          <span>Learn More</span>
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/80 shadow-sm transition-transform duration-300 group-hover:translate-x-1">
            +
          </span>
        </a>
      </div>
    </motion.div>
  );
}
