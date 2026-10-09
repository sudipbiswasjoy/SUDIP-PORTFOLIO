import React, { useState } from 'react';
import { ExternalLink, ArrowRight, Database, Server, Cpu, CheckCircle2, Layers, Filter } from 'lucide-react';
import { CaseStudy } from '../data/portfolioData';

export interface ClientProject {
  id: string;
  title: string;
  clientContext: string;
  category: 'Migration' | 'Optimization' | 'Disaster Recovery' | 'Distributed SQL' | 'Analytics';
  image: string;
  briefDescription: string;
  workDone: string[];
  technologies: string[];
  keyOutcome: string;
  liveLinkText: string;
  caseStudyId?: string;
  externalUrl?: string;
}

interface ProjectsSectionProps {
  onOpenCaseStudy: (caseStudyId: string) => void;
  onOpenContact: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onOpenCaseStudy,
  onOpenContact,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [activeModalProject, setActiveModalProject] = useState<ClientProject | null>(null);

  const projects: ClientProject[] = [
    {
      id: 'proj-1',
      title: '14TB Mission-Critical Oracle to AWS Aurora PostgreSQL Migration',
      clientContext: 'Tier-1 Banking Institution · Enterprise Core Ledger',
      category: 'Migration',
      image: '/src/assets/images/zero_downtime_migration_1791438320855.jpg',
      briefDescription: 'Architected and executed the complete live migration of a core banking transaction ledger from legacy on-premise Oracle to AWS Aurora PostgreSQL with zero unplanned downtime and 100% data fidelity.',
      workDone: [
        'Provisioned continuous Change Data Capture (CDC) via AWS DMS with custom Large Object (LOB) handling.',
        'Migrated and refactored 340+ PL/SQL stored procedures and triggers to PostgreSQL PL/pgSQL using AWS SCT.',
        'Established automated dual-write reconciliation testing verifying 1.2 billion ledger rows with sub-minute cutover window.',
      ],
      technologies: ['AWS Aurora PostgreSQL', 'AWS DMS', 'Oracle 19c', 'PgBouncer', 'Terraform', 'Python'],
      keyOutcome: 'Zero unplanned downtime · $420,000/yr license cost savings · 42ms CDC replication lag at cutover',
      liveLinkText: 'View Architecture Case Study',
      caseStudyId: 'fintech-zero-downtime',
    },
    {
      id: 'proj-2',
      title: 'P99 Query Latency Optimization from 1,420ms to 24ms for E-Commerce Flash Sales',
      clientContext: 'Global Retailer · 40M+ Catalog Records',
      category: 'Optimization',
      image: '/src/assets/images/database_performance_analytics_1791438335599.jpg',
      briefDescription: 'Eliminated catastrophic locking bottlenecks and sequential scans across 40M catalog items during Black Friday promotional traffic, decreasing P99 latency by 98.3%.',
      workDone: [
        'Profiled top slow queries using pg_stat_statements and automated EXPLAIN ANALYZE visual tracing.',
        'Engineered targeted B-tree composite indexes with INCLUDE clauses to enable 92% index-only scans.',
        'Configured declarative RANGE table partitioning and fine-tuned autovacuum scale factors to prevent lock starvation.',
      ],
      technologies: ['PostgreSQL 15', 'pg_stat_statements', 'PgBouncer', 'Grafana', 'AWS Performance Insights'],
      keyOutcome: 'P99 dropped to 24ms (from 1,420ms) · Database CPU dropped from 96% to 38% at peak',
      liveLinkText: 'Inspect Performance Benchmark',
      caseStudyId: 'ecommerce-query-tuning',
    },
    {
      id: 'proj-3',
      title: 'HIPAA-Compliant Automated Multi-Region Disaster Recovery (RPO = 0s)',
      clientContext: 'HealthTech Provider · Critical Patient EHR Infrastructure',
      category: 'Disaster Recovery',
      image: '/src/assets/images/cloud_database_architecture_1791438310662.jpg',
      briefDescription: 'Designed an ultra-resilient multi-region database topology on Google Cloud Platform, achieving automated failover in under 45 seconds with zero data loss.',
      workDone: [
        'Configured Google Cloud SQL High Availability with synchronous replication and cross-region read replicas.',
        'Enforced Customer-Managed Encryption Keys (CMEK) via Cloud KMS with automated 7-year Point-In-Time-Recovery (PITR).',
        'Codified automated DNS failover orchestrations with health-aware Anycast routing and simulated chaos testing.',
      ],
      technologies: ['GCP Cloud SQL', 'Google Cloud Spanner', 'Terraform', 'Cloud KMS', 'Cloud DNS'],
      keyOutcome: 'RPO = 0 seconds · RTO = 38 seconds · 100% HIPAA & SOC2 audit compliance score',
      liveLinkText: 'Review DR Runbook Architecture',
      caseStudyId: 'healthtech-multi-region-dr',
    },
    {
      id: 'proj-4',
      title: 'Distributed Multi-Tenant Database Sharding on CockroachDB',
      clientContext: 'B2B SaaS Platform · 2,400+ Enterprise Tenants',
      category: 'Distributed SQL',
      image: '/src/assets/images/cloud_database_architecture_1791438310662.jpg',
      briefDescription: 'Architected a horizontally scalable distributed SQL architecture using CockroachDB, replacing a congested monolithic database with multi-region tenant geo-partitioning.',
      workDone: [
        'Partitioned tenant schemas geographically across US, EU, and APAC clusters to satisfy GDPR data residency.',
        'Maintained serializable ACID transactions across cross-region queries using Raft consensus groups.',
        'Integrated automated connection pooling and schema migrations into GitHub Actions CI/CD pipelines.',
      ],
      technologies: ['CockroachDB Dedicated', 'Distributed SQL', 'Raft Consensus', 'Docker', 'Kubernetes'],
      keyOutcome: 'Supported 180,000+ QPS with sub-10ms localized reads · Zero cross-region compliance violations',
      liveLinkText: 'Explore Sharding Specifications',
    },
    {
      id: 'proj-5',
      title: 'High-Velocity IoT Sensor Ingestion & Time-Series Archival Pipeline',
      clientContext: 'Industrial Logistics & Smart Fleet Monitoring',
      category: 'Analytics',
      image: '/src/assets/images/zero_downtime_migration_1791438320855.jpg',
      briefDescription: 'Constructed an automated real-time time-series database pipeline ingesting 100k events/second with automated cold-data compression into S3 Parquet lakes.',
      workDone: [
        'Implemented TimescaleDB hypertable chunking and automated continuous aggregate rollups.',
        'Built Kafka consumer buffer pools preventing burst spikes from saturating database write IOPS.',
        'Configured automated tiering policies moving data older than 30 days into compressed Apache Parquet formats.',
      ],
      technologies: ['TimescaleDB', 'Apache Kafka', 'AWS S3', 'Python', 'DuckDB', 'Terraform'],
      keyOutcome: '100k writes/sec sustained with <5% CPU jitter · 74% reduction in warm storage hosting fees',
      liveLinkText: 'View Pipeline Specifications',
    },
  ];

