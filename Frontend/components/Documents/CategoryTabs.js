"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  School,
  ShieldCheck,
  FileText,
  LayoutGrid,
} from "lucide-react";

const icons = {
  All: LayoutGrid,
  Academic: GraduationCap,
  CBSE: School,
  "Mandatory Disclosure": ShieldCheck,
  Forms: FileText,
};

export default function CategoryTabs({
  categories,
  selectedCategory,
  setSelectedCategory,
}) {
  return (
    <div className="w-full mb-10">
      <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2">
        {categories.map((category) => {
          const Icon = icons[category] || FileText;
          const active = selectedCategory === category;

          return (
            <motion.button
              key={category}
              whileHover={{ y: -2, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setSelectedCategory(category)}
              className={`
                flex
                items-center
                gap-2
                whitespace-nowrap
                rounded-full
                px-6
                py-3
                font-semibold
                transition-all
                duration-300
                border

                ${
                  active
                    ? "bg-gradient-to-r from-[#156445] to-[#0D6453] text-white border-transparent shadow-lg"
                    : "bg-white text-gray-700 border-gray-200 hover:border-[#E4CC6F] hover:text-[#156445] hover:shadow-md"
                }
              `}
            >
              <Icon size={18} />

              {category}

              {active && (
                <motion.div
                  layoutId="activeDot"
                  className="w-2 h-2 rounded-full bg-[#E4CC6F]"
                />
              )}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}