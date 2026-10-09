import React from 'react';
import { ShieldCheck, CheckCircle2, Building2, MapPin, Calendar, Award, ExternalLink, X, FileCheck } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface CareerVerificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact: () => void;
}

export const CareerVerificationModal: React.FC<CareerVerificationModalProps> = ({
  isOpen,
  onClose,
  onOpenContact,
}) => {
  if (!isOpen) return null;

  const { profile } = PORTFOLIO_DATA;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-2xl bg-[#090D16] border border-cyan-500/40 rounded-2xl overflow-hidden shadow-2xl max-h-[92vh] flex flex-col">
        
        {/* Header */}
        <div className="p-6 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Official Appointment Verification</h3>
              <p className="text-xs text-slate-400 font-mono">Reference: {profile.appointmentRef}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg bg-slate-800/80 border border-slate-700 hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-xs sm:text-sm text-slate-300">
          
          {/* Certificate Banner */}
          <div className="p-5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div>
                <span className="text-xs font-bold text-white tracking-tight">HCLTech Limited</span>
                <span className="text-[11px] text-slate-400 block">Cloud & Database Services Department</span>
              </div>
              <span className="px-2.5 py-1 rounded bg-emerald-950 text-emerald-400 border border-emerald-800/80 text-[11px] font-mono font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> VERIFIED CREDENTIAL
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <span className="text-slate-500 block text-[11px]">Candidate Appointee:</span>
                <span className="font-bold text-white text-sm">{profile.name}</span>
                <span className="text-slate-400 block">{profile.location}</span>
              </div>

              <div>
                <span className="text-slate-500 block text-[11px]">Designation:</span>
                <span className="font-bold text-cyan-300 text-sm">{profile.role}</span>
                <span className="text-slate-400 block">{profile.seniority}</span>
              </div>

              <div>
                <span className="text-slate-500 block text-[11px]">Reporting Structure:</span>
                <span className="font-medium text-slate-200">Head — Cloud Services</span>
              </div>

              <div>
                <span className="text-slate-500 block text-[11px]">Work Arrangement:</span>
                <span className="font-medium text-slate-200">Remote (Bangladesh)</span>
              </div>

              <div>
                <span className="text-slate-500 block text-[11px]">Offer Issuance Date:</span>
                <span className="font-mono text-slate-200">{profile.appointmentDate}</span>
              </div>

              <div>
                <span className="text-slate-500 block text-[11px]">Effective Date:</span>
                <span className="font-mono text-slate-200">{profile.joiningDate}</span>
              </div>
            </div>
          </div>

          {/* Verification Statement */}
          <div className="space-y-2">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
              Verification Notice & Scope of Work
            </h4>
            <p className="text-slate-300 leading-relaxed text-xs">
              This verification confirms that Sudip Biswas has been formally appointed as Mid-Senior Cloud Database Specialist within HCLTech's Cloud & Database Services department. His responsibilities encompass designing enterprise cloud database infrastructure, executing zero-downtime multi-cloud migrations, and optimizing high-throughput distributed database engines.
            </p>
          </div>

          {/* Enterprise Signatory info */}
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between text-xs">
            <div>
              <div className="text-slate-400 text-[11px]">Issued By:</div>
              <div className="font-semibold text-white">Ritesh Kumar</div>
              <div className="text-slate-500 text-[11px]">Vice President — Human Resources, HCLTech Limited</div>
            </div>
            <div className="text-right font-mono text-[11px] text-slate-500">
              Corporate CIN: L74140DL1991PLC046369<br />
              New Delhi, India
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-900 border-t border-slate-800 flex items-center justify-between">
          <div className="text-xs text-slate-400">
            Direct Contact: <a href={`mailto:${profile.email}`} className="text-cyan-400 hover:underline">{profile.email}</a>
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
              className="px-4 py-1.5 text-xs font-semibold text-slate-900 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors"
            >
              Contact Sudip
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
