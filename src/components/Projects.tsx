import { useInView } from 'react-intersection-observer';
import { ExternalLink, Code } from 'lucide-react';

const projects = [
  {
    id: 1,
    name: 'Playwright DailyFinance Web Automation',
    emoji: '🎭',
    color: '#2EAD33',
    tags: ['Playwright', 'JavaScript', 'Gmail API', 'JSON', 'Automation'],
    type: 'Web Automation',
    description:
      'Automated key features of the DailyFinance Website using Playwright and JavaScript, including user registration with Gmail API verification, login, item addition, profile photo upload, password reset, and re-login, with test data managed in JSON.',
    highlights: [
      'Gmail API email verification',
      'User registration & login flows',
      'Profile photo upload testing',
      'Password reset automation',
      'JSON-based test data management',
    ],
    github: 'https://github.com/RayhanAyon/Playwright_DailyFinance_Web_Automation',
  },
  {
    id: 2,
    name: 'Rest Assured API Automation',
    emoji: '🔗',
    color: '#7b2ff7',
    tags: ['Rest Assured', 'Java', 'TestNG', 'Gradle', 'Postman'],
    type: 'API Automation',
    description:
      'API testing automated using Postman and Rest Assured for Daily Finance app. Covered user/admin flows like registration, login, and item CRUD with positive and negative cases using Java, Gradle, and TestNG.',
    highlights: [
      'User & admin API flows',
      'CRUD operations testing',
      'Positive & negative test cases',
      'TestNG framework integration',
      'Gradle build automation',
    ],
    github: 'https://github.com/RayhanAyon/Rest_Assured_Dailyfinance_API_Automation',
  },
  {
    id: 3,
    name: 'Transaction API Testing',
    emoji: '💳',
    color: '#FF6C37',
    tags: ['Postman', 'Newman', 'API Testing', 'Automated Reporting'],
    type: 'API Testing',
    description:
      'Tested and validated a transaction system API using Postman and Newman, covering role management and various financial transactions with automated reporting.',
    highlights: [
      'Transaction system API validation',
      'Role management testing',
      'Newman automated reporting',
      'Financial transaction scenarios',
      'Complete test coverage',
    ],
    github: 'https://github.com/RayhanAyon/Transaction-API-Testing',
  },
  {
    id: 4,
    name: 'API Performance Test',
    emoji: '⚡',
    color: '#00d4ff',
    tags: ['JMeter', 'Load Testing', 'Stress Testing', 'CSV', 'API Chaining'],
    type: 'Performance Testing',
    description:
      'Tested Booking and Transaction APIs with JMeter for Load and Stress performance. Used API Chaining and multi-threading for DMoney\'s Transaction APIs with CSV data.',
    highlights: [
      'Load & stress testing with JMeter',
      'API chaining implementation',
      'Multi-threading configuration',
      'CSV data-driven testing',
      'Booking & Transaction API coverage',
    ],
    github: 'https://github.com/RayhanAyon/API_Performance_Test',
  },
  {
    id: 5,
    name: 'JUnit Automation Project',
    emoji: '✅',
    color: '#ffd700',
    tags: ['Selenium', 'JUnit', 'Java', 'WebDriver', 'IntelliJ IDEA'],
    type: 'Web Automation',
    description:
      'Automated web testing project using Selenium WebDriver with JUnit to validate form submissions on Digital Unite and WP Everest (including field input, file upload, submission, and success message assertion), and scraped latest share price table data from Dhaka Stock Exchange PLC, storing the extracted data into a text file.',
    highlights: [
      'Form submission validation',
      'File upload testing',
      'DSE share price scraping',
      'Data extraction to text file',
      'Success message assertion',
    ],
    github: 'https://github.com/RayhanAyon/Junit_Automation_Project',
  },
];

function ProjectCard({ project, index, inView }: { project: typeof projects[0]; index: number; inView: boolean }) {
  return (
    <div
      className={`group glass border border-white/5 rounded-2xl overflow-hidden hover:border-opacity-40 transition-all duration-700 flex flex-col ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{
        transitionDelay: `${index * 100}ms`,
        borderColor: `${project.color}20`,
      }}
    >
      {/* Card top bar */}
      <div
        className="h-1 w-full"
        style={{ background: `linear-gradient(90deg, ${project.color}, ${project.color}44)` }}
      />

      <div className="p-6 flex flex-col flex-1">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
              style={{ background: `${project.color}15`, border: `1px solid ${project.color}30` }}
            >
              {project.emoji}
            </div>
            <div>
              <span
                className="text-xs font-mono font-medium px-2 py-0.5 rounded-full"
                style={{ color: project.color, background: `${project.color}15`, border: `1px solid ${project.color}20` }}
              >
                {project.type}
              </span>
            </div>
          </div>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 glass rounded-lg flex items-center justify-center text-slate-400 hover:text-white border border-white/5 hover:border-white/20 transition-all"
          >
            <ExternalLink size={14} />
          </a>
        </div>

        {/* Title */}
        <h3 className="text-white font-bold text-base mb-3 group-hover:text-[#00d4ff] transition-colors leading-tight">
          {project.name}
        </h3>

        {/* Description */}
        <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        {/* Highlights */}
        <div className="mb-4">
          <ul className="space-y-1">
            {project.highlights.slice(0, 3).map((h, i) => (
              <li key={i} className="flex items-center gap-2 text-xs text-slate-400">
                <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: project.color }} />
                {h}
              </li>
            ))}
          </ul>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-white/5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded text-xs font-mono text-slate-400 bg-white/5 border border-white/5"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* View on GitHub */}
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 flex items-center justify-center gap-2 py-2.5 rounded-xl border text-xs font-semibold transition-all duration-200 hover:opacity-80"
          style={{
            borderColor: `${project.color}40`,
            color: project.color,
            background: `${project.color}08`,
          }}
        >
          <Code size={13} />
          View on GitHub
        </a>
      </div>
    </div>
  );
}

export default function Projects() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00d4ff]/30 to-transparent" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-[#00d4ff] font-mono text-sm mb-2">// 04. projects</p>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            Real-world QA automation and testing projects showcasing skills in manual, API, automation, and performance testing.
          </p>
          <div className="w-16 h-1 animated-border rounded-full mx-auto mt-4" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} inView={inView} />
          ))}
        </div>

        {/* GitHub CTA */}
        <div className={`text-center mt-12 transition-all duration-700 delay-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <a
            href="https://github.com/RayhanAyon"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 btn-outline rounded-xl font-semibold text-sm"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            See All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
