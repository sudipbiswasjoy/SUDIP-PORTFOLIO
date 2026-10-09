import React, { useState } from 'react';
import { Layers, Zap, Shield, Cpu, Database, Check, ExternalLink } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const SpecializationSection: React.FC = () => {
  const { corePillars, engines } = PORTFOLIO_DATA;
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Engines' },
    { id: 'relational', label: 'Relational & ACID' },
    { id: 'cloud', label: 'Cloud Distributed' },
    { id: 'nosql', label: 'NoSQL & Cache' },
  ];

  const filteredEngines = engines.filter((eng) => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'relational') return eng.category.toLowerCase().includes('relational') || eng.category.toLowerCase().includes('acid');
    if (selectedCategory === 'cloud') return eng.category.toLowerCase().includes('cloud') || eng.category.toLowerCase().includes('distributed');
    if (selectedCategory === 'nosql') return eng.category.toLowerCase().includes('nosql') || eng.category.toLowerCase().includes('cache');
    return true;
  });

  return (
    <section id="specialization" className="py-20 border-t border-slate-800/80 bg-[#070B14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="text-xs font-semibold text-cyan-400 tracking-wider uppercase">
            Core Competencies
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Specialized in mission-critical database engineering.
          </h2>
          <p className="text-base text-slate-400 leading-relaxed">
            From high-concurrency payment ledgers to petabyte data streams, my architecture principles prioritize transactional consistency, sub-second disaster recovery, and operational predictability.
          </p>
        </div>

        {/* 4 Architectural Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {corePillars.map((pillar, idx) => (
            <div
              key={pillar.title}
              className="p-7 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700/80 transition-all space-y-4 group"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-medium text-cyan-400">
                  {`0${idx + 1}. Pillar`}
                </span>
                <span className="text-xs text-slate-500 font-mono">Enterprise Grade</span>
              </div>

              <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                {pillar.title}
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                {pillar.description}
              </p>

              {/* Technologies list with subtle typographic separation */}
              <div className="pt-4 border-t border-slate-800/80">
                <div className="text-xs text-slate-400 mb-2 font-medium">Core Stack:</div>
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-300">
                  {pillar.stack.map((item, i) => (
                    <React.Fragment key={item}>
                      <span className="text-slate-200">{item}</span>
                      {i < pillar.stack.length - 1 && (
                        <span aria-hidden="true" className="text-slate-600">·</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Engine Competency Matrix & Filter */}
        <div className="pt-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold text-white">Database Engines & Cloud Environments</h3>
              <p className="text-xs text-slate-400">Certified hands-on administration, profiling, and high-availability configuration.</p>
            </div>

            {/* Interactive Filter Control */}
            <div className="flex items-center gap-1 p-1 bg-slate-900 border border-slate-800 rounded-lg">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                    selectedCategory === cat.id
                      ? 'bg-slate-800 text-cyan-300 shadow-sm border border-slate-700/80'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Matrix Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredEngines.map((engine) => (
              <div
                key={engine.name}
                className="p-5 rounded-lg bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 transition-colors space-y-3"
              >
                <div className="flex items-start justify-between">
                  <div className="space-y-0.5">
                    <h4 className="text-base font-bold text-white">{engine.name}</h4>
                    <span className="text-xs text-cyan-400 font-medium">{engine.category}</span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded">
                    {engine.rating}
                  </span>
                </div>

                <div className="space-y-1.5 pt-2 border-t border-slate-800/60">
                  <div className="text-[11px] text-slate-500 uppercase tracking-wider font-semibold">
                    Target Environments
                  </div>
                  <ul className="text-xs text-slate-300 space-y-1">
                    {engine.cloudVariants.map((variant) => (
                      <li key={variant} className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-cyan-400/80" />
                        <span className="truncate">{variant}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
