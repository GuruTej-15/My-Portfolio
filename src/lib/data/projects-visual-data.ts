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
        badge: 'FLAGSHIP DASHBOARD',
        caption:
          'The primary authenticated workspace interface displaying active user session state, key performance metrics (total entries, wins, runner-up, upcoming deadlines, overdue tasks), monthly participation activity, and competition outcome breakdowns.',
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
          'Real-time analytics engine calculating multi-dimensional programmer capability across documentation speed, consistency, learning rate, tech stack breadth, and contest win rate over customizable observation windows.',
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
          'System oversight dashboard tracking aggregate blood units, active donor registrations, pending request volume, 8-group stock distribution bars, partner hospitals, and emergency queue alerts with donor privacy protection.',
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
          'Granular inventory table organizing blood units by batch number, group, collection timestamp, expiration date, and availability status based on FEFO (First-Expired, First-Out) MinHeap ordering.',
        imageSrc: '/images/projects/smart-blood-bank/02-inventory.webp',
        width: 1918,
        height: 996,
        category: 'feature',
      },
      {
        id: 'blood-bank-emergency',
        title: 'Binary Heap Emergency Priority Queue & Triage',
        badge: 'PRIORITY QUEUE',
        caption:
          'Real-time emergency triage interface powered by an in-memory Binary Heap (O(log n) operations), ordering incoming critical requests by clinical severity and submission timestamp for rapid fulfillment.',
        imageSrc: '/images/projects/smart-blood-bank/03-emergency-priority-queue.webp',
        width: 1918,
        height: 996,
        category: 'feature',
      },
      {
        id: 'blood-bank-crisis',
        title: 'Blood Crisis Shortage Predictor & Proactive Alerts',
        badge: 'SHORTAGE FORECASTING',
        caption:
          'Predictive shortage monitor analyzing historical 8-week fulfillment rates against current inventory to forecast depletion dates and alert staff before critical blood groups deplete.',
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
        title: 'Service Dashboard & CI Pipeline Health Overview',
        badge: 'OBSERVABILITY OVERLAY',
        caption:
          'Unified governance control plane displaying Payment Service delivery health, connected repositories, active team members, recent VCS commits, and CI/CD workflow status (6 passing builds across Jenkins and GitHub Actions).',
        imageSrc: '/images/projects/unified-devops/01-payment-service-dashboard.webp',
        width: 1280,
        height: 1694,
        category: 'primary',
      },
      {
        id: 'devops-healthy-state',
        title: 'End-to-End Delivery Flow & Workload Observation',
        badge: 'HEALTHY PIPELINE',
        caption:
          'Complete release delivery state tracking an issue through commit, CI build, Trivy security vulnerability gate (0 critical findings), policy check, and live Kind cluster Kubernetes deployment (coredns, 2/2 ready, synced).',
        imageSrc: '/images/projects/unified-devops/02-cloud-native-delivery-healthy-state.webp',
        width: 1440,
        height: 1808,
        category: 'feature',
      },
      {
        id: 'devops-drift-failure',
        title: 'Deployment Drift & Infrastructure Failure State',
        badge: 'DRIFT & FAILURE DETECTION',
        caption:
          'Non-destructive observability alerting on cluster drift: identifies workload degradation (1 of 3 replicas unavailable, replica count mismatch: desired 3 vs ready 2, pod spec image divergence) and flags pipeline failure.',
        imageSrc: '/images/projects/unified-devops/03-deployment-drift-failure-state.webp',
        width: 1440,
        height: 1876,
        category: 'diagnostic',
      },
    ],
  },
};
