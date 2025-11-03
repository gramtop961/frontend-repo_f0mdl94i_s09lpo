import { motion } from 'framer-motion';
import { CheckCircle2, ChevronRight } from 'lucide-react';

const categories = ['Essentials', 'Groceries', 'Electronics', 'Fashion', 'Beauty', 'Home'];

const sampleProducts = [
  { id: 1, name: 'Minimalist Tote Bag', price: 42, vendor: 'Studio A', eta: '2h', image: 'https://images.unsplash.com/photo-1746458258548-5e5bd7225c9c?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxNaW5pbWFsaXN0JTIwVG90ZSUyMEJhZ3xlbnwwfDB8fHwxNzYyMTY4MDA0fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { id: 2, name: 'Cold Brew Coffee', price: 12, vendor: 'Bean Lab', eta: '45m', image: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?q=80&w=1200&auto=format&fit=crop' },
  { id: 3, name: 'Handmade Ceramic Cup', price: 28, vendor: 'Clay Co.', eta: '3h', image: 'https://images.unsplash.com/photo-1509803874385-db7c23652552?q=80&w=1200&auto=format&fit=crop' },
  { id: 4, name: 'Wireless Earbuds', price: 89, vendor: 'Sonic', eta: '1d', image: 'https://images.unsplash.com/photo-1746458258548-5e5bd7225c9c?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxNaW5pbWFsaXN0JTIwVG90ZSUyMEJhZ3xlbnwwfDB8fHwxNzYyMTY4MDA0fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { id: 5, name: 'Natural Skincare Set', price: 54, vendor: 'Glow', eta: '6h', image: 'https://images.unsplash.com/photo-1746458258548-5e5bd7225c9c?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxNaW5pbWFsaXN0JTIwVG90ZSUyMEJhZ3xlbnwwfDB8fHwxNzYyMTY4MDA0fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { id: 6, name: 'Microfiber Towel', price: 16, vendor: 'Homegrid', eta: '2d', image: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1200&auto=format&fit=crop' },
];

const ProductCard = ({ product }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20%' }}
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      className="group rounded-2xl border border-[#F0F0F0] overflow-hidden bg-white hover:shadow-lg/30 hover:shadow-[#D1193E]/5 transition-shadow"
    >
      <div className="relative h-48 overflow-hidden">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-[22px] font-semibold tracking-wide text-[#1E1E1E]">{product.name}</h3>
          <span className="text-[#1E1E1E] font-medium">${product.price}</span>
        </div>
        <div className="mt-1 flex items-center gap-2 text-sm text-[#1E1E1E]/70">
          <span className="inline-flex items-center gap-1"><CheckCircle2 className="h-4 w-4 text-emerald-500" /> {product.vendor}</span>
          <span className="mx-2">•</span>
          <span>ETA {product.eta}</span>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <button className="h-10 px-4 rounded-xl bg-[#D1193E] text-white text-sm font-medium shadow-sm hover:shadow-md transition-[transform,box-shadow] active:scale-95">Add to cart</button>
          <button className="text-[#D1193E] inline-flex items-center gap-1 text-sm">Details <ChevronRight className="h-4 w-4" /></button>
        </div>
      </div>
    </motion.div>
  );
};

const Marketplace = () => {
  return (
    <section id="marketplace" className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <h2 className="text-[28px] font-semibold tracking-wide text-[#1E1E1E]">Trending Now</h2>
          <div className="hidden md:flex items-center gap-2">
            {categories.map((c) => (
              <button key={c} className="h-9 px-3 rounded-xl bg-[#F9F9F9] border border-[#EFEFEF] text-sm text-[#1E1E1E]/80 hover:bg-white hover:shadow-sm">{c}</button>
            ))}
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-[#F0F0F0] bg-white p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="text-[22px] font-semibold tracking-wide text-[#1E1E1E]">Fast, reliable delivery</h3>
              <p className="text-[16px] text-[#1E1E1E]/70">Track your order from checkout to doorstep with clear status updates.</p>
            </div>
            <div className="flex items-center gap-2">
              {['Ordered', 'Packed', 'Dispatched', 'Delivered'].map((s, i) => (
                <div key={s} className="flex items-center gap-2">
                  <div className={`h-2.5 w-2.5 rounded-full ${i < 3 ? 'bg-[#D1193E]' : 'bg-[#F0B5BF]'}`} />
                  {i < 3 && <div className="h-px w-10 bg-[#F0F0F0]" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Marketplace;
