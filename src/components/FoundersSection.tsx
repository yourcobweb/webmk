import React from 'react';
import { motion } from 'motion/react';
import { FOUNDERS } from '../data/portfolioData';
import { Sparkles, Terminal, Palette, Award, CheckCircle2, MessageSquareCode } from 'lucide-react';
import { soundFx } from '../utils/audio';

interface FoundersSectionProps {
  onOpenContact: () => void;
}

export const FoundersSection: React.FC<FoundersSectionProps> = ({ onOpenContact }) => {
  return (
    <section id="founders" className="py-24 relative bg-[#07090f] border-t border-white/5 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-indigo-600/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-purple-400 uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            Crafted by Kamran &amp; Murtaza
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
            Meet Murtaza &amp; Kamran.
          </h2>
          <p className="mt-4 text-base text-zinc-400 leading-relaxed">
            We are not an anonymous 40-person agency where your project gets handed down to unpaid interns. When you work with us, you partner directly with two obsessive specialists.
          </p>
        </div>

        {/* Dual Founder Profile Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {FOUNDERS.map((founder, idx) => {
            const isMurtaza = founder.name === 'Murtaza';
            const accentColor = isMurtaza ? '#818CF8' : '#34D399';
            const gradientBg = isMurtaza
              ? 'from-indigo-500/20 via-purple-500/10 to-transparent'
              : 'from-emerald-500/20 via-teal-500/10 to-transparent';

            return (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="relative rounded-3xl p-8 sm:p-10 bg-[#0d0f19] border border-white/10 shadow-2xl flex flex-col justify-between overflow-hidden group hover:border-white/20 transition-all"
              >
                {/* Subtle top light gradient */}
                <div
                  className={`absolute -top-32 -right-32 w-64 h-64 rounded-full blur-3xl opacity-40 bg-gradient-to-br ${gradientBg} pointer-events-none`}
                />

                <div>
                  {/* Founder Badge & Icon */}
                  <div className="flex items-center justify-between pb-6 border-b border-white/10">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center font-heading font-black text-xl text-white shadow-lg"
                        style={{
                          backgroundColor: accentColor,
                          boxShadow: `0 0 25px ${accentColor}40`,
                        }}
                      >
                        {isMurtaza ? <Palette className="w-6 h-6 text-black" /> : <Terminal className="w-6 h-6 text-black" />}
                      </div>
                      <div>
                        <h3 className="text-2xl font-heading font-extrabold text-white tracking-tight">
                          {founder.name}
                        </h3>
                        <span className="text-xs font-mono text-zinc-400">{founder.role}</span>
                      </div>
                    </div>

                    <span
                      className="px-3 py-1 rounded-full text-xs font-mono font-semibold"
                      style={{
                        backgroundColor: `${accentColor}15`,
                        color: accentColor,
                        border: `1px solid ${accentColor}30`,
                      }}
                    >
                      {founder.badge}
                    </span>
                  </div>

                  {/* Founder Quote */}
                  <div className="mt-6 p-4 rounded-2xl bg-white/[0.02] border border-white/5 relative">
                    <p className="text-sm italic text-zinc-300 leading-relaxed font-serif">
                      &ldquo;{founder.quote}&rdquo;
                    </p>
                  </div>

                  {/* Bio Description */}
                  <p className="mt-5 text-sm text-zinc-400 leading-relaxed">
                    {founder.avatarBio}
                  </p>

                  {/* Core Specialties */}
                  <div className="mt-6 space-y-2.5">
                    <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                      Core Superpowers
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {founder.specialties.map((spec, sIdx) => (
                        <div key={sIdx} className="flex items-center gap-2 text-xs text-zinc-300">
                          <CheckCircle2
                            className="w-3.5 h-3.5 shrink-0"
                            style={{ color: accentColor }}
                          />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Tech & Tool Arsenal */}
                <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {founder.tools.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/8 text-[11px] font-mono text-zinc-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className="text-xs font-mono text-zinc-400 flex items-center gap-1">
                    <Award className="w-3.5 h-3.5 text-amber-400" />
                    {founder.experienceYears} Elite Craft
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Why The Duo Model Wins */}
        <div className="rounded-3xl p-8 sm:p-10 bg-gradient-to-r from-indigo-950/40 via-[#0d1020] to-purple-950/40 border border-indigo-500/20 backdrop-blur-xl shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-indigo-400 uppercase">
              <MessageSquareCode className="w-4 h-4" />
              Direct Founder Access
            </div>
            <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
              Zero Bureaucracy. 100% Uncompromised Speed.
            </h3>
            <p className="text-sm text-zinc-300 leading-relaxed">
              When you hire us, you get Murtaza designing your interactive aesthetic and Kamran architecting your high-speed codebase. You text us directly on WhatsApp or Slack. No telephone game, no scope bloat.
            </p>
          </div>

          <button
            onClick={() => {
              soundFx.playSuccess();
              onOpenContact();
            }}
            className="w-full md:w-auto shrink-0 px-8 py-4 rounded-2xl bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)] cursor-pointer"
          >
            Start A Conversation With Us
          </button>
        </div>
      </div>
    </section>
  );
};
