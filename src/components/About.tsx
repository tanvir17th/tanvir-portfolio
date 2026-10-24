import { motion } from 'framer-motion';
import { ClipboardCheck, Webhook, Bot, FileCheck2, Bug, ShieldCheck } from 'lucide-react';
import { personal, focusAreas } from '@/data/portfolio';

const focusIcons = [ClipboardCheck, Webhook, Bot, FileCheck2, Bug, ShieldCheck];

export default function About() {
  return (
    <section id="about" className="relative py-24 section-padding">
      <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-electric-600/5 rounded-full blur-[100px] -translate-y-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="section-subtitle">Get to know my background and focus areas</p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="glass-card p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 rounded-full bg-gradient-to-b from-electric-400 to-accent-500" />
                <h3 className="text-xl font-semibold text-white">Who I Am</h3>
              </div>
              <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
                {personal.about}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <div className="badge-blue">
                  <ShieldCheck size={14} />
                  Quality Focused
                </div>
                <div className="badge-blue">
                  <Bug size={14} />
                  Detail Oriented
                </div>
                <div className="badge-purple">
                  <Bot size={14} />
                  Automation Ready
                </div>
              </div>
            </div>
          </motion.div>

          {/* Focus areas */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <div className="grid grid-cols-2 gap-3 h-full">
              {focusAreas.map((area, i) => {
                const Icon = focusIcons[i] || ClipboardCheck;
                return (
                  <motion.div
                    key={area}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="glass-card glass-card-hover p-4 flex flex-col items-center justify-center text-center gap-2 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-electric-500/10 flex items-center justify-center text-electric-400 group-hover:text-electric-300 group-hover:bg-electric-500/20 transition-all duration-300">
                      <Icon size={20} />
                    </div>
                    <span className="text-sm font-medium text-gray-300">{area}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
