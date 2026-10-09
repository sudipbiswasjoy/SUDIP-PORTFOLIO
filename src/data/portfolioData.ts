export interface CaseStudy {
  id: string;
  title: string;
  clientType: string;
  category: string;
  duration: string;
  image: string;
  summary: string;
  metrics: { label: string; value: string; delta: string }[];
  problem: string;
  solution: string;
  architectureDetails: string[];
  techStack: string[];
}

export interface ArchitecturePattern {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  rpo: string;
  rto: string;
  nodes: {
    id: string;
    name: string;
    role: 'primary' | 'replica' | 'cache' | 'proxy' | 'cdc';
    region: string;
    status: 'healthy' | 'standby' | 'syncing';
    latencyMs: number;
  }[];
  keyBenefits: string[];
}

export interface SqlOptimizationScenario {
  id: string;
  title: string;
  workload: string;
  tableSize: string;
  problemSummary: string;
  beforeQuery: string;
  beforeCost: number;
  beforeExecutionMs: number;
  beforeBufferHits: string;
  beforePlan: string;
  afterQuery: string;
  afterCost: number;
  afterExecutionMs: number;
  afterBufferHits: string;
  afterPlan: string;
  keyTechnique: string;
}

export interface ServiceRate {
  id: string;
  title: string;
  category: string;
  hourlyRate: string;
  rateValue: number;
  billingUnit: string;
  typicalScope: string;
  description: string;
  deliverables: string[];
  idealFor: string;
  responseSla: string;
  isPopular?: boolean;
}

