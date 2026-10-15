export interface ProjectScreenshot {
  id: string;
  title: string;
  badge: string;
  caption: string;
  imageSrc: string;
  width: number;
  height: number;
  category: 'primary' | 'feature' | 'diagnostic';
}

export interface ProjectVisualConfig {
  slug: string;
  systemName: string;
  windowTitle: string;
  environmentBadge: string;
  screenshots: ProjectScreenshot[];
}

export const projectsVisualData: Record<string, ProjectVisualConfig> = {
  recordhub: {
    slug: 'recordhub',
    systemName: 'RecordHub Competition Workspace',
    windowTitle: 'recordhub.vercel.app/dashboard',
    environmentBadge: 'VERIFIED PRODUCTION DEPLOYMENT',
    screenshots: [
      {
        id: 'recordhub-dashboard',
        title: 'Authenticated Workspace & Contest Metric Cards',
        badge: 'WORKSPACE DASHBOARD',
        caption:
          'The primary authenticated workspace interface displaying dashboard metric cards (total entries, wins, runner-up, upcoming deadlines, overdue tasks), monthly participation timeline, and competition outcome breakdowns in initialized state.',
        imageSrc: '/images/projects/recordhub/01-dashboard.webp',
        width: 1918,
        height: 996,
        category: 'primary',
      },
      {
        id: 'recordhub-add-form',
        title: 'Structured Competition Intake & Verification Workflow',
        badge: 'INTAKE WORKFLOW',
        caption:
          'The competition entry modal capturing event title, organizer, role, outcome classification, domain category, deadline picker, team size, and verification URLs (certificate and GitHub repository) powering the portfolio visibility engine.',
        imageSrc: '/images/projects/recordhub/02-add-competition-form.webp',
        width: 1918,
        height: 993,
        category: 'feature',
      },
      {
        id: 'recordhub-analytics',
        title: 'Competition Intelligence & 5-Dimension Performance Model',
        badge: 'INTELLIGENCE PIPELINE',
        caption:
          'Analytics engine framework modeling multi-dimensional programmer capability across documentation speed, consistency, learning rate, tech stack breadth, and contest win rate evaluated from competition entries.',
        imageSrc: '/images/projects/recordhub/03-analytics-dashboard.webp',
        width: 1918,
        height: 996,
        category: 'feature',
      },
    ],
  },

  'os-locking-simulator': {
    slug: 'os-locking-simulator',
    systemName: 'ConcurrencyOS Simulator Engine',
    windowTitle: 'simulator/os-concurrency-engine',
    environmentBadge: 'LOCAL VERIFIED ENGINE',
    screenshots: [
      {
        id: 'os-overview',
        title: 'Interactive Concurrency Workspace & Clean System State',
        badge: 'SIMULATOR RUNTIME',
        caption:
          'Interactive concurrency workspace displaying four shared file resources (config.sys, user_data.db, network.log, security.vault), four distinct process threads in initial idle state, and live kernel logs verifying initialization.',
        imageSrc: '/images/projects/os-locking-simulator/01-simulator-overview.webp',
        width: 1918,
        height: 993,
        category: 'primary',
      },
      {
        id: 'os-active-locks',
        title: 'Active Lock Contention, Blocked Threads & Wait Queue',
        badge: 'LOCK CONTENTION',
        caption:
          'High-contention state demonstrating POSIX file locking primitives: Process P205 holds an EXCLUSIVE LOCK on config.sys, while Process P101 is blocked and placed into the strict FIFO wait queue, logged by the kernel event stream.',
        imageSrc: '/images/projects/os-locking-simulator/02-active-locks-and-wait-queue.webp',
        width: 1918,
        height: 999,
        category: 'feature',
      },
    ],
  },

  'smart-blood-bank': {
    slug: 'smart-blood-bank',
    systemName: 'Emergency Blood Bank Command Center',
    windowTitle: 'smart-blood-bank-management.vercel.app/admin',
    environmentBadge: 'VERIFIED PRODUCTION DEPLOYMENT',
    screenshots: [
      {
        id: 'blood-bank-admin',
        title: 'Administrative Command Center & Oversight Dashboard',
        badge: 'COMMAND CENTER',
        caption:
          'System oversight console tracking aggregate blood units, active donor registrations, pending request volume, 8-group stock distribution bars, partner hospitals, and emergency queue alerts with verified donor privacy redaction.',
        imageSrc: '/images/projects/smart-blood-bank/01-admin-dashboard.webp',
        width: 1918,
        height: 1004,
        category: 'primary',
      },
      {
        id: 'blood-bank-inventory',
        title: 'Blood Inventory Batches & Expiration Management',
        badge: 'BATCH FEFO TRACKING',
        caption:
          'Granular inventory table organizing blood units by batch number, group, collection timestamp, expiration date, and availability status structured for FEFO (First-Expired, First-Out) tracking.',
        imageSrc: '/images/projects/smart-blood-bank/02-inventory.webp',
        width: 1918,
        height: 996,
        category: 'feature',
      },
      {
        id: 'blood-bank-emergency',
        title: 'Priority Queue Emergency Request Dispatch Simulation',
        badge: 'DISPATCH SIMULATION',
        caption:
          'Emergency triage interface demonstrating priority queue request ordering by clinical urgency tier and submission timestamp for rapid fulfillment simulation.',
        imageSrc: '/images/projects/smart-blood-bank/03-emergency-priority-queue.webp',
        width: 1918,
        height: 996,
        category: 'feature',
      },
      {
        id: 'blood-bank-crisis',
        title: 'Blood Shortage Monitoring & Stock Depletion Alerting',
        badge: 'SHORTAGE MONITOR',
        caption:
          'Shortage monitoring view projecting consumption trends against current stock levels to alert administrators to potential blood group inventory depletion.',
        imageSrc: '/images/projects/smart-blood-bank/04-crisis-predictor.webp',
        width: 1918,
        height: 995,
        category: 'feature',
      },
    ],
  },

  'flashcard-engine': {
    slug: 'flashcard-engine',
    systemName: 'QuickLearn Interactive Flashcard Engine',
    windowTitle: 'satgurunotes.netlify.app',
    environmentBadge: 'VERIFIED PRODUCTION DEPLOYMENT',
    screenshots: [
      {
        id: 'flashcard-question',
        title: 'Interactive Quiz Engine & Session Question State',
        badge: 'ACTIVE RECALL',
        caption:
          'PWA card interface featuring session filters, question categorization, 4 selectable multiple-choice options, progress counter (1/881), and session controls (Answer, Prev, Next, Shuffle).',
        imageSrc: '/images/projects/flashcard-engine/01-question-state.webp',
        width: 1918,
        height: 993,
        category: 'primary',
      },
      {
        id: 'flashcard-answer',
        title: 'Answer Evaluation & Detailed Explanation Display',
        badge: 'IMMEDIATE FEEDBACK',
        caption:
          'Immediate correctness evaluation displaying correct answer highlighted in green, user misconception flagged in red, and in-depth conceptual explanation for reinforced recall.',
        imageSrc: '/images/projects/flashcard-engine/02-answer-revealed-state.webp',
        width: 1918,
        height: 1001,
        category: 'feature',
      },
    ],
  },

  'unified-devops': {
    slug: 'unified-devops',
    systemName: 'Unified DevOps Governance Platform',
    windowTitle: 'devops-overlay.internal/cluster-telemetry',
    environmentBadge: 'LOCAL VERIFIED OVERLAY',
    screenshots: [
      {
        id: 'devops-dashboard',
        title: 'Payment Service Delivery Overview & Metric Telemetry',
        badge: 'SERVICE DASHBOARD',
        caption:
          'Unified DevOps control plane interface for Payment Service, tracking repository connections, team contributors, delivery lifecycle status, and recent automated pipeline audit trails.',
        imageSrc: '/images/projects/unified-devops/01-payment-service-dashboard-landscape.webp',
        width: 1600,
        height: 900,
        category: 'primary',
      },
      {
        id: 'devops-ci-health',
        title: 'Multi-Branch CI Pipeline Run Status & Verification',
        badge: 'CI PIPELINE RUNS',
        caption:
          'Automated CI workflow execution summary reflecting passing build states across GitHub Actions and Jenkins runners for feature branches and integration releases.',
        imageSrc: '/images/projects/unified-devops/02-ci-pipeline-health-landscape.webp',
        width: 1600,
        height: 900,
        category: 'feature',
      },
      {
        id: 'devops-delivery-overview',
        title: 'Container Security Scan & Delivery Progression Gate',
        badge: 'SECURITY & DELIVERY',
        caption:
          'Cloud-native delivery interface displaying automated container image vulnerability scanning with Trivy (0 findings across critical and high categories), policy gate compliance, and end-to-end pipeline progression.',
        imageSrc: '/images/projects/unified-devops/03-cloud-native-delivery-overview-landscape.webp',
        width: 1600,
        height: 900,
        category: 'feature',
      },
      {
        id: 'devops-drift-failure',
        title: 'Workload Drift Detection & Container Failure Observation',
        badge: 'DRIFT DETECTION',
        caption:
          'Non-destructive observability state capturing deployment drift: displays degraded workload status (2/3 ready replicas) and system alert when live container configuration diverges from declared desired state.',
        imageSrc: '/images/projects/unified-devops/04-deployment-drift-failure-state-landscape.webp',
        width: 1600,
        height: 900,
        category: 'diagnostic',
      },
    ],
  },
};
