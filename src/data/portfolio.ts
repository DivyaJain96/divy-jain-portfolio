export const SITE_URL = 'https://divy-jain-portfolio.vercel.app';

export const profile = {
  name: 'Divy Jain',
  firstName: 'Divy',
  lastName: 'Jain',
  initials: 'DJ',
  role: 'Software Developer',
  headline: 'Enterprise Software & Web Application Development',
  rotatingFocus: [
    'system design and architecture',
    'frontend/UI for web applications',
    'Java & Spring Boot applications',
    'REST APIs and integrations',
    'automation and production support',
  ],
  tagline: 'Java · Spring Boot · System Design · Frontend/UI · Backend · APIs · Integrations · Production',
  // Direct contact. Leave empty to hide the matching Contact/Footer links — do not use placeholders.
  email: '',
  phone: '',
  whatsapp: '',
  calendly: '',
  github: '',
  linkedin: 'https://www.linkedin.com/in/divyajain9649',
  bio: 'I design end-to-end module workflows and system architecture, and develop enterprise-level business software and web applications across frontend/UI, backend development, databases, REST APIs, third-party integrations, automation, and production support.',
  bioShort: 'Software Developer working on enterprise software and web applications — from system design through frontend/UI, backend, databases, APIs, integrations, automation, and production support.',
  // Actual profile photo lives at public/profile.jpg and is served as /profile.jpg.
  photo: '/profile.jpg',
  resume: '/resume.pdf',
  location: 'Ahmedabad, Gujarat, India',
  availability: 'Open to projects and conversations',
};

/** Set to true to restore the Resume download link on the public portfolio. */
export const SHOW_RESUME = false;

export const stats = [
  { label: 'Years of Experience', value: 3, suffix: '+' },
  { label: 'Work Areas Showcased', value: 6, suffix: '' },
  { label: 'Primary Stack', value: 0, suffix: '', display: 'Java' },
  { label: 'Development Focus', value: 0, suffix: '', display: 'Enterprise Software & Web Applications' },
];

export const strengths = [
  'Java & Spring Boot',
  'System Design & Architecture',
  'Frontend / UI',
  'REST APIs',
  'System Integrations',
  'Database & Data Work',
  'Performance Work',
  'Production Support',
];

export const focusAreas = [
  {
    title: 'Complete product flow',
    text: 'From system design through frontend/UI, backend logic, databases, APIs, integrations, and production support — one flow, not disconnected layers.',
    icon: 'Layers',
  },
  {
    title: 'Reliable integrations',
    text: 'Payments, meetings, messaging, and third-party APIs connected through webhooks, notifications, and sync — not one-off scripts.',
    icon: 'Cable',
  },
  {
    title: 'Less manual work',
    text: 'I look for the steps people still do by hand and move them into the workflow: receipts, mappings, status updates, and alerts.',
    icon: 'ListChecks',
  },
  {
    title: 'Always learning',
    text: 'Continuously building skill in Java, Spring Boot, system design, and the frontend/UI that completes enterprise software and web applications.',
    icon: 'Sparkles',
  },
];

export const applicationFlow = [
  { title: 'System Design & Architecture', icon: 'Network' },
  { title: 'Frontend / UI', icon: 'Monitor' },
  { title: 'Backend Development', icon: 'Server' },
  { title: 'Business Logic', icon: 'Layers' },
  { title: 'Database', icon: 'Database' },
  { title: 'REST APIs', icon: 'Waypoints' },
  { title: 'Third-Party Integrations', icon: 'Cable' },
  { title: 'Automation', icon: 'Sparkles' },
  { title: 'Deployment / Production Support', icon: 'Rocket' },
];

export const workAreas = [
  'VConnect',
  'VMS',
  'LJS CRM',
  'Quiz',
  'Design Portal',
  'Bakers Magic Enterprise',
  'Prashant Corner',
  'Brahmras',
  'Cloud Portal',
  'Lalaji and Sons',
];

export const primaryStack = [
  'Java',
  'Spring Boot',
  'System Design & Architecture',
  'Frontend / UI',
  'REST APIs',
  'Microservices',
  'SQL',
  'PostgreSQL',
  'System Integrations',
];

