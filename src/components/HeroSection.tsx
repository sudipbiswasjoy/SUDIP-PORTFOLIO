import React from 'react';
import { ShieldCheck, ArrowRight, Database, Server, Cpu, ExternalLink, Mail, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface HeroSectionProps {
  onOpenVerification: () => void;
  onOpenContact: () => void;
  onOpenResume: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenVerification,
  onOpenContact,
  onOpenResume,
}) => {
  const { profile, heroStats } = PORTFOLIO_DATA;

  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
      {/* Background radial gradient glow (subtle) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-cyan-950/20 via-blue-950/10 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typographic Content (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Unboxed metadata kicker */}
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-cyan-400 font-medium">
              <span>{profile.role}</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-300">{profile.company}</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-400">{profile.department}</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-400">{profile.location}</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-cyan-300 font-mono">Hourly Rates from $95/hr</span>
            </div>

            {/* Display Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] [text-wrap:balance]">
              Architecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-indigo-300">zero-downtime</span>, high-throughput cloud database systems.
            </h1>

            {/* Editorial description */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              I am {profile.name}, a Mid-Senior Cloud Database Specialist at HCLTech. I specialize in petabyte-scale database migrations, multi-region high-availability failover architectures, and sub-millisecond query optimization across AWS, GCP, and enterprise relational engines.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#architecture-lab"
                className="px-5 py-3 text-sm font-semibold text-slate-900 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors flex items-center gap-2 shadow-lg shadow-cyan-500/10"
              >
                <span>Explore Architecture Lab</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#case-studies"
                className="px-5 py-3 text-sm font-medium text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 rounded-lg transition-colors"
              >
                View Case Studies
              </a>

              <a
                href="#rates"
                className="px-4 py-3 text-sm font-medium text-cyan-300 hover:text-white bg-cyan-950/30 hover:bg-cyan-950/60 border border-cyan-800/60 rounded-lg transition-colors flex items-center gap-1.5"
              >
                <span>Hourly Rates</span>
              </a>

              <button
                onClick={onOpenVerification}
                className="px-4 py-3 text-sm font-medium text-slate-300 hover:text-white bg-transparent hover:bg-slate-800/40 border border-slate-800 rounded-lg transition-colors flex items-center gap-2"
              >
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <span>Verified Appointment</span>
              </button>
            </div>

            {/* Proof Metrics Bar (Quantitative rigor with tabular figures) */}
            <div className="pt-8 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {heroStats.map((stat) => (
                <div key={stat.label} className="space-y-1">
                  <div className="text-2xl sm:text-3xl font-bold text-white font-mono tabular-nums tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs font-semibold text-slate-300">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-slate-500">
                    {stat.context}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Cloud Database Architecture & Verified Credentials Anchor (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Decorative subtle border frame */}
              <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl">
                
                {/* Technical Architecture Canvas */}
                <div className="relative aspect-video sm:aspect-[16/10] w-full overflow-hidden bg-slate-950">
                  <img
                    src="/src/assets/images/cloud_database_architecture_1791438310662.jpg"
                    alt="Cloud Database Infrastructure Architecture"
                    className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090D16] via-[#090D16]/30 to-transparent opacity-90" />
                  
                  {/* Verified badge banner overlay */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-900/90 backdrop-blur-md border border-cyan-500/30 text-xs font-medium text-cyan-300">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Verified HCLTech Appointment</span>
                    </div>

                    <button
                      onClick={onOpenResume}
                      className="px-2.5 py-1 rounded-md bg-slate-900/90 backdrop-blur-md border border-slate-700 text-xs text-slate-300 hover:text-white transition-colors"
                      title="View Resume"
                    >
                      Resume
                    </button>
                  </div>

                  {/* Architecture Topology Status Bottom Overlay */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-cyan-300 bg-slate-950/80 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-slate-800">
                    <span className="flex items-center gap-1.5">
                      <Database className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Cluster: Multi-Region Active</span>
                    </span>
                    <span className="text-emerald-400">99.999% SLA</span>
                  </div>
                </div>

                {/* Card summary info */}
                <div className="p-5 space-y-4 bg-slate-900/95 border-t border-slate-800">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-white tracking-tight">{profile.name}</h3>
                      <p className="text-xs text-slate-400 font-mono">Ref: {profile.appointmentRef}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-semibold text-cyan-400 block">{profile.role}</span>
                      <span className="text-[11px] text-slate-400 block">{profile.seniority}</span>
                    </div>
                  </div>

                  {/* Clean unboxed technical stack bullets */}
                  <div className="pt-2 border-t border-slate-800/80 grid grid-cols-2 gap-2 text-xs text-slate-300">
                    <div className="flex items-center gap-2">
                      <Database className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span className="truncate">Postgres · Aurora · Spanner</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Server className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                      <span className="truncate">Zero-Downtime CDC</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Cpu className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                      <span className="truncate">Query Profiling & Tuning</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span className="truncate">Multi-Region HA & DR</span>
                    </div>
                  </div>

                  {/* Direct Contact Button */}
                  <div className="pt-2 flex items-center justify-between gap-3">
                    <a
                      href={`mailto:${profile.email}`}
                      className="text-xs text-slate-400 hover:text-cyan-300 transition-colors flex items-center gap-1.5 truncate"
                    >
                      <Mail className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span className="truncate">{profile.email}</span>
                    </a>
                    <button
                      onClick={onOpenContact}
                      className="text-xs font-medium text-cyan-400 hover:text-cyan-300 flex items-center gap-1 whitespace-nowrap"
                    >
                      <span>Inquire</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
