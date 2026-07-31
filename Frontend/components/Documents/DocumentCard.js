"use client";

import { motion } from "framer-motion";
import {
  FileText,
  ExternalLink,
  Calendar,
  HardDrive,
  Star,
} from "lucide-react";

export default function DocumentCard({ document }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
      className="
        relative
        overflow-hidden
        rounded-3xl
        bg-white
        border
        border-gray-200
        shadow-md
        hover:shadow-2xl
        hover:border-[#E4CC6F]
        transition-all
        duration-300
        group
      "
    >
      {/* Featured Ribbon */}
      {document.featured && (
        <div className="absolute top-5 right-5 z-20">
          <div className="flex items-center gap-1 bg-[#E4CC6F] text-[#156445] px-3 py-1 rounded-full text-xs font-bold shadow">
            <Star size={14} fill="currentColor" />
            Featured
          </div>
        </div>
      )}

      {/* Top Gradient */}
      <div className="h-2 bg-gradient-to-r from-[#156445] via-[#0D6453] to-[#E4CC6F]" />

      <div className="p-7 flex flex-col h-full">
        {/* Icon + Title */}
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 rounded-2xl bg-[#156445]/10 flex items-center justify-center group-hover:bg-[#156445] transition">
            <FileText
              size={32}
              className="text-[#156445] group-hover:text-white transition"
            />
          </div>

          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-800 group-hover:text-[#156445] transition">
              {document.title}
            </h3>

            <p className="text-gray-500 mt-2 leading-relaxed">
              {document.description}
            </p>
          </div>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap gap-3 mt-6">
          <span className="px-3 py-1 rounded-full bg-red-100 text-red-600 text-sm font-semibold">
            {document.type}
          </span>

          <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold">
            <HardDrive size={14} />
            {document.size}
          </span>

          <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-semibold">
            <Calendar size={14} />
            {document.updated}
          </span>

          <span className="px-3 py-1 rounded-full bg-[#156445]/10 text-[#156445] text-sm font-semibold">
            {document.category}
          </span>
        </div>

        {/* Spacer */}
        <div className="flex-grow" />

        {/* Bottom */}
        <div className="mt-8 flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">
              Click below to view this document.
            </p>
          </div>

          <a
            href={document.link}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              items-center
              gap-2
              rounded-xl
              bg-gradient-to-r
              from-[#156445]
              to-[#0D6453]
              px-5
              py-3
              text-white
              font-semibold
              shadow-lg
              hover:shadow-xl
              hover:scale-105
              transition
            "
          >
            Open

            <ExternalLink
              size={18}
              className="group-hover:translate-x-1 transition"
            />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
