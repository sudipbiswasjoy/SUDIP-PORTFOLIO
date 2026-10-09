import React, { useState } from 'react';
import { Clock, ShieldCheck, CheckCircle2, ArrowRight, Zap, AlertTriangle, FileSpreadsheet, MessageSquare } from 'lucide-react';
import { PORTFOLIO_DATA, ServiceRate } from '../data/portfolioData';

interface ServiceRatesSectionProps {
  onSelectService: (serviceTitle: string, rate: string) => void;
}

export const ServiceRatesSection: React.FC<ServiceRatesSectionProps> = ({ onSelectService }) => {
  const { serviceRates } = PORTFOLIO_DATA;
  const [selectedServiceId, setSelectedServiceId] = useState<string>(serviceRates[1].id);
  const [estimatedHours, setEstimatedHours] = useState<number>(15);

  const activeService = serviceRates.find((s) => s.id === selectedServiceId) || serviceRates[1];
  const calculatedEstimate = activeService.rateValue * estimatedHours;

  return (
    <section id="rates" className="py-20 bg-[#070B14] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="text-xs font-semibold text-cyan-400 tracking-wider uppercase">
              Transparent Consulting Rates
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Hourly service rates & engagement models.
            </h2>
            <p className="text-base text-slate-400 leading-relaxed">
              Transparent, hourly consulting rates for cloud database engineering, query performance tuning, and zero-downtime multi-cloud migrations. No hidden fees or rigid long-term lock-in.
            </p>
          </div>

          <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300">
            <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>Available for remote contracts · Global timezones</span>
          </div>
        </div>

        {/* 4 Service Rate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceRates.map((service) => {
            const isSelected = selectedServiceId === service.id;
            return (
              <div
                key={service.id}
                className={`relative flex flex-col justify-between p-6 rounded-2xl border transition-all ${
                  service.isPopular
                    ? 'bg-slate-900/90 border-cyan-500/50 shadow-xl shadow-cyan-950/20'
                    : 'bg-slate-900/50 border-slate-800 hover:border-slate-700/80'
                }`}
              >
                {/* Popular highlight indicator */}
                {service.isPopular && (
                  <div className="absolute -top-3 left-6">
                    <span className="px-2.5 py-0.5 rounded-full bg-cyan-400 text-slate-950 font-mono font-bold text-[10px] uppercase tracking-wider shadow-sm">
                      Most Requested
                    </span>
                  </div>
                )}

                <div className="space-y-4">
                  {/* Category & Title */}
                  <div className="space-y-1">
                    <span className="text-[11px] font-mono text-cyan-400 font-semibold uppercase tracking-wider block">
                      {service.category}
                    </span>
                    <h3 className="text-lg font-bold text-white leading-snug">
                      {service.title}
                    </h3>
                  </div>

                  {/* Hourly Rate Display */}
                  <div className="pt-2 pb-1 border-b border-slate-800/80">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-3xl sm:text-4xl font-extrabold text-white font-mono tabular-nums tracking-tight">
                        {service.hourlyRate}
                      </span>
                      <span className="text-xs text-slate-400 font-medium">
                        {service.billingUnit}
                      </span>
                    </div>
                    <div className="text-[11px] text-slate-500 font-mono mt-1">
                      Scope: {service.typicalScope}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Deliverables */}
                  <div className="space-y-2 pt-2 border-t border-slate-800/60">
                    <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                      Included Deliverables:
                    </div>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {service.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Card Actions */}
                <div className="pt-6 space-y-3">
                  <div className="text-[11px] font-mono text-slate-500 flex items-center justify-between">
                    <span>SLA:</span>
                    <span className="text-slate-300">{service.responseSla}</span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <button
                      onClick={() => {
                        setSelectedServiceId(service.id);
                        onSelectService(service.title, service.hourlyRate);
                      }}
                      className={`w-full py-2.5 px-4 text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-1.5 ${
                        service.isPopular
                          ? 'bg-cyan-400 text-slate-900 hover:bg-cyan-300 shadow-sm shadow-cyan-400/20'
                          : 'bg-slate-800 hover:bg-slate-700 text-white'
                      }`}
                    >
                      <span>Book at {service.hourlyRate}/hr</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    
                    <button
                      onClick={() => setSelectedServiceId(service.id)}
                      className={`text-[11px] py-1 transition-colors ${
                        isSelected ? 'text-cyan-400 font-semibold' : 'text-slate-500 hover:text-slate-300'
                      }`}
                    >
                      {isSelected ? '✓ Loaded in Cost Estimator below' : 'Calculate estimate with this rate'}
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Interactive Engagement Estimator Bar */}
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1">
                Interactive Project Budget Estimator
              </div>
              <h3 className="text-xl font-bold text-white">
                Estimate your custom engagement investment
              </h3>
            </div>
            <div className="text-xs text-slate-400">
              Selected Rate: <strong className="text-white font-mono">{activeService.title} ({activeService.hourlyRate}/hr)</strong>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Hours Slider (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-300 font-medium">Estimated Hours Needed:</span>
                <span className="font-mono text-lg font-bold text-cyan-400 tabular-nums">
                  {estimatedHours} hours
                </span>
              </div>

              <input
                type="range"
                min="3"
                max="80"
                step="1"
                value={estimatedHours}
                onChange={(e) => setEstimatedHours(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />

              <div className="flex justify-between text-[11px] text-slate-500 font-mono">
                <span>3 hrs (Quick Review)</span>
                <span>20 hrs (Sprint)</span>
                <span>40 hrs (Full Migration)</span>
                <span>80 hrs</span>
              </div>

              <div className="text-xs text-slate-400 leading-relaxed pt-1">
                <strong>Scope context:</strong> {activeService.idealFor} Includes direct screen-share reviews, code artifacts, and post-deployment monitoring.
              </div>
            </div>

            {/* Total Estimate Calculation (5 cols) */}
            <div className="lg:col-span-5 p-5 rounded-xl bg-slate-950 border border-slate-800 flex flex-col justify-between space-y-4">
              <div className="space-y-1">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                  Estimated Total Investment
                </span>
                <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tabular-nums text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-indigo-300">
                  ${calculatedEstimate.toLocaleString()} <span className="text-xs text-slate-400 font-sans font-normal">USD</span>
                </div>
                <div className="text-[11px] text-slate-500 font-mono">
                  Based on {estimatedHours} hours @ {activeService.hourlyRate}/hr
                </div>
              </div>

              <button
                onClick={() => onSelectService(activeService.title, `${activeService.hourlyRate}/hr (~${estimatedHours} hrs)`)}
                className="w-full py-3 px-4 text-xs font-semibold text-slate-900 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm shadow-cyan-400/20"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Initiate Inquiry with This Estimate</span>
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
