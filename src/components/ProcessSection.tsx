import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Compass, Layers, Rocket, ShieldCheck } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'WhatsApp Discovery & Goals',
      timeframe: 'Day 1',
      icon: Compass,
      color: '#10B981',
      desc: 'Murtaza connects with you directly on WhatsApp or call. We understand your business, products/services, target Pakistani customers, and key competitors you want to beat.',
      deliverable: 'Project scope blueprint & WhatsApp checklist',
    },
    {
      num: '02',
      title: 'Bespoke UI/UX Design',
      timeframe: 'Days 2–3',
      icon: Layers,
      color: '#C084FC',
      desc: 'Murtaza designs the modern interface from scratch. High-contrast typography, WhatsApp order buttons, clear call-to-actions, and flawless mobile layouts tailored for local buyers.',
      deliverable: 'Interactive visual mockups & structure preview',
    },
    {
      num: '03',
      title: 'Sub-Second 4G Engineering',
      timeframe: 'Days 3–5',
      icon: Rocket,
      color: '#34D399',
      desc: 'Kamran develops the website using modern React 19 and Tailwind CSS. Clean, lightweight code that opens in under 0.4 seconds on Jazz, Zong, and WiFi without lag.',
      deliverable: 'Private live staging link for review',
    },
    {
      num: '04',
      title: 'Final Live Launch & Full Code Handover',
      timeframe: 'Days 5–7',
      icon: ShieldCheck,
      color: '#38BDF8',
      desc: 'We connect your domain (.pk, .com), configure zero-cost worldwide cloud hosting, test thoroughly on smartphones across Pakistan, and hand over your complete source code.',
      deliverable: 'Live website + 100% full source code ownership',
    },
  ];

  return (
    <section id="process" className="py-24 relative bg-[#080a13] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-xs font-mono text-emerald-300 uppercase tracking-wider mb-4">
            <span className="text-base leading-none">🇵🇰</span>
            <span>Standard 7-Day Launch Pipeline</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
            From Idea to Mind-Blowing Live Site in Days.
          </h2>
          <p className="mt-4 text-base text-zinc-400 leading-relaxed">
            No 2-month waits or vanished freelancers. Murtaza and Kamran work in focused sprints with daily WhatsApp progress updates, delivering world-class code for just 9,400 PKR – 11,000 PKR.
          </p>
        </div>

        {/* 4 Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="relative rounded-3xl p-6 sm:p-7 bg-[#0d101d] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-white/5">
                    <span
                      className="font-mono text-2xl font-black"
                      style={{ color: step.color }}
                    >
                      {step.num}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 font-mono text-[11px] text-zinc-400">
                      {step.timeframe}
                    </span>
                  </div>

                  <div className="mt-5">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                      style={{ backgroundColor: `${step.color}20`, color: step.color }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-heading font-bold text-white text-lg tracking-tight">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-xs text-zinc-400 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5">
                  <span className="text-[10px] font-mono text-zinc-400 uppercase block">Deliverable</span>
                  <span className="text-xs text-zinc-200 font-medium mt-0.5 block">{step.deliverable}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
