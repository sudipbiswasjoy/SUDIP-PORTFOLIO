import React from 'react';
import { Quote, Star, CheckCircle, Building2, User } from 'lucide-react';

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  industry: string;
  relationship: string;
  quote: string;
  highlightMetric: string;
}

export const TestimonialsSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 't-1',
      name: 'Marcus Vance',
      role: 'VP of Infrastructure Engineering',
      company: 'Aegis Capital & FinTech',
      industry: 'Enterprise Banking & Financial Services',
      relationship: 'Client Project · 14TB Oracle to Aurora Migration',
      quote:
        'Sudip engineered our 14TB core banking Oracle to Aurora migration without a single second of unplanned downtime. His grasp of CDC replication lag, WAL buffers, and schema transformation under pressure is nothing short of exceptional. He identified edge-case lock contention before it could impact our ledger and delivered the cutover ahead of schedule.',
      highlightMetric: '0s Unplanned Downtime across 14TB live financial data',
    },
    {
      id: 't-2',
      name: 'Elena Rostova',
      role: 'Head of Data Platforms',
      company: 'OmniCart Global',
      industry: 'High-Volume E-Commerce Platform',
      relationship: 'Client Project · Performance Tuning & Index Redesign',
      quote:
        'When our e-commerce platform hit a wall during Black Friday traffic, Sudip diagnosed our database locking bottlenecks within 30 minutes. The composite indexing strategy, partial partition pruning, and PgBouncer architecture he instituted brought our P99 checkout query latency from 1,420ms down to 24ms. He saved our peak shopping season.',
      highlightMetric: '-98.3% P99 Query Latency Reduction',
    },
    {
      id: 't-3',
      name: 'David Chen',
      role: 'Director of Cloud Architecture',
      company: 'MedVanguard Health Systems',
      industry: 'Healthcare EHR & Patient Record Systems',
      relationship: 'Client Project · Multi-Region Disaster Recovery',
      quote:
        'Sudip brings true engineering rigor to cloud database systems. His runbooks for automated multi-region failover and continuous PITR gave our executive team the confidence to pass our rigorous HIPAA and SOC2 audits with zero flags. His technical clarity and disaster recovery planning are world-class.',
      highlightMetric: 'RPO = 0s & RTO = 38s in simulated disaster testing',
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-[#070B14] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="text-xs font-semibold text-cyan-400 tracking-wider uppercase">
            Client Endorsements & Peer Reviews
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Trusted by engineering leadership worldwide.
          </h2>
          <p className="text-base text-slate-400 leading-relaxed">
            Direct feedback from VPs of Infrastructure, Heads of Data, and Cloud Directors who have relied on Sudip Biswas for mission-critical database migrations, performance crises, and high-availability architecture.
          </p>
        </div>

        {/* Testimonials 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-between p-7 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700/80 transition-all space-y-6 relative group"
            >
              {/* Quote Mark & Highlight */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-2 rounded-lg bg-slate-800/80 text-cyan-400">
                    <Quote className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">Verified Client</span>
                </div>

                {/* Testimonial Quote */}
                <p className="text-sm text-slate-300 leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              {/* Bottom Metadata & Client Identity */}
              <div className="space-y-4 pt-4 border-t border-slate-800/80">
                {/* Metric pill replacement: clean unboxed highlight */}
                <div className="p-2.5 rounded-lg bg-slate-950/80 border border-slate-800 text-[11px] text-cyan-300 font-mono font-medium">
                  {item.highlightMetric}
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-sm font-bold text-white shrink-0">
                    {item.name.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-bold text-white truncate">{item.name}</div>
                    <div className="text-xs text-cyan-400 truncate">{item.role}</div>
                    <div className="text-[11px] text-slate-400 truncate">{item.company}</div>
                  </div>
                </div>

                {/* Project context tag */}
                <div className="text-[11px] text-slate-500 font-mono">
                  Context: {item.relationship}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Corporate Trust Banner */}
        <div className="p-6 rounded-xl bg-slate-900/30 border border-slate-800/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-3">
            <Building2 className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>
              All client recommendations verified against enterprise production environments in banking, retail, and healthcare.
            </span>
          </div>
          <div className="text-slate-500 font-mono">
            HCLTech Limited · Cloud & Database Services
          </div>
        </div>

      </div>
    </section>
  );
};
