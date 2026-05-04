import { useInView } from 'react-intersection-observer';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const courses = [
  // Core Fundamentals
  'Computer Fundamentals',
  'Computer Organization and Architecture',
  'Digital Electronics and Logic Design',
  'Microprocessor & Assembly Language',

  // Programming & Software
  'Object Oriented Programming',
  'Data Structures & Algorithms',
  'Software Engineering',
  'System Analysis & Design',

  // Data & Databases
  'Database Management',
  'Management Information System',

  // Systems
  'Operating Systems',

  // Networks & Communications
  'Computer Networks',
  'Communication Engineering',
  'Data and Telecommunications',
  'Digital Signal Processing',

  // Web
  'Web Technologies',
];

const certifications = [
  {
    title: 'Software Quality Assurance',
    issuer: 'Self-Learning & Projects',
    color: '#00d4ff',
    icon: '🧪',
  },
  {
    title: 'Playwright Automation',
    issuer: 'Project-Based Learning',
    color: '#ffd700',
    icon: '🎭',
  },
  {
    title: 'API Testing with Postman',
    issuer: 'Practical Experience',
    color: '#7b2ff7',
    icon: '🔌',
  },
  {
    title: 'Performance Testing – JMeter',
    issuer: 'Hands-on Projects',
    color: '#00ff88',
    icon: '⚡',
  },
  {
    title: 'JUnit',
    issuer: 'Project-Based Learning',
    color: '#ffd700',
    icon: '✅',
  }
];

export default function Education() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="education" className="py-24 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#ffd700]/20 to-transparent" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-[#00d4ff] font-mono text-sm mb-2">// 05. education</p>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Education & <span className="gradient-text">Learning</span>
          </h2>
          <div className="w-16 h-1 animated-border rounded-full mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Education Card */}
          <div
            className={`transition-all duration-700 delay-100 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}
          >
            <div className="glass border border-[#ffd700]/20 rounded-2xl p-6 sm:p-8 h-full hover:border-[#ffd700]/40 transition-all duration-300">
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 border border-yellow-500/30 flex items-center justify-center flex-shrink-0">
                  <GraduationCap size={24} className="text-yellow-400" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg leading-tight">
                    B.Sc. in Computer Science and Engineering
                  </h3>
                  <p className="text-[#ffd700] font-semibold text-sm mt-1">
                    University of Development Alternative (UODA)
                  </p>
                </div>
              </div>

              {/* Info pills */}
              <div className="flex flex-wrap gap-3 mb-6">
                <div className="flex items-center gap-2 px-3 py-1.5 glass border border-white/10 rounded-lg">
                  <Calendar size={13} className="text-[#ffd700]" />
                  <span className="text-slate-300 text-xs font-mono">Graduated 2022</span>
                </div>
                
                <div className="flex items-center gap-2 px-3 py-1.5 glass border border-white/10 rounded-lg">
                  <Award size={13} className="text-[#00d4ff]" />
                  <span className="text-slate-300 text-xs">CGPA: 3.22</span>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-[#ffd700]/20 via-transparent to-transparent mb-5" />

              {/* Relevant courses */}
              <div>
                <p className="text-slate-400 text-xs font-mono mb-3">// relevant coursework</p>
                <div className="grid grid-cols-2 gap-2">
                  {courses.map((course) => (
                    <div key={course} className="flex items-center gap-2 text-xs text-slate-400">
                      <span className="w-1 h-1 rounded-full bg-[#ffd700] flex-shrink-0" />
                      {course}
                    </div>
                  ))}
                </div>
              </div>

              {/* Degree badge */}
              <div className="mt-6 pt-5 border-t border-white/5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-slate-500 text-xs">Degree</p>
                    <p className="text-white font-semibold text-sm mt-0.5">Bachelor of Science</p>
                  </div>
                  <div className="text-right">
                    <p className="text-slate-500 text-xs">Status</p>
                    <p className="text-[#00ff88] font-semibold text-sm mt-0.5">Completed ✓</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills & Certifications */}
          <div
            className={`transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
          >
            <div className="glass border border-white/5 rounded-2xl p-6 sm:p-8 h-full">
              <h3 className="text-white font-bold text-base mb-1">Practical Learning</h3>
              <p className="text-slate-500 text-xs font-mono mb-5">// skills earned through real projects</p>

              <div className="space-y-3 mb-8">
                {certifications.map((cert, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 p-4 glass border border-white/5 rounded-xl hover:border-opacity-30 transition-all duration-200 group"
                    style={{ borderColor: `${cert.color}20` }}
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center text-lg flex-shrink-0"
                      style={{ background: `${cert.color}15`, border: `1px solid ${cert.color}30` }}
                    >
                      {cert.icon}
                    </div>
                    <div className="flex-1">
                      <p className="text-white font-semibold text-sm group-hover:text-[#00d4ff] transition-colors">
                        {cert.title}
                      </p>
                      <p className="text-slate-500 text-xs mt-0.5">{cert.issuer}</p>
                    </div>
                    <div
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{ background: cert.color }}
                    />
                  </div>
                ))}
              </div>

              {/* Currently learning */}
              <div className="glass border border-[#00d4ff]/10 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 bg-[#00ff88] rounded-full pulse-glow" />
                  <p className="text-[#00ff88] text-xs font-mono font-semibold">Currently Learning</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Playwright', 'GitHub', 'CI/CD Pipeline'].map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 rounded-full text-xs border border-[#00d4ff]/20 text-[#00d4ff] bg-[#00d4ff]/5"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
