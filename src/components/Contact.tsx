'use client';

import { Mail, Phone, MapPin, SendHorizontal, CheckCircle2 } from 'lucide-react';
import { Github, Linkedin } from './SocialIcons';
import { useState } from 'react';
import { SectionHeader } from './SectionHeader';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`);
    window.location.href = `mailto:adityanarayanan343@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  };

  const contacts = [
    { icon: Mail, label: 'Email', value: 'adityanarayanan343@gmail.com', href: 'mailto:adityanarayanan343@gmail.com', color: 'cyan' },
    { icon: Phone, label: 'Phone', value: '+91 99529 91924', href: 'tel:+919952991924', color: 'blue' },
    { icon: Linkedin, label: 'LinkedIn', value: 'aditya-narayanan-s', href: 'https://linkedin.com/in/aditya-narayanan-s', color: 'sky' },
    { icon: Github, label: 'GitHub', value: 'adityanarayanan343', href: 'https://github.com/adityanarayanan343', color: 'slate' },
  ];

  const colorMap: Record<string, string> = {
    cyan: 'text-cyan-400 bg-cyan-400/10 hover:bg-cyan-400/20',
    blue: 'text-blue-400 bg-blue-400/10 hover:bg-blue-400/20',
    sky: 'text-sky-400 bg-sky-400/10 hover:bg-sky-400/20',
    slate: 'text-slate-300 bg-slate-400/10 hover:bg-slate-400/20',
  };

  return (
    <section id="contact" className="py-24 bg-slate-900/40">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label="Get In Touch"
          title="Let's Connect"
          subtitle="Open to network engineering opportunities, collaborations, and conversations about networking, cloud, and automation."
        />

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact info */}
          <div className="space-y-4">
            {contacts.map((c) => {
              const Icon = c.icon;
              return (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith('http') ? '_blank' : undefined}
                  rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 bg-slate-900/60 border border-white/8 rounded-2xl p-5 hover:border-cyan-500/30 transition-all duration-300 group"
                >
                  <div className={`p-3 rounded-xl ${colorMap[c.color]} transition-colors`}>
                    <Icon size={20} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs text-slate-500 mb-0.5">{c.label}</div>
                    <div className="text-slate-200 text-sm font-medium truncate group-hover:text-cyan-300 transition-colors">
                      {c.value}
                    </div>
                  </div>
                </a>
              );
            })}

            <div className="flex items-center gap-4 bg-slate-900/60 border border-white/8 rounded-2xl p-5">
              <div className="p-3 rounded-xl text-emerald-400 bg-emerald-400/10">
                <MapPin size={20} />
              </div>
              <div>
                <div className="text-xs text-slate-500 mb-0.5">Location</div>
                <div className="text-slate-200 text-sm font-medium">Chennai, India</div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <form
            onSubmit={handleSubmit}
            className="bg-slate-900/60 border border-white/8 rounded-2xl p-6 sm:p-8 space-y-5"
          >
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1.5">Name</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-slate-800/60 border border-white/8 rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:border-cyan-500/50 focus:outline-none focus:ring-1 focus:ring-cyan-500/30 transition-all"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1.5">Email</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-slate-800/60 border border-white/8 rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:border-cyan-500/50 focus:outline-none focus:ring-1 focus:ring-cyan-500/30 transition-all"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1.5">Message</label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-slate-800/60 border border-white/8 rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:border-cyan-500/50 focus:outline-none focus:ring-1 focus:ring-cyan-500/30 transition-all resize-none"
                placeholder="Your message..."
              />
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold py-3 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25 text-sm tracking-wide"
            >
              {sent ? (
                <>
                  <CheckCircle2 size={16} />
                  Opening your email app...
                </>
              ) : (
                <>
                  <SendHorizontal size={16} />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
