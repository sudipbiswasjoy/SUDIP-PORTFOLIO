import React, { useState } from 'react';
import { Mail, MapPin, Clock, Send, CheckCircle2, ShieldCheck, ArrowRight, MessageSquare, Database } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ContactSectionProps {
  selectedScope?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ selectedScope }) => {
  const { profile, serviceRates } = PORTFOLIO_DATA;

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    organization: '',
    scope: selectedScope || 'Query Optimization & Performance Tuning ($120/hr)',
    engine: 'AWS Aurora / PostgreSQL',
    dataVolume: '1 - 10 TB',
    message: '',
  });

  // Keep form in sync if user selected a service from rates section
  React.useEffect(() => {
    if (selectedScope) {
      setFormState((prev) => ({ ...prev, scope: selectedScope }));
    }
  }, [selectedScope]);

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const mailtoLink = `mailto:${profile.email}?subject=${encodeURIComponent(
    `[Consultation Inquiry] ${formState.scope} - ${formState.organization || formState.name}`
  )}&body=${encodeURIComponent(
    `Name: ${formState.name}
Organization: ${formState.organization}
Email: ${formState.email}
Scope: ${formState.scope}
Target Engine: ${formState.engine}
Data Volume: ${formState.dataVolume}

Project Details:
${formState.message}`
  )}`;

  return (
    <section id="contact" className="py-20 bg-[#070B14] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="text-xs font-semibold text-cyan-400 tracking-wider uppercase">
            Consultation & Inquiries
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Initiate a database architecture discussion.
          </h2>
          <p className="text-base text-slate-400 leading-relaxed">
            Whether preparing for a mission-critical multi-terabyte cloud migration, resolving catastrophic query locking, or auditing multi-region disaster recovery topologies, let's connect.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Direct Details Card (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-7 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-6">
              <div>
                <h3 className="text-lg font-bold text-white">Direct Coordinates</h3>
                <p className="text-xs text-slate-400 mt-1">Available for enterprise architectural advisory and client consulting.</p>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-slate-800 text-cyan-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-500 block">Direct Email</span>
                    <a
                      href={`mailto:${profile.email}`}
                      className="font-medium text-white hover:text-cyan-300 transition-colors"
                    >
                      {profile.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-slate-800 text-indigo-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-500 block">Location & Base</span>
                    <span className="font-medium text-white">{profile.location}</span>
                    <span className="text-slate-400 text-xs block">Remote (Bangladesh / Global Timezones)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-slate-800 text-sky-400 shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-500 block">Timezone & Response</span>
                    <span className="font-medium text-white">GMT+6 (Bangladesh Standard Time)</span>
                    <span className="text-slate-400 text-xs block">Typical response within 12 business hours</span>
                  </div>
                </div>
              </div>

              {/* Verified Organization Tag */}
              <div className="pt-4 border-t border-slate-800 text-xs text-slate-400 space-y-1">
                <div className="flex items-center gap-1.5 text-cyan-400 font-semibold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Current Enterprise Appointment</span>
                </div>
                <p className="text-slate-300">
                  {profile.role} · {profile.company} ({profile.department})
                </p>
                <p className="text-[11px] font-mono text-slate-500">
                  Appointment Ref: {profile.appointmentRef}
                </p>
              </div>

              {/* Hourly Rate Card Summary */}
              <div className="pt-4 border-t border-slate-800 space-y-2.5">
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold block">
                  Hourly Rate Card Overview
                </span>
                <div className="space-y-1.5 text-xs">
                  {serviceRates?.map((rate) => (
                    <div
                      key={rate.id}
                      className="flex items-center justify-between p-2 rounded-lg bg-slate-950/60 border border-slate-800/80"
                    >
                      <span className="text-slate-300 truncate max-w-[190px]">{rate.title}</span>
                      <span className="font-mono text-cyan-300 font-bold shrink-0">{rate.hourlyRate}/hr</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Consultation Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800">
              
              {isSubmitted ? (
                <div className="py-10 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Inquiry Initialized</h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you. Your consultation request details have been captured. You can also send the prepared email directly via your mail client.
                  </p>
                  <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                    <a
                      href={mailtoLink}
                      className="px-5 py-2.5 text-xs font-semibold text-slate-900 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors flex items-center gap-2"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Launch In Email Client</span>
                    </a>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-4 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 rounded-lg"
                    >
                      Reset Form
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-slate-300">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Alex Morgan"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-medium text-slate-300">Corporate Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="alex@company.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-300">Company / Organization</label>
                    <input
                      type="text"
                      placeholder="e.g. Global FinTech Systems"
                      value={formState.organization}
                      onChange={(e) => setFormState({ ...formState, organization: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-slate-300">Engagement Scope</label>
                      <select
                        value={formState.scope}
                        onChange={(e) => setFormState({ ...formState, scope: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-cyan-500"
                      >
                        <option>Query Optimization & Performance Tuning ($120/hr)</option>
                        <option>Database Architecture & Cloud Advisory ($95/hr)</option>
                        <option>Zero-Downtime Cloud Migration & CDC ($140/hr)</option>
                        <option>Emergency Production Database Triage ($185/hr)</option>
                        <option>Multi-Region DR & High Availability</option>
                        <option>Custom Retainer / Dedicated Contract</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-medium text-slate-300">Target Database Engine</label>
                      <select
                        value={formState.engine}
                        onChange={(e) => setFormState({ ...formState, engine: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-cyan-500"
                      >
                        <option>AWS Aurora / PostgreSQL</option>
                        <option>Google Cloud SQL / Spanner</option>
                        <option>Oracle Database 19c</option>
                        <option>CockroachDB / Distributed SQL</option>
                        <option>MongoDB Atlas / NoSQL</option>
                        <option>MySQL 8 / Percona</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-medium text-slate-300">Data Volume</label>
                      <select
                        value={formState.dataVolume}
                        onChange={(e) => setFormState({ ...formState, dataVolume: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-cyan-500"
                      >
                        <option>&lt; 1 Terabyte</option>
                        <option>1 - 10 Terabytes</option>
                        <option>10 - 50 Terabytes</option>
                        <option>&gt; 50 Terabytes (Petabyte Scale)</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-300">Architecture Requirements / Message *</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Briefly describe your workload challenges, throughput targets, or migration objectives..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-[11px] text-slate-500">
                      Dispatched directly to {profile.email}
                    </span>

                    <button
                      type="submit"
                      className="px-6 py-2.5 text-xs font-semibold text-slate-900 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors flex items-center gap-2 shadow-sm shadow-cyan-400/20"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Consultation Request</span>
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
