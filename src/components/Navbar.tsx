import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Volume2, VolumeX, Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { soundFx } from '../utils/audio';

interface NavbarProps {
  onOpenEstimator: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEstimator, onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(soundFx.enabled);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Keep in sync with auto-detected sound engine state
    setSoundEnabled(soundFx.enabled);

    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const next = !soundEnabled;
    soundFx.enabled = next;
    setSoundEnabled(next);
    if (next) {
      soundFx.playSuccess();
    }
  };

  const navLinks = [
    { label: 'Showcase', href: '#showcase' },
    { label: 'The Contrast', href: '#contrast' },
    { label: 'Murtaza & Kamran', href: '#founders' },
    { label: 'Process', href: '#process' },
    { label: 'Cost Estimator', href: '#estimator' },
  ];

  const handleLinkClick = (href: string) => {
    soundFx.playClick();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navigation-bar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'py-2.5 bg-[#08090E]/90 backdrop-blur-md border-b border-white/10 shadow-2xl shadow-black/50'
          : 'py-3 bg-transparent'
      }`}
    >
      {/* Top Pakistan Badge Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-2">
        <div className="flex items-center justify-between text-[11px] font-mono py-1 px-3 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 backdrop-blur-md">
          <div className="flex items-center gap-2">
            <span className="text-base leading-none">🇵🇰</span>
            <span className="font-semibold text-white tracking-wide">
              PROUDLY CRAFTED IN PAKISTAN
            </span>
            <span className="text-emerald-500/60 hidden sm:inline">•</span>
            <span className="text-zinc-300 hidden sm:inline">
              Custom-built websites for Pakistani businesses, brands &amp; shops
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30">
              Only 9,400 – 11,000 PKR
            </span>
            <span className="hidden md:inline text-zinc-400">Direct WhatsApp Support</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Monogram & Name */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            soundFx.playClick();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-3 group"
        >
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 via-indigo-500 to-purple-600 p-[1px] transition-transform duration-300 group-hover:scale-105">
            <div className="w-full h-full rounded-xl bg-[#0b0c14] flex items-center justify-center font-heading font-extrabold text-white text-base tracking-tighter">
              MK
            </div>
            <div className="absolute -inset-0.5 rounded-xl bg-emerald-500/30 blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-heading font-bold text-white tracking-tight text-lg flex items-center gap-1.5">
                Murtaza <span className="text-indigo-400 font-light">&</span> Kamran
                <span className="text-base ml-0.5" title="Made in Pakistan">🇵🇰</span>
              </span>
              <span className="hidden sm:inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                ONLINE (PAKISTAN)
              </span>
            </div>
            <span className="text-[11px] font-mono text-zinc-400 tracking-wider uppercase">
              Kamran &amp; Murtaza • Web Studio Pakistan
            </span>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleLinkClick(link.href)}
              onMouseEnter={() => soundFx.playHover()}
              className="px-3.5 py-1.5 text-xs font-medium text-zinc-300 hover:text-white rounded-full hover:bg-white/[0.08] transition-all cursor-pointer"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Sound Toggle */}
          <button
            id="sound-engine-toggle"
            onClick={toggleSound}
            title={soundEnabled ? 'Disable futuristic sound FX' : 'Enable futuristic sound FX'}
            className={`p-2.5 rounded-xl border transition-all cursor-pointer flex items-center gap-1.5 text-xs font-mono ${
              soundEnabled
                ? 'bg-indigo-500/15 border-indigo-500/40 text-indigo-300 shadow-[0_0_15px_rgba(99,102,241,0.3)]'
                : 'bg-white/[0.03] border-white/10 text-zinc-400 hover:text-zinc-200 hover:border-white/20'
            }`}
          >
            {soundEnabled ? (
              <>
                <Volume2 className="w-4 h-4 text-indigo-400" />
                <span className="text-[10px]">SFX ON</span>
              </>
            ) : (
              <>
                <VolumeX className="w-4 h-4 text-zinc-500" />
                <span className="text-[10px]">SFX OFF</span>
              </>
            )}
          </button>

          {/* Quick Quote Button */}
          <button
            onClick={() => {
              soundFx.playClick();
              onOpenEstimator();
            }}
            className="px-4 py-2 text-xs font-medium text-zinc-200 bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 rounded-xl transition-all cursor-pointer flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Instant Quote</span>
          </button>

          {/* High Conversion Primary CTA */}
          <button
            id="nav-start-project-btn"
            onClick={() => {
              soundFx.playSuccess();
              onOpenContact();
            }}
            className="relative group overflow-hidden px-5 py-2 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600 text-white text-xs font-semibold shadow-[0_0_25px_rgba(99,102,241,0.4)] hover:shadow-[0_0_35px_rgba(99,102,241,0.7)] transition-all cursor-pointer"
          >
            <span className="relative z-10 flex items-center gap-1.5">
              <span>Start Project</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={toggleSound}
            className="p-2 rounded-lg bg-white/5 border border-white/10 text-zinc-400"
          >
            {soundEnabled ? <Volume2 className="w-4 h-4 text-indigo-400" /> : <VolumeX className="w-4 h-4 text-zinc-500" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-white/5 border border-white/10 text-zinc-300"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="sm:hidden px-4 pt-4 pb-6 bg-[#0c0e17] border-b border-white/10 shadow-2xl flex flex-col gap-3 mt-2"
          >
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                Available for Q2/Q3 Bookings
              </span>
            </div>

            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleLinkClick(link.href)}
                className="text-left py-2 text-sm font-medium text-zinc-300 hover:text-white"
              >
                {link.label}
              </button>
            ))}

            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEstimator();
                }}
                className="w-full py-2.5 rounded-lg bg-white/5 border border-white/10 text-xs font-medium text-center text-zinc-200"
              >
                Launch Price Estimator
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full py-2.5 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 text-xs font-semibold text-center text-white"
              >
                Start Your Project With Us
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
