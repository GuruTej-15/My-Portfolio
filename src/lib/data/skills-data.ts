import { SkillCategory } from '../types';

export const skillsData: SkillCategory[] = [
  {
    title: 'Languages',
    description: 'Core programming languages utilized for systems programming, backend architectures, and modern web clients.',
    skills: [
      { name: 'JavaScript (ES6+)', category: 'Languages', highlight: true, usedInProjects: ['recordhub', 'os-locking-simulator', 'flashcard-engine'] },
      { name: 'C', category: 'Languages', highlight: true, usedInProjects: ['os-locking-simulator'] },
      { name: 'C++', category: 'Languages', highlight: true, usedInProjects: ['smart-blood-bank'] },
      { name: 'SQL', category: 'Languages', highlight: false },
    ],
  },
  {
    title: 'Frontend',
    description: 'Modern component systems, reactive state architectures, and responsive web user interfaces.',
    skills: [
      { name: 'React (19 / React.js)', category: 'Frontend', highlight: true, usedInProjects: ['recordhub', 'smart-blood-bank'] },
      { name: 'Next.js (16 App Router)', category: 'Frontend', highlight: true, usedInProjects: ['recordhub'] },
      { name: 'Tailwind CSS', category: 'Frontend', highlight: true, usedInProjects: ['recordhub'] },
      { name: 'Vite', category: 'Frontend', highlight: false, usedInProjects: ['smart-blood-bank'] },
      { name: 'HTML5 & CSS3', category: 'Frontend', highlight: false, usedInProjects: ['flashcard-engine'] },
      { name: 'PWA & Service Workers', category: 'Frontend', highlight: true, usedInProjects: ['flashcard-engine'] },
      { name: 'Recharts', category: 'Frontend', highlight: false, usedInProjects: ['recordhub'] },
    ],
  },
  {
    title: 'Backend & APIs',
    description: 'Scalable service architectures, RESTful endpoints, asynchronous queue workers, and authenticated security layers.',
    skills: [
      { name: 'Node.js', category: 'Backend', highlight: true, usedInProjects: ['recordhub', 'smart-blood-bank', 'unified-devops'] },
      { name: 'Express.js', category: 'Backend', highlight: true, usedInProjects: ['recordhub', 'smart-blood-bank', 'unified-devops'] },
      { name: 'RESTful API Architecture', category: 'Backend', highlight: true, usedInProjects: ['recordhub', 'smart-blood-bank', 'unified-devops'] },
      { name: 'JWT & RBAC Security', category: 'Backend', highlight: true, usedInProjects: ['recordhub', 'smart-blood-bank', 'unified-devops'] },
      { name: 'Axios', category: 'Backend', highlight: false, usedInProjects: ['smart-blood-bank'] },
      { name: 'Nodemailer OTP', category: 'Backend', highlight: false, usedInProjects: ['recordhub'] },
    ],
  },
  {
    title: 'Databases',
    description: 'Document stores, relational databases, compound aggregation pipelines, and high-velocity memory caches.',
    skills: [
      { name: 'MongoDB', category: 'Databases', highlight: true, usedInProjects: ['recordhub', 'smart-blood-bank', 'unified-devops'] },
      { name: 'Mongoose ODM', category: 'Databases', highlight: true, usedInProjects: ['recordhub', 'smart-blood-bank', 'unified-devops'] },
      { name: 'Aggregation Pipelines', category: 'Databases', highlight: true, usedInProjects: ['recordhub'] },
      { name: 'SQL / Relational Schema', category: 'Databases', highlight: false },
    ],
  },
  {
    title: 'Cloud / DevOps',
    description: 'Containerization, cluster observation overlays, durable worker queues, and automated vulnerability gates.',
    skills: [
      { name: 'Git & GitHub Workflows', category: 'Cloud / DevOps', highlight: true, usedInProjects: ['recordhub', 'os-locking-simulator', 'unified-devops'] },
      { name: 'GitHub Actions CI/CD', category: 'Cloud / DevOps', highlight: true, usedInProjects: ['unified-devops'] },
      { name: 'Kubernetes (Kind)', category: 'Cloud / DevOps', highlight: true, usedInProjects: ['unified-devops'] },
      { name: 'Argo CD', category: 'Cloud / DevOps', highlight: true, usedInProjects: ['unified-devops'] },
      { name: 'Redis & BullMQ', category: 'Cloud / DevOps', highlight: true, usedInProjects: ['unified-devops'] },
      { name: 'Linux / Shell Scripting', category: 'Cloud / DevOps', highlight: false, usedInProjects: ['os-locking-simulator', 'unified-devops'] },
      { name: 'Vercel', category: 'Cloud / DevOps', highlight: false, usedInProjects: ['recordhub', 'smart-blood-bank'] },
    ],
  },
  {
    title: 'Developer Tools',
    description: 'Testing suites, container runtimes, API testing tools, and local development environments.',
    skills: [
      { name: 'Docker', category: 'Developer Tools', highlight: true, usedInProjects: ['unified-devops'] },
      { name: 'Trivy', category: 'Developer Tools', highlight: false, usedInProjects: ['unified-devops'] },
      { name: 'Postman & Curl', category: 'Developer Tools', highlight: false, usedInProjects: ['recordhub', 'smart-blood-bank'] },
      { name: 'Make & Build Tools', category: 'Developer Tools', highlight: false, usedInProjects: ['os-locking-simulator'] },
      { name: 'VS Code & POSIX Toolchain', category: 'Developer Tools', highlight: false },
    ],
  },
  {
    title: 'Core Computer Science',
    description: 'Algorithmic problem-solving, operating systems theory, and mathematical system foundations.',
    skills: [
      { name: 'Data Structures & Algorithms', category: 'Core CS', highlight: true, usedInProjects: ['smart-blood-bank', 'os-locking-simulator'] },
      { name: 'Operating Systems & Concurrency', category: 'Core CS', highlight: true, usedInProjects: ['os-locking-simulator'] },
      { name: 'Graph Theory & DFS Cycles', category: 'Core CS', highlight: true, usedInProjects: ['os-locking-simulator'] },
      { name: 'Binary Heaps & Priority Queues', category: 'Core CS', highlight: true, usedInProjects: ['smart-blood-bank'] },
      { name: 'Database Management Systems (DBMS)', category: 'Core CS', highlight: false },
      { name: 'Computer Networks', category: 'Core CS', highlight: false },
      { name: 'Object-Oriented Programming (OOP)', category: 'Core CS', highlight: false },
      { name: 'System Design Fundamentals', category: 'Core CS', highlight: false },
    ],
  },
];
