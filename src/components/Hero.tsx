import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, MotionConfig, type Variants } from 'framer-motion';
import { Mail, Download, FolderGit2, Linkedin, Github, MessageCircle } from 'lucide-react';
import { personal, focusAreas } from '@/data/portfolio';

const EASE = [0.22, 1, 0.36, 1] as const;

// Entrance timeline (seconds): badge → name letters → title → focus chip → description words → actions.
const TIMING = { badge: 0.15, name: 0.3, title: 1.0, focus: 1.15, description: 1.3, actions: 1.7, scroll: 2.4 };

const reveal: Variants = {
  hidden: { opacity: 0, y: 20, filter: 'blur(10px)' },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.9, ease: EASE, delay },
  }),
};

const actionGroup: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: TIMING.actions } },
};

const socialGroup: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: TIMING.actions + 0.25 } },
};

const actionItem: Variants = {
  hidden: { opacity: 0, y: 16, filter: 'blur(6px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.7, ease: EASE } },
};

export default function Hero() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <MotionConfig reducedMotion="user">
      <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
        <AnimatedBackground />

        <div className="section-padding max-w-7xl mx-auto w-full relative z-10">
          <div className="relative max-w-2xl">
            <motion.div
              aria-hidden="true"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 2, ease: EASE }}
              className="pointer-events-none absolute -left-24 -top-16 -z-10 h-[420px] w-[420px] rounded-full bg-electric-600/15 blur-[120px]"
            />

            {personal.openToWork && (
              <motion.div
                variants={reveal}
                custom={TIMING.badge}
                initial="hidden"
                animate="visible"
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-electric-500/10 border border-electric-500/20 mb-6"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-electric-400 opacity-75 animate-ping" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-electric-400" />
                </span>
                <span className="text-sm text-electric-300 font-medium">Open to Work</span>
              </motion.div>
            )}

            <AnimatedName text={personal.name} delay={TIMING.name} />

            <motion.div
              variants={reveal}
              custom={TIMING.title}
              initial="hidden"
              animate="visible"
              className="flex items-center gap-3 mb-4"
            >
              <motion.span
                aria-hidden="true"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.9, ease: EASE, delay: TIMING.title }}
                className="h-px w-10 shrink-0 origin-left bg-gradient-to-r from-electric-400 to-accent-400"
              />
              <p className="text-lg sm:text-xl font-semibold text-gradient">
                {personal.title}
              </p>
            </motion.div>

            <RotatingFocus items={focusAreas} delay={TIMING.focus} />

            <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-xl mb-8">
              {personal.description.split(' ').map((word, i) => (
                <span key={i}>
                  <motion.span
                    className="inline-block"
                    initial={{ opacity: 0, y: 8, filter: 'blur(4px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{ duration: 0.6, ease: EASE, delay: TIMING.description + i * 0.018 }}
                  >
                    {word}
                  </motion.span>{' '}
                </span>
              ))}
            </p>

            <motion.div variants={actionGroup} initial="hidden" animate="visible" className="flex flex-wrap gap-3 mb-8">
              <motion.div variants={actionItem}>
                <button onClick={() => scrollTo('#projects')} className="btn-primary">
                  <FolderGit2 size={18} />
                  View Projects
                </button>
              </motion.div>
              <motion.div variants={actionItem}>
                <button onClick={() => scrollTo('#contact')} className="btn-secondary">
                  <Mail size={18} />
                  Contact Me
                </button>
              </motion.div>
              <motion.div variants={actionItem}>
                <a
                  href="/Md_Tanvir_Ahamed.pdf"
                  download="Md_Tanvir_Ahamed.pdf"
                  type="application/pdf"
                  className="btn-secondary"
                >
                  <Download size={18} />
                  Download CV
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              variants={socialGroup}
              initial="hidden"
              animate="visible"
              className="flex items-center gap-4"
            >
              {[
                { href: personal.socials.linkedin, label: 'LinkedIn', icon: <Linkedin size={20} /> },
                { href: personal.socials.github, label: 'GitHub', icon: <Github size={20} /> },
                { href: personal.socials.whatsapp, label: 'WhatsApp', icon: <MessageCircle size={20} />, accent: 'purple' as const },
                { href: `mailto:${personal.email}`, label: 'Email', icon: <Mail size={20} /> },
              ].map((social) => (
                <motion.div key={social.label} variants={actionItem}>
                  <SocialLink href={social.href} label={social.label} accent={social.accent}>
                    {social.icon}
                  </SocialLink>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: TIMING.scroll, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-2"
        >
          <span className="text-xs text-gray-600 font-mono">SCROLL</span>
          <div className="w-6 h-10 rounded-full border-2 border-gray-700 flex justify-center pt-2">
            <div className="w-1 h-2 rounded-full bg-electric-400 animate-scroll-down" />
          </div>
        </motion.div>
      </section>
    </MotionConfig>
  );
}

function AnimatedName({ text, delay }: { text: string; delay: number }) {
  const words = text.split(' ');
  const wordOffsets = words.map((_, i) => words.slice(0, i).join('').length);

  return (
    <h1
      aria-label={text}
      className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mb-5 text-shadow-glow"
    >
      {words.map((word, wi) => (
        <span key={wi} aria-hidden="true" className="inline-block whitespace-nowrap mr-[0.25em] last:mr-0">
          {word.split('').map((char, ci) => (
            <motion.span
              key={ci}
              className="inline-block"
              initial={{ opacity: 0, y: '0.45em', filter: 'blur(12px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.9, ease: EASE, delay: delay + (wordOffsets[wi] + ci) * 0.035 }}
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </h1>
  );
}

function RotatingFocus({ items, delay }: { items: string[]; delay: number }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setIndex((i) => (i + 1) % items.length), 2600);
    return () => window.clearInterval(id);
  }, [items.length]);

  return (
    <motion.div
      variants={reveal}
      custom={delay}
      initial="hidden"
      animate="visible"
      className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm sm:text-base text-gray-500 mb-6"
    >
      <span className="sr-only">Focused on {items.join(', ')}</span>
      <span aria-hidden="true">Focused on</span>
      <motion.span
        aria-hidden="true"
        layout
        transition={{ layout: { duration: 0.45, ease: EASE } }}
        className="relative inline-flex overflow-hidden rounded-lg border border-electric-500/25 bg-electric-500/10 px-3 py-1 font-medium text-electric-200 shadow-[0_0_20px_rgba(59,130,246,0.12)]"
      >
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={items[index]}
            initial={{ y: '110%', opacity: 0, filter: 'blur(6px)' }}
            animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
            exit={{ y: '-110%', opacity: 0, filter: 'blur(6px)' }}
            transition={{ duration: 0.5, ease: EASE }}
            className="inline-block whitespace-nowrap"
          >
            {items[index]}
          </motion.span>
        </AnimatePresence>
      </motion.span>
    </motion.div>
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

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
};

function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    let particles: Particle[] = [];
    let animationFrame = 0;
    let lastTime = 0;
    let visible = true;
    let mouse = { x: -1000, y: -1000 };
    const beamDistance = 150;

    const createParticles = () => {
      const count = window.innerWidth < 768 ? 28 : 54;
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.clientWidth,
        y: Math.random() * canvas.clientHeight,
        vx: (Math.random() - 0.5) * 0.55,
        vy: (Math.random() - 0.5) * 0.55,
        radius: Math.random() * 1.6 + 0.8,
      }));
    };

    const resize = () => {
      const pixelRatio = Math.min(window.devicePixelRatio, 2);
      canvas.width = canvas.clientWidth * pixelRatio;
      canvas.height = canvas.clientHeight * pixelRatio;
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      createParticles();
    };

    const handleMouseMove = (event: MouseEvent) => {
      const bounds = canvas.getBoundingClientRect();
      mouse = { x: event.clientX - bounds.left, y: event.clientY - bounds.top };
    };

    const handleMouseLeave = () => {
      mouse = { x: -1000, y: -1000 };
    };

    const animate = (time: number) => {
      // Normalize movement to 60fps so high-refresh displays don't speed it up.
      const step = lastTime ? Math.min((time - lastTime) / (1000 / 60), 3) : 1;
      lastTime = time;
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      context.clearRect(0, 0, width, height);

      particles.forEach((particle, index) => {
        particle.x += particle.vx * step;
        particle.y += particle.vy * step;

        if (particle.x < 0 || particle.x > width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > height) particle.vy *= -1;

        const mouseDistance = Math.hypot(mouse.x - particle.x, mouse.y - particle.y);
        if (mouseDistance < 130) {
          const force = (130 - mouseDistance) / 130;
          const safeDistance = Math.max(mouseDistance, 1);
          particle.x -= ((mouse.x - particle.x) / safeDistance) * force * 2.2;
          particle.y -= ((mouse.y - particle.y) / safeDistance) * force * 2.2;
        }

        context.beginPath();
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        context.fillStyle = 'rgba(96, 165, 250, 0.7)';
        context.shadowBlur = 12;
        context.shadowColor = 'rgba(59, 130, 246, 0.75)';
        context.fill();
        context.shadowBlur = 0;

        for (let nextIndex = index + 1; nextIndex < particles.length; nextIndex += 1) {
          const next = particles[nextIndex];
          const distance = Math.hypot(particle.x - next.x, particle.y - next.y);
          if (distance < beamDistance) {
            context.beginPath();
            context.moveTo(particle.x, particle.y);
            context.lineTo(next.x, next.y);
            context.strokeStyle = `rgba(59, 130, 246, ${(1 - distance / beamDistance) * 0.55})`;
            context.lineWidth = 0.7;
            context.stroke();
          }
        }

        if (mouseDistance < 130) {
          context.beginPath();
          context.moveTo(particle.x, particle.y);
          context.lineTo(mouse.x, mouse.y);
          context.strokeStyle = `rgba(34, 211, 238, ${(1 - mouseDistance / 130) * 0.7})`;
          context.lineWidth = 1;
          context.stroke();
        }
      });

      if (visible) animationFrame = requestAnimationFrame(animate);
    };

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      cancelAnimationFrame(animationFrame);
      if (visible) {
        lastTime = 0;
        animationFrame = requestAnimationFrame(animate);
      }
    });

    resize();
    observer.observe(canvas);
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleMouseLeave, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrame);
      observer.disconnect();
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleMouseLeave);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const nodes = [
    { label: 'API', detail: 'REST / JSON', position: 'top-[46%] right-[30%]', tone: 'blue' },
    { label: 'TEST', detail: 'Playwright', position: 'top-[12%] left-[44%]', tone: 'cyan' },
    { label: 'BUG', detail: 'Jira Track', position: 'top-[29%] right-[15%]', tone: 'blue' },
    { label: 'ASSERT', detail: 'Strict Equal', position: 'bottom-[27%] right-[10%]', tone: 'blue' },
    { label: 'QA', detail: 'Automation', position: 'bottom-[8%] left-[58%]', tone: 'cyan' },
    { label: 'CI/CD', detail: 'GitHub Actions', position: 'bottom-[10%] right-[22%]', tone: 'blue' },
  ];

  const logs = [
    '✓ 34/34 test cases passed (820ms)',
    "assert response.json()['success'] === true",
    'POST /api/v2/auth/login 200 OK',
    'expect(res.status).toBe(200)',
  ];

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 grid-pattern opacity-60" />
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_10%,rgba(6,8,15,0.35)_70%,#06080f_100%)]" />

      <div className="absolute inset-0 pointer-events-none">
        {nodes.map((node, index) => (
          <motion.div
            key={node.label}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1, y: [0, index % 2 ? 12 : -10, 0] }}
            transition={{ opacity: { duration: 0.6, delay: index * 0.12 }, scale: { duration: 0.6, delay: index * 0.12 }, y: { duration: 6 + index * 0.4, repeat: Infinity, ease: 'easeInOut', delay: index * 0.2 } }}
            className={`absolute ${node.position} hidden xl:flex w-24 h-24 rounded-full border border-electric-400/35 bg-ink-900/75 backdrop-blur-md shadow-[0_0_28px_rgba(59,130,246,0.2)] flex-col items-center justify-center`}
          >
            <span className={`font-mono text-xs sm:text-sm font-bold tracking-widest ${node.tone === 'cyan' ? 'text-cyan-300' : 'text-electric-300'}`}>
              {node.label}
            </span>
            <span className="text-[9px] font-mono text-gray-500">{node.detail}</span>
            {index === 0 && <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-electric-400 animate-ping" />}
          </motion.div>
        ))}
      </div>

      <div className="absolute top-[18%] right-[18%] hidden xl:block rounded-lg border border-white/5 bg-ink-900/20 p-3 font-mono text-[11px] leading-relaxed text-gray-600/70 backdrop-blur-[2px]">
        {logs.map((log, index) => (
          <p key={log} className={index === 0 ? 'text-emerald-400/60' : index === 2 ? 'text-electric-400/60' : undefined}>{log}</p>
        ))}
      </div>

      <div className="absolute top-[60%] right-[22%] hidden xl:block rounded-lg border border-white/5 bg-ink-900/20 p-3 font-mono text-[11px] leading-relaxed text-gray-600/70 backdrop-blur-[2px]">
        <p className="text-cyan-400/60">playwright test --headed --grep "@smoke"</p>
        <p>GET /api/v2/users/123</p>
        <p className="text-emerald-400/60">STATUS 200 OK (112ms)</p>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink-950 via-ink-950/35 to-transparent" />
    </div>
  );
}
