import React from 'react';
import { X, Printer, Download, Mail, MapPin, ShieldCheck, ExternalLink } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenVerification: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  onOpenVerification,
}) => {
  if (!isOpen) return null;

  const { profile, careerMilestones, certifications, education } = PORTFOLIO_DATA;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-4xl bg-[#090D16] border border-slate-700 rounded-2xl overflow-hidden shadow-2xl max-h-[95vh] flex flex-col">
        
        {/* Controls Bar (hidden during print) */}
        <div className="p-4 bg-slate-900 border-b border-slate-800 flex items-center justify-between print:hidden">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-white">Curriculum Vitae</span>
            <span className="text-xs text-slate-400 font-mono">· {profile.name}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 text-xs font-semibold text-slate-900 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors flex items-center gap-1.5"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save as PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg bg-slate-800 border border-slate-700"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 text-slate-300 bg-[#090D16] print:bg-white print:text-black print:p-0">
          
          {/* Header */}
          <div className="pb-6 border-b border-slate-800 print:border-black flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white print:text-black tracking-tight">
                {profile.name}
              </h1>
              <p className="text-sm sm:text-base font-semibold text-cyan-400 print:text-blue-700 mt-1">
                {profile.role} · {profile.seniority}
              </p>
              <p className="text-xs text-slate-400 print:text-gray-600 mt-0.5">
                {profile.company} · {profile.department}
              </p>
            </div>

            <div className="text-xs space-y-1 font-mono text-slate-400 print:text-gray-700 text-left sm:text-right">
              <div>Email: {profile.email}</div>
              <div>Location: {profile.location}</div>
              <div>Appointment Ref: {profile.appointmentRef}</div>
              <div className="text-cyan-400 print:text-blue-700">Remote / Global Availability</div>
              <div className="text-slate-300 print:text-black">Consulting: $95 – $140/hr</div>
            </div>
          </div>

          {/* Executive Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 print:text-blue-800">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-300 print:text-gray-800">
              High-impact Cloud Database Specialist with 7+ years of experience engineering mission-critical database platforms, architecting zero-downtime multi-cloud migrations, and optimizing high-throughput distributed database engines. Appointed at HCLTech Limited to guide enterprise cloud modernization. Proven track record migrating 42+ TB of financial and patient health data with 0s unplanned downtime and sub-second CDC replication.
            </p>
          </div>

          {/* Core Technical Proficiencies */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 print:text-blue-800">
              Technical Proficiencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300 print:text-gray-800">
              <div>
                <strong className="text-white print:text-black">Database Engines:</strong> PostgreSQL (14–16), Amazon Aurora, GCP Cloud SQL, Google Cloud Spanner, Oracle Database 19c, MySQL 8, MongoDB Atlas, CockroachDB, Redis.
              </div>
              <div>
                <strong className="text-white print:text-black">Cloud & Infrastructure:</strong> AWS (RDS, Aurora, DMS, SCT, CloudWatch), Google Cloud Platform (Cloud SQL, Spanner, Datastream), Docker, Kubernetes, Terraform, Ansible.
              </div>
              <div>
                <strong className="text-white print:text-black">HA & Replication:</strong> Patroni, Raft, ProxySQL, PgBouncer, Multi-AZ & Cross-Region Read Replicas, Change Data Capture (CDC), Debezium, Kafka.
              </div>
              <div>
                <strong className="text-white print:text-black">Performance & Security:</strong> EXPLAIN ANALYZE, query plan optimization, table partitioning, continuous PITR, KMS CMEK encryption, HIPAA/SOC2 compliance.
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 print:text-blue-800">
              Work Experience
            </h2>

            <div className="space-y-6">
              {careerMilestones.map((m) => (
                <div key={m.period + m.role} className="space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs">
                    <div>
                      <strong className="text-sm font-bold text-white print:text-black">{m.role}</strong>
                      <span className="text-cyan-300 print:text-blue-700 ml-2 font-medium">@ {m.organization}</span>
                      {m.department && <span className="text-slate-400 print:text-gray-600"> ({m.department})</span>}
                    </div>
                    <div className="font-mono text-slate-400 print:text-gray-600">
                      {m.period} · {m.location}
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 print:text-gray-700 leading-relaxed">
                    {m.summary}
                  </p>

                  <ul className="list-disc list-inside text-xs text-slate-300 print:text-gray-800 space-y-1 pl-1">
                    {m.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Education */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-slate-800 print:border-black">
            <div className="space-y-2">
              <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 print:text-blue-800">
                Certifications
              </h2>
              <ul className="text-xs space-y-1.5 text-slate-300 print:text-gray-800">
                {certifications.map((c) => (
                  <li key={c.title}>
                    <strong className="text-white print:text-black">{c.title}</strong> — {c.issuer} ({c.year})
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-2">
              <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 print:text-blue-800">
                Education
              </h2>
              {education.map((e) => (
                <div key={e.degree} className="text-xs text-slate-300 print:text-gray-800 space-y-0.5">
                  <div className="font-bold text-white print:text-black">{e.degree}</div>
                  <div className="text-cyan-300 print:text-blue-700">{e.institution}</div>
                  <div className="text-slate-400 print:text-gray-600">{e.focus} ({e.honors})</div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-900 border-t border-slate-800 flex items-center justify-between print:hidden">
          <button
            onClick={onOpenVerification}
            className="text-xs text-cyan-400 hover:underline flex items-center gap-1.5"
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Verify Appointment Document (Ref: {profile.appointmentRef})</span>
          </button>
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 rounded-lg transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
