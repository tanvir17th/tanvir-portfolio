import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';
import { coursework } from '@/data/portfolio';

export default function Coursework() {
  return (
    <section className="relative py-24 section-padding">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">
            Relevant <span className="text-gradient">Coursework</span>
          </h2>
          <p className="section-subtitle">Academic courses supporting my QA career</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {coursework.map((course, i) => (
            <motion.div
              key={course}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.08 }}
              className="glass-card glass-card-hover p-5 flex items-center gap-3 group"
            >
              <div className="w-10 h-10 rounded-xl bg-electric-500/10 flex items-center justify-center text-electric-400 group-hover:bg-electric-500/20 group-hover:text-electric-300 transition-all duration-300 shrink-0">
                <BookOpen size={18} />
              </div>
              <span className="text-sm font-medium text-gray-300 leading-tight">
                {course}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