export const skillGroups = [
  {
    title: 'Languages & Backend',
    icon: 'Server',
    accent: 'champagne',
    skills: [
      { name: 'Java' },
      { name: 'Advanced Java' },
      { name: 'Spring' },
      { name: 'Spring Boot' },
      { name: 'Spring MVC' },
      { name: 'Hibernate' },
      { name: 'Microservices' },
      { name: 'REST APIs' },
      { name: 'API Development' },
      { name: 'Back-End Web Development' },
    ],
  },
  {
    title: 'Frontend / UI',
    icon: 'Monitor',
    accent: 'fog',
    note: 'React is working knowledge — an additional frontend skill, not the primary specialization.',
    skills: [
      { name: 'HTML' },
      { name: 'CSS' },
      { name: 'Bootstrap' },
      { name: 'JavaScript' },
      { name: 'jQuery' },
      { name: 'AJAX' },
      { name: 'JSP' },
      { name: 'JSTL' },
      { name: 'React' },
    ],
  },
  {
    title: 'APIs & Integrations',
    icon: 'Cable',
    accent: 'champagne',
    skills: [
      { name: 'REST APIs' },
      { name: 'REST API Integration' },
      { name: 'Webhooks' },
      { name: 'Third-Party API Integration' },
      { name: 'Third-Party Service Integration' },
      { name: 'System Integration' },
      { name: 'Razorpay Payment Gateway Integration' },
      { name: 'Microsoft Teams Integration' },
      { name: 'WhatsApp / Interakt' },
      { name: 'Jira Integration' },
      { name: 'Data Integration' },
    ],
  },
  {
    title: 'Database & Data',
    icon: 'Database',
    accent: 'signal',
    skills: [
      { name: 'SQL' },
      { name: 'PostgreSQL' },
      { name: 'MySQL' },
      { name: 'MongoDB' },
      { name: 'Database Optimization' },
      { name: 'Database Indexing' },
      { name: 'Query Optimization' },
      { name: 'Database Migration' },
      { name: 'Data Mapping' },
      { name: 'Data Validation' },
      { name: 'Data Correction' },
    ],
  },
  {
    title: 'Deployment & Environment',
    icon: 'Cloud',
    accent: 'signal',
    note: 'Hands-on experience with application deployment, CI/CD workflows, cloud environments, server access, and production support.',
    skills: [
      { name: 'AWS' },
      { name: 'Azure' },
      { name: 'Jenkins' },
      { name: 'Terminus' },
      { name: 'Git' },
      { name: 'GitHub' },
    ],
  },
  {
    title: 'Development Tools',
    icon: 'Wrench',
    accent: 'fog',
    skills: [
      { name: 'IntelliJ IDEA' },
      { name: 'Spring Tool Suite (STS)' },
      { name: 'Visual Studio Code' },
      { name: 'NetBeans' },
      { name: 'Postman' },
      { name: 'Bruno' },
    ],
  },
  {
    title: 'Development Practices',
    icon: 'GitBranch',
    accent: 'signal',
    skills: [
      { name: 'System Design & Architecture' },
      { name: 'Code Refactoring' },
      { name: 'Debugging' },
      { name: 'Problem Solving' },
      { name: 'Testing' },
      { name: 'Agile Development' },
    ],
  },
  {
    title: 'Additional Experience',
    icon: 'Layers',
    accent: 'fog',
    skills: [
      { name: 'C' },
      { name: 'C++' },
      { name: 'C#' },
      { name: 'ASP.NET' },
      { name: 'ASP.NET MVC' },
      { name: 'ASP.NET Web API' },
      { name: 'Selenium WebDriver' },
    ],
  },
];

export const featuredTech = [
  'Java',
  'Spring Boot',
  'System Design & Architecture',
  'Frontend / UI',
  'REST APIs',
  'Microservices',
  'System Integrations',
  'SQL',
  'PostgreSQL',
  'Performance Optimization',
  'Hibernate',
  'HTML',
  'JavaScript',
  'Bootstrap',
  'jQuery',
  'JSP',
  'Webhooks',
  'Razorpay',
  'Microsoft Teams',
  'AWS',
  'Azure',
  'Jenkins',
  'Git',
];

export type TimelineEntry = {
  role: string;
  credential?: string;
  organization: string;
  duration: string;
  location: string;
  type: string;
  summary: string;
  contributions: string[];
};

