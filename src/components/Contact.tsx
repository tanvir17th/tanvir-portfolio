import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  MessageCircle,
  Send,
  MapPin,
  CheckCircle2,
  ArrowUpRight,
  Clock3,
  Sparkles,
} from 'lucide-react';
import { personal } from '@/data/portfolio';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: '' }));
  };

  const validate = () => {
    const nextErrors: Record<string, string> = {};
    if (!form.name.trim()) nextErrors.name = 'Name is required';
    if (!form.email.trim()) nextErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) nextErrors.email = 'Invalid email format';
    if (!form.subject.trim()) nextErrors.subject = 'Subject is required';
    if (!form.message.trim()) nextErrors.message = 'Message is required';
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!validate()) return;

    setSubmitted(true);
    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const contactItems = [
    { icon: Mail, label: 'Email', value: personal.email, href: `mailto:${personal.email}` },
    { icon: Phone, label: 'Phone', value: personal.phone, href: `tel:${personal.phone.replace(/\s/g, '')}` },
    { icon: Linkedin, label: 'LinkedIn', value: 'md-tanvir-ahamed', href: personal.socials.linkedin },
    { icon: Github, label: 'GitHub', value: 'tanvir17th', href: personal.socials.github },
  ];

  return (
    <section id="contact" className="relative py-24 section-padding overflow-hidden">
      <div className="absolute top-0 right-0 w-[460px] h-[460px] bg-electric-600/5 rounded-full blur-[130px]" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent-600/5 rounded-full blur-[110px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 text-electric-400 text-xs font-mono uppercase tracking-[0.2em] mb-4">
            <span className="w-8 h-px bg-electric-500" />
            Start a conversation
          </div>
          <h2 className="section-title mb-3">Let&apos;s build something <span className="text-gradient">reliable.</span></h2>
          <p className="text-gray-500 max-w-xl text-base sm:text-lg leading-relaxed">
            I&apos;m open to SQA Engineer, QA Engineer, Software Tester, and Junior Automation Tester opportunities.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-6 lg:gap-8 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden border border-electric-500/20 bg-gradient-to-br from-electric-950 via-ink-900 to-accent-950/40 p-7 sm:p-8"
          >
            <div className="absolute -top-24 -right-24 w-56 h-56 rounded-full border border-electric-400/15" />
            <div className="absolute top-10 right-10 w-20 h-20 rounded-full bg-electric-500/10 blur-2xl" />

            <div className="relative z-10 flex flex-col h-full">
              <div className="w-12 h-12 rounded-2xl bg-electric-400/10 border border-electric-400/20 flex items-center justify-center text-electric-300 mb-7">
                <Sparkles size={22} />
              </div>
              <p className="text-2xl sm:text-3xl font-semibold text-white leading-tight mb-4">
                Quality starts with the right questions.
              </p>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base max-w-sm">
                Whether you have an opportunity, a project to test, or simply want to connect, I&apos;d be glad to hear from you.
              </p>

              <div className="mt-auto pt-10">
                <a
                  href={`mailto:${personal.email}`}
                  className="inline-flex items-center gap-2 text-electric-300 hover:text-white transition-colors group"
                >
                  <span className="text-sm font-medium">{personal.email}</span>
                  <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
                <div className="mt-5 flex items-center gap-2 text-xs text-gray-500">
                  <MapPin size={14} className="text-electric-400" />
                  Dhaka, Bangladesh
                  <span className="w-1 h-1 rounded-full bg-gray-700 mx-1" />
                  <Clock3 size={14} className="text-electric-400" />
                  Usually replies within 24 hours
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-card p-6 sm:p-8"
          >
            <div className="flex items-start justify-between gap-4 mb-7">
              <div>
                <h3 className="text-xl font-semibold text-white mb-1">Send a message</h3>
                <p className="text-sm text-gray-500">I&apos;ll get back to you as soon as possible.</p>
              </div>
              <div className="hidden sm:flex w-10 h-10 rounded-xl bg-electric-500/10 border border-electric-500/20 items-center justify-center text-electric-300">
                <Send size={18} />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              {contactItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group flex items-center gap-3 rounded-2xl border border-white/5 bg-ink-800/40 px-3 py-3 hover:border-electric-500/30 hover:bg-ink-700/40 transition-all duration-300"
                >
                  <div className="w-9 h-9 rounded-xl bg-electric-500/10 flex items-center justify-center text-electric-400 group-hover:text-electric-300 transition-colors shrink-0">
                    <item.icon size={17} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] text-gray-500 uppercase tracking-wider">{item.label}</p>
                    <p className="text-xs text-gray-200 truncate">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <FormField label="Name" value={form.name} onChange={(value) => handleChange('name', value)} error={errors.name} placeholder="Your full name" />
                <FormField label="Email" type="email" value={form.email} onChange={(value) => handleChange('email', value)} error={errors.email} placeholder="you@example.com" />
              </div>
              <FormField label="Subject" value={form.subject} onChange={(value) => handleChange('subject', value)} error={errors.subject} placeholder="What is this about?" />
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1.5">Message</label>
                <textarea
                  value={form.message}
                  onChange={(event) => handleChange('message', event.target.value)}
                  rows={4}
                  placeholder="Tell me a little about your opportunity or project..."
                  className={`w-full px-4 py-3 rounded-xl bg-ink-800/60 border text-gray-200 placeholder-gray-600 text-sm resize-none transition-all duration-300 focus:outline-none focus:border-electric-500/50 focus:bg-ink-700/60 ${errors.message ? 'border-red-500/50' : 'border-white/5'}`}
                />
                {errors.message && <p className="text-xs text-red-400 mt-1">{errors.message}</p>}
              </div>
              <button type="submit" disabled={submitted} className="btn-primary w-full disabled:opacity-50">
                {submitted ? <><CheckCircle2 size={18} /> Message Sent!</> : <><Send size={18} /> Send Message</>}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FormField({
  label,
  value,
  onChange,
  error,
  placeholder,
  type = 'text',
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-300 mb-1.5">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className={`w-full px-4 py-3 rounded-xl bg-ink-800/60 border text-gray-200 placeholder-gray-600 text-sm transition-all duration-300 focus:outline-none focus:border-electric-500/50 focus:bg-ink-700/60 ${error ? 'border-red-500/50' : 'border-white/5'}`}
      />
      {error && <p className="text-xs text-red-400 mt-1">{error}</p>}
    </div>
  );
}
