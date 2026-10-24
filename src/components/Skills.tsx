import { motion } from 'framer-motion';
import {
  ClipboardCheck,
  FileCheck2,
  Webhook,
  Bot,
  Code2,
  Layers,
  ShieldCheck,
  Wrench,
  Database,
  GitBranch,
  type LucideIcon,
} from 'lucide-react';
import { skillCategories } from '@/data/portfolio';

const iconMap: Record<string, LucideIcon> = {
  ClipboardCheck,
  FileCheck2,
  Webhook,
  Bot,
  Code2,
  Layers,
  ShieldCheck,
  Wrench,
  Database,
  GitBranch,
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 section-padding">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent-600/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="section-subtitle">
            Tools, technologies, and methodologies I work with
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((category, ci) => {
            const Icon = iconMap[category.icon] || ClipboardCheck;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: (ci % 3) * 0.1 }}
                className="glass-card glass-card-hover p-6"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-electric-500/20 to-electric-700/10 flex items-center justify-center text-electric-400 border border-electric-500/20">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-base font-semibold text-white">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="badge hover:border-electric-500/30 hover:text-electric-300 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
