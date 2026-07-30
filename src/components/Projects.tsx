import { Terminal, ExternalLink, ChevronRight } from 'lucide-react';
import { Github } from './SocialIcons';
import { SectionHeader } from './SectionHeader';

const project = {
  title: 'Network Automation & Routing Lab',
  tags: ['Python', 'GNS3', 'Cisco IOS', 'Linux'],
  description:
    'A hands-on enterprise-grade lab environment simulating real-world network infrastructure with full automation tooling, comprehensive routing protocols, and advanced troubleshooting capabilities.',
  bullets: [
    'Designed and implemented a multi-network enterprise topology with VLAN segmentation, 802.1Q trunking, inter-VLAN routing, OSPF, ACLs, NAT, and DHCP, incorporating redundant network paths for resiliency.',
    'Developed Python-based network automation scripts to collect device information, validate configurations, and automate repetitive network administration and verification tasks.',
    'Used Wireshark and Cisco IOS troubleshooting tools to analyze packet flows, validate routing and switching behavior, and diagnose simulated network failures across multiple network layers.',
  ],
  highlights: [
    { value: 'Multi-layer', label: 'Enterprise Topology' },
    { value: 'OSPF + BGP', label: 'Routing Protocols' },
    { value: 'Python', label: 'Automation Scripts' },
    { value: 'Wireshark', label: 'Packet Analysis' },
  ],
  githubUrl: 'https://github.com/adityanarayanan343',
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label="Projects"
          title="Hands-On Builds"
          subtitle="Practical implementations that bridge theory with real-world network engineering."
        />

        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-900/60 border border-white/8 rounded-2xl overflow-hidden hover:border-cyan-500/25 transition-all duration-300 group">
            {/* Header */}
            <div className="p-6 sm:p-8 border-b border-white/8 bg-gradient-to-r from-cyan-500/5 to-transparent">
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cyan-400/10 rounded-xl text-cyan-400 shrink-0">
                    <Terminal size={22} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-100 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-slate-400 hover:text-cyan-400 transition-colors text-sm border border-white/10 hover:border-cyan-500/40 rounded-lg px-3 py-2"
                >
                  <Github size={15} />
                  GitHub
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>

            {/* Description */}
            <div className="px-6 sm:px-8 pt-6">
              <p className="text-slate-400 text-sm leading-relaxed mb-6">{project.description}</p>

              {/* Highlight grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                {project.highlights.map((h) => (
                  <div
                    key={h.label}
                    className="bg-slate-800/50 border border-white/6 rounded-xl p-3 text-center"
                  >
                    <div className="text-cyan-400 font-bold text-sm mb-0.5">{h.value}</div>
                    <div className="text-slate-500 text-xs">{h.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bullets */}
            <div className="px-6 sm:px-8 pb-8">
              <ul className="space-y-3">
                {project.bullets.map((b, i) => (
                  <li key={i} className="flex gap-3 group/item">
                    <ChevronRight
                      size={16}
                      className="text-cyan-500 mt-0.5 shrink-0 group-hover/item:text-cyan-300 transition-colors"
                    />
                    <span className="text-slate-400 text-sm leading-relaxed group-hover/item:text-slate-300 transition-colors">
                      {b}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
