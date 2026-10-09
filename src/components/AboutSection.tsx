import React from 'react';
import { ShieldCheck, Award, Briefcase, MapPin, Mail, Calendar, CheckCircle, Database, Server, Zap, Lock } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface AboutSectionProps {
  onOpenVerification: () => void;
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onOpenVerification,
  onOpenResume,
  onOpenContact,
}) => {
  const { profile } = PORTFOLIO_DATA;

  const keySkillCategories = [
    {
      category: 'Cloud Database Architecture',
      skills: ['AWS Aurora (Multi-AZ & Global)', 'Google Cloud SQL & Spanner', 'Azure Cosmos DB', 'Multi-Region Active-Active Topologies'],
    },
    {
      category: 'Database Engines & Administration',
      skills: ['PostgreSQL 14–16 Internals', 'Oracle Database 19c Enterprise', 'MySQL 8 / InnoDB', 'MongoDB Atlas & Redis Cluster'],
    },
    {
      category: 'Zero-Downtime Migration & CDC',
      skills: ['AWS Database Migration Service (DMS)', 'GCP Datastream', 'Debezium / Kafka CDC', 'Dual-Write Cutover & Checksum Verification'],
    },
    {
      category: 'Performance Tuning & Reliability',
      skills: ['EXPLAIN ANALYZE & Query Profiling', 'PgBouncer / ProxySQL Connection Pooling', 'Table Partitioning & Sharding', 'Continuous PITR & Disaster Recovery (RPO=0s)'],
    },
  ];

  return (
    <section id="about" className="py-20 bg-[#070B14] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="text-xs font-semibold text-cyan-400 tracking-wider uppercase">
            About Me
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Architecting reliable data foundations for enterprise clouds.
          </h2>
          <p className="text-base text-slate-400 leading-relaxed">
            A mid-senior database specialist with over 7 years of deep engineering experience across distributed systems, high-concurrency transactional engines, and seamless cloud migrations.
          </p>
        </div>

        {/* Main Grid: Bio & Portrait & Experience Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Verified Credentials & Executive Profile Badge (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden shadow-xl">
              
              {/* Executive Header Banner */}
              <div className="p-6 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border-b border-slate-800 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <span className="px-2.5 py-1 rounded bg-emerald-950 text-emerald-400 border border-emerald-800/80 text-[11px] font-mono font-semibold flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" /> VERIFIED
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight">{profile.name}</h3>
                  <div className="text-xs font-semibold text-cyan-400 mt-0.5">{profile.role}</div>
                  <div className="text-[11px] text-slate-400 font-mono mt-1">Ref: {profile.appointmentRef}</div>
                </div>

                <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span>HCLTech Limited</span>
                  <span>Cloud & DB Services</span>
                </div>
              </div>

              {/* Bio fast facts */}
              <div className="p-5 space-y-3.5 text-xs text-slate-300">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5 text-cyan-400" /> Current Role
                  </span>
                  <span className="font-semibold text-white">HCLTech Limited</span>
                </div>

                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-indigo-400" /> Experience
                  </span>
                  <span className="font-semibold text-white font-mono">{profile.experienceYears} Years</span>
                </div>

                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-rose-400" /> Location
                  </span>
                  <span className="font-semibold text-white">{profile.location}</span>
                </div>

                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-sky-400" /> Direct Email
                  </span>
                  <a href={`mailto:${profile.email}`} className="text-cyan-400 hover:underline truncate max-w-[160px]">
                    {profile.email}
                  </a>
                </div>

                <div className="pt-2 flex flex-col gap-2">
                  <button
                    onClick={onOpenVerification}
                    className="w-full py-2 px-3 text-xs font-semibold text-cyan-300 bg-cyan-950/40 hover:bg-cyan-950/70 border border-cyan-800/60 rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    <ShieldCheck className="w-4 h-4 text-cyan-400" />
                    <span>View HCLTech Appointment Verification</span>
                  </button>

                  <button
                    onClick={onOpenResume}
                    className="w-full py-2 px-3 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700/80 rounded-lg transition-colors"
                  >
                    Download / View Full Resume
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bio Narrative & Key Expertise (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Narrative Prose */}
            <div className="prose prose-invert max-w-none text-slate-300 text-sm sm:text-base leading-relaxed space-y-4">
              <p>
                Hello, I am <strong className="text-white font-semibold">{profile.name}</strong>, a Mid-Senior Cloud Database Specialist with over {profile.experienceYears} of hands-on experience designing, scaling, and automating mission-critical database platforms. Currently appointed at <strong className="text-white font-semibold">HCLTech Limited</strong> in the <span className="text-cyan-300">Cloud & Database Services</span> department, I help enterprise organizations modernize their data tier, transition off legacy on-premise silos, and guarantee continuous availability across global regions.
              </p>
              <p>
                Throughout my career, I have overseen the zero-downtime migration of more than <strong className="text-white">42+ Terabytes</strong> of highly sensitive financial and medical data. My core philosophy is rooted in engineering rigor: preventing single points of failure through automated failover topology validation, designing covering indexes with mathematical precision, and eliminating connection bloat through intelligent proxy routing.
              </p>
              <p>
                Whether diagnosing deep lock contention during high-velocity traffic spikes or architecting multi-region active-active clusters adhering to strict SOC2 and HIPAA regulatory standards, I focus on delivering predictable latency, ironclad disaster recovery, and measurable cost efficiency.
              </p>
            </div>

            {/* Key Skills & Expertise Matrix */}
            <div className="space-y-4 pt-4 border-t border-slate-800">
              <h3 className="text-lg font-bold text-white">Core Technical Expertise</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {keySkillCategories.map((cat) => (
                  <div
                    key={cat.category}
                    className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3"
                  >
                    <h4 className="text-sm font-bold text-cyan-300">{cat.category}</h4>
                    <ul className="space-y-2 text-xs text-slate-300">
                      {cat.skills.map((skill) => (
                        <li key={skill} className="flex items-start gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Values / Philosophy */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 space-y-1.5">
                <div className="text-xs font-bold text-white">Zero-Loss Mandate</div>
                <p className="text-xs text-slate-400">
                  Every migration and disaster recovery plan is verified with synchronous replication and automated checksum validations.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 space-y-1.5">
                <div className="text-xs font-bold text-white">Predictable Latency</div>
                <p className="text-xs text-slate-400">
                  Targeting sub-20ms P99 execution through query plan hygiene, buffer pool calibration, and connection pooling.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 space-y-1.5">
                <div className="text-xs font-bold text-white">Infrastructure as Code</div>
                <p className="text-xs text-slate-400">
                  All database clusters, IAM roles, and backup policies codified using reproducible Terraform and Ansible blueprints.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