export const experience: TimelineEntry[] = [
  {
    role: 'Software Developer',
    organization: 'Enterprise Software & Web Application Development',
    duration: '3+ years',
    location: 'Ahmedabad, Gujarat, India',
    type: 'Professional',
    summary:
      'Designed end-to-end module workflows and system architecture, and developed enterprise-level business software and web applications using Java, Spring Boot, SQL, JSP, JavaScript, jQuery, and related technologies — across frontend/UI, backend, databases, APIs, integrations, automation, and production support.',
    contributions: [
      'Designed end-to-end module workflows and system architecture, including business requirements, data flow, business logic, database interactions, APIs, integrations, validations, automation, and production workflows.',
      'Built and connected the UI layer (HTML, CSS, Bootstrap, JavaScript, jQuery, AJAX, JSP, JSTL) to Java/Spring Boot APIs so screens and services work as one product.',
      'Owned subscription and billing workflows including add hardware/other, renewal, new license, reactive, upsell/upgrade, add-ons, validations, V2 synchronization, migration, and post-live hardening.',
      'Optimized DataTable and API workflows, reducing redundant API calls from 4–9 per action to a single optimized call, reducing API load by 60%+ while supporting 5,000+ records.',
      'Integrated Razorpay Payment Link with webhook-based automated receipt generation, reducing manual payment receipt processing.',
      'Developed Microsoft Teams meeting integration supporting create, cancel, and reschedule workflows, email notifications, recording, playback, and meeting-related automation.',
      'Implemented scheduler-based automation for WhatsApp campaigns, lead assignment, client inactivity alerts, email alerts, and developer error monitoring.',
      'Supported large-scale data migration with business, customer, plan, and transaction mapping, validation, correction, migration scripts, and production rollout.',
      'Enhanced CRM, visitor management, Quiz bulk Excel import, asset management with digital signatures, credit-note/refund and e-invoice workflows, purchase/stock reporting, and Jira comment synchronization.',
      'Supported application deployments, production troubleshooting, root-cause analysis, and post-release issue resolution across multiple enterprise systems and web applications.',
    ],
  },
];

export const education: TimelineEntry[] = [
  {
    role: 'MCA',
    credential: 'Master of Computer Applications',
    organization: 'CHARUSAT University',
    duration: '',
    location: '',
    type: 'Education',
    summary: '',
    contributions: [],
  },
  {
    role: 'B.Sc.',
    credential: 'Bachelor of Science',
    organization: '',
    duration: '',
    location: '',
    type: 'Education',
    summary: '',
    contributions: [],
  },
];

/** Build a wa.me chat URL from a configured number. Empty input returns an empty href. */
export function whatsappChatUrl(raw: string) {
  const digits = raw.replace(/\D/g, '');
  return digits ? `https://wa.me/${digits}` : '';
}

export type Project = {
  title: string;
  summary: string;
  contributions: string[];
  problem: string;
  solution: string;
  impact: string;
  metrics?: { value: string; label: string }[];
  tags: string[];
  category: string;
  liveDemo: string;
  github: string;
  featured: boolean;
  visual: string;
};

