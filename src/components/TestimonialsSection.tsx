import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/portfolioData';
import { soundFx } from '../utils/audio';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    soundFx.playClick();
    setCurrentIndex((prevIdx) => (prevIdx === 0 ? TESTIMONIALS.length - 1 : prevIdx - 1));
  };

  const next = () => {
    soundFx.playClick();
    setCurrentIndex((prevIdx) => (prevIdx === TESTIMONIALS.length - 1 ? 0 : prevIdx + 1));
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section id="testimonials" className="py-24 relative bg-[#090b14] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-xs font-mono text-emerald-300 uppercase tracking-wider mb-4">
              <span className="text-base leading-none">🇵🇰</span>
              <span>Reviews From Pakistani Business Owners</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
              Words From Local Founders.
            </h2>
            <p className="mt-3 text-base text-zinc-400 max-w-xl">
              Real results from Pakistani fashion labels, tech founders, and retailers who trusted Murtaza &amp; Kamran to build their high-converting websites.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              className="p-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-white cursor-pointer transition-all"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-xs font-mono text-zinc-400">
              0{currentIndex + 1} / 0{TESTIMONIALS.length}
            </span>
            <button
              onClick={next}
              className="p-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-white cursor-pointer transition-all"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-[#101322] to-[#0d0f19] border border-white/10 shadow-2xl relative overflow-hidden"
          >
            <Quote className="absolute -bottom-6 -right-6 w-48 h-48 text-white/[0.02] pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="ml-2 text-xs font-mono text-emerald-400 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Verified Client Review
                  </span>
                </div>

                <div className="text-xl sm:text-2xl font-heading font-medium text-white leading-relaxed">
                  &ldquo;{current.content}&rdquo;
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                  <img
                    src={current.avatar}
                    alt={current.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-indigo-500/50"
                  />
                  <div>
                    <h4 className="font-heading font-bold text-white text-base">{current.name}</h4>
                    <p className="text-xs text-zinc-400 font-mono">
                      {current.role}, <span className="text-indigo-300">{current.company}</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Metric Impact Highlight */}
              <div className="lg:col-span-4 p-6 rounded-2xl bg-black/50 border border-white/10 text-center space-y-2">
                <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                  Commercial Result
                </div>
                <div className="text-3xl sm:text-4xl font-heading font-black text-emerald-400 tracking-tight">
                  {current.metric}
                </div>
                <p className="text-xs text-zinc-300 font-medium pt-2">
                  &quot;{current.highlight}&quot;
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
