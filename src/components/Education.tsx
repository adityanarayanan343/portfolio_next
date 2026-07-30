import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';
import { SectionHeader } from './SectionHeader';

const education = [
  {
    degree: 'B.Tech. Computer Science and Engineering',
    institution: 'Sastra Deemed to be University',
    location: 'Thanjavur, India',
    period: '2020 – 2024',
    score: 'CGPA: 7.2 / 10',
    scoreLabel: 'CGPA',
    scoreValue: '7.2',
    scoreMax: '/ 10',
  },
];

const highlights = [
  { value: '7.2', label: 'CGPA' },
  { value: '2024', label: 'Graduated' },
  { value: 'CSE', label: 'Specialization' },
];

export default function Education() {
  return (
    <section id="education" className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label="Education"
          title="Academic Journey"
          subtitle="Building the engineering fundamentals that power my network engineering career."
        />

        {/* Highlights */}
        <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-10">
          {highlights.map((h) => (
            <div
              key={h.label}
              className="bg-slate-900/80 border border-white/8 rounded-2xl p-5 text-center hover:border-cyan-500/30 transition-colors duration-300"
            >
              <div className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-1">{h.value}</div>
              <div className="text-slate-400 text-xs tracking-wide">{h.label}</div>
            </div>
          ))}
        </div>

        {/* Education card */}
        <div className="max-w-3xl mx-auto">
          {education.map((edu) => (
            <div
              key={edu.degree}
              className="bg-slate-900/60 border border-white/8 rounded-2xl overflow-hidden hover:border-cyan-500/25 transition-all duration-300"
            >
              <div className="p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-cyan-400/10 rounded-xl text-cyan-400 shrink-0">
                      <GraduationCap size={22} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">{edu.degree}</h3>
                      <p className="text-cyan-400 font-medium text-sm">{edu.institution}</p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:items-end gap-1.5 text-sm text-slate-400 sm:text-right">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={14} className="text-slate-500" />
                      {edu.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={14} className="text-slate-500" />
                      {edu.location}
                    </span>
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-white/8 flex items-center gap-3">
                  <Award size={16} className="text-cyan-400" />
                  <span className="text-slate-300 text-sm">
                    <span className="font-semibold text-white">{edu.scoreValue}</span>
                    <span className="text-slate-500"> {edu.scoreMax}</span>
                    <span className="text-slate-500"> — {edu.scoreLabel}</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
