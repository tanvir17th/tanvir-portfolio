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
    github: 'https://github.com/tanvir17th/dmoney-api-testing/tree/main',
    typeColor: 'blue',
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

export const education = {
  institution: 'American International University-Bangladesh',
  degree: 'Bachelor of Science in Computer Science and Engineering',
  major: 'Software Engineering',
  duration: 'June 2021 – December 2025',
};
