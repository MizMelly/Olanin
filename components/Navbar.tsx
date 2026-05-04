"use client";

import { useEffect, useState } from "react";
import { FaSearch, FaShoppingBag, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 h-full">
        <div
          className={`flex items-center justify-between h-full transition-all duration-500 ${
            scrolled ? "text-black" : "text-white"
          }`}
        >
          {/* LEFT - DESKTOP MENU */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10 text-xs lg:text-sm tracking-[0.25em] uppercase">
            <a href="#" className="hover:opacity-70 transition">Shop</a>
            <a href="#" className="hover:opacity-70 transition">New</a>
            <a href="#" className="hover:opacity-70 transition">Collections</a>
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-lg"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* CENTER LOGO */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <h1
              className={`tracking-[0.3em] font-light transition-all duration-500 text-center ${
                scrolled
                  ? "text-base sm:text-lg md:text-xl"
                  : "text-lg sm:text-xl md:text-2xl"
              }`}
            >
              OLANIN
            </h1>
          </div>

          {/* RIGHT ICONS */}
          <div className="flex items-center gap-4 sm:gap-6">
            <button
              aria-label="Search"
              title="Search"
              className="hover:opacity-70 transition p-2"
            >
              <FaSearch size={16} />
            </button>

            <button
              aria-label="Shopping bag"
              title="Shopping bag"
              className="hover:opacity-70 transition p-2"
            >
              <FaShoppingBag size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div
          className={`md:hidden absolute top-16 left-0 w-full ${
            scrolled ? "bg-white text-black" : "bg-black text-white"
          } shadow-lg`}
        >
          <nav className="flex flex-col items-center py-6 gap-6 text-sm uppercase tracking-[0.2em]">
            <a href="#" onClick={() => setMenuOpen(false)}>Shop</a>
            <a href="#" onClick={() => setMenuOpen(false)}>New</a>
            <a href="#" onClick={() => setMenuOpen(false)}>Collections</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;