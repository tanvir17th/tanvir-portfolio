export const personal = {
  name: 'MD. TANVIR AHAMED',
  title: 'Junior Software Quality Assurance Engineer',
  description:
    'Junior SQA Engineer with hands-on experience in manual, API, and automation testing. Skilled in Postman, Playwright, JavaScript, and SDLC/STLC methodologies.',
  about:
    'I am a Junior Software Quality Assurance Engineer with hands-on experience in manual, API, and automation testing. I collaborate with development teams to design, execute, and maintain test cases, investigate defects, and validate application behavior. I enjoy turning requirements into reliable test coverage and continuously improving quality through practical testing tools and methodologies.',
  email: 'ahamedtanvir93@gmail.com',
  phone: '+880 1792003530',
  socials: {
    linkedin: 'https://www.linkedin.com/in/md-tanvir-ahamed-330158301/',
    github: 'https://github.com/tanvir17th',
    whatsapp: 'https://wa.me/8801792003530',
  },
};

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export const focusAreas = [
  'Manual Testing',
  'API Testing',
  'Automation Testing',
  'Test Case Design',
  'Bug Reporting',
  'Quality Assurance',
];

export const skillCategories = [
  {
    title: 'Manual Testing',
    icon: 'ClipboardCheck',
    skills: [
      'Functional Testing',
      'Regression Testing',
      'Smoke Testing',
      'Sanity Testing',
      'UI/UX Testing',
      'System Testing',
    ],
  },
  {
    title: 'Test Design',
    icon: 'FileCheck2',
    skills: ['Test Cases', 'Test Scenarios', 'Requirement Analysis', 'Bug Reporting'],
  },
  {
    title: 'API Testing',
    icon: 'Webhook',
    skills: ['Postman', 'REST APIs', 'Newman', 'JSON'],
  },
  {
    title: 'Automation Testing',
    icon: 'Bot',
    skills: ['Playwright', 'JavaScript'],
  },
  {
    title: 'Programming Languages',
    icon: 'Code2',
    skills: ['C++', 'Python', 'HTML', 'JavaScript', 'PHP', 'TypeScript', 'R', 'SQL', 'Java', 'C#'],
  },
  {
    title: 'Frameworks & Technologies',
    icon: 'Layers',
    skills: ['Node.js', 'NestJS', 'Bootstrap', 'Tailwind CSS'],
  },
  {
    title: 'Testing Techniques',
    icon: 'ShieldCheck',
    skills: [
      'Black Box Testing',
      'White Box Testing',
      'Gray Box Testing',
      'Boundary Value Analysis',
      'Equivalence Partitioning',
    ],
  },
  {
    title: 'Tools',
    icon: 'Wrench',
    skills: ['Jira', 'Git', 'GitHub', 'Postman', 'Newman', 'Playwright', 'Selenium IDE', 'VS Code'],
  },
  {
    title: 'Databases',
    icon: 'Database',
    skills: ['MySQL', 'MongoDB'],
  },
  {
    title: 'Methodologies',
    icon: 'GitBranch',
    skills: ['Agile', 'Scrum', 'SDLC', 'STLC'],
  },
  {
    title: 'Performance Testing',
    icon: 'Gauge',
    skills: ['Grafana k6', 'JavaScript', 'Node.js'],
  },
];

export const workExperience = [
  {
    company: 'Luminar Technology',
    role: 'Jr. SQA Engineer',
    duration: 'August 2026 – Present',
    location: 'Dhaka, Bangladesh',
    summary:
      'Supporting product quality across web-based automotive applications through structured test planning, execution, and defect follow-up.',
    responsibilities: [
      'Collaborate with cross-functional development teams to design, execute, and maintain test cases for web-based automotive applications.',
      'Conduct functional, regression, and performance testing to ensure high quality and compliance with software requirements prior to product releases.',
      'Perform defect tracking and reporting using Jira, facilitating rapid bug resolution across development sprints.',
    ],
  },
];

