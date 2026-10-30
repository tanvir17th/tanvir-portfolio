import { motion } from 'framer-motion';
import { Award, BadgeCheck, Calendar, ExternalLink } from 'lucide-react';
import { certifications } from '@/data/portfolio';

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-24 section-padding">
      <div className="absolute top-1/2 right-1/4 w-[420px] h-[420px] bg-accent-600/5 rounded-full blur-[130px] -translate-y-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">
            Licenses & <span className="text-gradient">Certifications</span>
          </h2>
          <p className="section-subtitle">Professional credentials supporting my QA expertise</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((certification, index) => (
            <motion.article
              key={certification.credentialId}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card glass-card-hover p-6 sm:p-8"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-500/20 to-electric-500/10 border border-accent-500/20 flex items-center justify-center text-accent-300 shrink-0">
                  <Award size={27} />
                </div>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="badge-purple">
                      <BadgeCheck size={13} />
                      Verified Credential
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{certification.name}</h3>
                  <p className="text-electric-300 font-medium">{certification.issuer}</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mt-7 pt-6 border-t border-white/5">
                <div className="flex items-center gap-3">
                  <Calendar size={17} className="text-electric-400" />
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">Issued</p>
                    <p className="text-sm text-gray-200">{certification.issueDate}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <BadgeCheck size={17} className="text-accent-300" />
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">Credential ID</p>
                    <p className="text-sm text-gray-200 font-mono">{certification.credentialId}</p>
                  </div>
                </div>
              </div>

              <a
                href={certification.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full mt-7 text-sm"
              >
                <ExternalLink size={16} />
                Show Credential
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
