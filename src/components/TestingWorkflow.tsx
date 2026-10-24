import { motion } from 'framer-motion';
import {
  FileSearch,
  ClipboardList,
  PenTool,
  FileText,
  Play,
  Bug,
  Repeat,
  CheckCircle2,
  ArrowDown,
  type LucideIcon,
} from 'lucide-react';
import { testingWorkflow } from '@/data/portfolio';

const iconMap: Record<string, LucideIcon> = {
  FileSearch,
  ClipboardList,
  PenTool,
  FileText,
  Play,
  Bug,
  Repeat,
  CheckCircle2,
};

export default function TestingWorkflow() {
  return (
    <section className="relative py-24 section-padding">
      <div className="absolute inset-0 dot-pattern opacity-30" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">
            Software Testing <span className="text-gradient">Workflow</span>
          </h2>
          <p className="section-subtitle">
            My systematic approach to ensuring software quality
          </p>
        </motion.div>

        {/* Desktop: horizontal flow */}
        <div className="hidden lg:flex flex-col items-center gap-0">
          <div className="flex items-start gap-4 w-full">
            {testingWorkflow.slice(0, 4).map((step, i) => (
              <WorkflowCard key={step.title} step={step} index={i} />
            ))}
          </div>
          <div className="flex items-center gap-4 w-full">
            <div className="flex-1 flex justify-end pr-[calc(50%-3rem)]">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-electric-400"
              >
                <ArrowDown size={24} />
              </motion.div>
            </div>
            <div className="w-24" />
          </div>
          <div className="flex items-start gap-4 w-full flex-row-reverse">
            {testingWorkflow.slice(4).map((step, i) => (
              <WorkflowCard key={step.title} step={step} index={4 + i} />
            ))}
          </div>
        </div>

        {/* Mobile/Tablet: vertical timeline */}
        <div className="lg:hidden space-y-4">
          {testingWorkflow.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-center gap-4"
            >
              <div className="relative flex flex-col items-center">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-electric-500/20 to-electric-700/10 border border-electric-500/30 flex items-center justify-center text-electric-400 shrink-0">
                  {(() => {
                    const Icon = iconMap[step.icon] || FileSearch;
                    return <Icon size={22} />;
                  })()}
                </div>
                {i < testingWorkflow.length - 1 && (
                  <div className="w-px h-8 bg-gradient-to-b from-electric-500/30 to-transparent mt-1" />
                )}
              </div>
              <div className="glass-card glass-card-hover px-5 py-3 flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-electric-400 font-bold">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-sm font-semibold text-white">{step.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WorkflowCard({
  step,
  index,
}: {
  step: { title: string; icon: string };
  index: number;
}) {
  const Icon = iconMap[step.icon] || FileSearch;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex-1 group"
    >
      <div className="glass-card glass-card-hover p-5 text-center relative">
        <div className="absolute -top-3 -right-3 w-7 h-7 rounded-full bg-electric-600 text-white text-xs font-bold flex items-center justify-center shadow-lg shadow-electric-600/30">
          {index + 1}
        </div>
        <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-electric-500/20 to-electric-700/10 border border-electric-500/20 flex items-center justify-center text-electric-400 mb-3 group-hover:scale-110 group-hover:text-electric-300 transition-all duration-300">
          <Icon size={26} />
        </div>
        <h3 className="text-sm font-semibold text-white leading-tight">{step.title}</h3>
      </div>
      {index < 3 && (
        <div className="hidden flex items-center justify-center mt-0">
          <div className="h-px w-full bg-gradient-to-r from-electric-500/30 to-transparent" />
        </div>
      )}
    </motion.div>
  );
}
