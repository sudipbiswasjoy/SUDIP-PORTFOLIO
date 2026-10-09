import React, { useState } from 'react';
import { Server, Activity, AlertTriangle, CheckCircle, RefreshCw, Zap, Play, Check, ShieldAlert, Cpu } from 'lucide-react';
import { PORTFOLIO_DATA, ArchitecturePattern } from '../data/portfolioData';

export const ArchitectureLab: React.FC = () => {
  const { architecturePatterns } = PORTFOLIO_DATA;
  const [activePatternId, setActivePatternId] = useState<string>(architecturePatterns[0].id);
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);
  const [trafficMode, setTrafficMode] = useState<'both' | 'write' | 'read'>('both');
  
  // Failover simulation state
  const [isSimulatingFailover, setIsSimulatingFailover] = useState(false);
  const [failoverStep, setFailoverStep] = useState<number>(0);
  const [failoverLog, setFailoverLog] = useState<string[]>([]);
  const [simulatedOutageNode, setSimulatedOutageNode] = useState<string | null>(null);
  const [promotedNodeId, setPromotedNodeId] = useState<string | null>(null);

  const currentPattern = architecturePatterns.find((p) => p.id === activePatternId) || architecturePatterns[0];

  const handleSimulateFailover = () => {
    if (isSimulatingFailover) return;
    setIsSimulatingFailover(true);
    setFailoverStep(1);
    setSimulatedOutageNode(currentPattern.nodes[0].id);
    setPromotedNodeId(null);
    setFailoverLog([
      `[T+00.0s] Injected simulated primary zone network isolation on ${currentPattern.nodes[0].name} (${currentPattern.nodes[0].region}).`,
    ]);

    setTimeout(() => {
      setFailoverStep(2);
      setFailoverLog((prev) => [
        ...prev,
        `[T+03.2s] Automated heartbeat watchdog detected 3 consecutive missed probes. Quorum vote initiated.`,
      ]);
    }, 1500);

    setTimeout(() => {
      setFailoverStep(3);
      const standbyOrReplica = currentPattern.nodes.find((n) => n.role === 'replica' || n.role === 'standby') || currentPattern.nodes[1];
      setPromotedNodeId(standbyOrReplica.id);
      setFailoverLog((prev) => [
        ...prev,
        `[T+08.4s] Raft/Paxos leader election converged. Promoting node ${standbyOrReplica.name} to Primary Read/Write.`,
      ]);
    }, 3200);

    setTimeout(() => {
      setFailoverStep(4);
      setFailoverLog((prev) => [
        ...prev,
        `[T+12.1s] DNS & Proxy routing updated with 5s TTL. Write traffic restored without dropped transactions. RPO = 0s, RTO = 12.1s.`,
      ]);
      setIsSimulatingFailover(false);
    }, 5000);
  };

  const resetSimulation = () => {
    setIsSimulatingFailover(false);
    setFailoverStep(0);
    setFailoverLog([]);
    setSimulatedOutageNode(null);
    setPromotedNodeId(null);
  };

  const selectedNode = currentPattern.nodes.find((n) => n.id === selectedNodeId) || currentPattern.nodes[0];

  return (
    <section id="architecture-lab" className="py-20 bg-[#090D16] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="text-xs font-semibold text-cyan-400 tracking-wider uppercase">
              Interactive Topology Playground
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              High-availability architecture blueprints.
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              Explore real-world distributed database topologies engineered for 99.999% availability. Test automated zone failover, inspect node latencies, and trace replication topologies.
            </p>
          </div>

          {/* Architecture Selector Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-900 border border-slate-800 rounded-lg">
            {architecturePatterns.map((pat) => (
              <button
                key={pat.id}
                onClick={() => {
                  setActivePatternId(pat.id);
                  resetSimulation();
                  setSelectedNodeId(null);
                }}
                className={`px-3.5 py-2 text-xs font-medium rounded-md transition-all whitespace-nowrap ${
                  activePatternId === pat.id
                    ? 'bg-cyan-500/10 text-cyan-300 border border-cyan-500/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {pat.category}
              </button>
            ))}
          </div>
        </div>

        {/* Blueprint Main Card */}
        <div className="rounded-2xl bg-slate-900/60 border border-slate-800 overflow-hidden shadow-xl">
          
          {/* Blueprint Header Bar */}
          <div className="p-6 border-b border-slate-800 bg-slate-900/80 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs text-slate-400 font-mono mb-1">
                <span>{currentPattern.category}</span>
                <span aria-hidden="true">·</span>
                <span className="text-cyan-400">RPO: {currentPattern.rpo}</span>
                <span aria-hidden="true">·</span>
                <span className="text-indigo-400">RTO: {currentPattern.rto}</span>
              </div>
              <h3 className="text-xl font-bold text-white">{currentPattern.title}</h3>
              <p className="text-xs text-slate-300 mt-1 max-w-2xl">{currentPattern.subtitle}</p>
            </div>

            {/* Interactive Simulator Controls */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="flex items-center gap-1 p-1 bg-slate-950 border border-slate-800 rounded-lg text-xs">
                <span className="px-2 text-slate-400">Traffic:</span>
                <button
                  onClick={() => setTrafficMode('both')}
                  className={`px-2 py-1 rounded ${trafficMode === 'both' ? 'bg-slate-800 text-white' : 'text-slate-500 hover:text-slate-300'}`}
                >
                  All
                </button>
                <button
                  onClick={() => setTrafficMode('write')}
                  className={`px-2 py-1 rounded ${trafficMode === 'write' ? 'bg-slate-800 text-cyan-300' : 'text-slate-500 hover:text-slate-300'}`}
                >
                  Writes Only
                </button>
                <button
                  onClick={() => setTrafficMode('read')}
                  className={`px-2 py-1 rounded ${trafficMode === 'read' ? 'bg-slate-800 text-indigo-300' : 'text-slate-500 hover:text-slate-300'}`}
                >
                  Reads Only
                </button>
              </div>

              {simulatedOutageNode ? (
                <button
                  onClick={resetSimulation}
                  className="px-3.5 py-2 text-xs font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors flex items-center gap-1.5"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Reset Topology</span>
                </button>
              ) : (
                <button
                  onClick={handleSimulateFailover}
                  disabled={isSimulatingFailover}
                  className="px-3.5 py-2 text-xs font-semibold text-rose-200 bg-rose-950/70 hover:bg-rose-900/80 border border-rose-800/80 rounded-lg transition-colors flex items-center gap-2 shadow-sm"
                  title="Simulate sudden regional loss and observe automated promotion"
                >
                  <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
                  <span>Simulate Primary Zone Outage</span>
                </button>
              )}
            </div>
          </div>

          {/* Interactive Topology Visualizer Canvas */}
          <div className="p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Diagram Area (8 cols) */}
            <div className="lg:col-span-8 space-y-6">
              
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/90 relative min-h-[360px] flex flex-col justify-between">
                
                {/* Traffic router top bar */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-900">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
                    <span className="text-xs font-semibold text-slate-300">
                      Global Ingress Proxy & Anycast DNS
                    </span>
                  </div>
                  <div className="text-[11px] font-mono text-slate-500">
                    Routing: Health-Aware Least Connections
                  </div>
                </div>

                {/* Nodes Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
                  {currentPattern.nodes.map((node) => {
                    const isOutage = simulatedOutageNode === node.id;
                    const isPromoted = promotedNodeId === node.id;
                    const isSelected = selectedNode.id === node.id;

                    let roleDisplay = node.role;
                    if (isPromoted) roleDisplay = 'primary';
                    if (isOutage) roleDisplay = 'primary';

                    return (
                      <div
                        key={node.id}
                        onClick={() => setSelectedNodeId(node.id)}
                        className={`p-4 rounded-xl border transition-all cursor-pointer relative ${
                          isOutage
                            ? 'bg-rose-950/40 border-rose-700 text-rose-200'
                            : isPromoted
                            ? 'bg-cyan-950/40 border-cyan-400 shadow-md shadow-cyan-950 text-cyan-200'
                            : isSelected
                            ? 'bg-slate-900 border-cyan-500/80 shadow-md shadow-black'
                            : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                        }`}
                      >
                        {/* Status chip */}
                        <div className="flex items-center justify-between text-xs mb-2">
                          <span className="font-mono text-[11px] text-slate-400">{node.region}</span>
                          {isOutage ? (
                            <span className="text-[11px] font-bold text-rose-400 flex items-center gap-1">
                              <ShieldAlert className="w-3 h-3" /> FAILED
                            </span>
                          ) : isPromoted ? (
                            <span className="text-[11px] font-bold text-cyan-300 flex items-center gap-1">
                              <Zap className="w-3 h-3 text-cyan-300" /> PROMOTED LEADER
                            </span>
                          ) : (
                            <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                              <CheckCircle className="w-3 h-3" /> {node.latencyMs}ms
                            </span>
                          )}
                        </div>

                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-lg ${
                            isOutage ? 'bg-rose-900/60' : isPromoted ? 'bg-cyan-500/20' : 'bg-slate-800'
                          }`}>
                            <Server className={`w-4 h-4 ${
                              isOutage ? 'text-rose-400' : isPromoted ? 'text-cyan-300' : 'text-slate-300'
                            }`} />
                          </div>
                          <div>
                            <div className="text-sm font-bold text-white">{node.name}</div>
                            <div className="text-xs text-slate-400 capitalize">Role: {roleDisplay}</div>
                          </div>
                        </div>

                        {/* Replication connection stream visual */}
                        <div className="mt-3 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                          <span>Replication Sync</span>
                          <span className="font-mono text-cyan-400">
                            {isOutage ? 'Disconnected' : 'Continuous WAL Sync'}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Failover execution log console */}
                {failoverLog.length > 0 && (
                  <div className="p-3.5 rounded-lg bg-slate-950 border border-slate-800 font-mono text-xs space-y-1">
                    <div className="text-slate-400 font-semibold mb-1 flex items-center justify-between">
                      <span>Watchdog Orchestration Events</span>
                      <span className="text-cyan-400">Step {failoverStep}/4</span>
                    </div>
                    {failoverLog.map((log, i) => (
                      <div key={i} className="text-slate-300 flex items-start gap-2">
                        <span className="text-cyan-400">›</span>
                        <span>{log}</span>
                      </div>
                    ))}
                  </div>
                )}

              </div>

              {/* Architectural Key Principles */}
              <div className="space-y-2">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Engineering Invariants Verified
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {currentPattern.keyBenefits.map((benefit, i) => (
                    <div key={i} className="p-3 rounded-lg bg-slate-950/60 border border-slate-800/60 text-xs text-slate-300 leading-relaxed flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Selected Node Telemetry Sidebar (4 cols) */}
            <div className="lg:col-span-4 p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-5">
              <div>
                <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider">
                  Node Inspector
                </span>
                <h4 className="text-base font-bold text-white mt-1">{selectedNode.name}</h4>
                <p className="text-xs text-slate-400 font-mono">{selectedNode.region}</p>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900 border border-slate-800/80">
                  <span className="text-slate-400">Role In Topology</span>
                  <span className="font-semibold text-white capitalize">{selectedNode.role}</span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900 border border-slate-800/80">
                  <span className="text-slate-400">Sync Roundtrip</span>
                  <span className="font-mono text-cyan-400 tabular-nums">{selectedNode.latencyMs} ms</span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900 border border-slate-800/80">
                  <span className="text-slate-400">Connection Pool Target</span>
                  <span className="font-mono text-slate-200">PgBouncer Transaction</span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900 border border-slate-800/80">
                  <span className="text-slate-400">Storage IOPS Allocation</span>
                  <span className="font-mono text-slate-200">12,000 Provisioned</span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900 border border-slate-800/80">
                  <span className="text-slate-400">WAL Buffer Size</span>
                  <span className="font-mono text-slate-200">64 MB</span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900 border border-slate-800/80">
                  <span className="text-slate-400">Encryption Standard</span>
                  <span className="font-mono text-emerald-400">AES-256 (KMS CMEK)</span>
                </div>
              </div>

              <div className="p-3.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs text-slate-300 space-y-1.5">
                <div className="font-semibold text-white flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Failover Runbook Standard</span>
                </div>
                <p className="text-slate-400 leading-relaxed text-[11px]">
                  All database instances in this architecture adhere to automated health probing with dual-split brain prevention via distributed etcd/Consul consensus before leader re-assignment.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
