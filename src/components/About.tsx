import { User, Sparkles, Target, Globe } from 'lucide-react';
import { SectionHeader } from './SectionHeader';

const traits = [
  {
    icon: Target,
    title: 'Problem Solver',
    description: 'Root cause analysis and rapid resolution of complex network incidents across multi-layer enterprise environments.',
  },
  {
    icon: Sparkles,
    title: 'Automation First',
    description: 'Leveraging Python, PowerShell, and templating tools to eliminate repetitive tasks and improve operational efficiency.',
  },
  {
    icon: Globe,
    title: 'Enterprise Scale',
    description: 'Experience supporting 35+ sites, 450+ switches, and 740+ access points in 24x7 production environments.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-900/40">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label="About Me"
          title="Who I Am"
          subtitle="A network engineer who lives at the intersection of infrastructure, security, and automation."
        />

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Bio */}
          <div className="lg:col-span-3 bg-slate-900/60 border border-white/8 rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2.5 bg-cyan-400/10 rounded-xl text-cyan-400">
                <User size={20} />
              </div>
              <h3 className="text-white font-semibold">Professional Summary</h3>
            </div>
            <div className="space-y-4 text-slate-400 text-sm leading-relaxed">
              <p>
                I'm a <span className="text-cyan-300 font-medium">Network Engineer</span> at Tata Consultancy Services with a
                strong foundation in enterprise networking, cloud infrastructure, and network automation. CCNA-certified and
                AZ-700 trained, I support mission-critical network operations across 35+ enterprise sites encompassing
                approximately 450 switches and 740 wireless access points.
              </p>
              <p>
                My work spans <span className="text-cyan-300 font-medium">routing and switching</span>,{' '}
                <span className="text-cyan-300 font-medium">wireless infrastructure</span>,{' '}
                <span className="text-cyan-300 font-medium">network security</span>, and{' '}
                <span className="text-cyan-300 font-medium">automation</span>. I've deployed MFA across 350+ switches using
                Cisco ISE and TACACS+, upgraded branch connectivity with cellular WAN failover, and built automation workflows
                using Python, PowerShell, and Cisco Catalyst Center Velocity templates.
              </p>
              <p>
                I'm passionate about building resilient, secure, and automated networks — and I'm always exploring new ways
                to apply programmability and cloud-native thinking to traditional infrastructure challenges.
              </p>
            </div>
          </div>

          {/* Traits */}
          <div className="lg:col-span-2 space-y-4">
            {traits.map((trait) => {
              const Icon = trait.icon;
              return (
                <div
                  key={trait.title}
                  className="bg-slate-900/60 border border-white/8 rounded-2xl p-5 hover:border-cyan-500/30 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 bg-cyan-400/10 rounded-xl text-cyan-400 group-hover:scale-105 transition-transform shrink-0">
                      <Icon size={18} />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm mb-1">{trait.title}</h4>
                      <p className="text-slate-500 text-xs leading-relaxed">{trait.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
