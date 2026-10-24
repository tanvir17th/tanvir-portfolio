import { useEffect, useRef } from 'react';
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

    const animate = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      context.clearRect(0, 0, width, height);

      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

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

      animationFrame = requestAnimationFrame(animate);
    };

    resize();
    animate();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const nodes = [
    { label: 'API', detail: 'REST / JSON', position: 'top-[23%] left-[7%] sm:left-[12%]', tone: 'blue' },
    { label: 'TEST', detail: 'Playwright', position: 'top-[14%] left-[40%] sm:left-[44%]', tone: 'cyan' },
    { label: 'BUG', detail: 'Jira Track', position: 'top-[29%] right-[8%] sm:right-[15%]', tone: 'blue' },
    { label: 'ASSERT', detail: 'Strict Equal', position: 'bottom-[27%] right-[6%] sm:right-[12%]', tone: 'blue' },
    { label: 'QA', detail: 'Automation', position: 'bottom-[18%] left-[41%] sm:left-[46%]', tone: 'cyan' },
    { label: 'CI/CD', detail: 'GitHub Actions', position: 'bottom-[22%] left-[8%] sm:left-[16%]', tone: 'blue' },
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
            className={`absolute ${node.position} hidden sm:flex w-20 h-20 sm:w-24 sm:h-24 rounded-full border border-electric-400/35 bg-ink-900/75 backdrop-blur-md shadow-[0_0_28px_rgba(59,130,246,0.2)] flex-col items-center justify-center`}
          >
            <span className={`font-mono text-xs sm:text-sm font-bold tracking-widest ${node.tone === 'cyan' ? 'text-cyan-300' : 'text-electric-300'}`}>
              {node.label}
            </span>
            <span className="text-[9px] font-mono text-gray-500">{node.detail}</span>
            {index === 0 && <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-electric-400 animate-ping" />}
          </motion.div>
        ))}
      </div>

      <div className="absolute top-[18%] right-[18%] hidden lg:block rounded-lg border border-white/5 bg-ink-900/20 p-3 font-mono text-[11px] leading-relaxed text-gray-600/70 backdrop-blur-[2px]">
        {logs.map((log, index) => (
          <p key={log} className={index === 0 ? 'text-emerald-400/60' : index === 2 ? 'text-electric-400/60' : undefined}>{log}</p>
        ))}
      </div>

      <div className="absolute bottom-[25%] left-[6%] hidden lg:block rounded-lg border border-white/5 bg-ink-900/20 p-3 font-mono text-[11px] leading-relaxed text-gray-600/70 backdrop-blur-[2px]">
        <p className="text-cyan-400/60">playwright test --headed --grep "@smoke"</p>
        <p>GET /api/v2/users/123</p>
        <p className="text-emerald-400/60">STATUS 200 OK (112ms)</p>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink-950 via-ink-950/35 to-transparent" />
    </div>
  );
}
