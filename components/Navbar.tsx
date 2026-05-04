"use client";

import { useEffect, useState } from "react";
import { FaSearch, FaShoppingBag } from "react-icons/fa";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-lg h-16"
          : "bg-transparent h-20"
      }`}
    >
      <div className="max-w-350 mx-auto px-6 lg:px-12 h-full">
        <div
          className={`flex items-center justify-between h-full transition-all duration-500 ${
            scrolled ? "text-black" : "text-white"
          }`}
        >
          {/* LEFT */}
          <nav className="hidden md:flex items-center gap-10 text-sm tracking-[0.25em] uppercase">
            <a href="#" className="hover:opacity-70 transition">Shop</a>
            <a href="#" className="hover:opacity-70 transition">New</a>
            <a href="#" className="hover:opacity-70 transition">Collections</a>
          </nav>

          {/* CENTER */}
          <div className="absolute left-1/2 -translate-x-1/2 transition-all duration-500">
            <h1
              className={`tracking-[0.4em] font-light transition-all duration-500 ${
                scrolled ? "text-lg md:text-xl" : "text-xl md:text-2xl"
              }`}
            >
              OLANIN
            </h1>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-6">
            <button
              aria-label="Search"
              title="Search"
              className="hover:opacity-70 transition"
            >
              <FaSearch size={16} />
            </button>

            <button
              aria-label="Shopping bag"
              title="Shopping bag"
              className="hover:opacity-70 transition"
            >
              <FaShoppingBag size={16} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;