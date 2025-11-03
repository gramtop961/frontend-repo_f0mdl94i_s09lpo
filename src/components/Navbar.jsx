import { ShoppingCart, Store, User, Search } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = ({ onOpenVendor }) => {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur bg-white/80 border-b border-[#F0F0F0]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-xl bg-[#D1193E]" />
          <a href="#" className="font-semibold tracking-wide text-[18px] text-[#1E1E1E]">Dispa8ch</a>
          <nav className="hidden md:flex items-center gap-6 ml-8 text-sm text-[#1E1E1E]/70">
            <a href="#marketplace" className="hover:text-[#1E1E1E] transition-colors">Marketplace</a>
            <a href="#vendors" className="hover:text-[#1E1E1E] transition-colors" onClick={(e) => { e.preventDefault(); onOpenVendor(); }}>Vendors</a>
            <a href="#admin" className="hover:text-[#1E1E1E] transition-colors">Admin</a>
          </nav>
        </div>

        <div className="flex-1 hidden lg:flex items-center mx-8">
          <div className="relative w-full max-w-xl">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#1E1E1E]/40" />
            <input
              type="text"
              placeholder="Search products, vendors, categories"
              className="w-full h-10 pl-10 pr-4 rounded-xl border border-[#EFEFEF] bg-[#F9F9F9] text-sm text-[#1E1E1E] placeholder:text-[#1E1E1E]/40 focus:outline-none focus:ring-2 focus:ring-[#D1193E]/20 focus:border-[#D1193E]/40"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <motion.button
            whileTap={{ scale: 0.97 }}
            className="hidden sm:inline-flex items-center gap-2 h-10 px-4 rounded-xl border border-[#EFEFEF] bg-white text-[#1E1E1E] hover:shadow-sm transition-shadow"
            onClick={onOpenVendor}
          >
            <Store className="h-4 w-4" />
            <span>Are you a Vendor?</span>
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 h-10 px-3 rounded-xl border border-[#EFEFEF] bg-white hover:shadow-sm"
            aria-label="Cart"
          >
            <ShoppingCart className="h-5 w-5 text-[#1E1E1E]" />
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 h-10 px-3 rounded-xl border border-[#EFEFEF] bg-white hover:shadow-sm"
            aria-label="Account"
          >
            <User className="h-5 w-5 text-[#1E1E1E]" />
          </motion.button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
