import { motion } from 'framer-motion';
import { Github, ExternalLink, Calendar, User, Users, CheckCircle2 } from 'lucide-react';
import { projects } from '@/data/portfolio';

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 section-padding">
      <div className="absolute top-1/3 left-1/2 w-[500px] h-[500px] bg-electric-600/5 rounded-full blur-[130px] -translate-x-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="section-subtitle">Real testing projects showcasing my QA experience</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="glass-card glass-card-hover p-6 flex flex-col group"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-2">
                  {project.type === 'Team Project' ? (
                    <span className="badge-blue">
                      <Users size={12} />
                      {project.type}
                    </span>
                  ) : (
                    <span className="badge-purple">
                      <User size={12} />
                      {project.type}
                    </span>
                  )}
                </div>
                <span className="text-xs text-gray-500 font-mono flex items-center gap-1">
                  <Calendar size={12} />
                  {project.date}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-electric-300 transition-colors duration-300">
                {project.title}
              </h3>

              {/* Role */}
              {project.role && (
                <p className="text-xs text-accent-300 font-medium mb-3">
                  Role: {project.role}
                </p>
              )}

              {/* Description */}
              <p className="text-sm text-gray-400 leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.technologies.map((tech) => (
                  <span key={tech} className="badge text-xs">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Testing coverage */}
              <div className="mb-5">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                  Testing Coverage
                </p>
                <div className="space-y-1.5">
                  {project.testingCoverage.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-gray-400">
                      <CheckCircle2 size={14} className="text-electric-400 shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="mt-auto flex gap-2 pt-4 border-t border-white/5">
                {project.github ? (
                  <>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary text-sm py-2.5 px-4 flex-1"
                    >
                      <ExternalLink size={16} />
                      View Project
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary text-sm py-2.5 px-4"
                      aria-label="View GitHub"
                    >
                      <Github size={16} />
                    </a>
                  </>
                ) : (
                  <div className="flex-1 text-center text-sm text-gray-600 py-2.5">
                    GitHub link coming soon
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