export const projects = [
  {
    title: 'Selenium-Based Testing for Job Portal',
    date: 'March 2026 – April 2026',
    technologies: ['Selenium IDE', 'HTML', 'JavaScript'],
    role: 'SQA Team Role',
    type: 'Team Project',
    description:
      'Performed functional and non-functional testing of a multi-role job portal using Selenium IDE, covering authentication, job search, job posting, credit purchase, and candidate matching.',
    testingCoverage: [
      'Authentication',
      'Job Search',
      'Job Posting',
      'Credit Purchase',
      'Candidate Matching',
    ],
    github: '',
    typeColor: 'blue',
  },
  {
    title: 'Manual Testing of dMoney Application',
    date: 'May 2026 – June 2026',
    technologies: ['Manual Testing', 'Functional Testing', 'Exploratory Testing'],
    type: 'Individual Project',
    description:
      'Tested dMoney financial features including Cash In, Cash Out, Send Money, payments, and loan management through functional, exploratory, negative, and boundary testing.',
    testingCoverage: [
      'Functional Testing',
      'Exploratory Testing',
      'Negative Testing',
      'Boundary Testing',
    ],
    github: 'https://github.com/tanvir17th/dmoney-Manual-Testing/tree/main',
    typeColor: 'purple',
  },
  {
    title: 'API Testing of dMoney Application',
    date: 'July 2026 – August 2026',
    technologies: ['Postman', 'Newman', 'REST API', 'JavaScript'],
    type: 'Individual Project',
    description:
      'Performed REST API testing of dMoney financial operations using Postman and Newman, covering authentication, user management, deposits, withdrawals, and money transfers.',
    testingCoverage: [
      'Authentication',
      'User Management',
      'Deposits',
      'Withdrawals',
      'Money Transfers',
      'Authorization Testing',
      'Positive Testing',
      'Negative Testing',
      'Boundary Testing',
      'Automated Assertions',
      'Environment Variables',
    ],
    github: 'https://github.com/tanvir17th/dmoney-api-testing-automation-',
    typeColor: 'blue',
  },
  {
    title: 'BlogSpace – Full-Stack Blog Management System',
    date: '2026',
    technologies: ['Next.js', 'React 18', 'Tailwind CSS', 'Node.js', 'Express', 'MySQL', 'JWT'],
    type: 'Individual Project',
    description:
      'Full-stack, role-based blog management application enabling users and administrators to create, manage, and interact with dynamic content. Features secure JWT authentication, state hydration across reloads, custom avatar image uploading via Multer, and role-based access control separating Standard Users from Admins.',
    testingCoverage: [
      'JWT Authentication',
      'Role-Based Access Control (RBAC)',
      'Avatar Image Upload (Multer)',
      'State Hydration',
      'Admin & User Separation',
    ],
    github: 'https://github.com/tanvir17th/blog-site',
    typeColor: 'purple',
  },
  {
    title: 'Blog API Management System (Node.js, Express & PostgreSQL)',
    date: '2026',
    technologies: ['Node.js', 'Express', 'PostgreSQL', 'JWT', 'Postman', 'Newman'],
    type: 'Individual Project',
    description:
      'Secure, scalable RESTful API built with Node.js, Express, and PostgreSQL. Enforces strict Role-Based Access Control across Admin, User, and Guest tiers, with modular content management, robust authentication, and structured data handling.',
    testingCoverage: [
      'Three-Tier RBAC (Admin, User, Guest)',
      'JWT Authentication & Password Hashing',
      'CRUD Blog Operations',
      'Search, Sort & Filter Endpoints',
      'Automated API Testing (Postman + Newman)',
      'Layered Architecture (Controllers, Routes, Models)',
    ],
    github: 'https://github.com/tanvir17th/cli-blog-database-management-system',
    typeColor: 'blue',
  },
  {
    title: 'dMoney API Integration Testing',
    date: '2026',
    technologies: ['JavaScript', 'Mocha', 'Chai', 'Axios', 'dotenv', 'Node.js'],
    type: 'Individual Project',
    description:
      'Automated integration test suite for the DMoney mobile financial service API. Verifies end-to-end fintech workflows including multi-role account creation (Admin, Agent, Customer, Merchant), account activation, two-factor OTP verification, and financial transaction processing such as deposits, send money transfers, cashouts, and merchant payments.',
    testingCoverage: [
      'Multi-Role Account Creation',
      'Account Activation',
      'Two-Factor OTP Verification',
      'Deposits & Send Money Transfers',
      'Cashouts & Merchant Payments',
    ],
    github: 'https://github.com/tanvir17th/dmoney-api-intergration-test',
    typeColor: 'blue',
  },
  {
    title: 'Blog API Management System',
    date: '2026',
    technologies: ['Node.js', 'MySQL', 'REST API', 'Postman', 'Newman', 'JavaScript', 'SQL'],
    type: 'Individual Project',
    description:
      'A secure, scalable RESTful API built with Node.js, Express, and MySQL designed to power modern blogging platforms. Enforces Role-Based Access Control (RBAC) across Admin, User, and Guest tiers, providing modular content management, robust authentication mechanisms, and structured data handling.',
    testingCoverage: [
      'Role-Based Access Control (RBAC)',
      'JWT Authentication & Password Hashing',
      'CRUD Blog Operations',
      'Input Validation Middleware',
      'Automated API Testing (Postman + Newman)',
    ],
    github: 'https://github.com/tanvir17th/blog-api-management',
    typeColor: 'purple',
  },
  {
    title: 'dMoney Web Portal E2E Automation Suite',
    date: '2026',
    technologies: ['Playwright', 'TypeScript', 'JavaScript', 'Node.js', 'imap-simple', 'mailparser', 'dotenv'],
    type: 'Individual Project',
    description:
      'An End-to-End (E2E) automated testing framework built for the dMoney web application. The suite automates complete financial workflows across different user roles (Admin, System, Agent, and Customer). Key capabilities include dynamic account registration, admin user activation, system-to-agent funding, live Gmail IMAP integration for automated 4-digit OTP retrieval and password reset links, Cash In transactions, statement date-range filtering, and exporting transaction records to local CSV files.',
    testingCoverage: [
      'Multi-Role Workflows (Admin, System, Agent, Customer)',
      'Dynamic Account Registration',
      'Admin User Activation',
      'System-to-Agent Funding',
      'Gmail IMAP OTP Retrieval',
      'Password Reset Automation',
      'Cash In Transactions',
      'Statement Date-Range Filtering',
      'CSV Export',
    ],
    github: 'https://github.com/tanvir17th/dmoney-playwright-automation',
    typeColor: 'blue',
  },
  {
    title: 'dMoney API Load & Performance Testing Suite (Grafana k6)',
    date: '2026',
    technologies: ['Grafana k6', 'JavaScript', 'Node.js', 'REST API', 'JWT', 'k6-reporter'],
    type: 'Individual Project',
    description:
      'Designed and implemented an automated performance and stress testing framework for dMoney, a Fintech REST API application supporting multi-role transactions (System, Admin, Agent, Customer, and Merchant). The project evaluates system scalability, throughput, and error rates under multi-phase concurrent Virtual User (VU) traffic using Grafana k6. It includes dynamic JWT authentication handling, dynamic OTP retrieval, automated agent/customer wallet balance management, custom performance metrics tracking (SendMoney, Deposit, and Payment success rates), and automated HTML test report generation.',
    testingCoverage: [
      'Multi-Phase Dynamic Load Profiles (2 to 8 VUs)',
      'Automated Auth Workflow (Admin Login, OTP, JWT)',
      'Custom Performance Thresholds (Error <10%, p(95) <1000ms)',
      'Wallet Balance & Limit Management',
      'Automated HTML Reporting (k6-reporter)',
      'Custom Metrics (Rate, Trend)',
    ],
    github: 'https://github.com/tanvir17th/dmoney-k6-test',
    typeColor: 'purple',
  },
];

