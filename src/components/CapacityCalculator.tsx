import React, { useState } from 'react';
import { Calculator, HardDrive, Cpu, Zap, Activity, ArrowRight, ShieldCheck } from 'lucide-react';

interface CapacityCalculatorProps {
  onOpenContact: () => void;
}

export const CapacityCalculator: React.FC<CapacityCalculatorProps> = ({ onOpenContact }) => {
  const [dataSizeGb, setDataSizeGb] = useState<number>(2000); // 2 TB
  const [writesPerSec, setWritesPerSec] = useState<number>(3500);
  const [readRatio, setReadRatio] = useState<number>(85); // 85% reads, 15% writes
  const [availabilityTier, setAvailabilityTier] = useState<'standard' | 'high' | 'ultra'>('high');

  // Calculations
  const readQps = Math.round((writesPerSec * readRatio) / (100 - readRatio));
  const totalQps = writesPerSec + readQps;
  
  // IOPS estimation: 1.5 IOPS per write transaction + 0.3 IOPS per read (assuming 85% cache hit)
  const estimatedIops = Math.round(writesPerSec * 1.8 + readQps * 0.25);
  
  // Buffer pool recommendation: ~25% of active hot working set (assumed 20% of total data size)
  const hotDataGb = Math.round(dataSizeGb * 0.2);
  const recommendedRamGb = Math.max(32, Math.round(hotDataGb * 0.6));
  const recommendedVcpu = totalQps > 15000 ? 64 : totalQps > 5000 ? 32 : 16;
  
  // WAL generation: ~4KB per write transaction
  const walMbPerHour = Math.round((writesPerSec * 4 * 3600) / 1024);
  const walGbPerDay = Math.round((walMbPerHour * 24) / 1024);

  // Recommended architecture pattern
  let recommendedArchitecture = 'AWS Aurora PostgreSQL Multi-AZ with 2 Read Replicas';
  let rpoTarget = '< 1 second';
  let rtoTarget = '< 45 seconds';

  if (availabilityTier === 'ultra' || totalQps > 20000) {
    recommendedArchitecture = 'Google Cloud Spanner Multi-Region Paxos or Aurora Global Database';
    rpoTarget = '0 seconds (Synchronous)';
    rtoTarget = '< 15 seconds (Automated)';
  } else if (availabilityTier === 'standard') {
    recommendedArchitecture = 'AWS RDS PostgreSQL Multi-AZ or GCP Cloud SQL HA';
    rpoTarget = '< 5 seconds';
    rtoTarget = '< 2 minutes';
  }

  return (
    <section id="capacity-calculator" className="py-20 bg-[#070B14] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <div className="text-xs font-semibold text-cyan-400 tracking-wider uppercase">
            Interactive Architecture Sizing Tool
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Cloud database capacity & IOPS calculator.
          </h2>
          <p className="text-base text-slate-400 leading-relaxed">
            Estimate compute allocation, IOPS throughput, WAL generation volume, and recommended cloud instance sizing based on production workload parameters.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Workload Inputs (6 cols) */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-6">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Calculator className="w-5 h-5 text-cyan-400" />
              <span>Workload Parameters</span>
            </h3>

            {/* Slider 1: Total Data Size */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <label className="font-medium text-slate-300">Total Database Volume</label>
                <span className="font-mono text-cyan-400 font-bold tabular-nums">
                  {dataSizeGb >= 1000 ? `${(dataSizeGb / 1000).toFixed(1)} TB` : `${dataSizeGb} GB`}
                </span>
              </div>
              <input
                type="range"
                min="100"
                max="20000"
                step="100"
                value={dataSizeGb}
                onChange={(e) => setDataSizeGb(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
              <div className="flex justify-between text-[11px] text-slate-500 font-mono">
                <span>100 GB</span>
                <span>10 TB</span>
                <span>20 TB</span>
              </div>
            </div>

            {/* Slider 2: Write Transactions / Sec */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <label className="font-medium text-slate-300">Sustained Write Throughput (TPS)</label>
                <span className="font-mono text-cyan-400 font-bold tabular-nums">
                  {writesPerSec.toLocaleString()} writes/sec
                </span>
              </div>
              <input
                type="range"
                min="100"
                max="15000"
                step="100"
                value={writesPerSec}
                onChange={(e) => setWritesPerSec(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
              <div className="flex justify-between text-[11px] text-slate-500 font-mono">
                <span>100 TPS</span>
                <span>5,000 TPS</span>
                <span>15,000 TPS</span>
              </div>
            </div>

            {/* Slider 3: Read Ratio */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <label className="font-medium text-slate-300">Read / Write Ratio</label>
                <span className="font-mono text-cyan-400 font-bold tabular-nums">
                  {readRatio}% Reads · {100 - readRatio}% Writes
                </span>
              </div>
              <input
                type="range"
                min="50"
                max="98"
                step="1"
                value={readRatio}
                onChange={(e) => setReadRatio(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
              <div className="flex justify-between text-[11px] text-slate-500 font-mono">
                <span>50:50 (Write-heavy)</span>
                <span>80:20 (Standard)</span>
                <span>95:5 (Read-heavy)</span>
              </div>
            </div>

            {/* Availability SLA selector */}
            <div className="space-y-2 pt-2 border-t border-slate-800">
              <label className="text-xs font-medium text-slate-300 block">
                Target High-Availability SLA
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'standard', label: '99.9% Single-Region', sub: 'RTO < 2m' },
                  { id: 'high', label: '99.99% Multi-AZ', sub: 'RTO < 45s' },
                  { id: 'ultra', label: '99.999% Multi-Region', sub: 'RTO < 15s' },
                ].map((tier) => (
                  <button
                    key={tier.id}
                    onClick={() => setAvailabilityTier(tier.id as any)}
                    className={`p-2.5 rounded-lg border text-left transition-colors ${
                      availabilityTier === tier.id
                        ? 'bg-cyan-950/40 border-cyan-500/80 text-white'
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <div className="text-xs font-semibold">{tier.label}</div>
                    <div className="text-[10px] text-cyan-400/80 font-mono mt-0.5">{tier.sub}</div>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Sizing Recommendations & Output (6 cols) */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Zap className="w-5 h-5 text-cyan-400" />
                <span>Architecture Sizing Recommendation</span>
              </h3>
              <span className="text-[11px] font-mono text-cyan-300 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/60">
                Calculated Live
              </span>
            </div>

            {/* Primary Metrics Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80">
                <div className="text-xs text-slate-400 font-medium flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-cyan-400" /> Compute Sizing
                </div>
                <div className="text-2xl font-bold font-mono text-white mt-1 tabular-nums">
                  {recommendedVcpu} vCPU
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">
                  RAM: <strong className="text-cyan-300">{recommendedRamGb} GB</strong> (Buffer Pool)
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80">
                <div className="text-xs text-slate-400 font-medium flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-indigo-400" /> Provisioned IOPS
                </div>
                <div className="text-2xl font-bold font-mono text-white mt-1 tabular-nums">
                  {estimatedIops.toLocaleString()} IOPS
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">
                  Total QPS: <strong className="text-cyan-300">{totalQps.toLocaleString()}</strong>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80">
                <div className="text-xs text-slate-400 font-medium flex items-center gap-1.5">
                  <HardDrive className="w-3.5 h-3.5 text-sky-400" /> WAL Generation Rate
                </div>
                <div className="text-xl font-bold font-mono text-white mt-1 tabular-nums">
                  {walMbPerHour.toLocaleString()} MB/hr
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">
                  Daily Archive: ~{walGbPerDay} GB/day
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80">
                <div className="text-xs text-slate-400 font-medium flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Disaster Recovery
                </div>
                <div className="text-xl font-bold font-mono text-emerald-400 mt-1">
                  RPO {rpoTarget}
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">
                  RTO Target: {rtoTarget}
                </div>
              </div>
            </div>

            {/* Architecture Topology Recommendation */}
            <div className="p-4 rounded-xl bg-slate-950 border border-cyan-500/30 space-y-2">
              <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                Recommended Topology
              </span>
              <div className="text-sm font-bold text-white">
                {recommendedArchitecture}
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Includes PgBouncer connection pooling layer, automated continuous Point-In-Time-Recovery (PITR), and cross-AZ synchronous storage replication.
              </p>
            </div>

            {/* Consultation Action */}
            <div className="pt-2 flex items-center justify-between">
              <span className="text-xs text-slate-400">
                Need bespoke cluster sizing or migration planning?
              </span>
              <button
                onClick={onOpenContact}
                className="px-4 py-2 text-xs font-semibold text-slate-900 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap shadow-sm shadow-cyan-400/20"
              >
                <span>Request Architecture Review</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