export const projects: Project[] = [
  {
    title: 'Subscription & Business Workflow Platform',
    summary:
      'Developed and enhanced subscription and billing workflows for enterprise business applications, covering plan changes, validations, billing, and later data moves. I built the UI and backend together so these rules live in one path instead of disconnected steps.',
    contributions: [
      'Add hardware/other, renewal, new license, reactive, upsell/upgrade, and add-on flows',
      'Validations, billing, and V2 synchronization',
      'Migration support and post-production follow-up',
    ],
    problem:
      'Subscription and billing rules were spread across validations, status changes, integrations, and later data moves — easy to break and hard to own.',
    solution:
      'I developed the UI and backend path together: subscription types (add hardware/other, renewal, new license, reactive, upsell/upgrade, add-ons), validations, billing, V2 synchronization, migration support, and follow-up after production.',
    impact: 'A single, reliable workflow instead of disconnected steps — with room to correct issues after go-live.',
    tags: ['Java', 'Spring Boot', 'JSP', 'JavaScript', 'SQL', 'Billing'],
    category: 'Systems',
    liveDemo: '',
    github: '',
    featured: true,
    visual: 'commerce',
  },
  {
    title: 'Payment Gateway & Webhook Automation',
    summary:
      'Payment confirmation and receipt generation still needed manual follow-up after the gateway recorded a payment. I integrated Razorpay Payment Link so webhook events could process the payment and generate the receipt automatically.',
    contributions: [
      'Razorpay Payment Link integration',
      'Webhook-based automatic receipt generation',
      'Reduced manual payment receipt processing',
    ],
    problem: 'Payment confirmation and receipt generation still needed manual follow-up after the gateway recorded a payment.',
    solution:
      'Integrated Razorpay Payment Link with webhook-based automated receipt generation, reducing manual payment receipt processing.',
    impact: 'Manual receipt follow-up moved onto webhook-driven processing inside the product.',
    tags: ['Razorpay', 'Webhooks', 'REST APIs', 'Java'],
    category: 'Integrations',
    liveDemo: '',
    github: '',
    featured: true,
    visual: 'api',
  },
  {
    title: 'Meeting Scheduling & Microsoft Teams Integration',
    summary:
      'Creating, changing, and following up on meetings lived outside the product, so the team had to handle the lifecycle by hand. I developed Microsoft Teams meeting integration so create, cancel, reschedule, notifications, and recordings sit inside the same workflow.',
    contributions: [
      'Create, cancel, and reschedule meeting workflows',
      'Email notifications',
      'Recording, playback, and meeting-related automation',
    ],
    problem: 'Creating, changing, and following up on meetings lived outside the product, so the team had to handle the lifecycle by hand.',
    solution:
      'Developed Microsoft Teams meeting integration supporting create, cancel, and reschedule workflows, email notifications, recording, playback, and meeting-related automation.',
    impact: 'The meeting lifecycle — including notifications and recordings — sits inside the same workflow as the rest of the product.',
    tags: ['Microsoft Teams', 'REST APIs', 'Notifications', 'Java'],
    category: 'Integrations',
    liveDemo: '',
    github: '',
    featured: false,
    visual: 'tasks',
  },
  {
    title: 'API & Data Workflow Optimization',
    summary:
      'Multiple redundant API calls caused unnecessary load and inefficient data processing on DataTable-driven screens. I optimized the DataTable and API workflows so each action uses a single call instead of four to nine.',
    contributions: [
      'Reduced redundant API calls from 4–9 per action to a single optimized call',
      '60%+ API load reduction',
      'Support for 5,000+ records on DataTable-driven screens',
    ],
    problem: 'Multiple redundant API calls caused unnecessary load and inefficient data processing on DataTable-driven screens.',
    solution:
      'Optimized DataTable and API workflows, reducing redundant API calls from 4–9 per action to a single optimized call, reducing API load by 60%+ while supporting 5,000+ records.',
    impact: '60%+ API load reduction while supporting 5,000+ records.',
    metrics: [
      { value: '60%+', label: 'API load reduction' },
      { value: '5,000+', label: 'Records supported' },
    ],
    tags: ['Java', 'SQL', 'API Optimization', 'DataTables', 'JavaScript'],
    category: 'Performance',
    liveDemo: '',
    github: '',
    featured: false,
    visual: 'gateway',
  },
  {
    title: 'Large-Scale Data Migration & Validation',
    summary:
      'Moving business, customer, plan, and transaction data into a new structure is risky when mapping, validation, and corrections happen too late. I worked on mapping, validation, migration scripts, and production rollout support so the move could be checked before and during cutover.',
    contributions: [
      'Business, customer, plan, and transaction mapping',
      'Data validation and correction',
      'Migration scripts and production rollout support',
    ],
    problem: 'Moving business, customer, plan, and transaction data into a new structure is risky when mapping, validation, and corrections happen too late.',
    solution:
      'I worked on business mapping, customer mapping, plan mapping, transaction mapping, data validation, migration scripts, and production rollout support so the move could be checked before and during cutover.',
    impact: 'A more controlled migration path, with explicit validation and support when production needed corrections.',
    tags: ['SQL', 'Migrations', 'Validation', 'Production'],
    category: 'Reliability',
    liveDemo: '',
    github: '',
    featured: false,
    visual: 'inventory',
  },
  {
    title: 'Enterprise Systems & Process Automation',
    summary:
      'CRM, visitor management, campaigns, quizzes, assets, and billing documents still needed too many manual steps across day-to-day operations. I enhanced these enterprise software and web application workflows across frontend and backend so repeated operational work could run inside the product.',
    contributions: [
      'CRM lead nurturing and WhatsApp/Interakt campaign automation',
      'Quiz bulk Excel import and asset allocation with digital signatures',
      'Credit-note/refund, e-invoice, purchase/stock reporting, and Jira comment synchronization',
    ],
    problem:
      'CRM, visitor management, campaigns, quizzes, assets, and billing documents still needed too many manual steps across day-to-day operations.',
    solution:
      'I enhanced enterprise software and web applications across frontend and backend — lead nurturing, WhatsApp/Interakt automation, Quiz bulk Excel import, asset allocation with digital signatures, credit-note/refund and e-invoice workflows, purchase/stock reporting, and Jira comment synchronization.',
    impact: 'Repeated operational work folded into the product, with scheduler-driven alerts and less manual follow-up.',
    tags: ['Java', 'JSP', 'JavaScript', 'SQL', 'Automation', 'Integrations'],
    category: 'Automation',
    liveDemo: '',
    github: '',
    featured: false,
    visual: 'people',
  },
];

