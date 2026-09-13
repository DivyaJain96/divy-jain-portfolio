export const profile = {
  name: 'Divy Jain',
  firstName: 'Divy',
  lastName: 'Jain',
  initials: 'DJ',
  role: 'Software Developer',
  headline: 'I build reliable backend systems, APIs, and scalable business applications.',
  rotatingFocus: [
    'Java & Spring Boot backends',
    'REST APIs and integrations',
    'business workflows',
    'performance optimization',
  ],
  tagline: 'Java · Spring Boot · Backend · APIs · Integrations',
  email: '',
  phone: '',
  whatsapp: '',
  calendly: '',
  github: '',
  linkedin: 'https://www.linkedin.com/in/divyajain9649',
  bio: 'I build and optimize business applications with Java, Spring Boot, SQL, and related backend technologies — with a focus on integrations, workflows, and performance.',
  bioShort: 'Software Developer specializing in Java, Spring Boot, APIs, and integrations.',
  // Actual profile photo lives at public/profile.jpg and is served as /profile.jpg.
  photo: '/profile.jpg',
  resume: '/resume.pdf',
  location: 'Ahmedabad, Gujarat, India',
  availability: 'Open to projects and conversations',
};

export const stats = [
  { label: 'Years of Experience', value: 3, suffix: '+' },
  { label: 'Work areas showcased', value: 6, suffix: '' },
  { label: 'Primary stack', value: 0, suffix: '', display: 'Java' },
  { label: 'Focus', value: 0, suffix: '', display: 'Backend' },
];

export const strengths = [
  'Java & Spring Boot',
  'REST APIs',
  'System integrations',
  'Business workflows',
  'Performance work',
  'Production debugging',
];

export const focusAreas = [
  {
    title: 'Reliable backends',
    text: 'Java and Spring Boot applications with clear business logic — built to stay maintainable after launch.',
  },
  {
    title: 'Integrations that stick',
    text: 'Payments, meetings, and third-party APIs connected through webhooks, notifications, and sync — not one-off scripts.',
  },
  {
    title: 'Less manual work',
    text: 'I look for the steps people still do by hand and move them into the workflow: receipts, mappings, status updates.',
  },
  {
    title: 'Always sharpening',
    text: 'Continuously building skill in Java, Spring Boot, microservices, system design, and scalable backend architecture.',
  },
];

export const primaryStack = [
  'Java',
  'Spring Boot',
  'Backend Development',
  'REST APIs',
  'Microservices',
  'SQL',
  'PostgreSQL',
  'System Integrations',
];

