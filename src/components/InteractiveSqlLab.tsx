import React, { useState } from 'react';
import { Play, Check, AlertCircle, ArrowRight, Gauge, Cpu, HardDrive, RefreshCw } from 'lucide-react';
import { PORTFOLIO_DATA, SqlOptimizationScenario } from '../data/portfolioData';

export const InteractiveSqlLab: React.FC = () => {
  const { sqlOptimizationScenarios } = PORTFOLIO_DATA;
  const [selectedScenarioId, setSelectedScenarioId] = useState<string>(sqlOptimizationScenarios[0].id);
  const [activeView, setActiveView] = useState<'before' | 'after'>('after');
  const [isProfiling, setIsProfiling] = useState<boolean>(false);
  const [simulatedProgress, setSimulatedProgress] = useState<number>(100);

  const scenario = sqlOptimizationScenarios.find((s) => s.id === selectedScenarioId) || sqlOptimizationScenarios[0];

  const handleRunProfiler = () => {
    setIsProfiling(true);
    setSimulatedProgress(0);
    const interval = setInterval(() => {
      setSimulatedProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsProfiling(false);
          return 100;
        }
        return prev + 25;
      });
    }, 120);
  };

  const isAfter = activeView === 'after';
  const speedupRatio = Math.round(scenario.beforeExecutionMs / scenario.afterExecutionMs);
  const costDropPercent = Math.round(((scenario.beforeCost - scenario.afterCost) / scenario.beforeCost) * 100);

  return (
    <section id="sql-lab" className="py-20 bg-[#090D16] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="text-xs font-semibold text-cyan-400 tracking-wider uppercase">
              Interactive SQL Profiling Lab
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Real-world query plan optimizations.
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              Inspect before-and-after query execution plans, index utilization, and buffer pool cache hits on multi-million row datasets.
            </p>
          </div>

          {/* Scenario Selector */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-lg">
            {sqlOptimizationScenarios.map((scen, idx) => (
              <button
                key={scen.id}
                onClick={() => {
                  setSelectedScenarioId(scen.id);
                  setActiveView('after');
                }}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                  selectedScenarioId === scen.id
                    ? 'bg-slate-800 text-cyan-300 border border-slate-700/80 shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Case 0{idx + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Profiler Card */}
        <div className="rounded-2xl bg-slate-900/60 border border-slate-800 overflow-hidden shadow-2xl">
          
          {/* Top Bar with metadata and view switcher */}
          <div className="p-6 border-b border-slate-800 bg-slate-900/90 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                <span className="text-cyan-400 font-semibold">{scenario.tableSize}</span>
                <span aria-hidden="true">·</span>
                <span>Workload: {scenario.workload}</span>
              </div>
              <h3 className="text-lg font-bold text-white">{scenario.title}</h3>
            </div>

            {/* Toggle: Unoptimized vs Optimized */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 p-1 bg-slate-950 border border-slate-800 rounded-lg text-xs">
                <button
                  onClick={() => setActiveView('before')}
                  className={`px-3 py-1.5 font-medium rounded-md transition-colors ${
                    !isAfter ? 'bg-rose-950/70 text-rose-300 border border-rose-800/80' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Unoptimized (Before)
                </button>
                <button
                  onClick={() => setActiveView('after')}
                  className={`px-3 py-1.5 font-medium rounded-md transition-colors ${
                    isAfter ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Sudip's Optimized (After)
                </button>
              </div>

              <button
                onClick={handleRunProfiler}
                disabled={isProfiling}
                className="px-3 py-1.5 text-xs font-semibold text-slate-900 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors flex items-center gap-1.5"
                title="Simulate EXPLAIN (ANALYZE, BUFFERS) run"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Profile Query</span>
              </button>
            </div>
          </div>

          {/* Performance Comparison Header Banner */}
          <div className="p-6 bg-slate-950/80 border-b border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800/80">
              <div className="text-[11px] text-slate-400 font-medium">Execution Duration</div>
              <div className="text-xl font-bold font-mono text-white mt-1 tabular-nums">
                {isAfter ? `${scenario.afterExecutionMs} ms` : `${scenario.beforeExecutionMs} ms`}
              </div>
              <div className="text-[11px] font-mono mt-0.5 text-cyan-400">
                {isAfter ? `${speedupRatio}x faster` : 'Baseline benchmark'}
              </div>
            </div>

            <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800/80">
              <div className="text-[11px] text-slate-400 font-medium">Planner Cost Estimate</div>
              <div className="text-xl font-bold font-mono text-white mt-1 tabular-nums">
                {isAfter ? scenario.afterCost.toLocaleString() : scenario.beforeCost.toLocaleString()}
              </div>
              <div className="text-[11px] font-mono mt-0.5 text-cyan-400">
                {isAfter ? `-${costDropPercent}% cost reduction` : 'Max planner cost'}
              </div>
            </div>

            <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800/80">
              <div className="text-[11px] text-slate-400 font-medium">Buffer Cache Hit Ratio</div>
              <div className="text-xl font-bold font-mono text-white mt-1 tabular-nums">
                {isAfter ? scenario.afterBufferHits : scenario.beforeBufferHits}
              </div>
              <div className="text-[11px] font-mono mt-0.5 text-slate-400">
                {isAfter ? 'Zero disk I/O stall' : 'Heavy disk read block'}
              </div>
            </div>

            <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800/80">
              <div className="text-[11px] text-slate-400 font-medium">Scan Strategy</div>
              <div className="text-sm font-bold font-mono text-white mt-1 truncate">
                {isAfter ? 'Index Only / Partition' : 'Sequential Heap Scan'}
              </div>
              <div className="text-[11px] font-mono mt-0.5 text-cyan-400">
                {isAfter ? 'Covering B-Tree' : 'Unindexed sequential'}
              </div>
            </div>
          </div>

          {/* Code & Plan Split View */}
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-800">
            
            {/* SQL Editor Code View (7 cols) */}
            <div className="lg:col-span-7 p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-medium text-slate-400">
                  {isAfter ? 'Targeted Optimized Query & Index DDL' : 'Unoptimized Legacy SQL Query'}
                </span>
                <span className="text-[11px] font-mono text-cyan-400">PostgreSQL 15 / 16 Syntax</span>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/90 font-mono text-xs text-slate-300 overflow-x-auto leading-relaxed shadow-inner">
                <pre>{isAfter ? scenario.afterQuery : scenario.beforeQuery}</pre>
              </div>

              {/* Optimization Technique Explanation */}
              <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-800/40 text-xs text-slate-300 space-y-1.5">
                <div className="font-semibold text-cyan-300 flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Optimization Strategy by Sudip Biswas:</span>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  {scenario.keyTechnique}
                </p>
              </div>
            </div>

            {/* EXPLAIN ANALYZE Execution Plan (5 cols) */}
            <div className="lg:col-span-5 p-6 space-y-4 bg-slate-950/40">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-medium text-slate-400">
                  EXPLAIN (ANALYZE, BUFFERS)
                </span>
                <span className="text-[11px] font-mono text-emerald-400">Verified Plan</span>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-cyan-200/90 overflow-x-auto leading-relaxed shadow-inner">
                <pre>{isAfter ? scenario.afterPlan : scenario.beforePlan}</pre>
              </div>

              <div className="space-y-2 pt-2">
                <div className="text-xs font-semibold text-white">Problem Summary:</div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {scenario.problemSummary}
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
