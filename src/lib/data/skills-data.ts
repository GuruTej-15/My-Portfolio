import { SkillCategory } from '../types';

export const skillsData: SkillCategory[] = [
  {
    title: 'Languages',
    description: 'Core programming languages utilized for system algorithms, backend microservices, and frontends.',
    skills: [
      { name: 'JavaScript (ES6+)', category: 'Languages', highlight: true, usedInProjects: ['recordhub', 'os-locking-simulator', 'flashcard-engine'] },
      { name: 'C', category: 'Languages', highlight: true, usedInProjects: ['os-locking-simulator'] },
      { name: 'C++', category: 'Languages', highlight: true, usedInProjects: ['smart-blood-bank'] },
      { name: 'HTML5 & CSS3', category: 'Languages', highlight: false, usedInProjects: ['recordhub', 'flashcard-engine'] },
      { name: 'SQL', category: 'Languages', highlight: false },
      { name: 'Python', category: 'Languages', highlight: false },
    ],
  },
  {
    title: 'Frontend Engineering',
    description: 'Modern component architectures, reactive interfaces, and responsive web systems.',
    skills: [
      { name: 'Next.js 16 (App Router)', category: 'Frontend', highlight: true, usedInProjects: ['recordhub'] },
      { name: 'React 19 / React.js', category: 'Frontend', highlight: true, usedInProjects: ['recordhub', 'smart-blood-bank'] },
      { name: 'Tailwind CSS', category: 'Frontend', highlight: true, usedInProjects: ['recordhub'] },
      { name: 'Vite', category: 'Frontend', highlight: false, usedInProjects: ['smart-blood-bank'] },
      { name: 'PWA & Service Workers', category: 'Frontend', highlight: true, usedInProjects: ['flashcard-engine'] },
      { name: 'Recharts', category: 'Frontend', highlight: false, usedInProjects: ['recordhub'] },
    ],
  },
  {
    title: 'Backend & Systems',
    description: 'High-performance APIs, asynchronous processing, event queues, and authentication systems.',
    skills: [
      { name: 'Node.js', category: 'Backend', highlight: true, usedInProjects: ['recordhub', 'smart-blood-bank', 'unified-devops'] },
      { name: 'Express.js', category: 'Backend', highlight: true, usedInProjects: ['recordhub', 'smart-blood-bank', 'unified-devops'] },
      { name: 'RESTful API Design', category: 'Backend', highlight: true, usedInProjects: ['recordhub', 'smart-blood-bank', 'unified-devops'] },
      { name: 'JWT & RBAC Security', category: 'Backend', highlight: true, usedInProjects: ['recordhub', 'smart-blood-bank', 'unified-devops'] },
      { name: 'Redis & BullMQ', category: 'Backend', highlight: true, usedInProjects: ['unified-devops'] },
      { name: 'Socket.io', category: 'Backend', highlight: false, usedInProjects: ['unified-devops'] },
    ],
  },
  {
    title: 'Databases & Storage',
    description: 'Indexed document stores, relational structures, and fast in-memory caching.',
    skills: [
      { name: 'MongoDB', category: 'Databases', highlight: true, usedInProjects: ['recordhub', 'smart-blood-bank', 'unified-devops'] },
      { name: 'Mongoose ODM', category: 'Databases', highlight: true, usedInProjects: ['recordhub', 'smart-blood-bank', 'unified-devops'] },
      { name: 'Aggregation Pipelines', category: 'Databases', highlight: true, usedInProjects: ['recordhub'] },
      { name: 'MySQL', category: 'Databases', highlight: false },
      { name: 'Redis Key-Value Cache', category: 'Databases', highlight: true, usedInProjects: ['unified-devops'] },
    ],
  },
  {
    title: 'Cloud, DevOps & Infrastructure',
    description: 'Continuous integration, containerized deployments, cloud-native orchestration, and security gates.',
    skills: [
      { name: 'Git & GitHub Workflows', category: 'Cloud & DevOps', highlight: true, usedInProjects: ['recordhub', 'os-locking-simulator', 'unified-devops'] },
      { name: 'GitHub Actions CI/CD', category: 'Cloud & DevOps', highlight: true, usedInProjects: ['unified-devops'] },
      { name: 'Docker & Containerization', category: 'Cloud & DevOps', highlight: true, usedInProjects: ['unified-devops'] },
      { name: 'Kubernetes & Argo CD', category: 'Cloud & DevOps', highlight: true, usedInProjects: ['unified-devops'] },
      { name: 'Trivy Vulnerability Scanning', category: 'Cloud & DevOps', highlight: false, usedInProjects: ['unified-devops'] },
      { name: 'Linux / Bash Scripting', category: 'Cloud & DevOps', highlight: false, usedInProjects: ['os-locking-simulator', 'unified-devops'] },
      { name: 'Vercel Deployment', category: 'Cloud & DevOps', highlight: false, usedInProjects: ['recordhub', 'smart-blood-bank'] },
    ],
  },
  {
    title: 'Core Computer Science',
    description: 'Foundational computer science theory directly applied to software architecture.',
    skills: [
      { name: 'Data Structures & Algorithms', category: 'Core CS', highlight: true, usedInProjects: ['smart-blood-bank', 'os-locking-simulator'] },
      { name: 'OS Concurrency & Synchronization', category: 'Core CS', highlight: true, usedInProjects: ['os-locking-simulator'] },
      { name: 'Graph Theory & DFS', category: 'Core CS', highlight: true, usedInProjects: ['os-locking-simulator'] },
      { name: 'Binary Heaps & Priority Queues', category: 'Core CS', highlight: true, usedInProjects: ['smart-blood-bank'] },
      { name: 'Object-Oriented Programming (OOP)', category: 'Core CS', highlight: false },
      { name: 'Database Management Systems (DBMS)', category: 'Core CS', highlight: false },
      { name: 'Computer Networks', category: 'Core CS', highlight: false },
    ],
  },
];
