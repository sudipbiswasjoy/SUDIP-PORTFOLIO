import React from 'react';
import { X, CheckCircle2, TrendingUp, Cpu, Server, Database, ArrowRight } from 'lucide-react';
import { PORTFOLIO_DATA, CaseStudy } from '../data/portfolioData';

interface CaseStudyModalProps {
  caseStudyId: string | null;
  onClose: () => void;
  onOpenContact: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  caseStudyId,
  onClose,
  onOpenContact,
}) => {
  if (!caseStudyId) return null;

  const caseStudy = PORTFOLIO_DATA.caseStudies.find((c) => c.id === caseStudyId);
  if (!caseStudy) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-3xl bg-[#090D16] border border-cyan-500/40 rounded-2xl overflow-hidden shadow-2xl max-h-[92vh] flex flex-col">
        
        {/* Header Bar */}
        <div className="p-6 bg-slate-900 border-b border-slate-800 flex items-start justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
              <span>{caseStudy.category}</span>
              <span aria-hidden="true">·</span>
              <span className="text-slate-400">{caseStudy.clientType}</span>
              <span aria-hidden="true">·</span>
              <span className="text-slate-400">Timeline: {caseStudy.duration}</span>
            </div>
            <h3 className="text-xl font-bold text-white tracking-tight">{caseStudy.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg bg-slate-800/80 border border-slate-700"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 text-xs sm:text-sm text-slate-300">
          
          {/* Visual Showcase Banner */}
          <div className="relative aspect-video rounded-xl overflow-hidden border border-slate-800 bg-slate-950">
            <img
              src={caseStudy.image}
              alt={caseStudy.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <span className="text-xs font-mono text-cyan-300 font-semibold block">Production Architecture Lead</span>
              <span className="text-sm font-bold text-white block">Sudip Biswas · Cloud Database Specialist</span>
            </div>
          </div>

          {/* Metrics Results Grid */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Delivered Quantitative Results
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {caseStudy.metrics.map((m) => (
                <div key={m.label} className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="text-[11px] text-slate-400">{m.label}</div>
                  <div className="text-xl font-bold font-mono text-white mt-1 tabular-nums">
                    {m.value}
                  </div>
                  <div className="text-[11px] font-mono text-cyan-400 mt-0.5">
                    {m.delta}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* The Challenge / Problem */}
          <div className="space-y-2 p-5 rounded-xl bg-rose-950/20 border border-rose-900/40">
            <h4 className="text-xs font-bold uppercase tracking-wider text-rose-300">
              The Architecture Challenge
            </h4>
            <p className="text-slate-300 leading-relaxed text-xs sm:text-sm">
              {caseStudy.problem}
            </p>
          </div>

          {/* The Solution */}
          <div className="space-y-2 p-5 rounded-xl bg-cyan-950/20 border border-cyan-800/40">
            <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-300">
              Engineering Solution & Methodology
            </h4>
            <p className="text-slate-300 leading-relaxed text-xs sm:text-sm">
              {caseStudy.solution}
            </p>
          </div>

          {/* Architecture Details */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Key Engineering Implementation Details:
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              {caseStudy.architectureDetails.map((detail, idx) => (
                <li key={idx} className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-900/50 border border-slate-800/80">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="pt-2 border-t border-slate-800">
            <div className="text-xs font-semibold text-slate-400 mb-2">Technologies & Tooling:</div>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5 text-xs text-slate-300">
              {caseStudy.techStack.map((tech, i) => (
                <React.Fragment key={tech}>
                  <span className="font-mono text-cyan-200">{tech}</span>
                  {i < caseStudy.techStack.length - 1 && (
                    <span aria-hidden="true" className="text-slate-600">·</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-900 border-t border-slate-800 flex items-center justify-between">
          <div className="text-xs text-slate-400">
            Need similar migration or optimization results?
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-3.5 py-1.5 text-xs text-slate-400 hover:text-white rounded-lg transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenContact();
              }}
              className="px-4 py-1.5 text-xs font-semibold text-slate-900 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors flex items-center gap-1.5"
            >
              <span>Consult on This Architecture</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
