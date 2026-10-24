import { Linkedin, Github, Mail, MessageCircle, Heart } from 'lucide-react';
import { personal, navLinks } from '@/data/portfolio';

export default function Footer() {
  const handleNavClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/5 bg-ink-950">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-electric-500/50 to-transparent" />

      <div className="section-padding max-w-7xl mx-auto py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('#home')}
            className="flex items-center gap-2"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-electric-600 to-electric-800 flex items-center justify-center font-bold text-white text-lg shadow-lg shadow-electric-600/20">
              TA
            </div>
            <span className="text-sm font-semibold text-gray-300">
              MD. Tanvir Ahamed
            </span>
          </button>

          {/* Nav links */}
          <div className="flex flex-wrap items-center justify-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="px-3 py-1.5 text-sm text-gray-500 hover:text-electric-300 transition-colors duration-300"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            <a
              href={personal.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-ink-800/60 border border-white/5 flex items-center justify-center text-gray-400 hover:text-electric-300 hover:border-electric-500/30 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={17} />
            </a>
            <a
              href={personal.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-ink-800/60 border border-white/5 flex items-center justify-center text-gray-400 hover:text-electric-300 hover:border-electric-500/30 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github size={17} />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="w-9 h-9 rounded-lg bg-ink-800/60 border border-white/5 flex items-center justify-center text-gray-400 hover:text-electric-300 hover:border-electric-500/30 transition-all duration-300"
              aria-label="Email"
            >
              <Mail size={17} />
            </a>
            <a
              href={personal.socials.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-ink-800/60 border border-white/5 flex items-center justify-center text-gray-400 hover:text-accent-300 hover:border-accent-500/30 transition-all duration-300"
              aria-label="WhatsApp"
            >
              <MessageCircle size={17} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-gray-500">
            &copy; 2026 MD. TANVIR AHAMED. All Rights Reserved.
          </p>
          <p className="text-xs text-gray-600 flex items-center gap-1.5">
            Built with <Heart size={12} className="text-electric-500" /> using React &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