export const skillGroups = [
  {
    title: 'Backend & Frameworks',
    icon: 'Server',
    accent: 'champagne',
    skills: [
      { name: 'Java' },
      { name: 'Advanced Java' },
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
    title: 'Databases & Performance',
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
      { name: 'Database Migrations' },
    ],
  },
  {
    title: 'Web Technologies',
    icon: 'Monitor',
    accent: 'fog',
    skills: [
      { name: 'JavaScript' },
      { name: 'jQuery' },
      { name: 'AJAX' },
      { name: 'HTML' },
      { name: 'CSS' },
      { name: 'JSP' },
      { name: 'JSTL' },
    ],
  },
  {
    title: 'Integrations',
    icon: 'Cable',
    accent: 'champagne',
    skills: [
      { name: 'REST API Integration' },
      { name: 'Webhooks' },
      { name: 'Third-Party API Integration' },
      { name: 'Third-Party Service Integration' },
      { name: 'System Integration' },
      { name: 'Razorpay Payment Gateway Integration' },
      { name: 'Microsoft Teams Integration' },
      { name: 'Data Integration' },
    ],
  },
  {
    title: 'Development Practices',
    icon: 'GitBranch',
    accent: 'signal',
    skills: [
      { name: 'Git' },
      { name: 'GitHub' },
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
  'Backend Development',
  'REST APIs',
  'Microservices',
  'System Integrations',
  'SQL',
  'PostgreSQL',
  'Performance Optimization',
  'Hibernate',
  'Webhooks',
  'Razorpay',
  'Microsoft Teams',
  'Git',
];

export const experience = [
  {
    role: 'Software Developer',
    organization: 'Backend systems, integrations, and business applications',
    duration: '3+ years',
    location: 'Ahmedabad, Gujarat, India',
    type: 'Professional',
    summary:
      'The work has grown from feature delivery into owning workflows end to end — from the first validation through production fixes.',
    contributions: [
      'Took ownership of subscription and billing backend flows: rules, validations, sync, and later improvements',
      'Connected payment and meeting systems so events, notifications, and recordings live inside the product',
      'Cut redundant DataTable/API calls and kept the path usable at 5,000+ records',
      'Supported mapping, validation, and rollout for large data moves, plus debugging when production misbehaved',
    ],
  },
  {
    role: 'B.S. Computer Science',
    organization: 'Computer science foundation',
    duration: 'Education',
    location: '',
    type: 'Education',
    summary:
      'Training in programming and structured problem solving that still shows up in how I approach production work.',
    contributions: [
      'Solid grounding in fundamentals, data structures, and careful trade-offs',
      'Carried that habit into readable code and explicit contracts',
    ],
  },
];

export const projects = [
  {
    title: 'Subscription & Business Workflow Platform',
    problem:
      'Subscription and billing rules were spread across validations, status changes, integrations, and later data moves — easy to break and hard to own.',
    solution:
      'I built and owned the backend path: business logic, validations, billing steps, integrations, synchronization, migration support, and follow-up after production.',
    impact: 'A single, reliable workflow instead of disconnected steps — with room to correct issues after go-live.',
    tags: ['Java', 'Spring Boot', 'Backend', 'Billing', 'SQL'],
    category: 'Systems',
    liveDemo: '',
    github: '',
    featured: true,
    visual: 'commerce',
  },
  {
    title: 'Payment Gateway & Webhook Automation',
    problem: 'Payment confirmation and receipt generation still needed manual follow-up after the gateway recorded a payment.',
    solution:
      'I integrated Razorpay payment workflows and used webhook events so the backend could process the payment and generate the receipt automatically.',
    impact: 'Helped eliminate manual receipt generation by moving the work onto webhook-driven backend processing.',
    tags: ['Razorpay', 'Webhooks', 'REST APIs', 'Java'],
    category: 'Integrations',
    liveDemo: '',
    github: '',
    featured: true,
    visual: 'api',
  },
  {
    title: 'Meeting Scheduling & Microsoft Teams Integration',
    problem: 'Creating, changing, and following up on meetings lived outside the product, so the team had to handle the lifecycle by hand.',
    solution:
      'I integrated Microsoft Teams so the application could create, cancel, and reschedule meetings, send email notifications, and support recording and playback.',
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
    problem: 'Multiple redundant API calls caused unnecessary load and inefficient data processing on DataTable-driven screens.',
    solution:
      'I redesigned the workflow so those screens use a single, more efficient API path instead of repeating the same calls.',
    impact: '60%+ API load reduction while supporting 5,000+ records.',
    metrics: [
      { value: '60%+', label: 'API load reduction' },
      { value: '5,000+', label: 'Records supported' },
    ],
    tags: ['Java', 'SQL', 'API Optimization', 'DataTables'],
    category: 'Performance',
    liveDemo: '',
    github: '',
    featured: false,
    visual: 'gateway',
  },
  {
    title: 'Large-Scale Data Migration & Validation',
    problem: 'Moving business and plan data into a new structure is risky when mapping, validation, and corrections happen too late.',
    solution:
      'I worked on mapping, validation, data correction, transformation, and production rollout support so the move could be checked before and during cutover.',
    impact: 'A more controlled migration path, with explicit validation and support when production needed corrections.',
    tags: ['SQL', 'Migrations', 'Validation', 'Production'],
    category: 'Reliability',
    liveDemo: '',
    github: '',
    featured: false,
    visual: 'inventory',
  },
];

export const services = [
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
    plain: 'Wiring payments, meetings, and other tools into the product so events happen without extra manual steps.',
  },
  {
    title: 'Business Application Development',
    icon: 'Layers',
    value: 'Workflows for CRM, billing, operations, subscriptions, and the day-to-day work of an enterprise app.',
    plain: 'Improving the CRM, billing, subscription, and operations flows teams use every day.',
  },
  {
    title: 'Performance Optimization',
    icon: 'Gauge',
    value: 'Fewer wasted API calls, tighter database work, and screens that stay usable as data grows.',
    plain: 'Making screens and APIs faster and lighter as data and traffic grow.',
  },
  {
    title: 'Database & Backend Solutions',
    icon: 'Database',
    value: 'SQL databases, migrations, query work, and backend logic that stay understandable in production.',
    plain: 'Keeping business data accurate, queryable, and ready for production changes.',
  },
];

export const highlights = [
  {
    title: 'Backend workflow problems',
    text: 'Business rules, validations, and status changes that have drifted into separate, hard-to-own paths.',
    icon: 'Workflow',
  },
  {
    title: 'API performance issues',
    text: 'Screens that hit the server too many times, or slow down as the record count climbs.',
    icon: 'Gauge',
  },
  {
    title: 'System integration challenges',
    text: 'Payments, meetings, and third-party APIs that need to behave as part of the product — not as a side process.',
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
    text: 'Finding the actual cause of a live issue and fixing the backend path, not only the symptom.',
    icon: 'Bug',
  },
  {
    title: 'Business automation',
    text: 'Receipts, notifications, and status updates that still happen by hand.',
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
    title: 'Scalable backend systems',
    text: 'Java and Spring Boot services designed for real operations, not only happy-path demos.',
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
    text: 'REST design, auth, and third-party systems connected with care for failure modes.',
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
