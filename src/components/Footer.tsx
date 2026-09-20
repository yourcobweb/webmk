import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp, Phone, MessageSquare, Mail, PhoneCall, Sparkles, X, Check, Copy, ShieldCheck } from 'lucide-react';
import { soundFx } from '../utils/audio';

export const Footer: React.FC = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const scrollToTop = () => {
    soundFx.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const copyToClipboard = (text: string, label: string) => {
    soundFx.playSuccess();
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2500);
  };

  return (
    <footer className="py-16 bg-[#05060a] border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between pb-12 border-b border-white/10 gap-8">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500 to-indigo-600 flex items-center justify-center font-heading font-black text-white text-base shadow-lg shadow-emerald-500/20">
                MK
              </div>
              <span className="font-heading font-bold text-white text-xl tracking-tight flex items-center gap-2">
                <span>Murtaza &amp; Kamran</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 font-mono">
                  Pakistan 🇵🇰
                </span>
              </span>
            </div>
            <p className="text-xs text-zinc-400 mt-2 max-w-sm">
              Crafted by Kamran &amp; Murtaza. Honest, high-converting 60fps websites for Pakistani businesses, brands, and retail shops at transparent 9,400 PKR – 11,000 PKR rates.
            </p>
          </div>

          {/* Direct Contact Numbers & Actions */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://wa.me/923175861274"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/35 text-xs font-mono text-emerald-300 transition-all flex items-center gap-2 cursor-pointer shadow-[0_0_15px_rgba(16,185,129,0.15)]"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp: 03175861274</span>
            </a>

            <button
              onClick={() => {
                soundFx.playClick();
                setContactModalOpen(true);
              }}
              className="px-4 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-xs font-mono text-zinc-300 hover:text-white transition-all flex items-center gap-2 cursor-pointer"
            >
              <Phone className="w-4 h-4 text-indigo-400" />
              <span>Direct Phone Directory</span>
            </button>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-zinc-400 hover:text-white transition-all cursor-pointer"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom meta row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-zinc-400 gap-4">
          <div>
            &copy; {new Date().getFullYear()} Murtaza &amp; Kamran Web Studio. All rights reserved. Built with React 19 &amp; Tailwind.
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Pakistan Studio Online 🇵🇰
            </span>
            <span className="text-zinc-700">|</span>
            <span>9,400 – 11,000 PKR Price Guarantee</span>
          </div>
        </div>
      </div>

      {/* Direct Contact Directory Modal */}
      <AnimatePresence>
        {contactModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-lg rounded-3xl bg-[#0d0f1c] border border-white/15 p-6 sm:p-8 shadow-2xl space-y-6"
            >
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                    <PhoneCall className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-bold text-white">
                      Direct Contact Directory
                    </h3>
                    <p className="text-xs text-zinc-400 font-mono">
                      Murtaza &amp; Kamran • Official Direct Communication Lines
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setContactModalOpen(false)}
                  className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-3">
                {/* Main Business WhatsApp */}
                <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 flex items-center justify-between gap-4">
                  <div>
                    <div className="text-[11px] font-mono text-emerald-400 font-semibold uppercase tracking-wider">
                      Official Business WhatsApp
                    </div>
                    <div className="text-base font-bold text-white font-mono mt-0.5">
                      03175861274
                    </div>
                    <div className="text-xs text-zinc-400">Main line for website quotes and new project briefs</div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <a
                      href="https://wa.me/923175861274"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-black font-semibold text-xs transition-all"
                    >
                      Chat WA
                    </a>
                    <button
                      onClick={() => copyToClipboard('03175861274', 'biz')}
                      className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs cursor-pointer"
                      title="Copy number"
                    >
                      {copiedText === 'biz' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Murtaza Direct */}
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-between gap-4">
                  <div>
                    <div className="text-[11px] font-mono text-indigo-300 font-semibold uppercase tracking-wider">
                      Murtaza (Visual &amp; Interaction Design)
                    </div>
                    <div className="text-base font-bold text-white font-mono mt-0.5">
                      03153039037
                    </div>
                    <div className="text-xs text-zinc-400">Available for phone calls &amp; WhatsApp</div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <a
                      href="tel:03153039037"
                      className="px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-xs transition-all"
                    >
                      Call
                    </a>
                    <a
                      href="https://wa.me/923153039037"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 font-medium text-xs transition-all"
                    >
                      WA
                    </a>
                    <button
                      onClick={() => copyToClipboard('03153039037', 'murtaza')}
                      className="p-2 rounded-xl bg-white/5 hover:bg-white/15 text-zinc-300 text-xs cursor-pointer"
                      title="Copy number"
                    >
                      {copiedText === 'murtaza' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Kamran Direct */}
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-between gap-4">
                  <div>
                    <div className="text-[11px] font-mono text-cyan-300 font-semibold uppercase tracking-wider">
                      Kamran (Lead Systems Architect)
                    </div>
                    <div className="text-base font-bold text-white font-mono mt-0.5">
                      03323663632
                    </div>
                    <div className="text-xs text-zinc-400">Available for phone calls &amp; WhatsApp</div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <a
                      href="tel:03323663632"
                      className="px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-xs transition-all"
                    >
                      Call
                    </a>
                    <a
                      href="https://wa.me/923323663632"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 font-medium text-xs transition-all"
                    >
                      WA
                    </a>
                    <button
                      onClick={() => copyToClipboard('03323663632', 'kamran')}
                      className="p-2 rounded-xl bg-white/5 hover:bg-white/15 text-zinc-300 text-xs cursor-pointer"
                      title="Copy number"
                    >
                      {copiedText === 'kamran' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Official Email */}
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-between gap-4">
                  <div>
                    <div className="text-[11px] font-mono text-zinc-400 font-semibold uppercase tracking-wider">
                      Official Studio Email
                    </div>
                    <div className="text-sm font-bold text-white font-mono mt-0.5">
                      yourcobweb@gmail.com
                    </div>
                    <div className="text-xs text-zinc-400">Send specs, contracts, or long inquiries</div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <a
                      href="mailto:yourcobweb@gmail.com"
                      className="px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-xs transition-all flex items-center gap-1.5"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Email</span>
                    </a>
                    <button
                      onClick={() => copyToClipboard('yourcobweb@gmail.com', 'email')}
                      className="p-2 rounded-xl bg-white/5 hover:bg-white/15 text-zinc-300 text-xs cursor-pointer"
                      title="Copy email"
                    >
                      {copiedText === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-zinc-400">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <ShieldCheck className="w-4 h-4" /> Direct Founder Guarantee
                </span>
                <span>9,400 – 11,000 PKR Packages</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </footer>
  );
};
