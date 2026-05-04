export default function Footer() {
  return (
    <footer className="border-t border-gray-200 text-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-xl tracking-[0.3em] font-light mb-4">
            OLANIN
          </h2>
          <p className="text-sm leading-relaxed text-gray-500 max-w-xs">
            Elevated essentials for the modern woman. Crafted with intention.
          </p>
        </div>

        {/* Shop */}
        <div>
          <h3 className="text-xs tracking-[0.3em] uppercase mb-4 text-gray-600">
            Shop
          </h3>
          <ul className="space-y-2 text-sm text-gray-500">
            <li className="hover:text-black cursor-pointer">All</li>
            <li className="hover:text-black cursor-pointer">Wigs</li>
            <li className="hover:text-black cursor-pointer">Bundles</li>
            <li className="hover:text-black cursor-pointer">Closures</li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="text-xs tracking-[0.3em] uppercase mb-4 text-gray-600">
            Help
          </h3>
          <ul className="space-y-2 text-sm text-gray-500">
            <li className="hover:text-black cursor-pointer">Contact</li>
            <li className="hover:text-black cursor-pointer">Shipping</li>
            <li className="hover:text-black cursor-pointer">Returns</li>
            <li className="hover:text-black cursor-pointer">Privacy</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xs tracking-[0.3em] uppercase mb-4 text-gray-600">
            Newsletter
          </h3>

          <div className="flex items-center border-b border-gray-400">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 py-2 text-sm outline-none bg-transparent"
            />
            <button className="text-xs tracking-widest uppercase">
              Join
            </button>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-xs text-gray-400 py-6 border-t border-gray-200">
        © 2026 OLANIN — All rights reserved
      </div>
    </footer>
  );
}