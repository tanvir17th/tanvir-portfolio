import { motion } from 'framer-motion';
import { GraduationCap, Calendar, BookMarked } from 'lucide-react';
import { education } from '@/data/portfolio';

export default function Education() {
  return (
    <section id="education" className="relative py-24 section-padding">
      <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-electric-600/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title"><span className="text-gradient">Education</span></h2>
          <p className="section-subtitle">My academic background</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative glass-card p-8 sm:p-10">
            <div className="absolute -left-4 top-10 w-8 h-8 rounded-full bg-ink-950 border-2 border-electric-500 flex items-center justify-center shadow-lg shadow-electric-500/30">
              <GraduationCap size={16} className="text-electric-400" />
            </div>

            <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{education.institution}</h3>
                <p className="text-electric-300 font-medium text-sm sm:text-base">{education.degree}</p>
              </div>
              <span className="badge-blue whitespace-nowrap">
                <Calendar size={14} />
                {education.duration}
              </span>
            </div>

            <div className="mt-6 pt-6 border-t border-white/5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-accent-500/10 border border-accent-500/20 flex items-center justify-center text-accent-300">
                  <BookMarked size={18} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Major</p>
                  <p className="text-sm font-medium text-gray-200">{education.major}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
