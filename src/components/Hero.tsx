import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'motion/react';
import { ArrowRight, Sparkles, Zap, ShieldCheck, Gauge, CheckCircle2, Terminal, Code2, Globe } from 'lucide-react';
import { soundFx } from '../utils/audio';

interface HeroProps {
  onOpenEstimator: () => void;
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEstimator, onOpenContact }) => {
  const [activeTheme, setActiveTheme] = useState<'indigo' | 'emerald' | 'rose'>('indigo');
  const [isInteracting, setIsInteracting] = useState(false);

  // 3D Card Tilt on Mouse Move
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['14deg', '-14deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-16deg', '16deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
    setIsInteracting(true);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsInteracting(false);
  };

  const themeColors = {
    indigo: {
      gradient: 'from-indigo-500 via-purple-500 to-cyan-400',
      glow: 'rgba(99, 102, 241, 0.35)',
      accent: '#818CF8',
      label: 'Neon Quantum',
    },
    emerald: {
      gradient: 'from-emerald-400 via-teal-500 to-cyan-500',
      glow: 'rgba(52, 211, 153, 0.35)',
      accent: '#34D399',
      label: 'Cyber Jade',
    },
    rose: {
      gradient: 'from-rose-500 via-pink-500 to-amber-400',
      glow: 'rgba(244, 63, 94, 0.35)',
      accent: '#FB7185',
      label: 'Sunset Pulse',
    },
  };

  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-20 overflow-hidden flex flex-col justify-center">
      {/* Background radial ambient lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-indigo-600/15 via-purple-600/15 to-transparent blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 -left-40 w-96 h-96 bg-cyan-500/10 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-purple-600/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Top Floating Badge with Pakistan Flag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-center sm:justify-start gap-3 mb-6"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/50 border border-emerald-500/35 backdrop-blur-xl shadow-inner text-emerald-300">
            <span className="text-lg leading-none">🇵🇰</span>
            <span className="text-xs font-mono font-bold tracking-wider uppercase text-white">
              DIRECT FOUNDER STUDIO
            </span>
            <span className="text-emerald-500/60">•</span>
            <span className="text-xs font-mono text-emerald-200">
              KAMRAN &amp; MURTAZA
            </span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-zinc-300">
            <span className="text-emerald-400 font-bold">9,400 PKR – 11,000 PKR</span>
            <span className="text-zinc-400">Fixed Transparent Rates • Zero Surprises</span>
          </div>
        </motion.div>

        {/* Main Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Narrative & Conversion Hooks */}
          <div className="lg:col-span-7 text-center sm:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-6xl xl:text-7xl font-heading font-black tracking-tight text-white leading-[1.05]"
            >
              Websites That{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-indigo-300 bg-clip-text text-transparent">
                  Dominate The World.
                </span>
                <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-gradient-to-r from-emerald-500 via-teal-400 to-indigo-500 rounded-full opacity-80" />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 text-base sm:text-lg text-zinc-300 max-w-2xl leading-relaxed font-normal"
            >
              <strong>Why creators and businesses gladly pay us:</strong> Your competitors run on broken, sluggish templates that look cheap and leak customers every hour. <strong>Kamran</strong> (Lead Systems Architect) and <strong>Murtaza</strong> (Creative &amp; Visual Director) build ultra-fast, 60fps digital powerhouses that make your brand look like an undisputed market leader — turning casual visitors into high-paying buyers for just <strong>9,400 PKR to 11,000 PKR</strong>.
            </motion.p>

            {/* Direct Phone & WhatsApp Access Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-6 flex flex-wrap items-center gap-2 justify-center sm:justify-start text-xs font-mono"
            >
              <a
                href="https://wa.me/923175861274"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/15 border border-emerald-500/35 text-emerald-300 hover:bg-emerald-500/25 transition-all cursor-pointer shadow-[0_0_15px_rgba(16,185,129,0.15)]"
              >
                <span>💬 WhatsApp:</span>
                <span className="font-bold text-white">03175861274</span>
              </a>
              <a
                href="tel:03323663632"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 text-zinc-300 hover:text-white hover:border-white/20 transition-all cursor-pointer"
                title="Call or WhatsApp Kamran directly"
              >
                <span className="text-cyan-400">📞 Kamran:</span>
                <span className="font-semibold text-white">03323663632</span>
              </a>
              <a
                href="tel:03153039037"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 text-zinc-300 hover:text-white hover:border-white/20 transition-all cursor-pointer"
                title="Call or WhatsApp Murtaza directly"
              >
                <span className="text-indigo-400">📞 Murtaza:</span>
                <span className="font-semibold text-white">03153039037</span>
              </a>
              <a
                href="mailto:yourcobweb@gmail.com"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 text-zinc-400 hover:text-zinc-200 transition-all"
              >
                <span>✉️ yourcobweb@gmail.com</span>
              </a>
            </motion.div>

            {/* Why Creators & Brands Pay Us - Dominance Matrix */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-left"
            >
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 hover:border-emerald-500/40 transition-all group">
                <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-400">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Crush Competitors</span>
                </div>
                <p className="text-[11px] text-zinc-300 mt-1 leading-snug">
                  Visitors immediately perceive you as a top 1% global brand. No more price bargaining.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 hover:border-cyan-500/40 transition-all group">
                <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-cyan-400">
                  <Zap className="w-3.5 h-3.5 text-cyan-400" />
                  <span>0.3s Speed &amp; WhatsApp Sales</span>
                </div>
                <p className="text-[11px] text-zinc-300 mt-1 leading-snug">
                  Lightning mobile 4G loading + 1-tap WhatsApp ordering turns clicks into immediate cash.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 hover:border-indigo-500/40 transition-all group">
                <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-indigo-300">
                  <ShieldCheck className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Agency Tier for 9,400–11,000 PKR</span>
                </div>
                <p className="text-[11px] text-zinc-300 mt-1 leading-snug">
                  International agency-grade React 19 craft with 100% direct founder phone access.
                </p>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center sm:justify-start"
            >
              <button
                id="hero-open-estimator-btn"
                onClick={() => {
                  soundFx.playSuccess();
                  onOpenEstimator();
                }}
                className="w-full sm:w-auto relative group overflow-hidden px-7 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-600 to-indigo-600 text-white font-semibold text-sm shadow-[0_0_35px_rgba(16,185,129,0.35)] hover:shadow-[0_0_50px_rgba(16,185,129,0.55)] transition-all cursor-pointer flex items-center justify-center gap-2.5"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>View Packages (9,400 – 11,000 PKR)</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                id="hero-whatsapp-btn"
                onClick={() => {
                  soundFx.playClick();
                  const text = encodeURIComponent(
                    `Assalam-o-Alaikum Murtaza & Kamran! I saw your web studio website. I want to build an awesome website for my business in Pakistan with your 9,400 PKR - 11,000 PKR packages.`
                  );
                  window.open(`https://wa.me/923175861274?text=${text}`, '_blank');
                }}
                className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 hover:text-emerald-200 font-medium text-sm border border-emerald-500/30 hover:border-emerald-500/50 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span className="text-base leading-none">💬</span>
                <span>Chat on WhatsApp: 03175861274</span>
              </button>
            </motion.div>

            {/* Direct Trust Proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-8 pt-6 border-t border-white/8 flex flex-col sm:flex-row items-center gap-4 text-xs text-zinc-400"
            >
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-950/40 border border-emerald-500/20 text-emerald-300 font-mono">
                <span className="text-base">🇵🇰</span>
                <span className="font-semibold text-white">Direct Founder Line</span>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-zinc-200 font-medium">Karachi • Lahore • Islamabad • Rawalpindi • Nationwide</div>
                <div className="text-zinc-400">Call or WhatsApp Kamran (03323663632) or Murtaza (03153039037) directly anytime.</div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Interactive 3D Perspective Hologram Simulator */}
          <div className="lg:col-span-5 flex justify-center perspective-[1200px]">
            <motion.div
              ref={cardRef}
              style={{
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
              }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative w-full max-w-md rounded-3xl p-[1px] bg-gradient-to-b from-white/20 via-white/5 to-transparent shadow-2xl transition-shadow duration-300 cursor-crosshair group"
            >
              {/* Dynamic Glow backing */}
              <div
                className="absolute -inset-2 rounded-3xl blur-2xl opacity-60 transition-all duration-500"
                style={{
                  background: `radial-gradient(circle at 50% 50%, ${themeColors[activeTheme].glow}, transparent 75%)`,
                }}
              />

              {/* Main Card Container */}
              <div className="relative rounded-3xl bg-[#0e101a]/95 border border-white/10 p-6 backdrop-blur-2xl overflow-hidden">
                {/* Window header */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                    <span className="ml-2 font-mono text-[11px] text-zinc-400 flex items-center gap-1">
                      <Terminal className="w-3 h-3 text-indigo-400" />
                      mk-core-engine.v2
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    60.0 FPS
                  </div>
                </div>

                {/* Live Interactive Canvas Mockup inside 3D Card */}
                <div className="mt-5 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                      Interactive Visual Engine
                    </span>
                    <div className="flex items-center gap-1.5">
                      {(['indigo', 'emerald', 'rose'] as const).map((theme) => (
                        <button
                          key={theme}
                          onClick={() => {
                            soundFx.playToggle();
                            setActiveTheme(theme);
                          }}
                          className={`w-4 h-4 rounded-full transition-transform ${
                            activeTheme === theme ? 'scale-125 ring-2 ring-white' : 'opacity-60 hover:opacity-100'
                          }`}
                          style={{
                            backgroundColor:
                              theme === 'indigo' ? '#818CF8' : theme === 'emerald' ? '#34D399' : '#FB7185',
                          }}
                          title={`Switch to ${theme} mood`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Simulated Dynamic Glass Viewport */}
                  <div className="relative p-5 rounded-2xl bg-black/40 border border-white/10 overflow-hidden">
                    <div
                      className="absolute inset-0 opacity-20 pointer-events-none"
                      style={{
                        background: `radial-gradient(circle at 80% 20%, ${themeColors[activeTheme].accent}, transparent 60%)`,
                      }}
                    />

                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                          <span>🇵🇰</span> PAKISTAN STUDIO
                        </span>
                        <span className="text-[10px] font-mono text-amber-300 font-bold flex items-center gap-1">
                          9,400 – 11,000 PKR
                        </span>
                      </div>

                      <h3 className="text-xl font-heading font-bold text-white tracking-tight">
                        Built For Pakistani Businesses
                      </h3>
                      <p className="mt-1 text-xs text-zinc-300 leading-relaxed">
                        60fps smooth web architecture for local retail brands, clothing shops, clinics, and service businesses across Pakistan.
                      </p>

                      {/* Simulated Performance Dashboard */}
                      <div className="mt-4 grid grid-cols-3 gap-2">
                        <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/5 text-center">
                          <div className="text-emerald-400 font-mono font-bold text-sm">100</div>
                          <div className="text-[10px] text-zinc-400">SEO / Perf</div>
                        </div>
                        <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/5 text-center">
                          <div className="text-indigo-400 font-mono font-bold text-sm">0.3s</div>
                          <div className="text-[10px] text-zinc-400">FCP Latency</div>
                        </div>
                        <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/5 text-center">
                          <div className="text-amber-400 font-mono font-bold text-sm">A+</div>
                          <div className="text-[10px] text-zinc-400">UX Grade</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Code Architecture Snapshot */}
                  <div className="p-3.5 rounded-xl bg-zinc-950/80 border border-white/5 font-mono text-[11px] text-zinc-400 space-y-1">
                    <div className="flex items-center justify-between text-zinc-400">
                      <span className="flex items-center gap-1.5 text-zinc-300">
                        <Code2 className="w-3.5 h-3.5 text-indigo-400" />
                        architecture.config.ts
                      </span>
                      <span className="text-emerald-400">Compiled OK</span>
                    </div>
                    <div className="text-zinc-400">
                      <span className="text-purple-400">const</span> studio = &#123; founders: [<span className="text-emerald-300">&apos;Murtaza&apos;</span>, <span className="text-emerald-300">&apos;Kamran&apos;</span>], speed: <span className="text-amber-300">&apos;Sub-second&apos;</span> &#125;;
                    </div>
                  </div>

                  {/* Interactive Button Test */}
                  <button
                    onClick={() => {
                      soundFx.playSuccess();
                      onOpenContact();
                    }}
                    className="w-full py-2.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-xs font-semibold text-white transition-all flex items-center justify-center gap-2"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Test Instant Booking Terminal</span>
                  </button>

                  <div className="text-center">
                    <span className="text-[10px] font-mono text-zinc-400">
                      {isInteracting ? '✦ 3D Gyroscope Active' : 'Hover over this card to activate 3D tilt'}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
