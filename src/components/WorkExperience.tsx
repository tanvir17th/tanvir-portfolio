import { motion } from 'framer-motion';
import { BriefcaseBusiness, CalendarDays, CheckCircle2, MapPin } from 'lucide-react';
import { workExperience } from '@/data/portfolio';

export default function WorkExperience() {
  return (
    <section id="experience" className="relative py-24 section-padding">
      <div className="absolute top-1/2 right-0 w-[420px] h-[420px] bg-electric-600/5 rounded-full blur-[130px] -translate-y-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="section-subtitle">Professional experience building quality into every release</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {workExperience.map((experience, index) => (
            <motion.article
              key={`${experience.company}-${experience.role}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card p-6 sm:p-8 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-electric-500 via-electric-400 to-transparent" />

              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-5 mb-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-electric-500/10 border border-electric-500/20 flex items-center justify-center text-electric-300 shrink-0">
                    <BriefcaseBusiness size={22} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-electric-300 mb-1">{experience.role}</p>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">{experience.company}</h3>
                  </div>
                </div>
                <div className="flex flex-col gap-2 text-sm text-gray-500 sm:items-end">
                  <span className="inline-flex items-center gap-2">
                    <CalendarDays size={15} className="text-electric-400" />
                    {experience.duration}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <MapPin size={15} className="text-electric-400" />
                    {experience.location}
                  </span>
                </div>
              </div>

              <p className="text-gray-400 leading-relaxed mb-6 max-w-3xl">{experience.summary}</p>

              <div className="border-t border-white/5 pt-5">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-[0.16em] mb-4">
                  Key responsibilities
                </p>
                <ul className="space-y-3">
                  {experience.responsibilities.map((responsibility) => (
                    <li key={responsibility} className="flex items-start gap-3 text-sm sm:text-base text-gray-300 leading-relaxed">
                      <CheckCircle2 size={17} className="text-electric-400 shrink-0 mt-0.5" />
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
