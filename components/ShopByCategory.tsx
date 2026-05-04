"use client";

import Image from "next/image";

const categories = [
  {
    title: "Wigs",
    image: "/images/cat-wigs.jpg",
  },
  {
    title: "Bundles",
    image: "/images/cat-bundles.jpg",
  },
  {
    title: "Closures",
    image: "/images/cat-closures.jpg",
  },
];

export default function ShopByCategory() {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-12">
      
      {/* HEADER */}
      <div className="flex items-end justify-between mb-12">
        <div>
          <p className="text-xs tracking-[0.3em] uppercase text-gray-500 mb-3">
            The Edit
          </p>
          <h2 className="text-4xl md:text-6xl font-serif text-black">
            Shop by category
          </h2>
        </div>

        <button className="text-xs tracking-[0.3em] uppercase border-b border-black pb-1 hover:opacity-60 transition">
          View All
        </button>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((item, index) => (
          <div
            key={index}
            className="relative group overflow-hidden aspect-[4/5] md:aspect-[3/2] min-h-[320px]"
          >
            {/* IMAGE */}
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover group-hover:scale-105 transition duration-700"
            />

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition" />

            {/* TEXT */}
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-2xl md:text-3xl font-serif">
                {item.title}
              </h3>

              <p className="text-xs tracking-[0.3em] uppercase mt-2 opacity-80">
                Discover →
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}