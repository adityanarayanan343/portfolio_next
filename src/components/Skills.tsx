import { Network, Shield, Wifi, Terminal, Cloud, Code2 } from 'lucide-react';
import { SectionHeader } from './SectionHeader';

const skillGroups = [
  {
    icon: Network,
    label: 'Networking',
    color: 'cyan',
    skills: ['TCP/IP', 'VLANs', 'STP', '802.1Q Trunking', 'EtherChannel', 'OSPF', 'BGP', 'IPv4/IPv6', 'DHCP', 'DNS', 'NAT', 'ACLs', 'WAN', 'VPN (P2S/S2S)'],
  },
  {
    icon: Shield,
    label: 'Enterprise & Security',
    color: 'blue',
    skills: ['Cisco IOS', 'Cisco ISE', 'AAA', 'TACACS+', 'RADIUS', 'Network Access Control', 'Cisco Meraki MX', 'WAN Failover'],
  },
  {
    icon: Wifi,
    label: 'Wireless',
    color: 'teal',
    skills: ['Cisco Wireless', 'WLC', 'WLAN/SSID Provisioning', '802.11', 'Wi-Fi 6/6E', 'FlexConnect', 'Wireless Troubleshooting'],
  },
  {
    icon: Terminal,
    label: 'Automation & Monitoring',
    color: 'emerald',
    skills: ['Python', 'PowerShell', 'Velocity Templates', 'Cisco Catalyst Center', 'SolarWinds', 'ServiceNow', 'Wireshark', 'GNS3'],
  },
  {
    icon: Cloud,
    label: 'Cloud & Systems',
    color: 'sky',
    skills: ['Azure VNets', 'VPN Gateway', 'Azure Load Balancer', 'NSGs', 'AWS', 'Linux', 'Docker'],
  },
  {
    icon: Code2,
    label: 'Programming',
    color: 'violet',
    skills: ['Python', 'JavaScript', 'C/C++'],
  },
];

const colorMap: Record<string, { card: string; badge: string; icon: string; dot: string }> = {
  cyan: {
    card: 'border-cyan-500/20 hover:border-cyan-500/40',
    badge: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20 hover:bg-cyan-500/20',
    icon: 'text-cyan-400 bg-cyan-400/10',
    dot: 'bg-cyan-400',
  },
  blue: {
    card: 'border-blue-500/20 hover:border-blue-500/40',
    badge: 'bg-blue-500/10 text-blue-300 border-blue-500/20 hover:bg-blue-500/20',
    icon: 'text-blue-400 bg-blue-400/10',
    dot: 'bg-blue-400',
  },
  teal: {
    card: 'border-teal-500/20 hover:border-teal-500/40',
    badge: 'bg-teal-500/10 text-teal-300 border-teal-500/20 hover:bg-teal-500/20',
    icon: 'text-teal-400 bg-teal-400/10',
    dot: 'bg-teal-400',
  },
  emerald: {
    card: 'border-emerald-500/20 hover:border-emerald-500/40',
    badge: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20 hover:bg-emerald-500/20',
    icon: 'text-emerald-400 bg-emerald-400/10',
    dot: 'bg-emerald-400',
  },
  sky: {
    card: 'border-sky-500/20 hover:border-sky-500/40',
    badge: 'bg-sky-500/10 text-sky-300 border-sky-500/20 hover:bg-sky-500/20',
    icon: 'text-sky-400 bg-sky-400/10',
    dot: 'bg-sky-400',
  },
  violet: {
    card: 'border-violet-500/20 hover:border-violet-500/40',
    badge: 'bg-violet-500/10 text-violet-300 border-violet-500/20 hover:bg-violet-500/20',
    icon: 'text-violet-400 bg-violet-400/10',
    dot: 'bg-violet-400',
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label="Technical Skills"
          title="What I Work With"
          subtitle="A comprehensive toolkit built through hands-on enterprise experience and continuous learning."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group) => {
            const Icon = group.icon;
            const c = colorMap[group.color];
            return (
              <div
                key={group.label}
                className={`bg-slate-900/60 border ${c.card} rounded-2xl p-6 transition-all duration-300 hover:bg-slate-900/80`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className={`p-2.5 rounded-xl ${c.icon}`}>
                    <Icon size={20} />
                  </div>
                  <h3 className="text-white font-semibold text-base">{group.label}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`text-xs px-2.5 py-1 rounded-full border ${c.badge} transition-colors duration-200 cursor-default`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
