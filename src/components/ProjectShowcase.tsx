import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Monitor, Smartphone, ExternalLink, Sparkles, X, Check, ArrowRight, Zap } from 'lucide-react';
import { SHOWCASE_PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { soundFx } from '../utils/audio';

interface ProjectShowcaseProps {
  onSelectProjectForBrief: (projectTitle: string) => void;
}

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ onSelectProjectForBrief }) => {
  const [activeProject, setActiveProject] = useState<Project>(SHOWCASE_PROJECTS[0]);
  const [deviceMode, setDeviceMode] = useState<'desktop' | 'mobile'>('desktop');
  const [modalProject, setModalProject] = useState<Project | null>(null);

  const handleProjectTab = (proj: Project) => {
    soundFx.playClick();
    setActiveProject(proj);
  };

  const handleDeviceSwitch = (mode: 'desktop' | 'mobile') => {
    soundFx.playToggle();
    setDeviceMode(mode);
  };

  const openModal = (proj: Project) => {
    soundFx.playSuccess();
    setModalProject(proj);
  };

  return (
    <section id="showcase" className="py-24 relative overflow-hidden">
      {/* Glow backgrounds */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-indigo-600/10 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-purple-600/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-xs font-mono text-emerald-300 uppercase tracking-wider mb-4">
              <span className="text-base leading-none">🇵🇰</span>
              <span>Pakistan Client Success Stories</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
              Real Websites Built For Local Brands.
            </h2>
            <p className="mt-3 text-base text-zinc-400 max-w-xl">
              From luxury Lahore couture to Karachi tech and organic shops: explore live platforms engineered by Murtaza &amp; Kamran for just 9,400 PKR – 11,000 PKR.
            </p>
          </div>

          {/* Device viewport switcher */}
          <div className="flex items-center p-1.5 rounded-2xl bg-[#111320] border border-white/10 self-start md:self-auto">
            <button
              onClick={() => handleDeviceSwitch('desktop')}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all flex items-center gap-2 cursor-pointer ${
                deviceMode === 'desktop'
                  ? 'bg-indigo-500 text-white shadow-[0_0_15px_rgba(99,102,241,0.5)]'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Monitor className="w-4 h-4" />
              <span>Desktop View</span>
            </button>
            <button
              onClick={() => handleDeviceSwitch('mobile')}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all flex items-center gap-2 cursor-pointer ${
                deviceMode === 'mobile'
                  ? 'bg-indigo-500 text-white shadow-[0_0_15px_rgba(99,102,241,0.5)]'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Smartphone className="w-4 h-4" />
              <span>Mobile View</span>
            </button>
          </div>
        </div>

        {/* Project Selector Tabs */}
        <div className="flex overflow-x-auto no-scrollbar gap-3 pb-4 mb-8">
          {SHOWCASE_PROJECTS.map((proj) => (
            <button
              key={proj.id}
              onClick={() => handleProjectTab(proj)}
              onMouseEnter={() => soundFx.playHover()}
              className={`px-5 py-3 rounded-2xl font-mono text-xs whitespace-nowrap transition-all cursor-pointer flex items-center gap-3 border ${
                activeProject.id === proj.id
                  ? 'bg-white/[0.08] border-indigo-400/50 text-white shadow-[0_0_20px_rgba(99,102,241,0.2)]'
                  : 'bg-white/[0.02] border-white/5 text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.04]'
              }`}
            >
              <span
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: proj.accentColor }}
              />
              <span className="font-heading font-semibold text-sm">{proj.title}</span>
              <span className="text-zinc-400 text-[11px] hidden sm:inline">[{proj.category}]</span>
            </button>
          ))}
        </div>

        {/* Active Project Card Display */}
        <div className="relative rounded-3xl p-6 sm:p-10 bg-[#0c0e18]/90 border border-white/10 backdrop-blur-2xl shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Project Narrative & Commercial Proof */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-3">
                <span
                  className="px-3 py-1 rounded-full text-xs font-mono font-semibold"
                  style={{
                    backgroundColor: `${activeProject.accentColor}20`,
                    color: activeProject.accentColor,
                    border: `1px solid ${activeProject.accentColor}40`,
                  }}
                >
                  {activeProject.category}
                </span>
                <span className="text-xs font-mono text-zinc-400">{activeProject.year} • {activeProject.client}</span>
              </div>

              <div>
                <h3 className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
                  {activeProject.title}
                </h3>
                <p className="mt-2 text-base text-indigo-200 font-medium">
                  {activeProject.tagline}
                </p>
                <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                  {activeProject.description}
                </p>
              </div>

              {/* Commercial Metrics Grid */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                {activeProject.metrics.map((metric, idx) => (
                  <div key={idx} className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5">
                    <div
                      className="text-xl font-heading font-bold"
                      style={{ color: activeProject.accentColor }}
                    >
                      {metric.value}
                    </div>
                    <div className="text-xs font-mono text-zinc-400 mt-0.5">{metric.label}</div>
                  </div>
                ))}
              </div>

              {/* Features Pill List */}
              <div className="space-y-2 pt-1">
                {activeProject.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-zinc-300">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-4">
                <button
                  onClick={() => openModal(activeProject)}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold text-xs transition-all shadow-[0_0_20px_rgba(99,102,241,0.4)] flex items-center gap-2 cursor-pointer"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Launch Interactive Live Preview</span>
                </button>
                <button
                  onClick={() => {
                    soundFx.playClick();
                    onSelectProjectForBrief(activeProject.title);
                  }}
                  className="px-5 py-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-zinc-200 text-xs font-medium border border-white/10 transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Build A Site Like This</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right: Live Interactive Viewport Mockup */}
            <div className="lg:col-span-7 flex justify-center items-center">
              <div className="w-full flex justify-center">
                {deviceMode === 'desktop' ? (
                  /* Desktop MacBook Frame */
                  <div className="w-full max-w-2xl rounded-2xl bg-[#141724] border border-white/15 shadow-2xl p-3 transition-all duration-500">
                    {/* Browser bar */}
                    <div className="flex items-center justify-between pb-3 px-2 border-b border-white/10">
                      <div className="flex items-center gap-1.5">
                        <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                        <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                        <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                      </div>
                      <div className="px-4 py-1 rounded-md bg-black/40 border border-white/5 font-mono text-[11px] text-zinc-400 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400" />
                        https://{activeProject.id}.mk-crafted.com
                      </div>
                      <div className="text-[11px] font-mono text-zinc-400">100 FPS</div>
                    </div>

                    {/* Viewport Interior Canvas */}
                    <div className="mt-3 relative h-80 sm:h-96 rounded-xl bg-[#08090f] overflow-hidden p-6 sm:p-8 flex flex-col justify-between border border-white/5">
                      {/* Decorative Background Mesh */}
                      <div
                        className="absolute inset-0 opacity-25"
                        style={{
                          background: `radial-gradient(circle at 75% 25%, ${activeProject.accentColor}, transparent 60%), radial-gradient(circle at 20% 80%, ${activeProject.secondaryColor}, transparent 60%)`,
                        }}
                      />

                      {/* Viewport Header */}
                      <div className="relative z-10 flex items-center justify-between">
                        <div className="font-heading font-extrabold text-white text-lg tracking-wider">
                          {activeProject.title}
                        </div>
                        <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-white font-mono text-[10px] backdrop-blur-md">
                          {activeProject.desktopPreview.badge}
                        </span>
                      </div>

                      {/* Viewport Center Headline */}
                      <div className="relative z-10 my-auto py-6">
                        <div className="text-xs font-mono uppercase tracking-widest text-indigo-400 mb-2">
                          Featured Flagship Experience
                        </div>
                        <h4 className="text-2xl sm:text-4xl font-heading font-extrabold text-white tracking-tight leading-tight">
                          {activeProject.desktopPreview.headline}
                        </h4>
                        <p className="mt-2 text-xs sm:text-sm text-zinc-300 max-w-md">
                          {activeProject.desktopPreview.subheadline}
                        </p>

                        <div className="mt-5 flex items-center gap-3">
                          <button
                            onClick={() => openModal(activeProject)}
                            className="px-4 py-2 rounded-lg bg-white text-black font-semibold text-xs hover:bg-zinc-200 transition-all flex items-center gap-1.5"
                          >
                            <span>Interact With Model</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                          <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                            <Zap className="w-3.5 h-3.5" /> {activeProject.desktopPreview.heroStat}
                          </span>
                        </div>
                      </div>

                      {/* Viewport Footer Bar */}
                      <div className="relative z-10 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                        <span>ENGINEERED BY MURTAZA &amp; KAMRAN</span>
                        <span>0.31s FAST LOAD</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Mobile Phone Frame */
                  <div className="w-72 sm:w-80 rounded-[40px] bg-[#141724] border-4 border-zinc-700 shadow-2xl p-3 transition-all duration-500">
                    <div className="w-24 h-4 bg-zinc-800 rounded-full mx-auto mb-2" />
                    <div className="relative h-[440px] rounded-[32px] bg-[#08090f] overflow-hidden p-5 flex flex-col justify-between border border-white/5">
                      <div
                        className="absolute inset-0 opacity-30"
                        style={{
                          background: `radial-gradient(circle at 50% 30%, ${activeProject.accentColor}, transparent 60%)`,
                        }}
                      />

                      <div className="relative z-10 flex items-center justify-between">
                        <span className="font-heading font-bold text-white text-sm">{activeProject.title}</span>
                        <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      </div>

                      <div className="relative z-10 my-auto">
                        <span className="text-[10px] font-mono text-indigo-400 uppercase">Mobile Optimization</span>
                        <h4 className="text-xl font-heading font-bold text-white leading-snug mt-1">
                          {activeProject.desktopPreview.headline}
                        </h4>
                        <p className="text-[11px] text-zinc-300 mt-2">
                          100% thumb-friendly tactile UI. Zero awkward horizontal scroll.
                        </p>
                        <div className="mt-4 p-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-[10px] font-mono text-emerald-300">
                          ⚡ 60 FPS Gesture Scroll Enabled
                        </div>
                      </div>

                      <button
                        onClick={() => openModal(activeProject)}
                        className="relative z-10 w-full py-2.5 rounded-xl bg-white text-black font-semibold text-xs text-center"
                      >
                        Expand Mobile Demo
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Live Preview Modal */}
      <AnimatePresence>
        {modalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#0e111d] border border-white/15 p-6 sm:p-8 shadow-2xl space-y-6"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: modalProject.accentColor }}
                  />
                  <div>
                    <h3 className="text-xl font-heading font-bold text-white">
                      {modalProject.title} // Interactive Simulation
                    </h3>
                    <p className="text-xs text-zinc-400 font-mono">
                      Client: {modalProject.client} • Category: {modalProject.category}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => {
                    soundFx.playClick();
                    setModalProject(null);
                  }}
                  className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-300 hover:text-white cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Simulated Interactive Hero Demo */}
              <div className="p-8 rounded-2xl bg-[#090b14] border border-white/10 relative overflow-hidden text-center sm:text-left">
                <div
                  className="absolute -top-20 -right-20 w-80 h-80 rounded-full blur-3xl opacity-30"
                  style={{ backgroundColor: modalProject.accentColor }}
                />

                <div className="relative z-10 max-w-xl">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-mono font-medium inline-block mb-3"
                    style={{
                      backgroundColor: `${modalProject.accentColor}25`,
                      color: modalProject.accentColor,
                    }}
                  >
                    {modalProject.desktopPreview.badge}
                  </span>
                  <h4 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
                    {modalProject.desktopPreview.headline}
                  </h4>
                  <p className="text-sm text-zinc-300 mt-2">
                    {modalProject.description}
                  </p>

                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => soundFx.playSuccess()}
                      className="px-5 py-2.5 rounded-xl font-semibold text-xs text-black transition-transform hover:scale-105"
                      style={{ backgroundColor: modalProject.accentColor }}
                    >
                      Test Interactive Action
                    </button>
                    <span className="text-xs font-mono text-zinc-400">
                      ⚡ Performance: {modalProject.metrics[0].label} ({modalProject.metrics[0].value})
                    </span>
                  </div>
                </div>
              </div>

              {/* Technical Architecture Breakdown */}
              <div>
                <h4 className="text-sm font-mono uppercase text-zinc-400 mb-3">
                  Technical Architecture Deployed By Murtaza &amp; Kamran
                </h4>
                <div className="flex flex-wrap gap-2">
                  {modalProject.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 text-xs font-mono text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal CTA */}
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-zinc-400">
                  Ready to launch a project of this caliber for your company?
                </div>
                <button
                  onClick={() => {
                    const title = modalProject.title;
                    setModalProject(null);
                    onSelectProjectForBrief(title);
                  }}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold text-xs shadow-[0_0_20px_rgba(99,102,241,0.5)] flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Request A Website Like {modalProject.title}</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
