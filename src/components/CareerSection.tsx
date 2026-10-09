import React from 'react';
import { ShieldCheck, Award, Briefcase, GraduationCap, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface CareerSectionProps {
  onOpenVerification: () => void;
  onOpenResume: () => void;
}

export const CareerSection: React.FC<CareerSectionProps> = ({
  onOpenVerification,
  onOpenResume,
}) => {
  const { careerMilestones, certifications, education } = PORTFOLIO_DATA;

  return (
    <section id="career" className="py-20 bg-[#090D16] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="text-xs font-semibold text-cyan-400 tracking-wider uppercase">
              Career History & Credentials
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Verified enterprise experience.
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              Proven track record leading cloud database architecture, high-availability deployments, and petabyte-scale data infrastructure for global organizations.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenVerification}
              className="px-4 py-2 text-xs font-medium text-cyan-300 bg-cyan-950/40 hover:bg-cyan-950/70 border border-cyan-800/80 rounded-lg transition-colors flex items-center gap-2"
            >
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>Verify HCLTech Appointment</span>
            </button>
            <button
              onClick={onOpenResume}
              className="px-4 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-850 hover:bg-slate-800 border border-slate-700/80 rounded-lg transition-colors"
            >
              Full CV View
            </button>
          </div>
        </div>

        {/* Career Timeline */}
        <div className="space-y-6">
          {careerMilestones.map((milestone, idx) => (
            <div
              key={milestone.period + milestone.role}
              className={`p-6 sm:p-8 rounded-2xl border transition-all ${
                milestone.offerReference
                  ? 'bg-slate-900/80 border-cyan-500/40 shadow-lg shadow-cyan-950/30'
                  : 'bg-slate-900/40 border-slate-800 hover:border-slate-700/80'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-4 border-b border-slate-800/80">
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-xl font-bold text-white">{milestone.role}</h3>
                    {milestone.offerReference && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-mono font-medium text-emerald-400 bg-emerald-950/80 border border-emerald-800/60 px-2 py-0.5 rounded">
                        <CheckCircle2 className="w-3 h-3" /> Current Verified Appointment
                      </span>
                    )}
                  </div>
                  <div className="text-sm font-semibold text-cyan-400">
                    {milestone.organization} {milestone.department && `· ${milestone.department}`}
                  </div>
                </div>

                <div className="text-left sm:text-right font-mono text-xs text-slate-400">
                  <div className="text-white font-semibold">{milestone.period}</div>
                  <div>{milestone.location}</div>
                  {milestone.offerReference && (
                    <button
                      onClick={onOpenVerification}
                      className="text-cyan-400 hover:underline text-[11px] mt-1 block"
                    >
                      Ref: {milestone.offerReference} ↗
                    </button>
                  )}
                </div>
              </div>

              <div className="pt-4 space-y-3">
                <p className="text-sm text-slate-300 leading-relaxed">
                  {milestone.summary}
                </p>

                <div className="space-y-1.5 pt-1">
                  <div className="text-xs font-semibold text-slate-400">Key Contributions:</div>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {milestone.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-1.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications & Education Split Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
          
          {/* Certifications */}
          <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-4">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-cyan-400" />
              <h3 className="text-lg font-bold text-white">Professional Certifications</h3>
            </div>

            <div className="space-y-3 text-xs">
              {certifications.map((cert) => (
                <div
                  key={cert.title}
                  className="p-3.5 rounded-lg bg-slate-950/60 border border-slate-800/80 flex items-center justify-between"
                >
                  <div className="space-y-0.5">
                    <div className="font-semibold text-white">{cert.title}</div>
                    <div className="text-slate-400">{cert.issuer}</div>
                  </div>
                  <div className="text-right font-mono text-[11px] text-cyan-400">
                    {cert.year}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Academic Rigor */}
          <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-4">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-indigo-400" />
              <h3 className="text-lg font-bold text-white">Education & Academic Foundation</h3>
            </div>

            <div className="space-y-3 text-xs">
              {education.map((edu) => (
                <div
                  key={edu.degree}
                  className="p-4 rounded-lg bg-slate-950/60 border border-slate-800/80 space-y-2"
                >
                  <div className="font-semibold text-white text-sm">{edu.degree}</div>
                  <div className="text-cyan-400">{edu.institution}</div>
                  <div className="text-slate-400">{edu.focus}</div>
                  <div className="text-emerald-400 font-mono text-[11px] pt-1">
                    Graduation Standing: {edu.honors}
                  </div>
                </div>
              ))}

              <div className="p-3.5 rounded-lg bg-slate-900/80 border border-slate-800 text-[11px] text-slate-400 leading-relaxed">
                Strong theoretical and practical background in distributed database algorithms (Raft, Paxos, 2PC, MVCC), transactional ACID isolation levels, and computational complexity.
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
