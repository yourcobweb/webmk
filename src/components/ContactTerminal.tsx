import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { Send, Sparkles, CheckCircle2, MessageSquare, Mail, Copy, Check, Clock, ShieldCheck, Phone, PhoneCall } from 'lucide-react';
import { soundFx } from '../utils/audio';

interface ContactTerminalProps {
  initialBrief?: string;
}

export const ContactTerminal: React.FC<ContactTerminalProps> = ({ initialBrief = '' }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [budget, setBudget] = useState('9,400 - 11,000 PKR');
  const [timeline, setTimeline] = useState('Standard (7 Days)');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [copiedBrief, setCopiedBrief] = useState(false);

  useEffect(() => {
    if (initialBrief) {
      setMessage((prev) => (prev ? `${prev}\n\n[Configured Estimate from Tool]:\n${initialBrief}` : `[Configured Estimate from Tool]:\n${initialBrief}`));
    }
  }, [initialBrief]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    soundFx.playSuccess();

    try {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#10B981', '#6366F1', '#EC4899', '#34D399', '#F59E0B'],
      });
    } catch {
      // Fallback
    }

    setSubmitted(true);
  };

  const handleCopyProjectBrief = () => {
    soundFx.playClick();
    const briefText = `PROJECT INQUIRY FOR MURTAZA & KAMRAN (PAKISTAN 🇵🇰):\n-------------------------------------\nName: ${name || 'N/A'}\nEmail / Phone: ${email || 'N/A'}\nCompany/Brand: ${company || 'N/A'}\nPackage Budget: ${budget}\nPreferred Timeline: ${timeline}\n\nProject Scope & Message:\n${message || 'Standard inquiry'}\n\nGenerated via Murtaza & Kamran Web Studio (yourcobweb@gmail.com)`;

    navigator.clipboard.writeText(briefText);
    setCopiedBrief(true);
    setTimeout(() => setCopiedBrief(false), 2500);
  };

  const handleWhatsApp = () => {
    soundFx.playClick();
    const text = encodeURIComponent(
      `Assalam-o-Alaikum Murtaza & Kamran! I want to get a website made for my business in Pakistan 🇵🇰.\nName: ${name || 'Prospective Client'}\nBusiness/Brand: ${company || 'My Business'}\nContact: ${email || 'Provided on chat'}\nBudget: ${budget}\nTimeline: ${timeline}\n\nDetails: ${message || 'Looking for an out-of-this-world website for 9,400 PKR - 11,000 PKR.'}`
    );
    window.open(`https://wa.me/923175861274?text=${text}`, '_blank');
  };

  const handleMailto = () => {
    soundFx.playClick();
    const subject = encodeURIComponent(`New Project Inquiry for Murtaza & Kamran - ${company || name || 'New Client'}`);
    const body = encodeURIComponent(
      `Hi Murtaza and Kamran,\n\nI want to work with you on a website for my business.\n\nName: ${name}\nBusiness/Brand: ${company}\nContact Details: ${email}\nTarget Package: ${budget}\nTimeline: ${timeline}\n\nProject Details:\n${message}\n\nLooking forward to hearing from you!`
    );
    window.location.href = `mailto:yourcobweb@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 relative bg-[#07080e] border-t border-white/5 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[500px] bg-gradient-to-b from-emerald-600/15 to-indigo-600/10 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-xs font-mono text-emerald-300 uppercase tracking-wider mb-4">
            <span className="text-base leading-none">🇵🇰</span>
            <span>Direct Pakistan Studio Terminal</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
            Start Your Website With Murtaza &amp; Kamran.
          </h2>
          <p className="mt-4 text-base text-zinc-400 leading-relaxed">
            Ready to give your Pakistani brand or local business a website that looks 10x better than your competitors? Send your details below or call/WhatsApp us directly.
          </p>
        </div>

        {/* Quick Founder Call & WhatsApp Contact Bar */}
        <div className="mb-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <a
            href="https://wa.me/923175861274"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-2xl bg-emerald-950/30 hover:bg-emerald-950/50 border border-emerald-500/30 hover:border-emerald-500/50 transition-all flex items-center gap-3.5 group cursor-pointer shadow-[0_0_20px_rgba(16,185,129,0.1)]"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider font-semibold">
                Studio WhatsApp
              </div>
              <div className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                03175861274
              </div>
            </div>
          </a>

          <div className="p-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.05] border border-white/10 hover:border-white/20 transition-all flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
                <PhoneCall className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] font-mono text-cyan-300 uppercase tracking-wider font-semibold">
                  Kamran (Direct)
                </div>
                <div className="text-sm font-bold text-white font-mono">
                  03323663632
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <a
                href="tel:03323663632"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/15 text-zinc-300 hover:text-white transition-all text-xs"
                title="Call Kamran"
              >
                Call
              </a>
              <a
                href="https://wa.me/923323663632"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 transition-all text-xs"
                title="WhatsApp Kamran"
              >
                WA
              </a>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.05] border border-white/10 hover:border-white/20 transition-all flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] font-mono text-indigo-300 uppercase tracking-wider font-semibold">
                  Murtaza (Direct)
                </div>
                <div className="text-sm font-bold text-white font-mono">
                  03153039037
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <a
                href="tel:03153039037"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/15 text-zinc-300 hover:text-white transition-all text-xs"
                title="Call Murtaza"
              >
                Call
              </a>
              <a
                href="https://wa.me/923153039037"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 transition-all text-xs"
                title="WhatsApp Murtaza"
              >
                WA
              </a>
            </div>
          </div>
        </div>

        {/* The Terminal Container */}
        <div className="rounded-3xl p-8 sm:p-12 bg-[#0d0f1c] border border-white/10 shadow-2xl backdrop-blur-2xl">
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="submitted-state"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="py-12 text-center space-y-6"
              >
                <div className="w-20 h-20 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-[0_0_35px_rgba(52,211,153,0.3)]">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
                    Project Inquiry Received!
                  </h3>
                  <p className="text-sm text-zinc-300 max-w-md mx-auto">
                    Murtaza and Kamran have received your details. We will review your vision and reply within 12 hours via email or WhatsApp.
                  </p>
                </div>

                {/* Quick actions for immediate connect */}
                <div className="pt-4 flex flex-wrap justify-center gap-3 max-w-md mx-auto">
                  <button
                    onClick={handleWhatsApp}
                    className="px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-black font-semibold text-xs flex items-center gap-2 cursor-pointer transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Ping Us on WhatsApp: 03175861274</span>
                  </button>
                  <button
                    onClick={() => {
                      soundFx.playClick();
                      setSubmitted(false);
                    }}
                    className="px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium text-xs cursor-pointer transition-all"
                  >
                    Send Another Inquiry
                  </button>
                </div>

                <div className="pt-6 border-t border-white/10 flex items-center justify-center gap-6 text-xs font-mono text-zinc-400">
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <Clock className="w-4 h-4" /> Response Time: Under 12 Hours
                  </span>
                  <span className="flex items-center gap-1.5 text-indigo-300">
                    <ShieldCheck className="w-4 h-4" /> 100% Honest &amp; Confidential
                  </span>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Contact details row */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Ali Khan"
                      className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all placeholder:text-zinc-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
                      Email or WhatsApp Number *
                    </label>
                    <input
                      type="text"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="ali123@gmail.com or 0300-1234567"
                      className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all placeholder:text-zinc-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
                      Business / Brand Name
                    </label>
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="e.g. Al-Rehman Enterprises / ET Brands"
                      className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all placeholder:text-zinc-500"
                    />
                  </div>
                </div>

                {/* Budget & Timeline Selectors */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
                      Package Budget (PKR)
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {['9,400 PKR Starter', '10,200 PKR Multi-Page', '11,000 PKR E-Commerce', '9,400 - 11,000 PKR'].map((b) => (
                        <button
                          type="button"
                          key={b}
                          onClick={() => {
                            soundFx.playClick();
                            setBudget(b);
                          }}
                          className={`py-2.5 px-3 rounded-xl border text-xs font-mono transition-all cursor-pointer ${
                            budget === b
                              ? 'bg-emerald-500/20 border-emerald-500/60 text-emerald-300 font-bold'
                              : 'bg-white/[0.02] border-white/5 text-zinc-400 hover:border-white/15'
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
                      Target Launch Speed
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {['Fast-Track (3–4 Days)', 'Standard (7 Days)', 'Extended (10–14 Days)', 'Flexible Launch'].map((t) => (
                        <button
                          type="button"
                          key={t}
                          onClick={() => {
                            soundFx.playClick();
                            setTimeline(t);
                          }}
                          className={`py-2.5 px-3 rounded-xl border text-xs font-mono transition-all cursor-pointer ${
                            timeline === t
                              ? 'bg-emerald-500/20 border-emerald-500/60 text-emerald-300 font-bold'
                              : 'bg-white/[0.02] border-white/5 text-zinc-400 hover:border-white/15'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Detailed message */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider">
                      Tell Murtaza &amp; Kamran About Your Business *
                    </label>
                    {message && (
                      <span className="text-[11px] font-mono text-emerald-400">
                        ✓ Brief attached
                      </span>
                    )}
                  </div>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us what your business does, competitors you want to beat, products/services you sell, or if you need WhatsApp checkout..."
                    className="w-full p-4 rounded-xl bg-white/[0.03] border border-white/10 text-white text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all placeholder:text-zinc-500"
                  />
                </div>

                {/* Form Action Controls */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-2.5 w-full sm:w-auto">
                    <button
                      type="button"
                      onClick={handleCopyProjectBrief}
                      className="px-4 py-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-xs font-mono text-zinc-300 transition-all flex items-center gap-1.5 cursor-pointer"
                      title="Copy formatted project brief to paste anywhere"
                    >
                      {copiedBrief ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                      <span>{copiedBrief ? 'Copied!' : 'Copy Brief'}</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleWhatsApp}
                      className="px-4 py-3 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/35 text-xs font-mono text-emerald-300 transition-all flex items-center gap-1.5 cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>WhatsApp: 03175861274</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleMailto}
                      className="px-4 py-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-xs font-mono text-zinc-300 transition-all flex items-center gap-1.5 cursor-pointer"
                    >
                      <Mail className="w-4 h-4" />
                      <span>yourcobweb@gmail.com</span>
                    </button>
                  </div>

                  <button
                    type="submit"
                    id="submit-project-brief-btn"
                    className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-indigo-600 hover:from-emerald-600 hover:to-indigo-700 text-white font-semibold text-sm shadow-[0_0_30px_rgba(16,185,129,0.35)] transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Inquiry</span>
                  </button>
                </div>
              </form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
