import { useState, type CSSProperties } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Bug, CheckCircle2, XCircle, FlaskConical, ShieldCheck, Terminal, type LucideIcon } from 'lucide-react';

type Token =
  | { kind: 'bugfix' }
  | { kind: 'icon'; Icon: LucideIcon; color: string }
  | { kind: 'text'; label: string; color: string };

const TOKENS: Token[] = [
  { kind: 'bugfix' },
  { kind: 'text', label: 'PASS', color: 'text-emerald-400' },
  { kind: 'icon', Icon: CheckCircle2, color: 'text-emerald-400' },
  { kind: 'text', label: 'assert()', color: 'text-electric-300' },
  { kind: 'bugfix' },
  { kind: 'text', label: '200 OK', color: 'text-cyan-300' },
  { kind: 'icon', Icon: FlaskConical, color: 'text-accent-300' },
  { kind: 'text', label: 'FAIL', color: 'text-rose-400' },
  { kind: 'text', label: 'expect()', color: 'text-electric-300' },
  { kind: 'icon', Icon: ShieldCheck, color: 'text-electric-400' },
  { kind: 'bugfix' },
  { kind: 'text', label: '{ }', color: 'text-gray-400' },
  { kind: 'icon', Icon: XCircle, color: 'text-rose-400' },
  { kind: 'text', label: 'GET /api', color: 'text-cyan-300' },
  { kind: 'text', label: '404', color: 'text-amber-400' },
  { kind: 'icon', Icon: Terminal, color: 'text-gray-400' },
  { kind: 'text', label: '✓ 34/34', color: 'text-emerald-400' },
  { kind: 'text', label: '</>', color: 'text-accent-300' },
];

type Particle = {
  token: Token;
  left: number;
  restTop: number;
  size: number;
  opacity: number;
  rise: number;
  sway: number;
  delay: number;
};

function createParticles(): Particle[] {
  const count = window.innerWidth < 768 ? 10 : 22;
  return Array.from({ length: count }, (_, i) => {
    const rise = 32 + Math.random() * 26;
    return {
      token: TOKENS[i % TOKENS.length],
      // Spread evenly across the width, with jitter so columns don't line up.
      left: ((i + Math.random() * 0.8) / count) * 100,
      restTop: Math.random() * 90,
      size: 13 + Math.random() * 11,
      opacity: 0.2 + Math.random() * 0.16,
      rise,
      sway: 4 + Math.random() * 5,
      // Negative delay starts each particle mid-flight, so the screen is never empty.
      delay: -Math.random() * rise,
    };
  });
}

export default function QABackground() {
  const [particles] = useState(createParticles);
  const { scrollY } = useScroll();
  const layerOpacity = useTransform(scrollY, [0, 600], [0.35, 1]);

  return (
    <motion.div
      aria-hidden="true"
      style={{ opacity: layerOpacity }}
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {particles.map((p, i) => {
        const timing: CSSProperties = { animationDuration: `${p.rise}s`, animationDelay: `${p.delay}s` };
        return (
          <div
            key={i}
            className="absolute top-0 will-change-transform animate-qa-rise motion-reduce:animate-none"
            style={{ ...timing, left: `${p.left}%`, opacity: p.opacity, transform: `translateY(${p.restTop}vh)` }}
          >
            <div
              className="animate-qa-sway motion-reduce:animate-none"
              style={{ animationDuration: `${p.sway}s`, animationDelay: `${p.delay}s` }}
            >
              <ParticleGlyph token={p.token} size={p.size} timing={timing} />
            </div>
          </div>
        );
      })}

      <div className="absolute inset-x-0 top-0 animate-qa-scan motion-reduce:hidden">
        <div className="h-24 bg-gradient-to-b from-transparent to-cyan-400/[0.04]" />
        <div className="h-px bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent shadow-[0_0_14px_rgba(103,232,249,0.45)]" />
      </div>
    </motion.div>
  );
}

function ParticleGlyph({ token, size, timing }: { token: Token; size: number; timing: CSSProperties }) {
  if (token.kind === 'text') {
    return (
      <span className={`whitespace-nowrap font-mono font-semibold ${token.color}`} style={{ fontSize: size * 0.8 }}>
        {token.label}
      </span>
    );
  }

  if (token.kind === 'icon') {
    const { Icon } = token;
    return <Icon size={size + 4} className={token.color} strokeWidth={1.6} />;
  }

  const iconSize = size + 6;
  return (
    <div className="relative" style={{ width: iconSize, height: iconSize }}>
      <span
        className="absolute inset-0 rounded-full border border-emerald-400 animate-qa-fix-ping motion-reduce:hidden"
        style={timing}
      />
      <Bug
        size={iconSize}
        strokeWidth={1.6}
        className="absolute inset-0 text-amber-400 animate-qa-bug-out motion-reduce:animate-none"
        style={timing}
      />
      <CheckCircle2
        size={iconSize}
        strokeWidth={1.6}
        className="absolute inset-0 text-emerald-400 opacity-0 animate-qa-check-in motion-reduce:hidden"
        style={timing}
      />
    </div>
  );
}
