import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AlertCircle, CheckCircle, Flame, ArrowRight, Gauge, Cpu, Clock, Layers } from 'lucide-react';
import { COMPARISON_POINTS } from '../data/portfolioData';
import { soundFx } from '../utils/audio';

export const ContrastSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'mk' | 'ordinary'>('mk');

  return (
    <section id="contrast" className="py-24 relative bg-[#090b12] border-y border-white/5 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 -right-48 w-96 h-96 bg-indigo-600/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 -left-48 w-96 h-96 bg-rose-600/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-xs font-mono text-emerald-300 uppercase tracking-wider mb-4">
            <span className="text-base leading-none">🇵🇰</span>
            <span>Why Local Pakistan Businesses Need This</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight">
            Why 90% of Websites in Pakistan Fail To Sell{' '}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-indigo-300 bg-clip-text text-transparent">
              And How We Fix It for 9,400 – 11,000 PKR.
            </span>
          </h2>
          <p className="mt-4 text-base text-zinc-400 leading-relaxed">
            Most local businesses in Karachi, Lahore, and Islamabad pay high prices for outdated WordPress templates that take 6 seconds to load on mobile and don&apos;t even have proper WhatsApp ordering. Here is how Murtaza &amp; Kamran give you an unfair advantage.
          </p>

          {/* Interactive Mode Toggle */}
          <div className="mt-8 inline-flex items-center p-1.5 rounded-2xl bg-black/50 border border-white/10 backdrop-blur-xl">
            <button
              onClick={() => {
                soundFx.playToggle();
                setActiveTab('mk');
              }}
              className={`px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'mk'
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-[0_0_20px_rgba(99,102,241,0.4)]'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>Murtaza &amp; Kamran Standard</span>
            </button>
            <button
              onClick={() => {
                soundFx.playToggle();
                setActiveTab('ordinary');
              }}
              className={`px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'ordinary'
                  ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <AlertCircle className="w-4 h-4 text-rose-400" />
              <span>Generic Template Agency</span>
            </button>
          </div>
        </div>

        {/* Live Side-by-Side Simulation Card */}
        <div className="mb-16">
          <AnimatePresence mode="wait">
            {activeTab === 'mk' ? (
              <motion.div
                key="mk-view"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-[#121528] to-[#0d0f1a] border border-indigo-500/30 shadow-[0_0_50px_rgba(99,102,241,0.15)] overflow-hidden"
              >
                <div className="absolute top-0 right-0 px-6 py-2 rounded-bl-2xl bg-indigo-500/20 border-l border-b border-indigo-500/30 text-indigo-300 font-mono text-xs">
                  ★ THE MK FLAGSHIP ENGINE
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                  <div className="lg:col-span-2 space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
                      Sub-Second Reaction Speed • 60 FPS Fluidity
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white">
                      Bespoke Interactive Architecture Tailored for Unstoppable Conversion
                    </h3>
                    <p className="text-zinc-300 text-sm leading-relaxed">
                      Every layout is designed from scratch around your unique value proposition. No bloated plugins, no sluggish page loads. Users feel instant tactile feedback on every click, creating an undeniable aura of luxury and credibility.
                    </p>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
                      <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                        <Gauge className="w-4 h-4 text-emerald-400 mb-1" />
                        <div className="text-white font-mono font-bold text-base">99–100</div>
                        <div className="text-[11px] text-zinc-400">Lighthouse Mobile</div>
                      </div>
                      <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                        <Clock className="w-4 h-4 text-indigo-400 mb-1" />
                        <div className="text-white font-mono font-bold text-base">0.32s</div>
                        <div className="text-[11px] text-zinc-400">Interaction Speed</div>
                      </div>
                      <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                        <Cpu className="w-4 h-4 text-purple-400 mb-1" />
                        <div className="text-white font-mono font-bold text-base">React 19</div>
                        <div className="text-[11px] text-zinc-400">Modern Architecture</div>
                      </div>
                      <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                        <Layers className="w-4 h-4 text-amber-400 mb-1" />
                        <div className="text-white font-mono font-bold text-base">7 Days</div>
                        <div className="text-[11px] text-zinc-400">Standard Launch</div>
                      </div>
                    </div>
                  </div>

                  {/* Interactive Visual Preview Box */}
                  <div className="p-6 rounded-2xl bg-black/60 border border-indigo-500/20 text-xs font-mono space-y-3">
                    <div className="flex items-center justify-between text-zinc-400 pb-2 border-b border-white/10">
                      <span>CLIENT OUTCOME</span>
                      <span className="text-emerald-400 font-bold">+140% TO +280% LEADS</span>
                    </div>
                    <div className="text-zinc-300">
                      &quot;Visitors stop asking for discounts because our site immediately looks like a market leader.&quot;
                    </div>
                    <div className="p-2.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-[11px]">
                      ✓ 100% full clean source code ownership<br />
                      ✓ Instant zero-cost cloud deployment<br />
                      ✓ 30 days direct WhatsApp support by Murtaza &amp; Kamran
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="ordinary-view"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-3xl p-8 sm:p-10 bg-[#140e11] border border-rose-500/30 shadow-[0_0_50px_rgba(244,63,94,0.1)] overflow-hidden"
              >
                <div className="absolute top-0 right-0 px-6 py-2 rounded-bl-2xl bg-rose-500/20 border-l border-b border-rose-500/30 text-rose-300 font-mono text-xs">
                  ✕ THE GENERIC RS 50,000 TEMPLATE TRAP
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                  <div className="lg:col-span-2 space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-mono">
                      Sluggish 4.8s Load • 45 Plugin Vulnerabilities
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white">
                      Cookie-Cutter Builders That Bleed High-Ticket Customers
                    </h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      Downloaded off a generic marketplace, cluttered with unused JavaScript, and broken on mobile. When potential high-paying clients land on this, they judge your capability within seconds and bounce back to Google.
                    </p>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
                      <div className="p-3 rounded-xl bg-white/[0.02] border border-rose-500/10">
                        <div className="text-rose-400 font-mono font-bold text-base">38/100</div>
                        <div className="text-[11px] text-zinc-500">Lighthouse Score</div>
                      </div>
                      <div className="p-3 rounded-xl bg-white/[0.02] border border-rose-500/10">
                        <div className="text-rose-400 font-mono font-bold text-base">4.8s</div>
                        <div className="text-[11px] text-zinc-500">Wait Time</div>
                      </div>
                      <div className="p-3 rounded-xl bg-white/[0.02] border border-rose-500/10">
                        <div className="text-zinc-400 font-mono font-bold text-base">Spaghetti</div>
                        <div className="text-[11px] text-zinc-500">Plugin Chaos</div>
                      </div>
                      <div className="p-3 rounded-xl bg-white/[0.02] border border-rose-500/10">
                        <div className="text-zinc-400 font-mono font-bold text-base">6–8 Weeks</div>
                        <div className="text-[11px] text-zinc-500">Slow Excuses</div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 rounded-2xl bg-black/50 border border-rose-500/20 text-xs font-mono space-y-3">
                    <div className="flex items-center justify-between text-zinc-400 pb-2 border-b border-white/10">
                      <span>COST OF LOST LEADS</span>
                      <span className="text-rose-400 font-bold">-Rs 500,000+ / YR</span>
                    </div>
                    <div className="text-zinc-400">
                      &quot;We kept waiting 3 weeks for an intern to change a single headline on our WordPress site.&quot;
                    </div>
                    <div className="p-2.5 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-300 text-[11px]">
                      ✕ Trapped in proprietary builders<br />
                      ✕ Monthly security vulnerabilities<br />
                      ✕ Disappearing freelance developers
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Detailed Comparison Table */}
        <div className="rounded-3xl border border-white/10 bg-[#0c0e18]/80 backdrop-blur-xl overflow-hidden shadow-2xl">
          <div className="p-6 sm:p-8 border-b border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-heading font-bold text-white">Direct Capability Comparison</h3>
              <p className="text-xs text-zinc-400 mt-1">See how Murtaza &amp; Kamran hold an unfair technical advantage.</p>
            </div>
            <div className="flex items-center gap-4 text-xs font-mono">
              <span className="flex items-center gap-1.5 text-zinc-500">
                <span className="w-2 h-2 rounded-full bg-zinc-600" /> Ordinary Agency
              </span>
              <span className="flex items-center gap-1.5 text-indigo-400">
                <span className="w-2 h-2 rounded-full bg-indigo-400" /> MK Studio
              </span>
            </div>
          </div>

          <div className="divide-y divide-white/5">
            {COMPARISON_POINTS.map((pt, idx) => (
              <div key={idx} className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-6 hover:bg-white/[0.02] transition-colors">
                <div className="md:col-span-4 flex items-center gap-3">
                  <span className="w-7 h-7 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center font-mono text-xs text-indigo-400 font-bold">
                    0{idx + 1}
                  </span>
                  <span className="font-heading font-semibold text-white text-base">
                    {pt.category}
                  </span>
                </div>

                <div className="md:col-span-4 p-4 rounded-xl bg-white/[0.01] border border-white/5 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  <div className="text-[10px] font-mono uppercase text-zinc-400 mb-1">Standard Industry</div>
                  {pt.ordinary}
                </div>

                <div className="md:col-span-4 p-4 rounded-xl bg-indigo-500/[0.04] border border-indigo-500/20 text-xs sm:text-sm text-indigo-200 leading-relaxed font-medium">
                  <div className="text-[10px] font-mono uppercase text-indigo-400 mb-1 flex items-center gap-1">
                    <CheckCircle className="w-3 h-3 text-indigo-400" />
                    Murtaza &amp; Kamran Standard
                  </div>
                  {pt.mkStudio}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