export const testingWorkflow = [
  { title: 'Requirement Analysis', icon: 'FileSearch' },
  { title: 'Test Planning', icon: 'ClipboardList' },
  { title: 'Test Scenario Design', icon: 'PenTool' },
  { title: 'Test Case Creation', icon: 'FileText' },
  { title: 'Test Execution', icon: 'Play' },
  { title: 'Bug Reporting', icon: 'Bug' },
  { title: 'Regression Testing', icon: 'Repeat' },
  { title: 'Test Closure', icon: 'CheckCircle2' },
];

export const coursework = [
  'Software Quality and Testing',
  'Software Development Project Management',
  'Software Requirement Engineering',
  'Data Structures and Algorithms',
  'Operating Systems',
  'Database Management Systems',
  'Programming in Python',
  'Artificial Intelligence',
];

export const certifications = [
  {
    name: 'Full Stack SQA/SDET',
    issuer: 'Road To SDET',
    issueDate: 'October 2026',
    credentialId: 'MTA58488',
    credentialUrl: 'https://roadtocareer.net/api/images/certificates/Md-Tanvir-Ahamed--MTA58488.png?v=1793351099992',
  },
];

export const education = {
  institution: 'American International University-Bangladesh',
  degree: 'Bachelor of Science in Computer Science and Engineering',
  major: 'Software Engineering',
  duration: 'June 2021 – December 2025',
};
