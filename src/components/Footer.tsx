import React from 'react';
import { ShieldCheck, Mail, MapPin, ArrowUp } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface FooterProps {
  onOpenVerification: () => void;
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenVerification, onOpenResume }) => {
  const { profile } = PORTFOLIO_DATA;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05080F] border-t border-slate-800/80 py-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          <div className="space-y-1">
            <div className="text-base font-bold text-white tracking-tight flex items-center gap-2">
              <span>{profile.name}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            </div>
            <p className="text-xs text-slate-400">
              {profile.role} · {profile.company} ({profile.department})
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs text-slate-300">
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#specialization" className="hover:text-cyan-400 transition-colors">Specialization</a>
            <a href="#architecture-lab" className="hover:text-cyan-400 transition-colors">Architecture Lab</a>
            <a href="#case-studies" className="hover:text-cyan-400 transition-colors">Case Studies</a>
            <a href="#rates" className="hover:text-cyan-400 transition-colors">Rates & Services</a>
            <a href="#testimonials" className="hover:text-cyan-400 transition-colors">Testimonials</a>
            <a href="#sql-lab" className="hover:text-cyan-400 transition-colors">SQL Benchmark</a>
            <button
              onClick={onOpenVerification}
              className="hover:text-cyan-400 transition-colors flex items-center gap-1"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
              <span>Verify Appointment</span>
            </button>
            <button
              onClick={onOpenResume}
              className="hover:text-cyan-400 transition-colors"
            >
              Resume
            </button>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-colors"
            aria-label="Back to top"
            title="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} {profile.name}. All rights reserved. Appointment Ref: {profile.appointmentRef}.
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <MapPin className="w-3.5 h-3.5 text-cyan-400" />
            <span>Khulna, Bangladesh (Remote Cloud Services)</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
