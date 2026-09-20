import React, { useState } from 'react';
import { motion } from 'motion/react';
import confetti from 'canvas-confetti';
import { Calculator, Check, Sparkles, Clock, Shield, ArrowRight, Copy } from 'lucide-react';
import { EstimatorState } from '../types';
import { soundFx } from '../utils/audio';

interface CostEstimatorProps {
  onApplyEstimateToBrief: (briefSummary: string) => void;
}

export const CostEstimator: React.FC<CostEstimatorProps> = ({ onApplyEstimateToBrief }) => {
  const [config, setConfig] = useState<EstimatorState>({
    projectType: 'brand',
    animationLevel: 'immersive',
    timeline: 'standard',
    addons: ['cms', 'seo'],
  });

  const [copied, setCopied] = useState(false);

  // Pricing Matrix specifically calibrated for Pakistani Local Businesses (9,400 PKR - 11,000 PKR)
  const projectTypes = [
    {
      id: 'landing',
      label: 'Single-Page Business Starter',
      desc: 'High-impact 1-page site for clinics, local services, shops, or personal portfolios with direct WhatsApp integration.',
      basePrice: 9400,
      days: 7,
    },
    {
      id: 'brand',
      label: 'Multi-Page Brand Flagship',
      desc: '3 to 5 custom pages (Home, About, Services, Gallery, Contact) crafted with bespoke typography and lightning speed.',
      basePrice: 10200,
      days: 7,
    },
    {
      id: 'ecommerce',
      label: 'E-Commerce & Online Catalog',
      desc: 'Complete product catalog with 1-click WhatsApp order routing, Cash-on-Delivery (COD) ready flow, and mobile checkout.',
      basePrice: 11000,
      days: 7,
    },
  ];

  const animationLevels = [
    {
      id: 'clean',
      label: 'Clean & Ultra-Fast (Recommended)',
      desc: 'Instant loading on all Pakistani 4G & fiber networks with subtle hover feedback.',
      price: 0,
    },
    {
      id: 'immersive',
      label: 'Smooth Motion & Micro-Interactions',
      desc: 'Kinetic typography, smooth scroll physics, and sleek entrance transitions.',
      price: 0,
    },
    {
      id: 'cutting-edge',
      label: 'Interactive 3D & Particle Canvas',
      desc: 'High-end interactive background effects and 3D card tilts that make customers say "Wow!".',
      price: 0,
    },
  ];

  const addonOptions = [
    { id: 'whatsapp', label: '1-Click WhatsApp Direct Order Button', price: 0, included: true },
    { id: 'seo', label: 'Google Maps & Local Pakistan SEO Setup', price: 0, included: true },
    { id: 'cod', label: 'Cash-on-Delivery (COD) / Banking Form', price: 0, included: true },
    { id: 'social', label: 'Instagram & Facebook Feed Integration', price: 0, included: true },
    { id: 'speed', label: 'Sub-Second 4G Mobile Speed Optimization', price: 0, included: true },
  ];

  // Calculations: Base package sets the exact 9,400 PKR - 11,000 PKR price
  const selectedType = projectTypes.find((t) => t.id === config.projectType) || projectTypes[0];
  const selectedAnim = animationLevels.find((a) => a.id === config.animationLevel) || animationLevels[0];

  // Total price stays cleanly within 9,400 PKR - 11,000 PKR
  const totalPrice = selectedType.basePrice;
  const calculatedDays = config.timeline === 'express' ? 4 : 7;

  const toggleAddon = (id: string) => {
    soundFx.playToggle();
    setConfig((prev) => ({
      ...prev,
      addons: prev.addons.includes(id) ? prev.addons.filter((a) => a !== id) : [...prev.addons, id],
    }));
  };

  const handleApplyBrief = () => {
    soundFx.playSuccess();

    // Trigger high-end celebratory confetti
    try {
      confetti({
        particleCount: 65,
        spread: 70,
        origin: { y: 0.7 },
        colors: ['#6366F1', '#A855F7', '#34D399', '#38BDF8'],
      });
    } catch {
      // Fallback
    }

    const summary = `Selected Package: ${selectedType.label}\nFidelity: ${selectedAnim.label}\nTurnaround: ~${calculatedDays} Days (${
      config.timeline === 'express' ? 'Priority Fast-Track' : 'Standard Sprint'
    })\nIncluded Modules: WhatsApp Direct Ordering, Pakistan 4G Sub-Second Speed, COD/Bank Transfer Flow, Zero-Cost Cloud Deployment & Full Code Ownership\nStudio Investment: ${totalPrice.toLocaleString()} PKR (Fixed, No Hidden Fees - Bank Transfer/Raast/JazzCash/EasyPaisa)`;

    onApplyEstimateToBrief(summary);

    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCopyQuote = () => {
    soundFx.playClick();
    const summary = `Murtaza & Kamran Web Studio (Pakistan 🇵🇰) - Official Quote\n---------------------------------------------\nPackage: ${
      selectedType.label
    }\nTurnaround: ${calculatedDays} Business Days (${config.timeline})\nIncluded: 1-Click WhatsApp Checkout, 0.4s Mobile 4G Speed, Free Cloud Hosting Setup & Complete Source Code\nInvestment: ${totalPrice.toLocaleString()} PKR (Fixed, No Hidden Fees)\nPayment: Bank Transfer / Raast / JazzCash / EasyPaisa\nEngineers: Murtaza & Kamran (Shipped with 100% Satisfaction Guarantee)`;

    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="estimator" className="py-24 relative bg-[#0a0c16] border-t border-white/5 overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-indigo-600/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-purple-600/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-xs font-mono text-emerald-300 uppercase tracking-wider mb-4">
            <span className="text-base leading-none">🇵🇰</span>
            <span>Transparent Local Pricing (9,400 PKR – 11,000 PKR)</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
            Select Your Website Package.
          </h2>
          <p className="mt-4 text-base text-zinc-400 leading-relaxed">
            No overpriced agency retainers or hidden fees. We price transparently in Pakistani Rupees (9,400 PKR – 11,000 PKR) so high-converting, world-class web engineering is 100% accessible to every local Pakistani business, shop, clinic, and brand.
          </p>
        </div>

        {/* The Estimator Applet */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-8">
            {/* Step 1: Project Type */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0e111e] border border-white/10 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase text-indigo-400 font-semibold tracking-wider">
                  01 // Select Platform Scope
                </span>
                <span className="text-xs font-mono text-zinc-400">Fixed Milestone Pricing</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {projectTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => {
                      soundFx.playClick();
                      setConfig((prev) => ({ ...prev, projectType: type.id as EstimatorState['projectType'] }));
                    }}
                    className={`p-4 rounded-2xl text-left border transition-all cursor-pointer flex flex-col justify-between ${
                      config.projectType === type.id
                        ? 'bg-indigo-500/15 border-indigo-500/60 shadow-[0_0_20px_rgba(99,102,241,0.2)]'
                        : 'bg-white/[0.02] border-white/5 hover:border-white/15'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <h4 className="font-heading font-bold text-white text-sm">{type.label}</h4>
                        {config.projectType === type.id && (
                          <Check className="w-4 h-4 text-indigo-400" />
                        )}
                      </div>
                      <p className="text-xs text-zinc-400 mt-2 leading-relaxed">{type.desc}</p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between font-mono text-xs">
                      <span className="text-zinc-400">Base:</span>
                      <span className="text-white font-bold">{type.basePrice.toLocaleString()} PKR</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Animation & Visual Fidelity */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0e111e] border border-white/10 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase text-purple-400 font-semibold tracking-wider">
                  02 // Visual & Motion Fidelity
                </span>
                <span className="text-xs font-mono text-zinc-400">60 FPS Hardware Accelerated</span>
              </div>

              <div className="space-y-3">
                {animationLevels.map((lvl) => (
                  <button
                    key={lvl.id}
                    onClick={() => {
                      soundFx.playClick();
                      setConfig((prev) => ({ ...prev, animationLevel: lvl.id as EstimatorState['animationLevel'] }));
                    }}
                    className={`w-full p-4 rounded-2xl text-left border transition-all cursor-pointer flex items-center justify-between ${
                      config.animationLevel === lvl.id
                        ? 'bg-purple-500/15 border-purple-500/60 shadow-[0_0_20px_rgba(168,85,247,0.2)]'
                        : 'bg-white/[0.02] border-white/5 hover:border-white/15'
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-heading font-bold text-white text-sm">{lvl.label}</h4>
                        {config.animationLevel === lvl.id && (
                          <Check className="w-4 h-4 text-purple-400" />
                        )}
                      </div>
                      <p className="text-xs text-zinc-400 mt-1">{lvl.desc}</p>
                    </div>
                    <span className="font-mono text-xs font-bold text-emerald-400 whitespace-nowrap pl-4">
                      {lvl.price === 0 ? 'Included' : `+${lvl.price} PKR`}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Add-on Capabilities */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0e111e] border border-white/10 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase text-emerald-400 font-semibold tracking-wider">
                  03 // Optional Power-Up Modules
                </span>
                <span className="text-xs font-mono text-zinc-400">Custom Integrated</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {addonOptions.map((addon) => {
                  const isChecked = config.addons.includes(addon.id);
                  return (
                    <button
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-3.5 rounded-xl border text-left text-xs transition-all cursor-pointer flex items-center justify-between ${
                        isChecked
                          ? 'bg-emerald-500/15 border-emerald-500/50 text-white'
                          : 'bg-white/[0.02] border-white/5 text-zinc-300 hover:border-white/15'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-4 h-4 rounded flex items-center justify-center border ${
                            isChecked ? 'bg-emerald-500 border-emerald-400 text-black' : 'border-white/20'
                          }`}
                        >
                          {isChecked && <Check className="w-3 h-3" />}
                        </div>
                        <span className="font-medium">{addon.label}</span>
                      </div>
                      <span className="font-mono text-emerald-400">Included</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Delivery Timeline */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0e111e] border border-white/10 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase text-amber-400 font-semibold tracking-wider">
                  04 // Turnaround Velocity
                </span>
                <span className="text-xs font-mono text-zinc-400">Guaranteed Launch Date</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  onClick={() => {
                    soundFx.playClick();
                    setConfig((prev) => ({ ...prev, timeline: 'standard' }));
                  }}
                  className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                    config.timeline === 'standard'
                      ? 'bg-amber-500/15 border-amber-500/50 text-white'
                      : 'bg-white/[0.02] border-white/5 text-zinc-400'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-heading font-bold text-white text-sm">Standard 7-Day Sprint</span>
                    {config.timeline === 'standard' && <Check className="w-4 h-4 text-amber-400" />}
                  </div>
                  <p className="text-xs text-zinc-400 mt-1">
                    Complete, meticulously tested launch within 7 business days.
                  </p>
                  <div className="mt-2 text-xs font-mono text-amber-300">Included in Base Price</div>
                </button>

                <button
                  onClick={() => {
                    soundFx.playClick();
                    setConfig((prev) => ({ ...prev, timeline: 'express' }));
                  }}
                  className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                    config.timeline === 'express'
                      ? 'bg-amber-500/20 border-amber-500/60 text-white shadow-[0_0_20px_rgba(245,158,11,0.2)]'
                      : 'bg-white/[0.02] border-white/5 text-zinc-400'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-heading font-bold text-white text-sm">Priority Fast-Track (3–4 Days)</span>
                    {config.timeline === 'express' && <Check className="w-4 h-4 text-amber-400" />}
                  </div>
                  <p className="text-xs text-zinc-400 mt-1">
                    Urgent launch for upcoming product drop, ads or grand opening (3–4 days).
                  </p>
                  <div className="mt-2 text-xs font-mono text-emerald-400">Included in Studio Guarantee</div>
                </button>
              </div>
            </div>
          </div>

          {/* Sticky Summary / Quotation Receipt */}
          <div className="lg:col-span-5 sticky top-28">
            <motion.div
              layout
              className="rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-[#121526] to-[#0c0e18] border border-indigo-500/30 shadow-2xl space-y-6"
            >
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div>
                  <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                    <span>🇵🇰</span>
                    <span>Direct Pakistan Studio Quotation</span>
                  </div>
                  <h3 className="font-heading font-bold text-white text-lg mt-0.5">
                    Guaranteed Milestone Pricing
                  </h3>
                </div>
                <div className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                  <Sparkles className="w-5 h-5" />
                </div>
              </div>

              {/* Big Price Tag */}
              <div className="p-6 rounded-2xl bg-black/40 border border-white/5 text-center">
                <div className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-1">
                  Total Investment Package
                </div>
                <div className="text-4xl sm:text-5xl font-heading font-black text-white tracking-tight">
                  {totalPrice.toLocaleString()}
                  <span className="text-base text-emerald-400 font-bold ml-1.5">PKR</span>
                </div>
                <p className="text-[11px] text-zinc-400 font-mono mt-1">
                  Fixed 9,400 – 11,000 PKR tier • Payable via Bank Transfer / Raast / JazzCash / EasyPaisa
                </p>
                <div className="mt-3 flex items-center justify-center gap-4 text-xs font-mono text-zinc-400">
                  <span className="flex items-center gap-1 text-emerald-400">
                    <Clock className="w-3.5 h-3.5" />
                    ~{calculatedDays} Days Delivery
                  </span>
                  <span className="text-zinc-600">•</span>
                  <span className="flex items-center gap-1 text-indigo-300">
                    <Shield className="w-3.5 h-3.5" />
                    100% Satisfaction
                  </span>
                </div>
              </div>

              {/* What is Included Checklist */}
              <div className="space-y-2.5 text-xs text-zinc-300">
                <div className="font-mono text-[11px] text-emerald-400 uppercase font-semibold">
                  Everything Included In Your 9,400 – 11,000 PKR Order:
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Custom UI/UX Designed by Murtaza (No Clunky WordPress)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Engineered by Kamran for Pakistan 4G Mobile Speed</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>1-Click WhatsApp Direct Order Button &amp; Call Link</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Cash-on-Delivery (COD) / Bank Transfer Order Routing</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Complete Source Code Provided &amp; Free Cloud Hosting Setup</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Zero Monthly Hosting Fees (Save Rs 15,000/yr vs agencies)</span>
                </div>
              </div>

              {/* Actions */}
              <div className="pt-4 border-t border-white/10 space-y-3">
                <button
                  id="estimator-apply-btn"
                  onClick={handleApplyBrief}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-600 via-teal-600 to-indigo-600 text-white font-semibold text-xs sm:text-sm shadow-[0_0_25px_rgba(16,185,129,0.4)] hover:shadow-[0_0_40px_rgba(16,185,129,0.7)] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>Lock In {totalPrice.toLocaleString()} PKR Package &amp; Send To Murtaza &amp; Kamran</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={handleCopyQuote}
                  className="w-full py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-xs font-mono text-zinc-300 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>{copied ? 'Copied Quote To Clipboard!' : 'Copy Itemized Quote Text'}</span>
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
