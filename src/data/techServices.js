import { Code, Bot, Globe, Shield, Building2, FileText } from 'lucide-react'

export const TECH_SERVICES = [
  {
    icon: Code, title: 'Custom Software Development', rate: '$95–$145/hr',
    desc: 'Full-stack applications, APIs, microservices, and cloud-native solutions tailored to your business requirements.',
  },
  {
    icon: Bot, title: 'AI / LLM Integration', rate: '$125–$165/hr',
    desc: 'Claude API integrations, intelligent automation, NLP pipelines, and AI-powered decision support systems.',
  },
  {
    icon: Globe, title: 'Web Development & Modernization', rate: '$95/hr',
    desc: 'React, Next.js, and modern web platforms. Legacy system modernization built with accessibility in mind.',
  },
  {
    icon: Shield, title: 'IT Consulting', rate: '$95–$125/hr',
    desc: 'Cloud architecture, cybersecurity assessments, infrastructure planning, and digital transformation strategy.',
  },
  {
    icon: Building2, title: 'Government Procurement Consulting', rate: '$95/hr',
    desc: 'SAM.gov registration, proposal writing, compliance support, and federal marketplace strategy.',
  },
  {
    icon: FileText, title: 'Technical Documentation', rate: '$95/hr',
    desc: 'API documentation, system architecture diagrams, SOPs, and compliance documentation.',
  },
]

// Technical Portfolio — internal/personal projects, NOT government past performance.
export const TECH_PORTFOLIO = [
  {
    title: 'FinAdvisor Pro',
    desc: 'Gives financial advisors instant, AI-assisted client guidance while meeting bank-grade security requirements — Claude API analysis, TLS 1.3 encryption, and role-based access control, deployed on Azure.',
    tags: ['Claude API', 'React', 'Azure', 'RBAC', 'TLS 1.3'],
  },
  {
    title: 'SAM.gov Intelligence Platform',
    desc: 'Eliminates hours of manual opportunity searches by automatically monitoring 60+ federal data sources daily, with intelligent filtering and real-time alerts.',
    tags: ['Python', 'REST API', 'Automation', 'Federal'],
  },
  {
    title: 'Link Credit Platform',
    desc: 'Lets referral partners track verified leads and calculate earnings in real time, in a bilingual interface, without manual reconciliation.',
    tags: ['React', 'Cloudflare', 'Bilingual', 'FinTech'],
  },
]
