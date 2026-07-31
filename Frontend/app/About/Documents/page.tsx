"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";

import SearchBar from "@/components/Documents/SearchBar";
import CategoryTabs from "@/components/Documents/CategoryTabs";
import DocumentCard from "@/components/Documents/DocumentCard";

import { documents, categories } from "@/data/documents";

export default function DocumentsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredDocuments = useMemo(() => {
    return documents.filter((doc) => {
      const matchesCategory =
        selectedCategory === "All" ||
        doc.category === selectedCategory;

      const query = searchTerm.toLowerCase();

      const matchesSearch =
        doc.title.toLowerCase().includes(query) ||
        doc.description.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, selectedCategory]);

  const featuredDocuments = useMemo(() => {
    return documents.filter((doc) => doc.featured);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#eef5f1] via-white to-[#f7f4eb]">

      {/* Hero */}

      <section className="relative overflow-hidden">

        <div className="absolute inset-0 opacity-5">
          <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-[#156445]" />
          <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#E4CC6F]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-20">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >

            <div className="inline-flex items-center gap-2 bg-[#156445]/10 text-[#156445] px-5 py-2 rounded-full font-semibold mb-6">
              <FileText size={18} />
              School Documents Portal
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-[#156445]">
              School Documents
            </h1>

            <p className="mt-6 max-w-3xl mx-auto text-gray-600 text-lg leading-8">
              Access academic documents, CBSE certificates,
              mandatory disclosures and downloadable forms
              from one place.
            </p>

          </motion.div>

        </div>

      </section>

      {/* Content */}

      <section className="max-w-7xl mx-auto px-6 pb-20">

        {/* Search */}

        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

        {/* Categories */}

        <CategoryTabs
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        {/* Featured */}

        {selectedCategory === "All" &&
          searchTerm === "" && (
            <>
              <div className="flex items-center justify-between mb-8">

                <h2 className="text-3xl font-bold text-[#156445]">
                  ⭐ Featured Documents
                </h2>

                <span className="text-gray-500">
                  {featuredDocuments.length} Documents
                </span>

              </div>

              <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3 mb-20">

                {featuredDocuments.map((document) => (
                  <DocumentCard
                    key={document.id}
                    document={document}
                  />
                ))}

              </div>
            </>
          )}

        {/* All Documents */}

        <div className="flex items-center justify-between mb-8">

          <h2 className="text-3xl font-bold text-[#156445]">
            {selectedCategory === "All"
              ? "All Documents"
              : selectedCategory}
          </h2>

          <span className="bg-[#156445]/10 text-[#156445] px-4 py-2 rounded-full font-semibold">
            {filteredDocuments.length} Documents
          </span>

        </div>

        {filteredDocuments.length > 0 ? (

          <motion.div
            layout
            className="grid gap-8 md:grid-cols-2 xl:grid-cols-3"
          >

            {filteredDocuments.map((document) => (

              <DocumentCard
                key={document.id}
                document={document}
              />

            ))}

          </motion.div>

        ) : (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white rounded-3xl shadow-lg p-16 text-center"
          >

            <div className="w-24 h-24 mx-auto rounded-full bg-[#156445]/10 flex items-center justify-center mb-6">

              <FileText
                size={42}
                className="text-[#156445]"
              />

            </div>

            <h3 className="text-2xl font-bold text-[#156445]">
              No Documents Found
            </h3>

            <p className="mt-4 text-gray-500">
              Try another keyword or choose a different
              category.
            </p>

          </motion.div>

        )}

      </section>

    </div>
  );
}