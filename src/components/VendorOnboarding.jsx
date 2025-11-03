import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight, CheckCircle2 } from 'lucide-react';

const StepIndicator = ({ step }) => {
  const steps = ['Sign Up', 'Business', 'Payment', 'Success'];
  return (
    <div className="flex items-center gap-3">
      {steps.map((label, i) => (
        <div key={label} className="flex items-center gap-2">
          <div className={`h-2.5 w-2.5 rounded-full ${i <= step ? 'bg-[#D1193E]' : 'bg-[#F0B5BF]'}`} />
          {i < steps.length - 1 && <div className="h-px w-10 bg-[#F0F0F0]" />}
        </div>
      ))}
    </div>
  );
};

const VendorOnboarding = ({ open, onClose }) => {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({ name: '', email: '', password: '', logo: '', category: '', description: '' });

  const next = () => setStep((s) => Math.min(s + 1, 3));
  const back = () => setStep((s) => Math.max(s - 1, 0));

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 bg-black/20 flex items-center justify-center px-4"
        >
          <motion.div
            key="modal"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="w-full max-w-2xl rounded-2xl bg-white border border-[#F0F0F0] shadow-2xl overflow-hidden"
          >
            <div className="flex items-center justify-between p-4 border-b border-[#F4F4F4] bg-[#FFFFFF]">
              <div className="flex items-center gap-3">
                <div className="h-6 w-6 rounded-lg bg-[#D1193E]" />
                <h3 className="text-[22px] font-semibold tracking-wide text-[#1E1E1E]">Vendor Onboarding</h3>
              </div>
              <button onClick={onClose} className="p-2 rounded-lg hover:bg-[#F9F9F9]"><X className="h-5 w-5 text-[#1E1E1E]" /></button>
            </div>

            <div className="p-6">
              <div className="mb-6"><StepIndicator step={step} /></div>

              {step === 0 && (
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label className="text-sm text-[#1E1E1E]/70">Name</label>
                    <input name="name" value={form.name} onChange={onChange} className="mt-1 w-full h-11 px-3 rounded-xl border border-[#EFEFEF] bg-[#F9F9F9] focus:outline-none focus:ring-2 focus:ring-[#D1193E]/20" />
                  </div>
                  <div>
                    <label className="text-sm text-[#1E1E1E]/70">Email</label>
                    <input type="email" name="email" value={form.email} onChange={onChange} className="mt-1 w-full h-11 px-3 rounded-xl border border-[#EFEFEF] bg-[#F9F9F9] focus:outline-none focus:ring-2 focus:ring-[#D1193E]/20" />
                  </div>
                  <div>
                    <label className="text-sm text-[#1E1E1E]/70">Password</label>
                    <input type="password" name="password" value={form.password} onChange={onChange} className="mt-1 w-full h-11 px-3 rounded-xl border border-[#EFEFEF] bg-[#F9F9F9] focus:outline-none focus:ring-2 focus:ring-[#D1193E]/20" />
                  </div>
                </div>
              )}

              {step === 1 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-[#1E1E1E]/70">Logo URL</label>
                    <input name="logo" value={form.logo} onChange={onChange} className="mt-1 w-full h-11 px-3 rounded-xl border border-[#EFEFEF] bg-[#F9F9F9] focus:outline-none focus:ring-2 focus:ring-[#D1193E]/20" />
                  </div>
                  <div>
                    <label className="text-sm text-[#1E1E1E]/70">Category</label>
                    <input name="category" value={form.category} onChange={onChange} className="mt-1 w-full h-11 px-3 rounded-xl border border-[#EFEFEF] bg-[#F9F9F9] focus:outline-none focus:ring-2 focus:ring-[#D1193E]/20" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="text-sm text-[#1E1E1E]/70">Description</label>
                    <textarea name="description" value={form.description} onChange={onChange} rows={3} className="mt-1 w-full px-3 py-2 rounded-xl border border-[#EFEFEF] bg-[#F9F9F9] focus:outline-none focus:ring-2 focus:ring-[#D1193E]/20" />
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-3">
                  <p className="text-[16px] text-[#1E1E1E]/80">Choose a plan (mock UI)</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {['Starter', 'Growth', 'Scale'].map((p, idx) => (
                      <button key={p} className={`rounded-2xl border ${idx === 1 ? 'border-[#D1193E] bg-[#D1193E]/5' : 'border-[#F0F0F0]'} p-4 text-left hover:shadow-sm`}>
                        <div className="text-[22px] font-semibold text-[#1E1E1E]">{p}</div>
                        <div className="text-sm text-[#1E1E1E]/70 mt-1">All essentials to get started</div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="flex flex-col items-center text-center py-6">
                  <CheckCircle2 className="h-12 w-12 text-emerald-500" />
                  <h4 className="mt-3 text-[22px] font-semibold text-[#1E1E1E]">You're all set!</h4>
                  <p className="text-[16px] text-[#1E1E1E]/70">Your vendor account has been created. Welcome to Dispa8ch.</p>

                  <div className="relative w-full h-24 mt-4 overflow-hidden">
                    {[...Array(20)].map((_, i) => (
                      <motion.span
                        key={i}
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 120, opacity: 1 }}
                        transition={{ duration: 1.2, delay: i * 0.05, repeat: Infinity }}
                        className="absolute left-1/2 text-[#D1193E]"
                        style={{ left: `${(i * 5) % 100}%` }}
                      >
                        •
                      </motion.span>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-6 flex items-center justify-between">
                <button onClick={onClose} className="h-10 px-4 rounded-xl border border-[#EFEFEF] bg-white text-[#1E1E1E] hover:shadow-sm">Close</button>
                <div className="flex items-center gap-2">
                  {step > 0 && step < 3 && (
                    <button onClick={back} className="h-10 px-4 rounded-xl border border-[#EFEFEF] bg-white text-[#1E1E1E] hover:shadow-sm">Back</button>
                  )}
                  {step < 3 ? (
                    <button onClick={next} className="h-10 px-4 rounded-xl bg-[#D1193E] text-white font-medium flex items-center gap-2">Continue <ChevronRight className="h-4 w-4" /></button>
                  ) : (
                    <button onClick={onClose} className="h-10 px-4 rounded-xl bg-[#D1193E] text-white font-medium">Go to Dashboard</button>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default VendorOnboarding;
