import { Project } from '../types';

export const projectsData: Project[] = [
  {
    order: 1,
    slug: 'recordhub',
    title: 'RecordHub',
    tagline: 'Competition tracking and verified developer portfolio platform.',
    category: 'Full-Stack',
    status: 'LIVE',
    featured: true,
    plainEnglishSummary: 'A centralized platform for developers to aggregate competitive programming achievements across platforms, track skill trajectories, and showcase verified portfolios to recruiters.',
    inSimpleWords: 'RecordHub helps competitive programmers organize their contest submissions across multiple platforms and turn that activity into an exportable, recruiter-verifiable portfolio with real-time rating analytics.',
    problem: 'Competitive programmers actively solve problems across fragmented platforms (LeetCode, Codeforces, HackerRank). Documenting contest outcomes, solutions, and rating trajectories in a verifiable, recruiter-ready format is tedious, and sharing multiple disjoint profile links creates unnecessary evaluation friction.',
    whyItMatters: 'Technical recruiters and hiring teams need immediate, trustworthy proof of a candidate’s algorithmic consistency and problem-solving trajectory, rather than unverified claims on static PDF resumes.',
    whatIBuilt: 'Architected an end-to-end full-stack web application with Next.js 16 App Router, React 19, MongoDB, and Express API routes. Features multi-platform contest tracking, rating trajectory charts via Recharts, and dual-layer session security with automated inactivity protection.',
    howItWorks: 'Users log in via credential auth or Google OAuth 2.0. The frontend tracks active user events while communicating with Next.js route handlers. Contest entries are stored in indexed MongoDB collections, where aggregation pipelines compute rating history and submission velocities displayed via Recharts.',
    architectureDetails: [
      'Next.js 16 App Router frontend paired with modular Next.js API route handlers',
      'Dual-layer authentication: JWT in httpOnly SameSite=Strict cookies, bcrypt password hashing, and Google OAuth 2.0 SSO',
      'Session management: cryptographically generated session IDs, 25-minute client inactivity toast warnings, and 30-minute strict server expiration',
      'Nodemailer 6-digit OTP verification workflow for secure credential recovery',
      'Mongoose indexed schemas and compound aggregation pipelines for contest lifecycle tracking',
      'Recharts analytical visualization for rating trajectory and submission velocity',
    ],
    keyContributions: [
      'Engineered authentication security model storing JWT tokens in httpOnly cookies, completely eliminating token exposure to client-side JavaScript',
      'Architected frontend-backend session reconciliation with real-time inactivity listeners and auto-redirect safeguards',
      'Optimized responsive data aggregation pipelines, reducing user profile retrieval latency by 35%',
      'Designed responsive UI/UX supporting 10+ competition metrics, detailed problem documentation, and exportable verified portfolios',
    ],
    technicalDecisions: [
      {
        title: 'httpOnly Cookies vs LocalStorage for Session JWTs',
        rationale: 'Storing auth tokens in localStorage exposes credentials to cross-site scripting (XSS). httpOnly cookies ensure the token is inaccessible to client JavaScript.',
        outcome: 'Completely eliminated client token leakage and passed security audit standards with SameSite=Strict CSRF protection.',
      },
      {
        title: 'Single-Stage Mongoose Aggregation vs Multi-Query Joins',
        rationale: 'Fetching user stats, contest counts, and historical rating records through sequential find() queries caused waterfall latency spikes.',
        outcome: 'Compound-indexed aggregation pipelines cut profile load latency by 35% on high-volume contest histories.',
      },
      {
        title: 'Proactive 25-Minute Inactivity Warning System',
        rationale: 'Long-running problem-solving sessions risked sudden unannounced token expiration while users typed contest documentation.',
        outcome: 'Client-side event listener dispatches a toast warning at 25 minutes with a 1-click session extension before the 30-minute hard cutoff.',
      },
    ],
    challengesAndLearnings: [
      'Reconciling asynchronous Google OAuth provider callbacks alongside local credential accounts without duplicate user records required unified database identity matching on normalized email addresses.',
      'High-velocity contest rating graphs required memoized data preprocessing to prevent re-rendering stutters during chart tooltip hovers in Recharts.',
    ],
    metrics: [
      { label: 'Profile Latency', value: '35% Faster', context: 'Faster profile loading achieved through responsive data aggregation pipeline work' },
      { label: 'Tracked Metrics', value: '10+', context: 'Multi-platform competition metrics and rating trajectory indicators' },
      { label: 'Session Security', value: 'httpOnly', context: 'XSS-immune JWT authentication in secure cookies with 30m cutoff' },
    ],
    technologies: ['Next.js 16', 'React 19', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'Tailwind CSS', 'Recharts', 'Google OAuth 2.0', 'Nodemailer'],
    stackBreakdown: [
      { domain: 'Frontend Core', tools: ['Next.js 16 (App Router)', 'React 19', 'Tailwind CSS v4', 'Recharts', 'React Hot Toast'] },
      { domain: 'Backend & APIs', tools: ['Node.js', 'Next.js Route Handlers', 'Nodemailer OTP', 'bcryptjs'] },
      { domain: 'Database & Auth', tools: ['MongoDB', 'Mongoose Aggregations', 'JWT in httpOnly Cookies', 'Google OAuth 2.0'] },
      { domain: 'Deployment', tools: ['Vercel Serverless', 'Cloudinary CDN'] },
    ],
    technicalDeepDive: [
      {
        title: 'Session Management Architecture',
        subtitle: 'Cryptographic session validation and client inactivity monitors',
        description: 'To protect users while recording contest achievements on shared university workstations, RecordHub implements a dual-layer session lifecycle.',
        keyPoints: [
          'Unique cryptographic sessionId stored in database alongside lastActivityAt timestamp',
          'Client useSessionManager hook listens to mouse clicks, keypresses, and touch events',
          'Inactivity warning toast triggered at 25 minutes with Stay Logged In button to reset timer',
          'API routes validate sessionId against database and reject requests exceeding 30 minutes with HTTP 401',
        ],
        codeOrStructureSnippet: `// Session validation middleware invariant
const isSessionExpired = (lastActivityAt) => {
  const INACTIVITY_LIMIT_MS = 30 * 60 * 1000; // 30 minutes
  return Date.now() - new Date(lastActivityAt).getTime() > INACTIVITY_LIMIT_MS;
};`,
      },
      {
        title: 'Aggregated Profile Analytics Engine',
        subtitle: 'Compound indexes and pipeline projections',
        description: 'Retrieving an entire user contest portfolio with rating history, win ratios, and tag distributions in a single round-trip.',
        keyPoints: [
          'Compound indexes on { userId: 1, contestDate: -1 } eliminate in-memory sorting',
          '$facet pipeline executes rating trajectory, badge counters, and platform breakdown in parallel',
          'Achieved 35% faster profile loading compared to sequential document queries',
        ],
      },
    ],
    liveUrl: 'https://recordhub.vercel.app/',
    githubUrl: 'https://github.com/GuruTej-15/recordhub',
    heroImage: '/images/projects/recordhub.png',
  },
  {
    order: 2,
    slug: 'os-locking-simulator',
    title: 'OS File Locking & Concurrency Simulator',
    tagline: 'Interactive simulator for file locking, concurrency and deadlock recovery.',
    category: 'Systems & Concurrency',
    status: 'VERIFIED',
    featured: true,
    plainEnglishSummary: 'An educational and analytical systems simulator that demonstrates how operating systems manage concurrent file access, prevent race conditions, and resolve deadlocks automatically.',
    inSimpleWords: 'Programs can get stuck waiting for resources held by each other. This simulator models concurrent process locking, visualizes how operating systems detect circular wait states on a graph, and preempts victims to break deadlocks.',
    problem: 'Operating system concurrency, process synchronization, and deadlock recovery are abstract concepts that are notoriously difficult to visualize, verify, and stress-test without dedicated kernel instrumentation.',
    whyItMatters: 'Deadlocks and starvation bugs in multithreaded systems lead to frozen servers, unresponsive kernels, and catastrophic data loss if locking order and wait queues are not mathematically sound.',
    whatIBuilt: 'Engineered a dual-engine concurrency simulator in ANSI C (POSIX concepts) and modern ES6 JavaScript. Simulates Readers-Writer lock semantics with strict FIFO queue scheduling, O(V + E) DFS graph cycle detection, and automated priority victim selection.',
    howItWorks: 'Processes with configurable priorities (High, Medium, Low) request shared (Read) or exclusive (Write) file locks. The lock manager queues contenders in FIFO order. A background engine builds a directed Resource Allocation Graph (RAG) and traverses it via DFS. If a cycle is detected, priority victim selection aborts the lowest-priority process to resolve the circular wait.',
    architectureDetails: [
      'Dual-engine implementation: Core lock semantics in ANSI C with an interactive browser-based visualization engine in ES6 JavaScript',
      'Readers-Writer lock synchronization model: multiple readers coexisting, exclusive single writer blocking all contenders',
      'Strict FIFO queue scheduling preventing thread and writer starvation',
      'O(V + E) deadlock detection algorithm using DFS-based cycle discovery in Resource Allocation Graphs',
      'Automated priority victim selection heuristics preempting lowest-priority processes to break circular waits',
      'Automated stress-testing suite capable of executing 100+ concurrent operations with live kernel-style logging',
    ],
    keyContributions: [
      'Engineered the ANSI C POSIX synchronization simulation with custom File, Process, and WaitQueue structs',
      'Implemented O(V + E) DFS cycle detection on directed wait-for graphs with recursion stack tracking',
      'Devised priority victim selection heuristics reducing simulated transaction abort rates by 40% under heavy concurrency',
      'Built interactive browser inspector tracking real-time process states (IDLE, HOLDING_SHARED, HOLDING_EXCLUSIVE, BLOCKED)',
    ],
    technicalDecisions: [
      {
        title: 'ANSI C Systems Engine + ES6 Browser Visualizer',
        rationale: 'C provides authentic low-level memory structs and POSIX semantics, while a browser UI enables interactive educational inspection of graph states.',
        outcome: 'Delivered an accurate bare-metal simulation backed by an intuitive zero-dependency web interface.',
      },
      {
        title: 'FIFO Scheduling with Shared-Lock Blocking',
        rationale: 'Allowing incoming read requests to acquire shared locks when a writer is queued causes writer starvation.',
        outcome: 'Enforced FIFO priority where incoming read requests queue behind pending exclusive locks, guaranteeing bounded wait times.',
      },
      {
        title: 'Priority-Based Victim Preemption vs Wholesale Abort',
        rationale: 'Aborting all processes involved in a circular wait discards valid work unnecessarily.',
        outcome: 'Preempting strictly the lowest-priority process reduced simulated transaction abort rates by 40% under stress contention.',
      },
    ],
    challengesAndLearnings: [
      'Detecting cycles in real-time without locking the browser UI thread required isolating the DFS cycle check into event-driven simulation ticks.',
      'Balancing read concurrency throughput against write fairness required fine-tuning the FIFO promotion threshold during high-velocity lock churn.',
    ],
    metrics: [
      { label: 'Abort Rate Reduction', value: '40% Lower', context: 'Priority victim selection heuristics reduced abort rates under heavy concurrency' },
      { label: 'Cycle Detection', value: 'O(V + E)', context: 'DFS cycle discovery on directed Resource Allocation Graphs' },
      { label: 'Stress Capacity', value: '100+', context: 'Simultaneous automated concurrent lock/release operations' },
    ],
    technologies: ['C (ANSI)', 'JavaScript (ES6+)', 'Graph Algorithms (DFS)', 'Operating Systems Synchronization', 'POSIX Semantics', 'HTML5/CSS3'],
    stackBreakdown: [
      { domain: 'Core Systems Engine', tools: ['ANSI C', 'POSIX Lock Semantics', 'Resource Allocation Graphs (RAG)', 'DFS Cycle Traversal'] },
      { domain: 'Web Simulator UI', tools: ['Vanilla JavaScript (ES6+)', 'HTML5 Canvas/DOM', 'CSS3 Transitions', 'Makefile'] },
      { domain: 'Concepts & Algorithmic Models', tools: ['Readers-Writer Synchronization', 'FIFO Wait Queues', 'Priority Victim Selection', 'Deadlock Recovery'] },
    ],
    technicalDeepDive: [
      {
        title: 'Resource Allocation Graph & DFS Cycle Traversal',
        subtitle: 'Directed graph modeling of process-resource wait states',
        description: 'Deadlock detection is framed as cycle discovery in a directed bipartite graph where processes request resources and resources are allocated to processes.',
        keyPoints: [
          'Nodes represent active processes (P) and files (R); directed edges represent allocation (R -> P) or request (P -> R)',
          'Depth-First Search (DFS) maintains visited and recursionStack arrays across all graph vertices',
          'Cycles indicate circular wait: Process A holds File 1 waiting for File 2, while Process B holds File 2 waiting for File 1',
        ],
        codeOrStructureSnippet: `// Cycle detection on wait-for graph
bool isCyclicUtil(int v, bool visited[], bool recStack[]) {
    visited[v] = true;
    recStack[v] = true;
    for (int i = 0; i < adjCount[v]; i++) {
        int neighbor = adj[v][i];
        if (!visited[neighbor] && isCyclicUtil(neighbor, visited, recStack))
            return true;
        else if (recStack[neighbor])
            return true; // Cycle detected
    }
    recStack[v] = false;
    return false;
}`,
      },
      {
        title: 'Readers-Writer Synchronization Primitives',
        subtitle: 'Shared concurrency vs exclusive isolation',
        description: 'The simulation implements strict read-write semantics avoiding write-starvation.',
        keyPoints: [
          'LOCK_SHARED: Multiple reading processes hold the file simultaneously provided no writer is active or queued',
          'LOCK_EXCLUSIVE: Single process holds exclusive read/write lock; all subsequent contenders enter FIFO wait queue',
          'On lock release, the head of the FIFO queue is evaluated and granted access automatically',
        ],
      },
    ],
    githubUrl: 'https://github.com/GuruTej-15/os-file-locking-simulator',
    heroImage: '/images/projects/os-locking.png',
  },
  {
    order: 3,
    slug: 'smart-blood-bank',
    title: 'Smart Blood Bank Management System',
    tagline: 'Blood inventory and emergency request management system.',
    category: 'Full-Stack',
    status: 'LIVE',
    featured: true,
    plainEnglishSummary: 'A full-stack healthcare workflow system that optimizes blood donation records, inventory across 8 blood groups, and prioritizes emergency patient fulfillment using computer science data structures.',
    inSimpleWords: 'In healthcare emergencies, every second counts. This system manages blood donations across 8 blood types and automatically prioritizes life-critical requests using computer science priority queues.',
    problem: 'Hospital blood banks frequently struggle with manual stock tracking, donor record delays, and non-prioritized emergency requests during critical supply shortages. Unorganized records risk administering expiring units or delaying emergency transfusions.',
    whyItMatters: 'Blood units have strict shelf lives (35–42 days for whole blood). In emergency scenarios, matching ABO/Rh compatibility and triaging critical patient needs algorithmically can literally mean the difference between life and death.',
    whatIBuilt: 'Developed a robust full-stack healthcare workflow application during intensive software engineering data structures training at Lovely Professional University. Implemented custom in-memory data structures (Binary Heap Priority Queues, MinHeaps, and Hash Tables) and secure role-based access control.',
    howItWorks: 'Donors register and receive unique QR codes for tracking donation history. Blood inventory is categorized across 8 groups (A+, A-, B+, B-, AB+, AB-, O+, O-). Emergency requests are enqueued into a custom binary heap Priority Queue sorted by medical urgency (critical, high, normal) with FIFO tie-breaking, dispatching units in O(log n) time.',
    architectureDetails: [
      'Full-stack MERN architecture (React frontend + Node.js/Express.js backend + MongoDB database)',
      'Custom in-memory Priority Queue backed by a binary heap for emergency patient triage in O(log n) time',
      'MinHeap implementation prioritizing units by earliest expiry date (FEFO - First Expired, First Out)',
      'O(1) hash table lookup for donor-recipient ABO/Rh compatibility matching with universal donor logic',
      'JWT-based Role-Based Access Control (RBAC) securing administrator, donor, and hospital staff tiers',
      'Automated donor QR code generation via node-qrcode and real-time inventory threshold alerts',
    ],
    keyContributions: [
      'Integrated binary heap Priority Queue algorithm reducing emergency request triage complexity to O(log n)',
      'Constructed the comprehensive ABO/Rh compatibility matrix with O(1) hash table lookups',
      'Designed authenticated REST API endpoints supporting donor registration, stock updates, and emergency fulfillment',
      'Deployed both frontend and backend to production on Vercel infrastructure',
    ],
    technicalDecisions: [
      {
        title: 'Binary Heap Priority Queue vs Array Sorting for Triage',
        rationale: 'Re-sorting request arrays on every incoming emergency request incurs O(n log n) overhead during critical medical surges.',
        outcome: 'Binary heap guarantees O(log n) insertion and O(log n) extraction of highest-urgency patients, maintaining stable throughput.',
      },
      {
        title: 'FEFO Inventory Dispatch via MinHeap',
        rationale: 'Dispensing blood units arbitrarily leads to older stock expiring on shelves.',
        outcome: 'MinHeap organized by expiration date ensures units closest to expiration are allocated first for compatible non-critical procedures.',
      },
      {
        title: 'Decoupled Role-Based Access Control (RBAC)',
        rationale: 'Hospital staff need emergency request capabilities, administrators need inventory modification rights, and donors need privacy.',
        outcome: 'Express middleware validates cryptographically signed JWT claims, enforcing strict boundary isolation across 10+ REST endpoints.',
      },
    ],
    challengesAndLearnings: [
      'Accurately modeling Rh positive and negative universal donor/recipient cross-matching rules in algorithmic lookup tables without redundant branches.',
      'Managing in-memory custom data structure unit tests alongside asynchronous Mongoose database models.',
    ],
    metrics: [
      { label: 'Triage Complexity', value: 'O(log n)', context: 'Binary heap priority queue ordering of emergency medical requests' },
      { label: 'Compatibility', value: '8 Groups', context: 'ABO and Rh factor matching matrix with universal donor rules' },
      { label: 'API Endpoints', value: '10+ Routes', context: 'JWT RBAC protected endpoints for hospitals, donors, and admins' },
    ],
    technologies: ['React.js', 'Vite', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'Data Structures (Heaps & Hash Tables)', 'JWT', 'QR Code API', 'Tailwind CSS', 'Recharts'],
    stackBreakdown: [
      { domain: 'Frontend Client', tools: ['React.js', 'Vite', 'Tailwind CSS', 'Recharts Analytics', 'Axios'] },
      { domain: 'Backend API Service', tools: ['Node.js', 'Express.js', 'JWT RBAC', 'QR Code Generator', 'Helmet & Rate Limiting'] },
      { domain: 'Data Structures & Storage', tools: ['Custom PriorityQueue (Binary Heap)', 'MinHeap (FEFO Expiry)', 'HashTable (ABO/Rh)', 'MongoDB Atlas'] },
      { domain: 'Deployment', tools: ['Vercel Production Deployment', 'CORS Origin Governance'] },
    ],
    technicalDeepDive: [
      {
        title: 'Custom Data Structures Implementation',
        subtitle: 'In-memory algorithms tested independently of database I/O',
        description: 'The backend includes pure JavaScript implementations of classical data structures verified via npm run test:ds.',
        keyPoints: [
          'PriorityQueue: orders requests by medical severity level (critical > high > normal) with creation-timestamp tie breaking',
          'MinHeap: extracts the unit with the soonest expiration date first to eliminate inventory spoilage',
          'HashTable: custom bucket chaining table storing blood group inventory counts with dynamic auto-resizing',
        ],
        codeOrStructureSnippet: `// Priority Queue triage comparator
compare(a, b) {
  const urgencyWeight = { critical: 3, high: 2, normal: 1 };
  if (urgencyWeight[a.priority] !== urgencyWeight[b.priority]) {
    return urgencyWeight[b.priority] - urgencyWeight[a.priority];
  }
  return new Date(a.createdAt) - new Date(b.createdAt); // FIFO tie-break
}`,
      },
      {
        title: 'ABO and Rh Compatibility Logic',
        subtitle: 'Biological compatibility rules encoded into O(1) hash maps',
        description: 'Universal donor (O-) and universal recipient (AB+) rules are mapped into constant-time lookups.',
        keyPoints: [
          'O- is universally compatible with all 8 blood groups for red cell transfusions',
          'AB+ can receive from any blood group',
          'System validates patient and unit ABO/Rh match before dispatching an emergency allocation',
        ],
      },
    ],
    liveUrl: 'https://smart-blood-bank-management-system-topaz.vercel.app/login',
    githubUrl: 'https://github.com/GuruTej-15/smart-blood-bank-management-system',
    heroImage: '/images/projects/bloodbank.png',
  },
  {
    order: 4,
    slug: 'flashcard-engine',
    title: 'Smart Flashcard & Interactive Quiz Engine',
    tagline: 'Offline-first study and interactive quiz engine.',
    category: 'PWA & Algorithms',
    status: 'LIVE',
    featured: true,
    plainEnglishSummary: 'A fast, offline-capable learning application featuring 3D flip card interactions, dynamic quiz evaluation, and headless CMS synchronization via Google Sheets.',
    inSimpleWords: 'A lightweight, distraction-free study tool that loads instantly, works 100% offline via Progressive Web App technology, and syncs study decks from Google Sheets without requiring a database server.',
    problem: 'Students and self-learners face digital flashcard platforms cluttered with invasive ads, cumbersome account walls, and paywalled offline modes that hinder focused, distraction-free active recall.',
    whyItMatters: 'Effective active recall and self-testing require instantaneous response times and reliable access. Any latency in deck loading or loss of network connectivity interrupts study flow and focus.',
    whatIBuilt: 'Engineered an interactive Progressive Web App (PWA) using vanilla JavaScript (ES6+), custom Service Workers, and hardware-accelerated CSS3 3D transforms. Integrated Google Apps Script & Google Sheets API as a serverless, headless CMS.',
    howItWorks: 'The application fetches questions asynchronously from a Google Apps Script JSON endpoint and caches all assets via a custom Service Worker. It applies the Fisher-Yates shuffle algorithm for unbiased randomization. Question cards feature smooth 3D CSS rotateY flips with instant MCQ evaluation and explanation reveals.',
    architectureDetails: [
      'Progressive Web App (PWA) architecture with custom Service Worker caching strategies',
      'Sub-100ms deck loading from client-side CacheStorage and LocalStorage',
      'Headless CMS integration leveraging Google Apps Script & Google Sheets API for zero-maintenance deck updates',
      'O(n) Fisher-Yates unbiased shuffling algorithm for quiz card randomization',
      'Hardware-accelerated 3D card flip animations via CSS3 perspective and rotateY transformations',
      'Dynamic regex-based quiz answer parser supporting 4+ multiple-choice formats with instant visual feedback',
    ],
    keyContributions: [
      'Architected offline-first PWA caching lifecycle enabling 100% offline availability after initial load',
      'Engineered Google Apps Script API integration transforming Google Sheets rows into structured JSON quiz decks',
      'Implemented the O(n) Fisher-Yates array permutation algorithm and regular-expression MCQ option parsers',
      'Built 60fps hardware-accelerated 3D flip card animations using CSS perspective and transform3d',
    ],
    technicalDecisions: [
      {
        title: 'Google Sheets as Headless CMS vs Traditional Relational Database',
        rationale: 'Spinning up a dedicated database server for flashcard curation creates maintenance and hosting overhead.',
        outcome: 'Google Apps Script JSON endpoint enables educators to add questions in Google Sheets with immediate live publishing and zero database cost.',
      },
      {
        title: 'Service Worker Cache-First Strategy',
        rationale: 'Students frequently study in transit or areas with spotty cellular reception.',
        outcome: 'Service Worker intercepts fetch events and serves cached decks instantaneously, guaranteeing 100% offline availability.',
      },
      {
        title: 'Zero-Framework Vanilla Architecture',
        rationale: 'Heavy single-page application framework bundles add unnecessary parsing and execution latency on low-end mobile devices.',
        outcome: 'Vanilla ES6+ implementation delivers an ultra-fast sub-100ms deck load time with zero framework overhead.',
      },
    ],
    challengesAndLearnings: [
      'Ensuring smooth 60fps 3D card flip transitions on low-powered mobile devices by utilizing CSS transform-style: preserve-3d and backface-visibility: hidden.',
      'Sanitizing and parsing heterogeneous rich-text hyperlinks and multi-line explanations embedded in Google Sheets spreadsheet cells.',
    ],
    metrics: [
      { label: 'Deck Load Latency', value: '< 100ms', context: 'Sub-100ms card load time via client cache and Service Workers' },
      { label: 'Availability', value: '100% Offline', context: 'Full offline operability through custom Service Worker caching' },
      { label: 'Shuffle Algorithm', value: 'O(n)', context: 'Mathematically unbiased Fisher-Yates array permutation' },
    ],
    technologies: ['JavaScript (ES6+)', 'PWA & Service Workers', 'Google Apps Script API', 'Google Sheets Headless CMS', 'CSS3 3D Transforms', 'HTML5 Web Manifest', 'Netlify'],
    stackBreakdown: [
      { domain: 'Client Core', tools: ['Vanilla JavaScript (ES6+)', 'PWA Web Manifest', 'Service Worker CacheStorage', 'HTML5 Semantic Layout'] },
      { domain: 'Visual & Animation', tools: ['CSS3 Perspective', 'transform3d & rotateY', 'Dynamic Color Badges', 'Responsive Layout'] },
      { domain: 'Headless CMS & API', tools: ['Google Sheets', 'Google Apps Script Executable', 'REST JSON Pipeline', 'Regex Option Extractor'] },
      { domain: 'Hosting', tools: ['Netlify Production Edge', '100% Offline PWA Installation'] },
    ],
    technicalDeepDive: [
      {
        title: 'Progressive Web App Offline Pipeline',
        subtitle: 'Service Worker lifecycle and cache orchestration',
        description: 'How the Service Worker enables distraction-free offline studying anywhere.',
        keyPoints: [
          'install event caches core shell assets (HTML, CSS, JS, icons) for instant cold starts',
          'fetch event intercepts network requests and serves cache-first assets with stale-while-revalidate fallback',
          'manifest.json enables native Add to Home Screen installability on Android and iOS devices',
        ],
        codeOrStructureSnippet: `// Service Worker fetch caching strategy
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});`,
      },
      {
        title: 'Fisher-Yates O(n) Shuffling Algorithm',
        subtitle: 'Mathematically unbiased array permutation',
        description: 'Avoids algorithmic bias found in naive random sort implementations.',
        keyPoints: [
          'Iterates from the last element down to index 1, swapping with a random index in [0, i]',
          'Generates every permutation with equal 1/n! probability in strict O(n) linear time',
          'Ensures balanced question distribution without repeating cards in a single study run',
        ],
      },
    ],
    liveUrl: 'https://satgurunotes.netlify.app/',
    githubUrl: 'https://github.com/GuruTej-15/Flashcards',
    heroImage: '/images/projects/flashcards.png',
  },
  {
    order: 5,
    slug: 'unified-devops',
    title: 'Unified DevOps Platform',
    tagline: 'Cloud-native DevOps control and policy overlay.',
    category: 'DevOps & Cloud-Native',
    status: 'RUNNING',
    featured: true,
    plainEnglishSummary: 'A non-intrusive operational control platform that connects Git repositories, CI/CD pipelines, security gates, and Kubernetes clusters into a single unified delivery timeline.',
    inSimpleWords: 'Modern engineering teams use separate tools for Git, CI pipelines, security scanning, and Kubernetes. This platform sits above them as a non-intrusive observation layer, connecting code commits to live cluster deployments in real time.',
    problem: 'Engineering teams juggle fragmented tools for VCS (GitHub), CI/CD (GitHub Actions, Jenkins), vulnerability scanning (Trivy), and cluster deployment (Argo CD, Kubernetes). Delivery state, workflow context, policy evaluations, and deployment governance remain disconnected across siloed interfaces.',
    whyItMatters: 'Without an authoritative, unified delivery timeline, teams suffer from blind-spot deployments where security vulnerabilities bypass gates, cluster configuration drifts unnoticed, and debugging rollouts requires cross-referencing five disconnected vendor dashboards.',
    whatIBuilt: 'Architected a self-hosted DevOps overlay platform featuring durable Redis/BullMQ worker queues, GitHub Actions HMAC-SHA256 webhook validation, pluggable Trivy security gates, and read-only Kubernetes & Argo CD cluster observation. Verified against a live Kind Kubernetes cluster (v1.36.1) and Argo CD (v3.5.3).',
    howItWorks: 'Operates as a strict read-only observation overlay without destructive cluster operations. Ingests webhooks idempotently with constant-time HMAC-SHA256 signature checks. BullMQ workers process CI pipeline events and Trivy vulnerability scans. The platform detects drift across Kubernetes Deployments, StatefulSets, and Pods, broadcasting state updates to clients via Socket.io.',
    architectureDetails: [
      'Strict overlay architecture observing Kubernetes, Argo CD, and CI pipelines via read-only APIs and webhooks without executing destructive kubectl operations',
      'Redis Pub/Sub and BullMQ durable job queue processing with exponential backoff and terminal state protection',
      'HMAC-SHA256 webhook ingestion gateway with constant-time signature comparison',
      'Pluggable vulnerability scanner provider abstraction integrated with Trivy CVE evaluation and blocking policy gate rules',
      'Kubernetes provider observing Deployments, StatefulSets, DaemonSets, and Pods with custom CA validation and drift detection',
      'Zero-secret exposure: sensitive credentials encrypted at rest with AES-256-GCM',
    ],
    keyContributions: [
      'Designed end-to-end 4-phase microservice architecture from authentication to cloud-native cluster observation',
      'Engineered durable BullMQ workers ensuring zero webhook drop during burst CI deployments with terminal status protection',
      'Implemented HMAC-SHA256 constant-time verification and AES-256-GCM authenticated encryption at rest for cluster credentials',
      'Verified platform against live Kind Kubernetes cluster (v1.36.1) and Argo CD server (v3.5.3)',
    ],
    technicalDecisions: [
      {
        title: 'Strict Non-Destructive Overlay Architecture',
        rationale: 'Acting as an active Kubernetes controller risks conflicting with established GitOps engines like Argo CD.',
        outcome: 'Platform strictly observes external systems via read-only APIs and webhooks, guaranteeing zero risk of destructive cluster modifications.',
      },
      {
        title: 'BullMQ Durable Queues with Terminal Status Protection',
        rationale: 'Burst CI webhook deliveries can overwhelm Node.js event loops, and out-of-order network events risk overwriting terminal execution states.',
        outcome: 'Redis-backed BullMQ workers process webhooks idempotently, while state machines enforce monotonic status transitions preventing regression.',
      },
      {
        title: 'Authenticated AES-256-GCM Encryption at Rest',
        rationale: 'Observing remote clusters requires storing sensitive kubeconfigs and personal access tokens.',
        outcome: 'All secrets are encrypted with AES-256-GCM with authentication tags, ensuring zero secret leakage to logs or client responses.',
      },
    ],
    challengesAndLearnings: [
      'Preventing out-of-order webhook events from regressing a completed CI pipeline run required implementing a monotonic terminal state machine.',
      'Observing external Kubernetes API endpoints safely required implementing SSRF validation, private IP blacklisting, and custom TLS CA certificate verification.',
    ],
    metrics: [
      { label: 'Architecture', value: 'Overlay', context: 'Non-destructive, read-only observation across K8s and Argo CD' },
      { label: 'Security Standard', value: 'AES-256', context: 'Authenticated GCM encryption at rest for all cluster credentials' },
      { label: 'Processing', value: '100% Idempotent', context: 'BullMQ durable queue ingestion with deduplication keys' },
    ],
    technologies: ['Node.js', 'Express.js', 'React 19', 'Vite', 'Redis', 'BullMQ', 'Kubernetes', 'Argo CD', 'Docker', 'Trivy', 'Socket.io', 'MongoDB', 'AES-256-GCM'],
    stackBreakdown: [
      { domain: 'API Server & Workers', tools: ['Node.js', 'Express.js (Modular Monolith)', 'BullMQ Workers (worker:ci, worker:orchestration)', 'Redis Pub/Sub', 'Socket.io Gateway'] },
      { domain: 'Cloud-Native Infrastructure', tools: ['Kubernetes (Kind v1.36.1)', 'Argo CD (v3.5.3)', 'Docker', 'Trivy CVE Scanner', 'GitHub Actions Webhooks'] },
      { domain: 'Security & Cryptography', tools: ['AES-256-GCM Encryption at Rest', 'HMAC-SHA256 Webhook Verification', 'SSRF Validation', 'Zod Schema Validation'] },
      { domain: 'Client & Storage', tools: ['React 19 SPA', 'Vite', 'Tailwind CSS v4', 'MongoDB Mongoose', 'Axios with Credentials'] },
    ],
    technicalDeepDive: [
      {
        title: 'Durable Queue Infrastructure & Terminal Protection',
        subtitle: 'BullMQ worker processes and monotonic state machines',
        description: 'How the platform handles webhook spikes from CI runners without losing events or corrupting delivery states.',
        keyPoints: [
          'Intake gateway accepts webhook with HTTP 202 and enqueues job with unique X-GitHub-Delivery idempotency key',
          'Dedicated standalone worker processes (npm run worker:ci) execute jobs with exponential backoff retry policies',
          'Monotonic state machine ensures out-of-order in_progress events cannot overwrite a terminal completed status',
        ],
        codeOrStructureSnippet: `// Monotonic terminal status protection
const TERMINAL_STATUSES = ['completed', 'failed', 'cancelled'];
if (TERMINAL_STATUSES.includes(existingRun.status)) {
  // Discard out-of-order event to protect authoritative state
  return;
}`,
      },
      {
        title: 'Cloud-Native Drift Detection & Governance Gates',
        subtitle: 'Observing Kubernetes workloads and Argo CD sync states',
        description: 'Correlating cluster runtime health directly to Git pull requests and vulnerability gates.',
        keyPoints: [
          'Reads Deployments, StatefulSets, DaemonSets, and Pods via official Kubernetes client with custom CA certs',
          'Detects replica divergence (spec.replicas !== status.availableReplicas) and generation mismatches',
          'Evaluates Trivy container vulnerability reports against security policy gates (e.g. 0 CRITICAL CVEs allowed)',
          'Raises governance violation alerts if a cluster workload deploys despite a blocked policy gate',
        ],
      },
    ],
    githubUrl: 'https://github.com/GuruTej-15/unified-devops-platform',
    heroImage: '/images/projects/devops.png',
  },
];
