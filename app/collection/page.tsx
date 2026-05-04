"use client";

import Navbar from "@/components/Navbar";
import BestSellers from "@/components/BestSellers";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function CollectionPage() {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const filters = ["All", "Wigs", "Bundles", "Closures"];

  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="px-6 pt-32 pb-20 md:px-12 md:pt-40 bg-white text-slate-900">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs tracking-[0.3em] uppercase text-slate-500 mb-4 text-center animate-fade-in-up animation-delay-300">
            Collection 2026
          </p>
          <h1 className="text-5xl md:text-6xl font-serif text-center animate-fade-in-up animation-delay-500">
            The Edit
          </h1>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-10 border-b border-slate-200 pb-10 text-xs uppercase tracking-[0.4em] text-slate-500 animate-fade-in-up animation-delay-700">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`pb-2 transition-colors ${
                  selectedFilter === filter
                    ? "border-b-2 border-slate-900 text-slate-900"
                    : "hover:text-slate-900"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      <BestSellers selectedFilter={selectedFilter} />
      <Footer />
    </main>
  );
}
