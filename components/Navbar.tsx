"use client";

import { useEffect, useState } from "react";
import { FaSearch, FaShoppingBag, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

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
              onClick={() => {
                setCartOpen(!cartOpen);
                setMenuOpen(false);
              }}
            >
              <FaShoppingBag size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* CART DRAWER */}
      {cartOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
            onClick={() => setCartOpen(false)}
          />
          <aside className="fixed right-0 top-0 z-50 h-full w-full max-w-105 bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">
              <h2 className="text-base uppercase tracking-[0.35em] text-slate-900">
                Your cart (0)
              </h2>
              <button
                className="text-lg text-slate-900 hover:text-black"
                aria-label="Close cart"
                onClick={() => setCartOpen(false)}
              >
                <FaTimes />
              </button>
            </div>
            <div className="px-6 py-8 text-slate-600">
              <p className="text-sm">Your cart is empty.</p>
            </div>
            <div className="mt-auto border-t border-slate-200 px-6 py-6">
              <div className="flex items-center justify-between text-sm uppercase tracking-[0.3em] text-slate-500">
                <span>Total</span>
                <span>$0</span>
              </div>
              <button className="mt-6 w-full rounded-full bg-slate-900 px-5 py-3 text-sm uppercase tracking-[0.3em] text-white transition hover:bg-black">
                Checkout
              </button>
            </div>
          </aside>
        </>
      )}

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