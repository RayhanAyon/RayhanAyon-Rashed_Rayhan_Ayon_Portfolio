import { useInView } from 'react-intersection-observer';
import { User, Target, Lightbulb, Award } from 'lucide-react';

const highlights = [
  {
    icon: <Target size={20} className="text-[#00d4ff]" />,
    title: 'Detail-Oriented',
    desc: 'Meticulous approach to identifying edge cases and ensuring full test coverage',
  },
  {
    icon: <Lightbulb size={20} className="text-[#7b2ff7]" />,
    title: 'Problem Solver',
    desc: 'Analytical mindset to root-cause defects and suggest meaningful improvements',
  },
  {
    icon: <Award size={20} className="text-[#00ff88]" />,
    title: 'Quick Learner',
    desc: 'Enthusiastic about exploring new testing tools and adopting best practices',
  },
  {
    icon: <User size={20} className="text-[#ffd700]" />,
    title: 'Team Player',
    desc: 'Collaborative spirit that supports dev and QA teams to ship quality software',
  },
];

const specializations = [
  'Manual Testing',
  'Automation Testing',
  'API Testing',
  'Performance Testing',
  'Database Testing',
];

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00d4ff]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#7b2ff7]/30 to-transparent" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-[#00d4ff] font-mono text-sm mb-2">// 01. about</p>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-16 h-1 animated-border rounded-full mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Bio */}
          <div className={`transition-all duration-700 delay-100 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="glass border border-white/5 rounded-2xl p-6 sm:p-8">
              {/* Code comment style header */}
              <div className="font-mono text-xs text-slate-500 mb-4">
                <span className="text-[#7b2ff7]">const</span>{' '}
                <span className="text-[#00d4ff]">aboutMe</span>{' '}
                <span className="text-white">=</span>{' '}
                <span className="text-[#00ff88]">{'{'}</span>
              </div>

              <div className="space-y-4 pl-4 border-l-2 border-[#00d4ff]/20">
                <div>
                  <span className="text-[#ffd700] font-mono text-xs">name: </span>
                  <span className="text-[#00ff88] font-mono text-xs">"Rashed Rayhan Ayon"</span>
                </div>
                <div>
                  <span className="text-[#ffd700] font-mono text-xs">role: </span>
                  <span className="text-[#00ff88] font-mono text-xs">"SQA Engineer"</span>
                </div>
                <div>
                  <span className="text-[#ffd700] font-mono text-xs">experience: </span>
                  <span className="text-[#00ff88] font-mono text-xs">"4 months"</span>
                </div>

                <div className="pt-2">
                 
                  <p className="text-slate-300 text-sm leading-relaxed mt-3">
                    Looking for an SQA role to use my{' '}
                    <span className="text-[#00d4ff]">attention to detail</span> and{' '}
                    <span className="text-[#00d4ff]">problem-solving skills</span>. I want to help improve
                    software quality, make it more reliable, and ensure a better user experience. Excited to
                    learn new testing tools, work in a team, and grow my skills in real-world projects.
                  </p>

                   <p className="text-slate-300 text-sm leading-relaxed">
                    I'd like to work for a company where I can use the knowledge and abilities I've gained from my
                    education and experiences to advance both the organization's operations and my own professional growth.
                  </p>
                </div>
              </div>

              <div className="font-mono text-xs text-[#00ff88] mt-4">{'}'}</div>

              {/* Specializations */}
              <div className="mt-6 pt-6 border-t border-white/5">
                <p className="text-slate-400 text-xs font-mono mb-3">// specializations</p>
                <div className="flex flex-wrap gap-2">
                  {specializations.map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1 rounded-full text-xs font-medium border border-[#00d4ff]/30 text-[#00d4ff] bg-[#00d4ff]/5"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right - Highlights */}
          <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            {highlights.map((item, i) => (
              <div
                key={i}
                className="glass glass-hover border border-white/5 rounded-xl p-5 group cursor-default"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-10 h-10 rounded-lg glass border border-white/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-white font-semibold text-sm mb-2">{item.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}

            {/* Quick info card */}
            <div className="col-span-full glass border border-[#00d4ff]/10 rounded-xl p-5">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-black gradient-text">4+</div>
                  <div className="text-slate-400 text-xs mt-1">Months Exp.</div>
                </div>
                <div className="border-x border-white/5">
                  <div className="text-2xl font-black gradient-text">5+</div>
                  <div className="text-slate-400 text-xs mt-1">Projects</div>
                </div>
                <div>
                  <div className="text-2xl font-black gradient-text">10+</div>
                  <div className="text-slate-400 text-xs mt-1">Tools Mastered</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
