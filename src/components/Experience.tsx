import { Briefcase, MapPin, Calendar, ChevronRight } from 'lucide-react';
import { SectionHeader } from './SectionHeader';

const achievements = [
  {
    metric: '35+',
    label: 'Enterprise Sites',
  },
  {
    metric: '450+',
    label: 'Physical Switches',
  },
  {
    metric: '740+',
    label: 'Wireless APs',
  },
  {
    metric: '70+',
    label: 'Team Members',
  },
];

const bullets = [
  'Support enterprise network infrastructure across 35+ sites, encompassing approximately 450 physical switches and 740 wireless access points in a 24x7 production environment.',
  'Remediated a critical authentication vulnerability by deploying MFA across 350+ enterprise switches using AAA, TACACS+, and Cisco ISE, strengthening centralized authentication and role-based administrative access.',
  'Upgraded Cisco Meraki MX67 appliances to cellular-enabled MX67C across enterprise sites, enabling cellular WAN failover to improve branch connectivity resilience during primary WAN outages.',
  'Provisioned and troubleshot enterprise wireless infrastructure, including APs and 10+ SSIDs using Cisco Catalyst Center and WLC platforms; supported Cisco ISE/RADIUS authentication, guest wireless, and enterprise WLAN connectivity.',
  'Performed root cause analysis of wireless connectivity failures, identifying DHCP scope and IP addressing dependencies following an enterprise migration from 192.168.x.x to standardized 10.x.x.x addressing.',
  'Improved wireless performance by supporting AP migrations from 2.4 GHz to 5 GHz to reduce interference and contributing to Wi-Fi 6E (6 GHz) adoption initiatives across enterprise sites.',
  'Automated operational workflows using Cisco Catalyst Center Velocity templates and PowerShell, including device provisioning and twice-daily ServiceNow SLA reporting for 70+ team members.',
  'Enhanced infrastructure monitoring using SolarWinds NPM, SAM, and NTA, modifying 50+ alerts and improving alerting logic to strengthen network visibility and incident detection.',
  'Executed production network changes and supported 24x7 follow-the-sun operations, troubleshooting switching, VLAN, trunking, wireless, authentication, DHCP, and WAN incidents; performed RCA and service restoration within defined SLAs.',
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-slate-900/40">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label="Work Experience"
          title="Professional Journey"
          subtitle="Building and securing enterprise-grade networks at scale."
        />

        {/* Stats row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          {achievements.map((a) => (
            <div
              key={a.label}
              className="bg-slate-900/80 border border-white/8 rounded-2xl p-5 text-center hover:border-cyan-500/30 transition-colors duration-300"
            >
              <div className="text-3xl font-bold text-cyan-400 mb-1">{a.metric}</div>
              <div className="text-slate-400 text-xs tracking-wide">{a.label}</div>
            </div>
          ))}
        </div>

        {/* Experience card */}
        <div className="bg-slate-900/60 border border-white/8 rounded-2xl overflow-hidden hover:border-cyan-500/20 transition-all duration-300">
          {/* Card header */}
          <div className="p-6 sm:p-8 border-b border-white/8 bg-gradient-to-r from-cyan-500/5 to-blue-500/5">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-cyan-400/10 rounded-xl text-cyan-400 mt-0.5 shrink-0">
                  <Briefcase size={22} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Network Engineer (L2)</h3>
                  <p className="text-cyan-400 font-medium text-base">Tata Consultancy Services</p>
                </div>
              </div>
              <div className="flex flex-col sm:items-end gap-2 text-sm text-slate-400 sm:text-right">
                <span className="flex items-center gap-1.5">
                  <Calendar size={14} className="text-slate-500" />
                  March 2025 – Present
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin size={14} className="text-slate-500" />
                  Chennai, India
                </span>
                <span className="inline-flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 rounded-full px-3 py-0.5 text-xs font-medium">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                  Currently Employed
                </span>
              </div>
            </div>
          </div>

          {/* Bullets */}
          <div className="p-6 sm:p-8">
            <ul className="space-y-4">
              {bullets.map((b, i) => (
                <li key={i} className="flex gap-3 group">
                  <ChevronRight
                    size={16}
                    className="text-cyan-500 mt-1 shrink-0 group-hover:text-cyan-300 transition-colors"
                  />
                  <span className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
                    {b}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
