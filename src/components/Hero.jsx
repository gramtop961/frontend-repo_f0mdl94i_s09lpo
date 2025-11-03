import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const Hero = ({ onOpenVendor }) => {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 pb-24 grid lg:grid-cols-2 gap-10 items-center">
        <div className="relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="text-[36px] leading-tight font-bold tracking-[0.02em] text-[#1E1E1E]"
          >
            Logistics‑powered marketplace for small businesses
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
            className="mt-4 text-[16px] text-[#1E1E1E]/70"
          >
            Discover local vendors, fast delivery, and a bold shopping experience that balances performance with beautiful design.
          </motion.p>

          <div className="mt-6 flex items-center gap-3">
            <motion.input
              whileFocus={{ scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              type="text"
              placeholder="Search products and categories"
              className="w-full max-w-md h-12 px-4 rounded-xl border border-[#EFEFEF] bg-[#F9F9F9] text-[#1E1E1E] placeholder:text-[#1E1E1E]/40 focus:outline-none focus:ring-2 focus:ring-[#D1193E]/20 focus:border-[#D1193E]/40"
            />
            <motion.button
              whileTap={{ scale: 0.97 }}
              onClick={onOpenVendor}
              className="h-12 px-5 rounded-xl bg-[#D1193E] text-white font-medium shadow-sm hover:shadow-md transition-shadow"
            >
              Are you a Vendor?
            </motion.button>
          </div>
        </div>

        <div className="relative h-[420px] lg:h-[520px] rounded-2xl overflow-hidden border border-[#F0F0F0] bg-white">
          <Spline style={{ width: '100%', height: '100%' }} scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-white/40" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
