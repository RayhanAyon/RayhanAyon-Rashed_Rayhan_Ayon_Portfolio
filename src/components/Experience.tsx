import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react';

const experiences = [
  {
    title: 'Intern Software Test Engineer',
    company: 'RedDot Digital Limited',
    location: 'Gulshan South Avenue, Dhaka 1212',
    duration: 'June 2025 – Oct 2025',
    type: ['Internship', 'Full-time'],
    colorScheme: {
      icon: 'from-red-500/20 to-red-700/20 border-red-500/30',
      iconText: 'text-red-400',
      badge1: 'bg-[#00ff88]/10 text-[#00ff88] border-[#00ff88]/20',
      badge2: 'bg-[#00d4ff]/10 text-[#00d4ff] border-[#00d4ff]/20',
      tech: 'border-[#7b2ff7]/30 text-[#7b2ff7] bg-[#7b2ff7]/5 hover:bg-[#7b2ff7]/10',
      techLine: 'bg-[#7b2ff7]',
    },
    responsibilities: [
      'Tested Banking HRIS solution through manual testing, including writing test cases, executing user acceptance testing (UAT), and preparing documentation.',
      'Performed manual, API, and mobile application testing for Mobile Financial Services (MFS) solution.',
      'Created and maintained detailed test cases, ensuring coverage for functional and integration scenarios.',
      'Documented test results, defects, and process improvements to support development and QA teams.',
    ],
    techUsed: ['Manual Testing', 'API Testing', 'UAT', 'Test Cases', 'Bug Reporting', 'Mobile Testing', 'MFS', 'HRIS'],
  },
  {
    title: 'Trainee Junior Cloud Architect',
    company: 'Smart Technologies (BD) Ltd',
    location: 'Agargoan, Dhaka-1207',
    duration: 'Aug 2024 – Nov 2024',
    type: ['Trainee', 'Full-time'],
    colorScheme: {
      icon: 'from-blue-500/20 to-cyan-700/20 border-blue-500/30',
      iconText: 'text-blue-400',
      badge1: 'bg-[#00d4ff]/10 text-[#00d4ff] border-[#00d4ff]/20',
      badge2: 'bg-[#7b2ff7]/10 text-[#7b2ff7] border-[#7b2ff7]/20',
      tech: 'border-[#00d4ff]/30 text-[#00d4ff] bg-[#00d4ff]/5 hover:bg-[#00d4ff]/10',
      techLine: 'bg-[#00d4ff]',
    },
    responsibilities: [
      'Knowledge acquisition on different cloud technology platforms and tools.',
      'Completed AZ-900 certification course and advanced learning for AZ-104.',
      'Acquired expertise in Microsoft Active Directory, including user and group management.',
      'Achieved Microsoft Applied Skills certification for administering Active Directory Domain Services.',
      'Delivered professional presentations on Microsoft Outlook, Power Automate, and Google Workspace.',
      'Covered key SCCM topics: installed prerequisites, configured firewall settings and SQL Server; installed and configured SCCM, discovery methods, boundaries, and licensing options.',
      'Configured HPE servers by interpreting BOQs, setting up iLO, and updating firmware/SPP.',
      'Set up VMware ESXi servers for virtualization environments.',
    ],
    techUsed: [
      'Microsoft Azure', 'AZ-900', 'AZ-104', 'Active Directory', 'Microsoft 365',
      'Power Automate', 'Google Workspace', 'SCCM', 'HPE Servers', 'iLO', 'VMware ESXi',
    ],
  },
];

export default function Experience() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="experience" className="py-24 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00ff88]/20 to-transparent" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-[#00d4ff] font-mono text-sm mb-2">// 03. experience</p>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-16 h-1 animated-border rounded-full mx-auto" />
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px timeline-line hidden sm:block opacity-30" />

          {/* Experience Cards */}
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative mb-6 transition-all duration-700 ${
                inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
              }`}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 sm:left-6 top-8 w-4 h-4 rounded-full bg-[#00d4ff] pulse-glow hidden sm:block" />

              <div className="sm:ml-20">
                <div className="glass border border-[#00d4ff]/20 rounded-2xl p-6 sm:p-8 hover:border-[#00d4ff]/40 transition-all duration-300">
                  {/* Company header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                    <div className="flex items-start gap-4">
                      {/* Company logo placeholder */}
                      <div
                        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${exp.colorScheme.icon} border flex items-center justify-center flex-shrink-0`}
                      >
                        <Briefcase size={22} className={exp.colorScheme.iconText} />
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-lg">{exp.title}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="gradient-text font-semibold text-base">{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-2 mt-1 text-slate-400 text-sm">
                          <MapPin size={12} className="text-[#00d4ff]" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 px-4 py-2 glass border border-[#00d4ff]/20 rounded-xl h-fit">
                      <Calendar size={14} className="text-[#00d4ff]" />
                      <span className="text-[#00d4ff] font-mono text-sm font-medium">{exp.duration}</span>
                    </div>
                  </div>

                  {/* Type badges */}
                  <div className="flex gap-2 mb-6">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium border ${exp.colorScheme.badge1}`}
                    >
                      {exp.type[0]}
                    </span>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium border ${exp.colorScheme.badge2}`}
                    >
                      {exp.type[1]}
                    </span>
                  </div>

                  {/* Responsibilities */}
                  <div className="mb-6">
                    <h4 className="text-slate-300 font-semibold text-sm mb-3 flex items-center gap-2">
                      <span className="w-4 h-px bg-[#00d4ff]" />
                      Key Responsibilities
                    </h4>
                    <ul className="space-y-3">
                      {exp.responsibilities.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 group">
                          <CheckCircle
                            size={15}
                            className="text-[#00d4ff] mt-0.5 flex-shrink-0 group-hover:text-[#00ff88] transition-colors"
                          />
                          <span className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech used */}
                  <div>
                    <h4 className="text-slate-300 font-semibold text-sm mb-3 flex items-center gap-2">
                      <span className={`w-4 h-px ${exp.colorScheme.techLine}`} />
                      Technologies & Methods Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.techUsed.map((tech) => (
                        <span
                          key={tech}
                          className={`px-3 py-1 rounded-lg text-xs font-mono border transition-colors ${exp.colorScheme.tech}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Future placeholder */}
          <div
            className={`relative mt-6 transition-all duration-700 delay-300 ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="absolute left-4 sm:left-6 top-6 w-4 h-4 rounded-full border-2 border-[#00d4ff]/30 bg-[#0a0f1e] hidden sm:block" />
            <div className="sm:ml-20">
              <div className="glass border border-dashed border-white/10 rounded-2xl p-5 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <span className="text-lg">🚀</span>
                </div>
                <div>
                  <p className="text-slate-400 text-sm">Open to new opportunities</p>
                  <p className="text-[#00d4ff] text-xs font-mono mt-0.5">Your company could be here!</p>
                </div>
                <div className="ml-auto">
                  <a
                    href="mailto:rayhanyon1999@gmail.com"
                    className="px-4 py-2 btn-outline rounded-lg text-xs font-medium"
                  >
                    Hire Me →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}