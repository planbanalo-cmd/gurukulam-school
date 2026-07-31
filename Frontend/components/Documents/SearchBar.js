"use client";

import { Search, X } from "lucide-react";

export default function SearchBar({
  searchTerm,
  setSearchTerm,
}) {
  return (
    <div className="relative w-full max-w-2xl mx-auto mb-10">
      {/* Search Icon */}
      <Search
        size={22}
        className="absolute left-5 top-1/2 -translate-y-1/2 text-[#156445]"
      />

      {/* Input */}
      <input
        type="text"
        placeholder="Search documents..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="
          w-full
          pl-14
          pr-14
          py-4
          rounded-2xl
          border-2
          border-[#156445]/20
          bg-white
          text-gray-800
          placeholder:text-gray-400
          shadow-lg
          outline-none
          transition-all
          duration-300
          focus:border-[#156445]
          focus:ring-4
          focus:ring-[#156445]/10
          hover:shadow-xl
        "
      />

      {/* Clear Button */}
      {searchTerm && (
        <button
          onClick={() => setSearchTerm("")}
          className="
            absolute
            right-5
            top-1/2
            -translate-y-1/2
            p-1
            rounded-full
            hover:bg-gray-100
            transition
          "
        >
          <X
            size={18}
            className="text-gray-500 hover:text-red-500"
          />
        </button>
      )}
    </div>
  );
}