import { Award, ExternalLink } from 'lucide-react';
import { SectionHeader } from './SectionHeader';

const certs = [
  {
    title: 'Cisco Certified Network Associate',
    short: 'CCNA',
    issuer: 'Cisco',
    color: 'cyan',
    description: 'Validates foundational knowledge of networking, IP services, security, automation, and programmability.',
    icon: '🔵',
  },
  {
    title: 'Azure Network Engineer Associate',
    short: 'AZ-700',
    issuer: 'Microsoft',
    color: 'blue',
    description: 'Expertise in planning, implementing, and maintaining Azure networking solutions including hybrid connectivity.',
    icon: '☁️',
  },
  {
    title: 'Google Cybersecurity Professional',
    short: 'Professional Cert',
    issuer: 'Google',
    color: 'emerald',
    description: 'Comprehensive program covering core cybersecurity skills, tools, and practices for entry-level security roles.',
    icon: '🛡️',
  },
  {
    title: 'Fortinet Certified Associate in Cybersecurity',
    short: 'FCA',
    issuer: 'Fortinet',
    color: 'orange',
    description: 'Foundational cybersecurity knowledge including security operations, threats, and FortiGate technologies.',
    icon: '🔐',
  },
  {
    title: 'Fortinet Networking Fundamentals',
    short: 'FNF',
    issuer: 'Fortinet',
    color: 'amber',
    description: 'Core networking concepts including routing, switching, and wireless fundamentals using Fortinet platforms.',
    icon: '🌐',
  },
];

const colorMap: Record<string, { border: string; bg: string; badge: string; text: string }> = {
  cyan: {
    border: 'border-cyan-500/25 hover:border-cyan-500/50',
    bg: 'from-cyan-500/8',
    badge: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/25',
    text: 'text-cyan-400',
  },
  blue: {
    border: 'border-blue-500/25 hover:border-blue-500/50',
    bg: 'from-blue-500/8',
    badge: 'bg-blue-500/15 text-blue-300 border-blue-500/25',
    text: 'text-blue-400',
  },
  emerald: {
    border: 'border-emerald-500/25 hover:border-emerald-500/50',
    bg: 'from-emerald-500/8',
    badge: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/25',
    text: 'text-emerald-400',
  },
  orange: {
    border: 'border-orange-500/25 hover:border-orange-500/50',
    bg: 'from-orange-500/8',
    badge: 'bg-orange-500/15 text-orange-300 border-orange-500/25',
    text: 'text-orange-400',
  },
  amber: {
    border: 'border-amber-500/25 hover:border-amber-500/50',
    bg: 'from-amber-500/8',
    badge: 'bg-amber-500/15 text-amber-300 border-amber-500/25',
    text: 'text-amber-400',
  },
};

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-slate-900/40">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label="Certifications"
          title="Credentials & Achievements"
          subtitle="Industry-recognized certifications validating expertise across networking, cloud, and security domains."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certs.map((cert) => {
            const c = colorMap[cert.color];
            return (
              <div
                key={cert.short}
                className={`bg-slate-900/60 border ${c.border} rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/20 group`}
              >
                <div className={`h-1.5 w-full bg-gradient-to-r ${c.bg} to-transparent`} />
                <div className="p-6">
                  <div className="flex items-start justify-between gap-2 mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-2.5 rounded-xl bg-white/5 ${c.text}`}>
                        <Award size={20} />
                      </div>
                      <div>
                        <span className={`text-xs font-bold px-2 py-0.5 rounded-md border ${c.badge}`}>
                          {cert.short}
                        </span>
                        <p className={`text-xs mt-1 font-medium ${c.text}`}>{cert.issuer}</p>
                      </div>
                    </div>
                    <ExternalLink size={14} className="text-slate-600 group-hover:text-slate-400 transition-colors mt-1 shrink-0" />
                  </div>
                  <h3 className="text-white font-semibold text-sm mb-2 leading-snug">{cert.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{cert.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
