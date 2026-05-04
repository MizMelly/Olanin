"use client";

import Image from "next/image";

const products = [
  {
    name: "Luxury Wave Wig",
    category: "WIGS",
    price: "$320",
    image: "/images/p1.jpg",
  },
  {
    name: "Silk Straight Bundle",
    category: "BUNDLES",
    price: "$195",
    image: "/images/p2.jpg",
  },
  {
    name: "Ivory Curl Bob",
    category: "WIGS",
    price: "$240",
    image: "/images/p3.jpg",
  },
  {
    name: "Honey Body Wave",
    category: "WIGS",
    price: "$360",
    image: "/images/p4.jpg",
  },
  {
    name: "Brazilian Closure",
    category: "CLOSURES",
    price: "$85",
    image: "/images/p5.jpg",
  },
  {
    name: "Curly Bundle Deal",
    category: "BUNDLES",
    price: "$275",
    image: "/images/p6.jpg",
  },
];

interface BestSellersProps {
  selectedFilter: string;
}

export default function BestSellers({ selectedFilter }: BestSellersProps) {
  const filteredProducts = selectedFilter === "All"
    ? products
    : products.filter(product => {
        const categoryMap: { [key: string]: string } = {
          "Wigs": "WIGS",
          "Bundles": "BUNDLES",
          "Closures": "CLOSURES"
        };
        return product.category === categoryMap[selectedFilter];
      });

  const staggerClasses = [
    'animation-delay-stagger-0',
    'animation-delay-stagger-1',
    'animation-delay-stagger-2',
    'animation-delay-stagger-3',
    'animation-delay-stagger-4',
    'animation-delay-stagger-5'
  ];

  return (
    <section className="w-full bg-white py-24 px-6 md:px-12">

      {/* HEADER */}
      <div className="text-center mb-16">
        <p className="text-xs tracking-[0.4em] uppercase text-gray-500 mb-4">
          Featured
        </p>

        <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif text-black">
          Best Sellers
        </h2>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredProducts.map((item, index) => (
          <div
            key={index}
            className={`group animate-fade-in-up ${staggerClasses[index % staggerClasses.length]}`}
          >

            {/* IMAGE */}
            <div className="relative w-full h-80 sm:h-90 md:h-105 overflow-hidden bg-gray-50">
              <Image
                src={item.image}
                alt={item.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover group-hover:scale-110 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
            </div>

            {/* TEXT */}
            <div className="mt-5 flex items-start justify-between group-hover:-translate-y-0.5 transition-transform duration-300">

              <div>
                <h3 className="text-lg font-serif text-black group-hover:text-gray-800 transition-colors duration-300">
                  {item.name}
                </h3>

                <p className="text-[10px] tracking-[0.3em] uppercase text-gray-500 mt-2">
                  {item.category}
                </p>
              </div>

              <p className="text-sm text-black font-medium">
                {item.price}
              </p>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}