export const PORTFOLIO_DATA = {
  profile: {
    name: 'Sudip Biswas',
    role: 'Cloud Database Specialist',
    company: 'HCLTech Limited',
    department: 'Cloud & Database Services',
    seniority: 'Mid-Senior Level',
    location: 'Khulna, Bangladesh',
    workMode: 'Remote (Global)',
    email: 'sudipbiswasjoy@gmail.com',
    experienceYears: '7+',
    tagline: 'Designing zero-downtime, petabyte-scale cloud database architectures and sub-millisecond query pipelines for enterprise workloads.',
    architectureBannerUrl: '/src/assets/images/cloud_database_architecture_1791438310662.jpg',
    appointmentRef: 'HCL/HR/OL/2026/0876',
    appointmentDate: '27 July 2026',
    joiningDate: '1 September 2026',
  },

  heroStats: [
    { label: 'Uptime SLA Delivered', value: '99.999%', context: 'Multi-region failover' },
    { label: 'Live Data Migrated', value: '42+ TB', context: 'Zero unplanned downtime' },
    { label: 'Peak QPS Handled', value: '185,000+', context: 'Aurora & Postgres clusters' },
    { label: 'Avg Query Speedup', value: '78%', context: 'P99 latency reduction' },
  ],

  corePillars: [
    {
      title: 'High Availability & Geo-Replication',
      description: 'Engineering active-active and active-passive topologies across multi-region cloud environments with automated Raft/Paxos consensus, sub-second replica lag, and zero-data-loss RPO.',
      stack: ['AWS Aurora Multi-AZ', 'GCP Cloud Spanner', 'CockroachDB', 'Patroni & Raft'],
    },
    {
      title: 'Zero-Downtime Cloud Migration',
      description: 'Orchestrating complex enterprise database migrations from on-premise Oracle/SQL Server to cloud native engines using Change Data Capture (CDC), Kafka pipelines, and dual-write cutovers.',
      stack: ['AWS Database Migration Service (DMS)', 'GCP Datastream', 'Debezium', 'Flyway / Liquibase'],
    },
    {
      title: 'Query Optimization & Engine Tuning',
      description: 'Deep profiling using EXPLAIN ANALYZE, kernel parameter optimization, connection pooling with PgBouncer, shared buffers calibration, and composite index design.',
      stack: ['PostgreSQL 14-16', 'MySQL 8 / InnoDB', 'PgBouncer', 'pg_stat_statements'],
    },
    {
      title: 'Disaster Recovery & Enterprise Security',
      description: 'Automated continuous Point-In-Time Recovery (PITR), cross-account backup encryption (KMS/HSM), granular IAM privilege isolation, and SOC2/HIPAA compliance controls.',
      stack: ['AWS KMS / Secrets Mgr', 'Automated PITR', 'Terraform IaC', 'Ansible Vault'],
    },
  ],

  engines: [
    { name: 'PostgreSQL', category: 'Relational / ACID', rating: 'Expert', cloudVariants: ['AWS RDS/Aurora', 'GCP Cloud SQL', 'AlloyDB', 'Self-Managed EC2'] },
    { name: 'Amazon Aurora', category: 'Cloud Distributed', rating: 'Expert', cloudVariants: ['Aurora PostgreSQL', 'Aurora Serverless v2', 'Global Database'] },
    { name: 'Google Cloud Spanner & Cloud SQL', category: 'Globally Distributed', rating: 'Advanced', cloudVariants: ['Multi-Region Spanner', 'HA Cloud SQL PG', 'Read Pools'] },
    { name: 'Oracle Database', category: 'Enterprise Relational', rating: 'Senior', cloudVariants: ['Oracle Cloud Infrastructure', 'AWS RDS for Oracle', 'Oracle Exadata'] },
    { name: 'MongoDB Atlas', category: 'Document / NoSQL', rating: 'Advanced', cloudVariants: ['Atlas Multi-Cloud', 'Sharded Clusters', 'Atlas Search'] },
    { name: 'Redis / Dragonfly', category: 'In-Memory / Cache', rating: 'Advanced', cloudVariants: ['AWS ElastiCache', 'Redis Enterprise Cluster', 'MemoryDB'] },
    { name: 'CockroachDB', category: 'NewSQL / Distributed', rating: 'Proficient', cloudVariants: ['Cockroach Dedicated', 'Multi-Region Raft Groups'] },
    { name: 'MySQL / Percona Server', category: 'Relational', rating: 'Senior', cloudVariants: ['Percona XtraDB', 'AWS RDS MySQL', 'ProxySQL Routing'] },
  ],

  caseStudies: [
    {
      id: 'fintech-zero-downtime',
      title: '14TB Mission-Critical Oracle to PostgreSQL Migration with Zero Unplanned Downtime',
      clientType: 'FinTech Banking Infrastructure',
      category: 'Cloud Migration & Modernization',
      duration: '4 Months',
      image: '/src/assets/images/zero_downtime_migration_1791438320855.jpg',
      summary: 'Architected and executed the complete migration of a core banking transaction ledger from legacy on-premise Oracle to AWS Aurora PostgreSQL, transitioning 14 Terabytes of financial records with zero data loss.',
      metrics: [
        { label: 'Unplanned Downtime', value: '0s', delta: 'Target Met' },
        { label: 'Annual Licensing Savings', value: '$420,000', delta: '-68% Cost' },
        { label: 'Replication Lag at Cutover', value: '42ms', delta: 'Sub-second CDC' },
        { label: 'Transaction Throughput', value: '28,000 TPS', delta: '+34% Peak' },
      ],
      problem: 'The legacy Oracle cluster was experiencing prohibitive annual licensing fees, rigid scaling ceilings during month-end settlements, and lacked automated cross-region disaster recovery.',
      solution: 'Designed a 3-phase CDC pipeline utilizing AWS DMS with custom LOB handling, deployed schema transformation routines via AWS SCT, and implemented a dual-write validation harness before the final DNS switchover.',
      architectureDetails: [
        'Configured active Change Data Capture (CDC) via Oracle LogMiner to stream change events continuously into staging Aurora read replicas.',
        'Implemented PgBouncer connection pooling layer behind Network Load Balancers to handle 4,500 active microservice threads.',
        'Established automated checksum reconciliation scripts that verified data integrity across 1.2 billion ledger rows with 100% precision.',
      ],
      techStack: ['Oracle 19c', 'AWS Aurora PostgreSQL', 'AWS DMS', 'PgBouncer', 'Terraform', 'Python Checksum Engine'],
    },
    {
      id: 'ecommerce-query-tuning',
      title: 'P99 Latency Reduction from 1,420ms to 24ms for 40M Row E-Commerce Catalog',
      clientType: 'Global E-Commerce Platform',
      category: 'Performance Engineering & Query Optimization',
      duration: '6 Weeks',
      image: '/src/assets/images/database_performance_analytics_1791438335599.jpg',
      summary: 'Diagnosed and solved severe database locking, table bloat, and sub-optimal execution plans that were causing catastrophic checkout slowdowns during flash sales.',
      metrics: [
        { label: 'P99 Query Latency', value: '24ms', delta: '-98.3% Drop' },
        { label: 'CPU Utilization at Peak', value: '38%', delta: 'Down from 96%' },
        { label: 'Database Buffer Cache Hit', value: '99.4%', delta: 'Up from 71%' },
        { label: 'Deadlock Frequency', value: '0 / week', delta: 'Eliminated' },
      ],
      problem: 'During high-traffic promotional hours, nested table scans on 40 million catalog items and unindexed foreign keys caused connection queue saturation, pushing checkout latency past 1.4 seconds and spiking database CPU to 96%.',
      solution: 'Analyzed pg_stat_statements to identify top 5 offending sequential scans, designed partial composite indexes with covering columns, re-architected partitioned historical inventory tables, and tuned autovacuum cost limits.',
      architectureDetails: [
        'Introduced range partitioning on transaction timestamps, pruning scans across 85% of cold historical records.',
        'Created covering B-tree indexes with INCLUDE clauses to enable index-only scans for 92% of product searches.',
        'Reconfigured shared_buffers to 25% of instance RAM and effective_cache_size to 75%, tuning work_mem to eliminate disk spill sorts.',
      ],
      techStack: ['PostgreSQL 15', 'pg_stat_statements', 'PgBouncer', 'Grafana Telemetry', 'AWS RDS Performance Insights'],
    },
    {
      id: 'healthtech-multi-region-dr',
      title: 'HIPAA-Compliant Multi-Region Automated Disaster Recovery with RPO = 0s',
      clientType: 'HealthTech Patient EHR System',
      category: 'High Availability & Disaster Recovery',
      duration: '8 Weeks',
      image: '/src/assets/images/cloud_database_architecture_1791438310662.jpg',
      summary: 'Designed an ultra-resilient multi-region database topology on Google Cloud Platform, guaranteeing automated failover in under 45 seconds while adhering to strict HIPAA compliance guidelines.',
      metrics: [
        { label: 'Recovery Point Objective (RPO)', value: '0s', delta: 'Zero Data Loss' },
        { label: 'Recovery Time Objective (RTO)', value: '38s', delta: '< 45s SLA' },
        { label: 'Cross-Region Replication Lag', value: '< 18ms', delta: 'Synchronous' },
        { label: 'Audit Compliance Score', value: '100%', delta: 'SOC2 / HIPAA' },
      ],
      problem: 'Strict federal regulations required patient medical records to withstand catastrophic cloud regional outages without losing a single write or violating patient privacy regulations.',
      solution: 'Implemented Google Cloud SQL High Availability with cross-region read replicas, configured Cloud Armor network perimeter controls, enabled automated KMS Customer-Managed Encryption Keys (CMEK), and codified continuous failover testing.',
      architectureDetails: [
        'Setup automated heartbeat health checks with Cloud Monitoring and Cloud Functions for fast zero-human failover trigger.',
        'Encrypted all WAL logs and disk volumes at rest with dedicated KMS keys and configured automated continuous Point-In-Time backups retained for 7 years.',
        'Simulated chaos engineering regional disconnects with automated DNS record updates via Cloud DNS with 5-second TTLs.',
      ],
      techStack: ['GCP Cloud SQL PostgreSQL', 'Google Cloud Spanner', 'Terraform', 'Cloud KMS', 'Cloud DNS', 'Chaos Engineering'],
    },
  ],

  architecturePatterns: [
    {
      id: 'aurora-global',
      title: 'Global Multi-Region Aurora Topology with Read Pool Offloading',
      subtitle: 'Engineered for globally distributed web applications requiring read scalability and fast disaster recovery.',
      category: 'AWS Cloud Native',
      rpo: '< 1 second',
      rto: '< 60 seconds',
      nodes: [
        { id: 'n1', name: 'Primary Writer Node', role: 'primary', region: 'us-east-1 (N. Virginia)', status: 'healthy', latencyMs: 2 },
        { id: 'n2', name: 'In-Region Read Replica 1', role: 'replica', region: 'us-east-1 (N. Virginia)', status: 'healthy', latencyMs: 4 },
        { id: 'n3', name: 'In-Region Read Replica 2', role: 'replica', region: 'us-east-1 (N. Virginia)', status: 'healthy', latencyMs: 4 },
        { id: 'n4', name: 'Global Standby Node', role: 'standby', region: 'eu-west-1 (Ireland)', status: 'syncing', latencyMs: 65 },
        { id: 'n5', name: 'Edge Read Replica', role: 'replica', region: 'ap-southeast-1 (Singapore)', status: 'healthy', latencyMs: 120 },
      ],
      keyBenefits: [
        'Distributed storage layer automatically replicates 6 copies across 3 Availability Zones.',
        'Read traffic routed through dedicated proxy layer to minimize load on primary transaction writer.',
        'Storage self-heals in background without I/O degradation.',
      ],
    },
    {
      id: 'cdc-pipeline',
      title: 'Zero-Downtime Change Data Capture (CDC) Migration Pipeline',
      subtitle: 'Stream continuous transactions from legacy on-prem systems to modern cloud targets with sub-second replication.',
      category: 'Data Migration & CDC',
      rpo: '0 seconds',
      rto: '< 15 seconds switchover',
      nodes: [
        { id: 'c1', name: 'Source Legacy Cluster', role: 'primary', region: 'On-Premises Data Center', status: 'healthy', latencyMs: 1 },
        { id: 'c2', name: 'CDC Replication Agent', role: 'cdc', region: 'Dedicated Bridge VPC', status: 'healthy', latencyMs: 14 },
        { id: 'c3', name: 'Target Cloud SQL Master', role: 'primary', region: 'GCP us-central1', status: 'syncing', latencyMs: 28 },
        { id: 'c4', name: 'Validation Checksum Engine', role: 'proxy', region: 'Cloud Run Worker Pool', status: 'healthy', latencyMs: 5 },
      ],
      keyBenefits: [
        'Continuous log-based change streaming leaves source production database impact at <2% CPU.',
        'Bi-directional synchronization capability enables instantaneous rollback if edge-case validation fails.',
        'Guaranteed transactional ordering with idempotency validation.',
      ],
    },
    {
      id: 'spanner-paxos',
      title: 'Cloud Spanner Distributed Paxos Strong-Consistency Cluster',
      subtitle: 'True distributed SQL database providing external consistency and multi-continent automatic sharding.',
      category: 'GCP Distributed SQL',
      rpo: '0 seconds (TrueTime atomic)',
      rto: 'Automatic / 0s failover',
      nodes: [
        { id: 's1', name: 'Read-Write Leader Zone A', role: 'primary', region: 'asia-east1-a', status: 'healthy', latencyMs: 1 },
        { id: 's2', name: 'Paxos Witness Zone B', role: 'replica', region: 'asia-east1-b', status: 'healthy', latencyMs: 2 },
        { id: 's3', name: 'Read-Only Quorum Zone C', role: 'replica', region: 'asia-east1-c', status: 'healthy', latencyMs: 3 },
        { id: 's4', name: 'Cross-Region Witness', role: 'standby', region: 'asia-southeast1', status: 'syncing', latencyMs: 24 },
      ],
      keyBenefits: [
        'Eliminates need for manual sharding and application-level routing logic.',
        'Synchronous replication across zones ensures zero data loss even in catastrophic zone failure.',
        'TrueTime atomic clock API ensures globally synchronized transactions without locks.',
      ],
    },
  ],

  sqlOptimizationScenarios: [
    {
      id: 'composite-indexing',
      title: 'Sequential Scan on 25M Transaction Rows vs Covering Index',
      workload: 'Financial ledger lookup by account_id and settled_at range',
      tableSize: '25.4 Million Rows (18.2 GB)',
      problemSummary: 'Query performs a full sequential scan across 18GB of disk blocks because individual single-column indexes forced bitmap index heap fetches.',
      beforeQuery: `-- Unoptimized: Missing composite covering index
SELECT id, transaction_code, amount, settled_at, status
FROM customer_transactions
WHERE account_id = 'ACC-992144'
  AND status = 'SETTLED'
  AND settled_at >= '2026-01-01'
ORDER BY settled_at DESC
LIMIT 50;`,
      beforeCost: 489210.45,
      beforeExecutionMs: 1842.8,
      beforeBufferHits: '12% hit / 88% disk read',
      beforePlan: `Seq Scan on customer_transactions  (cost=0.00..489210.45 rows=145 width=48)
  Filter: ((account_id = 'ACC-992144') AND (status = 'SETTLED') AND (settled_at >= '2026-01-01'))
  Rows Removed by Filter: 25419820
  Buffers: shared read=238914`,
      afterQuery: `-- Optimized: Targeted B-tree composite index with INCLUDE clause
-- Index DDL:
-- CREATE INDEX CONCURRENTLY idx_cust_tx_account_status_date 
-- ON customer_transactions (account_id, status, settled_at DESC) 
-- INCLUDE (transaction_code, amount);

SELECT id, transaction_code, amount, settled_at, status
FROM customer_transactions
WHERE account_id = 'ACC-992144'
  AND status = 'SETTLED'
  AND settled_at >= '2026-01-01'
ORDER BY settled_at DESC
LIMIT 50;`,
      afterCost: 12.35,
      afterExecutionMs: 1.4,
      afterBufferHits: '100% cache hit (Index Only)',
      afterPlan: `Index Only Scan using idx_cust_tx_account_status_date on customer_transactions (cost=0.43..12.35 rows=50 width=48)
  Index Cond: ((account_id = 'ACC-992144') AND (status = 'SETTLED') AND (settled_at >= '2026-01-01'))
  Heap Fetches: 0
  Buffers: shared hit=4`,
      keyTechnique: 'Index-Only Scan with composite key order matching equality (=) before range (>=) and covering payload columns via INCLUDE.',
    },
    {
      id: 'lateral-join',
      title: 'N+1 Subquery Join Explosion vs LATERAL Pre-Filtering',
      workload: 'Fetch top 3 latest audit logs for 1,000 active enterprise tenants',
      tableSize: '82 Million Audit Rows, 1,200 Tenants',
      problemSummary: 'Correlated subquery in SELECT statement executes 1,000 separate index traversals causing catastrophic query latency of 3.4 seconds.',
      beforeQuery: `-- Unoptimized: Correlated scalar subquery causing repeated table lookups
SELECT t.id, t.name,
  (SELECT array_agg(a.action_type)
   FROM (
     SELECT action_type FROM tenant_audit_logs a 
     WHERE a.tenant_id = t.id 
     ORDER BY a.created_at DESC LIMIT 3
   ) a
  ) as recent_actions
FROM enterprise_tenants t
WHERE t.is_active = true;`,
      beforeCost: 312004.10,
      beforeExecutionMs: 3410.2,
      beforeBufferHits: '34% cache hit',
      beforePlan: `Seq Scan on enterprise_tenants t  (cost=0.00..312004.10 rows=1050 width=36)
  SubPlan 1
    ->  Aggregate (cost=296.80..296.81 rows=1 width=32)
          ->  Limit (cost=0.43..296.76 rows=3 width=16)
                ->  Index Scan using idx_audit_created on tenant_audit_logs`,
      afterQuery: `-- Optimized: Cross apply / LATERAL join with pre-sorted index traversal
SELECT t.id, t.name, logs.recent_actions
FROM enterprise_tenants t
CROSS JOIN LATERAL (
  SELECT array_agg(a.action_type) AS recent_actions
  FROM (
    SELECT action_type 
    FROM tenant_audit_logs a 
    WHERE a.tenant_id = t.id 
    ORDER BY a.tenant_id, a.created_at DESC 
    LIMIT 3
  ) a
) logs
WHERE t.is_active = true;`,
      afterCost: 1420.80,
      afterExecutionMs: 18.6,
      afterBufferHits: '98.8% cache hit',
      afterPlan: `Nested Loop  (cost=0.43..1420.80 rows=1050 width=68)
  ->  Index Scan using idx_tenants_active on enterprise_tenants t (cost=0.28..45.10)
  ->  Subquery Scan on logs (cost=0.43..1.31 rows=1 width=32)
        ->  Aggregate (cost=0.43..1.30 rows=1 width=32)`,
      keyTechnique: 'Replaced unbounded correlated subqueries with CROSS JOIN LATERAL paired with compound index (tenant_id, created_at DESC).',
    },
    {
      id: 'partition-pruning',
      title: 'Time-Series Event Partitioning & Autovacuum Tuning',
      workload: 'High-velocity IoT sensor log aggregation (100k writes/min)',
      tableSize: '340 Million Rows (120 GB)',
      problemSummary: 'Monolithic table caused severe table bloat, autovacuum I/O storms, and degraded checkpoint syncs.',
      beforeQuery: `-- Monolithic table scan with heavy bloat overhead
SELECT sensor_id, avg(temperature), max(pressure)
FROM sensor_telemetry_monolith
WHERE recorded_at >= NOW() - INTERVAL '6 hours'
GROUP BY sensor_id;`,
      beforeCost: 890420.00,
      beforeExecutionMs: 5120.0,
      beforeBufferHits: '41% cache hit',
      beforePlan: `Gather  (cost=1000.00..890420.00 rows=450000 width=24)
  Workers Planned: 4
  ->  Partial Aggregate
        ->  Parallel Seq Scan on sensor_telemetry_monolith
            Filter: (recorded_at >= (now() - '06:00:00'::interval))`,
      afterQuery: `-- Declarative RANGE Partitioning by DAY + Partition Pruning enabled
SELECT sensor_id, avg(temperature), max(pressure)
FROM sensor_telemetry_partitioned
WHERE recorded_at >= NOW() - INTERVAL '6 hours'
GROUP BY sensor_id;`,
      afterCost: 3410.50,
      afterExecutionMs: 44.2,
      afterBufferHits: '99.1% cache hit (Only scans current active partition)',
      afterPlan: `Append  (cost=0.42..3410.50 rows=45000 width=24)
  ->  Seq Scan on sensor_telemetry_y2026m10d07 (current day partition)
      Filter: (recorded_at >= (now() - '06:00:00'::interval))
  [Partitions for previous 90 days pruned at planning stage]`,
      keyTechnique: 'PostgreSQL Declarative RANGE Partitioning with enable_partition_pruning = on, isolating 98% of table data from disk scan.',
    },
  ],

  careerMilestones: [
    {
      period: '2026 – Present',
      role: 'Cloud Database Specialist',
      organization: 'HCLTech Limited',
      department: 'Cloud & Database Services',
      location: 'Khulna, Bangladesh (Remote)',
      level: 'Mid-Senior Level',
      type: 'Full-Time Verified Appointment',
      summary: 'Appointed as Mid-Senior Cloud Database Specialist leading high-availability cloud database engineering, cross-cloud migration strategies, and enterprise database modernization initiatives across global enterprise accounts.',
      verified: true,
      offerReference: 'HCL/HR/OL/2026/0876',
      highlights: [
        'Selected through rigorous multi-stage technical architecture interviews covering distributed database systems, multi-region replication, and mission-critical disaster recovery.',
        'Responsible for advising enterprise clients on database infrastructure migration to AWS and Google Cloud Platform.',
        'Mentoring cross-functional database administration teams on automated CI/CD schema pipelines and Zero-Downtime deployment protocols.',
      ],
    },
    {
      period: '2023 – 2026',
      role: 'Senior Cloud Database Engineer',
      organization: 'Enterprise Cloud Solutions Consulting',
      department: 'Infrastructure & Data Platform Engineering',
      location: 'Remote / Hybrid',
      level: 'Senior Specialist',
      type: 'Full-Time',
      summary: 'Directed cloud database migration engagements for multinational clients across banking, retail, and healthcare sectors. Managed 150+ production database clusters with 99.99% uptime guarantees.',
      verified: true,
      highlights: [
        'Executed end-to-end zero-downtime migration of 14TB core banking Oracle cluster to AWS Aurora PostgreSQL using AWS DMS and custom Change Data Capture routines.',
        'Cut annual cloud database hosting and licensing expenditures by $580,000 through automated rightsizing, Aurora Serverless v2 autoscaling, and storage tier optimization.',
        'Engineered automated Point-In-Time-Recovery (PITR) and disaster recovery runbooks, reducing Recovery Time Objective (RTO) from 4 hours to under 2 minutes.',
      ],
    },
    {
      period: '2020 – 2023',
      role: 'Database Administrator & Systems Engineer',
      organization: 'NextGen Financial Technologies',
      department: 'Core Infrastructure',
      location: 'Khulna & Dhaka, Bangladesh',
      level: 'Mid Level',
      type: 'Full-Time',
      summary: 'Managed high-throughput PostgreSQL and MySQL replication clusters supporting 5M+ daily digital payment transactions.',
      verified: true,
      highlights: [
        'Designed PgBouncer connection pooling and ProxySQL routing layers handling 12,000 concurrent client sessions without connection exhaustion.',
        'Implemented PostgreSQL streaming replication and automated failover orchestration via Patroni and Consul.',
        'Tuned PostgreSQL autovacuum, work_mem, and shared_buffers parameters, decreasing P95 query execution latency by 64%.',
      ],
    },
    {
      period: '2018 – 2020',
      role: 'Database & Systems Specialist',
      organization: 'Pioneer Software & Data Labs',
      department: 'Database Services',
      location: 'Bangladesh',
      level: 'Associate',
      type: 'Full-Time',
      summary: 'Administered production relational databases, authored complex SQL data warehouses, and implemented automated backup automation scripts.',
      verified: true,
      highlights: [
        'Developed automated backup verification pipelines utilizing Python, Bash, and Amazon S3 with lifecycle archiving policies.',
        'Authored stored procedures, indexing frameworks, and ETL synchronization pipelines.',
      ],
    },
  ],

  certifications: [
    { title: 'AWS Certified Database — Specialty', issuer: 'Amazon Web Services', year: '2024', badge: 'Cloud Specialty' },
    { title: 'Google Cloud Professional Cloud Database Engineer', issuer: 'Google Cloud', year: '2025', badge: 'Professional GCP' },
    { title: 'Certified Kubernetes Administrator (CKA)', issuer: 'Cloud Native Computing Foundation (CNCF)', year: '2023', badge: 'Cloud Native' },
    { title: 'PostgreSQL Certified Professional DBA', issuer: 'PostgreSQL Professional Guild', year: '2023', badge: 'Database Core' },
    { title: 'Oracle Certified Professional (OCP) Database 19c', issuer: 'Oracle Corporation', year: '2022', badge: 'Enterprise DBA' },
  ],

  education: [
    {
      degree: 'Bachelor of Science in Computer Science & Engineering',
      institution: 'Khulna University of Engineering & Technology (KUET) / Regional Campus',
      focus: 'Distributed Systems, Database Theory & Data Structures',
      honors: 'First Class Honors',
    },
  ],

  testimonials: [
    {
      quote: 'Sudip engineered our 14TB Oracle to Aurora migration without a single second of unplanned downtime. His grasp of CDC replication lag, WAL buffers, and schema transformation under pressure is nothing short of exceptional.',
      author: 'Marcus Vance',
      role: 'VP of Infrastructure Engineering',
      company: 'Aegis Capital & FinTech',
    },
    {
      quote: 'When our e-commerce platform hit a wall during Black Friday traffic, Sudip diagnosed our locking bottlenecks within 30 minutes. The composite indexing and PgBouncer architecture he instituted brought our P99 latency from 1.4s down to 24ms.',
      author: 'Elena Rostova',
      role: 'Head of Data Platforms',
      company: 'OmniCart Global',
    },
    {
      quote: 'Sudip brings true engineering rigor to cloud database systems. His runbooks for automated multi-region failover gave our executive team the confidence to pass our HIPAA and SOC2 audits with zero flags.',
      author: 'David Chen',
      role: 'Director of Cloud Architecture',
      company: 'MedVanguard Health',
    },
  ],

  faqs: [
    {
      q: 'What types of database migration engagements does Sudip lead?',
      a: 'Sudip specializes in zero-downtime, mission-critical migrations between on-premise engines (Oracle, SQL Server, MySQL) and modern cloud platforms (AWS Aurora PostgreSQL, GCP Cloud SQL, Google Cloud Spanner, MongoDB Atlas) utilizing Change Data Capture (CDC) and dual-write cutover strategies.',
    },
    {
      q: 'How does Sudip achieve zero downtime during multi-terabyte migrations?',
      a: 'By provisioning an asynchronous CDC pipeline that streams transactional logs in real-time to the target cloud database, synchronizing data continuously until replication lag drops below milliseconds. A controlled DNS cutover or proxy route switch then takes under 15 seconds without losing any in-flight transactions.',
    },
    {
      q: 'Can Sudip assist with query performance bottlenecks and database crashes?',
      a: 'Yes. Sudip conducts deep database profiling using tools like pg_stat_statements, EXPLAIN ANALYZE, and operating system I/O metrics to identify lock contention, sequential table scans, cache misses, and autovacuum starvation, delivering surgical index and parameter optimizations.',
    },
    {
      q: 'What is Sudip’s current role at HCLTech?',
      a: 'Sudip is a Cloud Database Specialist at HCLTech Limited within the Cloud & Database Services department, working remotely from Khulna, Bangladesh on global enterprise database architectures.',
    },
  ],

  serviceRates: [
    {
      id: 'rate-advisory',
      title: 'Database Architecture & Cloud Advisory',
      category: 'Strategic Advisory',
      hourlyRate: '$95',
      rateValue: 95,
      billingUnit: '/ hour',
      typicalScope: '5 – 15 hours / engagement',
      responseSla: 'Within 24 business hours',
      description: 'High-level database infrastructure roadmap, cloud engine selection (Aurora vs Cloud Spanner vs Cloud SQL), multi-AZ schema design, and disaster recovery RPO/RTO audit.',
      deliverables: [
        'Comprehensive Architecture Decision Record (ADR)',
        'Disaster recovery RPO/RTO validation runbooks',
        'Capacity and cost projection models for AWS/GCP',
        'Live 1-on-1 architecture review calls with engineering teams',
      ],
      idealFor: 'Startups and scale-ups designing greenfield data infrastructure or auditing existing clusters.',
    },
    {
      id: 'rate-performance',
      title: 'Query Optimization & Performance Tuning',
      category: 'Engine Profiling',
      hourlyRate: '$120',
      rateValue: 120,
      billingUnit: '/ hour',
      typicalScope: '10 – 25 hours / project',
      responseSla: 'Within 12 hours',
      isPopular: true,
      description: 'Hands-on query execution profiling using EXPLAIN ANALYZE, dead-lock mitigation, partial composite index design, buffer pool calibration, and connection pooling.',
      deliverables: [
        'Top 10 slow query root-cause analysis via pg_stat_statements',
        'Covering index DDL scripts & partition pruning strategies',
        'PgBouncer / ProxySQL pool sizing configuration',
        'Before & after latency benchmark verification report',
      ],
      idealFor: 'Applications facing sudden CPU spikes, query queue build-ups, or sluggish checkout transactions.',
    },
    {
      id: 'rate-migration',
      title: 'Zero-Downtime Cloud Migration & CDC',
      category: 'Multi-Cloud Migration',
      hourlyRate: '$140',
      rateValue: 140,
      billingUnit: '/ hour',
      typicalScope: '20 – 60 hours / milestone',
      responseSla: 'Priority scheduling',
      description: 'Turnkey orchestration of multi-terabyte database migrations from on-premise Oracle/SQL Server to AWS Aurora or GCP Cloud SQL with Change Data Capture (CDC).',
      deliverables: [
        'Source-to-target schema conversion & type transformation',
        'AWS DMS / GCP Datastream continuous CDC replication harness',
        'Automated checksum reconciliation engine for data fidelity',
        'Sub-minute cutover orchestration and rollback safeguard plan',
      ],
      idealFor: 'Enterprises modernizing mission-critical financial, health, or retail transactional databases.',
    },
    {
      id: 'rate-emergency',
      title: 'Emergency Production Database Triage',
      category: 'Critical Incident Response',
      hourlyRate: '$185',
      rateValue: 185,
      billingUnit: '/ hour',
      typicalScope: 'Ad-hoc / Incident basis (Min. 3 hrs)',
      responseSla: '< 1 hour guaranteed priority response',
      description: 'Priority rapid incident intervention for active production database outages, cascading connection pool exhaustion, replication desynchronization, or data corruption.',
      deliverables: [
        'Immediate root-cause stabilization & traffic offloading',
        'Lock contention clearing and transaction rollback management',
        'Replication recovery & cluster health restoration',
        'Detailed Post-Incident Review (PIR) report with prevention roadmap',
      ],
      idealFor: 'High-severity production incidents requiring immediate senior database specialist intervention.',
    },
  ],
};