  const filterOptions = [
    { id: 'all', label: 'All Projects' },
    { id: 'Migration', label: 'Cloud Migration' },
    { id: 'Optimization', label: 'Performance Tuning' },
    { id: 'Disaster Recovery', label: 'Disaster Recovery' },
    { id: 'Distributed SQL', label: 'Distributed SQL' },
  ];

  const filteredProjects = projects.filter((p) => {
    if (selectedFilter === 'all') return true;
    return p.category === selectedFilter;
  });

  return (
    <section id="case-studies" className="py-20 bg-[#090D16] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="text-xs font-semibold text-cyan-400 tracking-wider uppercase">
              Client Engagements & Case Studies
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured client database architectures.
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              Real-world engineering case studies showcasing zero-downtime migrations, latency profiling, and resilient distributed systems delivered for global enterprise clients.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-lg">
            {filterOptions.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                  selectedFilter === filter.id
                    ? 'bg-slate-800 text-cyan-300 shadow-sm border border-slate-700/80'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className="flex flex-col rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all overflow-hidden group"
            >
              {/* Project Image Header */}
              <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90" />
                
                {/* Unboxed category kicker */}
                <div className="absolute top-3 left-3 text-[11px] font-mono font-medium text-cyan-300 bg-slate-900/90 backdrop-blur-sm px-2.5 py-1 rounded border border-slate-800">
                  {project.category}
                </div>
              </div>

              {/* Project Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2.5">
                  <div className="text-xs text-slate-400 font-mono">
                    {project.clientContext}
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {project.briefDescription}
                  </p>
                </div>

                {/* Key Outcome Highlight */}
                <div className="p-3 rounded-lg bg-slate-950/70 border border-slate-800/80 text-xs">
                  <span className="text-slate-400 block text-[11px] font-semibold mb-0.5">Measurable Outcome</span>
                  <span className="text-cyan-300 font-mono font-medium">{project.keyOutcome}</span>
                </div>

                {/* Tech Stack list (clean unboxed separators) */}
                <div className="pt-2 border-t border-slate-800/80">
                  <div className="text-[11px] text-slate-500 font-medium mb-1.5">Stack Utilized:</div>
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-300">
                    {project.technologies.map((tech, i) => (
                      <React.Fragment key={tech}>
                        <span className="text-slate-200">{tech}</span>
                        {i < project.technologies.length - 1 && (
                          <span aria-hidden="true" className="text-slate-600">·</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                {/* Action Link / Button */}
                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                  {project.caseStudyId ? (
                    <button
                      onClick={() => onOpenCaseStudy(project.caseStudyId!)}
                      className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 transition-colors"
                    >
                      <span>{project.liveLinkText}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 transition-colors"
                    >
                      <span>{project.liveLinkText}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}

                  <button
                    onClick={onOpenContact}
                    className="text-[11px] text-slate-400 hover:text-white"
                  >
                    Discuss Scope
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Generic Project Quick Modal (for projects without full case study IDs) */}
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="relative w-full max-w-2xl bg-[#0B111E] border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl max-h-[90vh] overflow-y-auto">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-xs text-cyan-400 font-mono mb-1">{activeModalProject.category} · {activeModalProject.clientContext}</div>
                  <h3 className="text-xl font-bold text-white">{activeModalProject.title}</h3>
                </div>
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="p-1.5 text-slate-400 hover:text-white rounded-lg bg-slate-900 border border-slate-800"
                >
                  ✕
                </button>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                {activeModalProject.briefDescription}
              </p>

              <div className="space-y-2">
                <h4 className="text-xs font-semibold text-white uppercase tracking-wider">Engineering Work Undertaken:</h4>
                <ul className="space-y-2 text-xs text-slate-300">
                  {activeModalProject.workDone.map((step, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                <div className="text-xs text-slate-400 mb-1">Delivered Business & Engineering Impact:</div>
                <div className="text-sm font-semibold text-cyan-300 font-mono">{activeModalProject.keyOutcome}</div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                <div className="text-xs text-slate-400">
                  Lead Engineer: <strong className="text-white">Sudip Biswas</strong> (Cloud Database Specialist)
                </div>
                <button
                  onClick={() => {
                    setActiveModalProject(null);
                    onOpenContact();
                  }}
                  className="px-4 py-2 text-xs font-semibold text-slate-900 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors"
                >
                  Request Similar Architecture
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
