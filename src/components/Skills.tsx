import { useInView } from 'react-intersection-observer';

const skillCategories = [
  {
    category: 'Manual Testing',
    color: '#00d4ff',
    icon: '🧪',
    skills: [
      { name: 'Test Case Design', level: 85 },
      { name: 'Test Execution', level: 88 },
      { name: 'Bug Tracking & Reporting', level: 85 },
      { name: 'Test Management Tools', level: 85 },
    ],
  },
  {
    category: 'API Testing',
    color: '#7b2ff7',
    icon: '🔌',
    skills: [
      { name: 'Postman', level: 85 },
      { name: 'Newman', level: 85 },
      { name: 'REST API Testing', level: 85 },
      { name: 'Rest Assured', level: 80 },
    ],
  },
  {
    category: 'Performance Testing',
    color: '#00ff88',
    icon: '⚡',
    skills: [
      { name: 'Apache JMeter', level: 82 },
      { name: 'Load Testing', level: 82 },
      { name: 'Stress Testing', level: 81 },
      { name: 'API Chaining', level: 88},
    ],
  },
  {
    category: 'Automation Testing',
    color: '#ffd700',
    icon: '🤖',
    skills: [
      { name: 'Playwright', level: 80 },
      { name: 'Selenium / JUnit', level: 82 },
      { name: 'Java', level: 70 },
      { name: 'JavaScript', level: 72 },
    ],
  },
  {
    category: 'Database & Extra',
    color: '#ff6b6b',
    icon: '🗄️',
    skills: [
      { name: 'MySQL', level: 75 },
      { name: 'HTML / CSS', level: 83 },
      { name: 'Bootstrap', level: 75 },
      { name: 'Git / GitHub', level: 70 },
    ],
  },
];

const toolBadges = [
  { name: 'Postman', color: '#FF6C37', icon: '📮' },
  { name: 'JMeter', color: '#D22128', icon: '⚡' },
  { name: 'Playwright', color: '#2EAD33', icon: '🎭' },
  { name: 'JUnit', color: '#25A162', icon: '✅' },
  { name: 'Selenium', color: '#43B02A', icon: '🌐' },
  { name: 'MySQL', color: '#4479A1', icon: '🗄️' },
  { name: 'Newman', color: '#FF6C37', icon: '📋' },
  { name: 'Rest Assured', color: '#7b2ff7', icon: '🔗' },
  { name: 'Java', color: '#007396', icon: '☕' },
  { name: 'JavaScript', color: '#F7DF1E', icon: '🟨' },
  { name: 'HTML', color: '#E34F26', icon: '🌐' },
  { name: 'CSS', color: '#1572B6', icon: '🎨' },
  { name: 'Bootstrap', color: '#7952B3', icon: '📦' },
  { name: 'GitHub', color: '#fff', icon: '⚙️' },
];

function SkillBar({ name, level, color, inView }: { name: string; level: number; color: string; inView: boolean }) {
  return (
    <div className="mb-3">
      <div className="flex justify-between items-center mb-1">
        <span className="text-slate-300 text-xs font-medium">{name}</span>
        <span className="text-xs font-mono" style={{ color }}>{level}%</span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{
            width: inView ? `${level}%` : '0%',
            background: `linear-gradient(90deg, ${color}99, ${color})`,
            transitionDelay: '300ms',
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#7b2ff7]/30 to-transparent" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-[#00d4ff] font-mono text-sm mb-2">// 02. skills</p>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Skills & <span className="gradient-text">Tools</span>
          </h2>
          <div className="w-16 h-1 animated-border rounded-full mx-auto" />
        </div>

        {/* Skill Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {skillCategories.map((cat, i) => (
            <div
              key={cat.category}
              className={`glass glass-hover border border-white/5 rounded-2xl p-5 transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
                  style={{ background: `${cat.color}15`, border: `1px solid ${cat.color}30` }}
                >
                  {cat.icon}
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm">{cat.category}</h3>
                  <div className="w-8 h-0.5 rounded mt-1" style={{ background: cat.color }} />
                </div>
              </div>

              {cat.skills.map((skill) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  color={cat.color}
                  inView={inView}
                />
              ))}
            </div>
          ))}

          {/* Languages card spanning extra */}
          <div
            className={`glass glass-hover border border-white/5 rounded-2xl p-5 transition-all duration-700 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{ transitionDelay: '500ms' }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg bg-[#00d4ff]/10 border border-[#00d4ff]/20">
                💻
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm">Programming Languages</h3>
                <div className="w-8 h-0.5 rounded mt-1 bg-[#00d4ff]" />
              </div>
            </div>
            <div className="flex gap-3">
              {[
                { lang: 'Java', color: '#007396', icon: '☕' },
                { lang: 'JavaScript', color: '#F7DF1E', icon: '🟨' },
              ].map((l) => (
                <div
                  key={l.lang}
                  className="flex-1 rounded-xl p-4 text-center border"
                  style={{ background: `${l.color}10`, borderColor: `${l.color}30` }}
                >
                  <div className="text-2xl mb-1">{l.icon}</div>
                  <div className="text-white font-semibold text-sm">{l.lang}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tool Badges */}
        <div className={`transition-all duration-700 delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-center text-slate-500 font-mono text-xs mb-5">// all tools & technologies</p>
          <div className="flex flex-wrap justify-center gap-3">
            {toolBadges.map((tool) => (
              <div
                key={tool.name}
                className="flex items-center gap-2 px-4 py-2 glass border border-white/5 rounded-full hover:border-[#00d4ff]/30 transition-all duration-200 group cursor-default"
              >
                <span className="text-sm">{tool.icon}</span>
                <span className="text-slate-300 group-hover:text-white text-sm font-medium transition-colors">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
