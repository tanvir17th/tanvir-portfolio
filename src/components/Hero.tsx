import { motion } from 'framer-motion';
import { Mail, Download, FolderGit2, Linkedin, Github, MessageCircle } from 'lucide-react';
import { personal } from '@/data/portfolio';

export default function Hero() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      <AnimatedBackground />

      <div className="section-padding max-w-7xl mx-auto w-full relative z-10">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-electric-500/10 border border-electric-500/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-electric-400 animate-pulse" />
              <span className="text-sm text-electric-300 font-medium">Open to Work</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4 text-shadow-glow">
              {personal.name}
            </h1>

            <p className="text-lg sm:text-xl text-gradient font-semibold mb-6">{personal.title}</p>

            <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-xl mb-8">
              {personal.description}
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <button onClick={() => scrollTo('#projects')} className="btn-primary">
                <FolderGit2 size={18} />
                View Projects
              </button>
              <button onClick={() => scrollTo('#contact')} className="btn-secondary">
                <Mail size={18} />
                Contact Me
              </button>
              <a
                href="/Md_Tanvir_Ahamed.pdf"
                download="Md_Tanvir_Ahamed.pdf"
                type="application/pdf"
                className="btn-secondary"
              >
                <Download size={18} />
                Download CV
              </a>
            </div>

            <div className="flex items-center gap-4">
              <SocialLink href={personal.socials.linkedin} label="LinkedIn"><Linkedin size={20} /></SocialLink>
              <SocialLink href={personal.socials.github} label="GitHub"><Github size={20} /></SocialLink>
              <SocialLink href={personal.socials.whatsapp} label="WhatsApp" accent="purple"><MessageCircle size={20} /></SocialLink>
              <SocialLink href={`mailto:${personal.email}`} label="Email"><Mail size={20} /></SocialLink>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-gray-600 font-mono">SCROLL</span>
          <div className="w-6 h-10 rounded-full border-2 border-gray-700 flex justify-center pt-2">
            <div className="w-1 h-2 rounded-full bg-electric-400 animate-scroll-down" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SocialLink({
  href,
  label,
  accent = 'blue',
  children,
}: {
  href: string;
  label: string;
  accent?: 'blue' | 'purple';
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      className={`w-11 h-11 rounded-xl glass-card glass-card-hover flex items-center justify-center text-gray-400 ${
        accent === 'purple' ? 'hover:text-accent-300' : 'hover:text-electric-300'
      }`}
      aria-label={label}
    >
      {children}
    </a>
  );
}

function AnimatedBackground() {
  const nodes = [
    { x: 100, y: 120, label: 'API', delay: 0 },
    { x: 300, y: 80, label: 'Test', delay: 0.4 },
    { x: 500, y: 160, label: 'Bug', delay: 0.8 },
    { x: 180, y: 300, label: 'CI/CD', delay: 1.2 },
    { x: 420, y: 340, label: 'QA', delay: 1.6 },
    { x: 620, y: 260, label: 'Assert', delay: 2.0 },
  ];

  const lines = [
    [0, 1],
    [1, 2],
    [0, 3],
    [1, 4],
    [2, 5],
    [3, 4],
    [4, 5],
    [1, 3],
  ];

  const codeLines = [
    'expect(status).toBe(200)',
    "assert response.json()['success'] == True",
    'test("login flow", async () => {',
    '  await page.click("#submit")',
    '})',
    'npm run test -- --coverage',
    '✓ 24/24 test cases passed',
    'POST /api/v2/auth/login',
    'GET /api/v2/users/123',
    'newman run collection.json',
  ];

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-40" />

      {/* Gradient blobs */}
      <motion.div
        animate={{ x: [0, 40, 0], y: [0, -30, 0], opacity: [0.08, 0.12, 0.08] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-electric-600/10 rounded-full blur-[120px]"
      />
      <motion.div
        animate={{ x: [0, -40, 0], y: [0, 30, 0], opacity: [0.06, 0.1, 0.06] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent-600/10 rounded-full blur-[120px]"
      />

      {/* Floating code fragments */}
      {codeLines.map((line, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: [0, 0.25, 0],
            scale: [0.8, 1, 0.8],
            x: [0, 20, 0],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 8 + i,
            repeat: Infinity,
            delay: i * 1.2,
            ease: 'easeInOut',
          }}
          className={`absolute font-mono text-xs hidden lg:block whitespace-nowrap ${
            i % 3 === 0
              ? 'text-electric-400/40'
              : i % 3 === 1
                ? 'text-accent-400/35'
                : 'text-gray-500/40'
          }`}
          style={{
            top: `${10 + ((i * 13) % 70)}%`,
            left: `${55 + ((i * 7) % 35)}%`,
          }}
        >
          {line}
        </motion.div>
      ))}

      {/* Network nodes SVG */}
      <svg
        viewBox="0 0 700 450"
        className="absolute inset-0 w-full h-full opacity-50"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.3" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {lines.map(([a, b], i) => (
          <motion.line
            key={i}
            x1={nodes[a].x}
            y1={nodes[a].y}
            x2={nodes[b].x}
            y2={nodes[b].y}
            stroke="url(#lineGrad)"
            strokeWidth="1"
            strokeDasharray="5 5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0, 0.6, 0.3, 0.6, 0] }}
            transition={{
              duration: 4,
              delay: 0.5 + i * 0.2,
              repeat: Infinity,
              repeatDelay: 3,
              ease: 'easeInOut',
            }}
          />
        ))}

        {/* Moving data dots along lines */}
        {lines.map(([a, b], i) => (
          <motion.circle
            key={`dot-${i}`}
            r="3"
            fill="#60a5fa"
            filter="url(#glow)"
            initial={{ cx: nodes[a].x, cy: nodes[a].y, opacity: 0 }}
            animate={{
              cx: [nodes[a].x, nodes[b].x],
              cy: [nodes[a].y, nodes[b].y],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2.5,
              delay: 1 + i * 0.3,
              repeat: Infinity,
              repeatDelay: 2,
              ease: 'easeInOut',
            }}
          />
        ))}

        {nodes.map((node, i) => (
          <motion.g
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: node.delay * 0.15, type: 'spring' }}
          >
            <motion.circle
              cx={node.x}
              cy={node.y}
              r="16"
              fill="#0a0e1a"
              stroke="#3b82f6"
              strokeWidth="1.5"
              filter="url(#glow)"
              animate={{ r: [16, 20, 16], opacity: [0.6, 0.9, 0.6] }}
              transition={{
                duration: 3,
                delay: node.delay * 0.15,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <text
              x={node.x}
              y={node.y + 3}
              textAnchor="middle"
              className="fill-electric-300/70 font-mono"
              fontSize="8"
              fontWeight="600"
            >
              {node.label}
            </text>
          </motion.g>
        ))}
      </svg>

      {/* Bottom fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink-950" />
    </div>
  );
}
