export interface ProjectMetric {
  label: string;
  value: string;
  context: string;
}

export interface TechnicalDecision {
  title: string;
  rationale: string;
  outcome: string;
}

export interface TechnicalDeepDiveSection {
  title: string;
  subtitle: string;
  description: string;
  keyPoints: string[];
  codeOrStructureSnippet?: string;
}

export interface VisualAsset {
  caption: string;
  description: string;
  imageSrc?: string;
  diagramType?: string;
  badge: string;
}

export interface StackDomain {
  domain: string;
  tools: string[];
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  category: 'Full-Stack' | 'Systems & Concurrency' | 'DevOps & Cloud-Native' | 'PWA & Algorithms';
  status: 'LIVE' | 'VERIFIED' | 'RUNNING';
  plainEnglishSummary: string;
  inSimpleWords: string;
  problem: string;
  whyItMatters: string;
  whatIBuilt: string;
  howItWorks: string;
  architectureDetails: string[];
  keyContributions: string[];
  technicalDecisions: TechnicalDecision[];
  challengesAndLearnings: string[];
  metrics: ProjectMetric[];
  technologies: string[];
  stackBreakdown: StackDomain[];
  technicalDeepDive: TechnicalDeepDiveSection[];
  visualAssets?: VisualAsset[];
  liveUrl?: string;
  githubUrl: string;
  heroImage: string;
  featured: boolean;
  order: number;
}

export interface SkillItem {
  name: string;
  category: string;
  highlight?: boolean;
  usedInProjects?: string[]; // Project slugs
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: SkillItem[];
}

export interface TimelineMilestone {
  id: string;
  year: string;
  period: string;
  title: string;
  institution: string;
  location: string;
  description: string;
  gradeOrOutcome?: string;
  skillsAcquired: string[];
  category: 'Education' | 'Training' | 'Certification' | 'Project' | 'Extracurricular' | 'Community';
  highlight?: boolean;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  category: 'Cloud & AI' | 'Programming' | 'Web Development' | 'Social Impact';
  proofUrl: string;
  verified: boolean;
  credentialId?: string;
  description?: string;
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  email: string;
  phone: string;
}

export interface SiteConfig {
  name: string;
  role: string;
  tagline: string;
  shortBio: string;
  location: string;
  email: string;
  phone: string;
  resumePath: string;
  social: SocialLinks;
}