export const services = [
  {
    title: 'Enterprise Software & Web Application Development',
    icon: 'Layers',
    value: 'Workflows for CRM, billing, operations, and subscriptions — from the screens teams use to the services underneath.',
    plain: 'Improving the CRM, billing, subscription, and operations flows teams use every day, from UI to backend.',
  },
  {
    title: 'Frontend / UI Development',
    icon: 'Monitor',
    value: 'Business-facing screens with HTML, CSS, Bootstrap, JavaScript, jQuery, AJAX, JSP, and JSTL, wired to Java APIs.',
    plain: 'The interfaces people actually use — built to work with the backend, not as a separate layer.',
  },
  {
    title: 'Java Backend Development',
    icon: 'Server',
    value: 'Reliable backend applications and business workflows using Java and Spring Boot.',
    plain: 'The server-side systems that run your business — rules, workflows, and day-to-day operations.',
  },
  {
    title: 'REST API Development',
    icon: 'Waypoints',
    value: 'APIs that connect applications, keep contracts clear, and support systems as they grow.',
    plain: 'Connecting applications and services so they can exchange data and work together automatically.',
  },
  {
    title: 'System & Third-Party Integrations',
    icon: 'Cable',
    value: 'Payment gateways, communication tools, and other services wired into the product with webhooks and events.',
    plain: 'Wiring payments, meetings, messaging, and other tools into the product so events happen without extra manual steps.',
  },
  {
    title: 'Database & Data Solutions',
    icon: 'Database',
    value: 'SQL databases, query work, mapping, validation, migrations, and corrections that stay understandable in production.',
    plain: 'Keeping business data accurate, queryable, and ready for production changes.',
  },
  {
    title: 'Performance Optimization',
    icon: 'Gauge',
    value: 'Fewer wasted API calls, tighter database work, and screens that stay usable as data grows.',
    plain: 'Making screens and APIs faster and lighter as data and traffic grow.',
  },
  {
    title: 'Deployment & Production Support',
    icon: 'Rocket',
    value: 'Hands-on application deployment, CI/CD workflows, cloud environments, server access, and production issue resolution.',
    plain: 'Helping releases land cleanly — and staying with the work when production needs a real diagnosis.',
  },
];

export const highlights = [
  {
    title: 'Application workflow problems',
    text: 'UI and backend rules, validations, and status changes that have drifted into separate paths that are hard to maintain.',
    icon: 'Workflow',
  },
  {
    title: 'Frontend / UI delivery',
    text: 'Business screens that need to stay clear, usable, and honestly connected to the APIs underneath.',
    icon: 'Monitor',
  },
  {
    title: 'API performance issues',
    text: 'Screens that hit the server too many times, or slow down as the record count climbs.',
    icon: 'Gauge',
  },
  {
    title: 'System integration challenges',
    text: 'Payments, meetings, messaging, and third-party APIs that need to behave as part of the product — not as a side process.',
    icon: 'Cable',
  },
  {
    title: 'Database optimization',
    text: 'Queries, indexing, and data access that need to stay honest as the workload grows.',
    icon: 'Database',
  },
  {
    title: 'Data migration',
    text: 'Mapping, validation, and corrections when business data has to move without losing meaning.',
    icon: 'ArrowLeftRight',
  },
  {
    title: 'Production debugging',
    text: 'Finding the actual cause of a live issue and fixing the path — UI, API, or data — not only the symptom.',
    icon: 'Bug',
  },
  {
    title: 'Business automation',
    text: 'Receipts, notifications, campaigns, and status updates that still happen by hand.',
    icon: 'Sparkles',
  },
  {
    title: 'Manual process reduction',
    text: 'Taking repeated operational steps and folding them into a reliable workflow.',
    icon: 'ListChecks',
  },
];

