import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marketplace from './components/Marketplace';
import VendorOnboarding from './components/VendorOnboarding';

function App() {
  const [vendorOpen, setVendorOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-[#1E1E1E]">
      <Navbar onOpenVendor={() => setVendorOpen(true)} />
      <main>
        <Hero onOpenVendor={() => setVendorOpen(true)} />
        <Marketplace />

        <section id="admin" className="py-16 bg-[#F9F9F9] border-t border-[#F0F0F0]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-[28px] font-semibold tracking-wide">Admin Console (Preview)</h2>
            <p className="mt-2 text-[16px] text-[#1E1E1E]/70">A clean, Appwrite‑inspired internal dashboard for approvals, monitoring, and reporting.</p>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[{ k: 'Active Vendors', v: '128' }, { k: 'Total Orders', v: '24,532' }, { k: 'Revenue', v: '$1.2M' }].map((m) => (
                <div key={m.k} className="rounded-2xl border border-[#F0F0F0] bg-white p-6 hover:shadow-md transition-shadow">
                  <div className="text-sm text-[#1E1E1E]/60">{m.k}</div>
                  <div className="mt-1 text-[36px] font-bold tracking-wide">{m.v}</div>
                  <div className="mt-4 h-2 w-full bg-[#F9F9F9] rounded-full overflow-hidden">
                    <div className="h-full w-2/3 bg-[#D1193E]" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer className="border-t border-[#F0F0F0] bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <div className="h-6 w-6 rounded-lg bg-[#D1193E]" />
                <span className="font-semibold tracking-wide">Dispa8ch</span>
              </div>
              <p className="mt-2 text-sm text-[#1E1E1E]/60">Confident. Modern. Minimal. Functional.</p>
            </div>
            <div className="flex items-center gap-3">
              <button onClick={() => setVendorOpen(true)} className="h-11 px-5 rounded-xl bg-[#D1193E] text-white font-medium shadow-sm hover:shadow-md">Are you a Vendor?</button>
              <a href="#marketplace" className="h-11 px-5 rounded-xl border border-[#EFEFEF] bg-white text-[#1E1E1E] hover:shadow-sm">Back to top</a>
            </div>
          </div>
        </footer>
      </main>

      <VendorOnboarding open={vendorOpen} onClose={() => setVendorOpen(false)} />
    </div>
  );
}

export default App;