export const recognitions = [
  {
    title: 'Excellence in Execution & Ownership',
    text: 'Recognized for carrying work past the first delivery — including the follow-through in production.',
  },
  {
    title: 'Excellence in Subscription Module Implementation',
    text: 'Recognized for the quality of a complex subscription implementation and the ownership around it.',
  },
];

export const reasons = [
  {
    title: 'Clean, maintainable code',
    text: 'Readable Java, explicit APIs, and structure another engineer can extend without archaeology.',
    icon: 'Code2',
  },
  {
    title: 'Full-stack enterprise software',
    text: 'Java, Spring Boot, SQL, and the frontend/UI wired in so enterprise software and web applications stay usable from screen to database to production.',
    icon: 'Gauge',
  },
  {
    title: 'Problem-solving first',
    text: 'I translate messy requirements into boundaries, contracts, and working software.',
    icon: 'Puzzle',
  },
  {
    title: 'Ownership',
    text: 'From architecture notes to deployment support — I stay with the work until it is usable.',
    icon: 'ShieldCheck',
  },
  {
    title: 'APIs & integrations',
    text: 'REST design, authentication, and third-party systems connected with care for failure modes.',
    icon: 'Waypoints',
  },
  {
    title: 'Modern practice',
    text: 'Git, testing, and documentation as part of delivery — not afterthoughts.',
    icon: 'Sparkles',
  },
];

export const processSteps = [
  {
    step: '01',
    title: 'Requirement Analysis',
    description:
      'We start with a deep-dive call to understand your business goals, technical requirements, and project scope. I deliver a clear project brief and timeline.',
    icon: 'Search',
  },
  {
    step: '02',
    title: 'Architecture & Design',
    description:
      'I design the system architecture — database schema, API contracts, microservices boundaries, and technology choices — optimized for scalability and maintainability.',
    icon: 'PenTool',
  },
  {
    step: '03',
    title: 'Development & Testing',
    description:
      'Agile development with weekly milestones. Clean, well-tested code with unit and integration tests. You get progress updates and early access to builds.',
    icon: 'Code',
  },
  {
    step: '04',
    title: 'Deployment & Support',
    description:
      'I handle deployment to your infrastructure, provide documentation, and offer post-launch support to ensure everything runs smoothly in production.',
    icon: 'Rocket',
  },
];

export const pricingPackages = [
  {
    name: 'REST API / Backend Development',
    price: '$1,500',
    priceRange: '$1,500 – $4,000',
    description: 'Custom RESTful API development with Spring Boot, database design, and full documentation.',
    features: [
      'Custom REST API with Spring Boot',
      'Database schema design (SQL or MongoDB)',
      'JWT authentication & authorization',
      'Input validation & error handling',
      'Swagger / OpenAPI documentation',
      'Unit & integration tests',
      '7 days post-delivery support',
    ],
    popular: false,
    icon: 'Server',
  },
  {
    name: 'Full Stack Web App',
    price: '$3,500',
    priceRange: '$3,500 – $8,000',
    description: 'Complete web application with Spring Boot backend and responsive frontend.',
    features: [
      'Everything in REST API package',
      'Responsive frontend (Bootstrap / HTML5)',
      'User authentication & dashboards',
      'CRUD operations & data visualization',
      'Role-based access control',
      'Email notifications & integrations',
      'Deployment to your server / cloud',
      '14 days post-delivery support',
    ],
    popular: true,
    icon: 'Layers',
  },
  {
    name: 'Microservices Architecture Consulting',
    price: '$5,000',
    priceRange: '$5,000 – $12,000',
    description: 'Design and implement a scalable microservices architecture tailored to your business.',
    features: [
      'Everything in Full Stack package',
      'Microservices architecture design',
      'API Gateway & service discovery',
      'Docker containerization',
      'Inter-service communication (REST / messaging)',
      'Distributed tracing & monitoring setup',
      'Scalability & load testing',
      '30 days post-delivery support',
    ],
    popular: false,
    icon: 'Network',
  },
];

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#services' },
  { label: 'Skills', href: '#skills' },
  { label: 'Work', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];
