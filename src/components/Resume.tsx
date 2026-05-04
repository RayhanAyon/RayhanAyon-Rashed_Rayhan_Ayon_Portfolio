import { useInView } from 'react-intersection-observer';
import { Download, Eye, FileText } from 'lucide-react';

export default function Resume() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="resume" className="py-24 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00d4ff]/20 to-transparent" />

      <div ref={ref} className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-[#00d4ff] font-mono text-sm mb-2">// 06. resume</p>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            My <span className="gradient-text">Resume</span>
          </h2>
          <div className="w-16 h-1 animated-border rounded-full mx-auto" />
        </div>

        {/* Resume Preview Card */}
        <div
          className={`transition-all duration-700 delay-100 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        >
          <div className="glass border border-[#00d4ff]/20 rounded-2xl overflow-hidden">
            {/* Top bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-white/2">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                </div>
                <span className="text-slate-400 text-xs font-mono">Rashed_Rayhan_Ayon_Resume.pdf</span>
              </div>
              <FileText size={16} className="text-[#00d4ff]" />
            </div>

            {/* Resume Content Preview */}
            <div className="p-6 sm:p-10">
              {/* Resume Header */}
              <div className="border-b border-white/10 pb-6 mb-6 text-center">
                <h1 className="text-2xl font-black text-white mb-1">RASHED RAYHAN AYON</h1>
                <p className="text-[#00d4ff] text-sm font-medium">
                  SQA Enthusiast | Manual Testing | API Testing | Performance Testing | Automation Testing
                </p>
                <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 mt-3 text-slate-400 text-xs">
                  <span>📍 West Raja Bazar, Dhaka-1215</span>
                  <span>📧 rayhanyon1999@gmail.com</span>
                  <span>📞 +880 1673-907895</span>
                </div>
                <div className="flex justify-center gap-4 mt-2 text-xs">
                  <a href="https://www.linkedin.com/in/rashed-rayhan-ayon-589764168/" target="_blank" rel="noopener noreferrer" className="text-[#00d4ff] hover:underline">LinkedIn</a>
                  <a href="https://github.com/RayhanAyon" target="_blank" rel="noopener noreferrer" className="text-[#00d4ff] hover:underline">GitHub</a>
                </div>
              </div>

              {/* Resume Sections */}
              <div className="space-y-5 text-left">
                {/* Summary */}
                <div>
                  <h2 className="text-[#00d4ff] font-bold text-xs uppercase tracking-widest mb-2 border-b border-[#00d4ff]/20 pb-1">
                    Professional Summary
                  </h2>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    Seeking an SQA role to utilize attention to detail and problem-solving skills. Looking to improve software quality, reliability, and user experience. Eager to learn new testing tools, collaborate in a team environment, and grow skills through real-world projects.
                  </p>
                </div>

                {/* Experience */}
                <div>
                  <h2 className="text-[#00d4ff] font-bold text-xs uppercase tracking-widest mb-2 border-b border-[#00d4ff]/20 pb-1">
                    Experience
                  </h2>
                  <div>
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-white font-semibold text-xs">Intern Software Test Engineer</p>
                        <p className="text-[#7b2ff7] text-xs">RedDot Digital Limited</p>
                      </div>
                      <span className="text-slate-500 text-xs font-mono">June 2025 – Oct 2025</span>
                    </div>
                    <ul className="mt-2 space-y-1">
                      {[
                        'Tested Banking HRIS solution via manual testing, UAT, and documentation.',
                        'Performed manual, API, and mobile app testing for MFS solution.',
                        'Created and maintained detailed test cases for functional and integration scenarios.',
                        'Documented test results, defects, and process improvements.',
                      ].map((r, i) => (
                        <li key={i} className="text-slate-400 text-xs flex items-start gap-2">
                          <span className="text-[#00d4ff] mt-0.5">▸</span>
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Skills */}
                <div>
                  <h2 className="text-[#00d4ff] font-bold text-xs uppercase tracking-widest mb-2 border-b border-[#00d4ff]/20 pb-1">
                    Technical Skills
                  </h2>
                  <div className="grid grid-cols-2 gap-x-6 gap-y-1 text-xs text-slate-400">
                    <div><span className="text-slate-300 font-medium">Manual Testing:</span> Test Case Design, Bug Tracking</div>
                    <div><span className="text-slate-300 font-medium">API Testing:</span> Postman, Newman, Rest Assured</div>
                    <div><span className="text-slate-300 font-medium">Performance:</span> Apache JMeter</div>
                    <div><span className="text-slate-300 font-medium">Automation:</span> Playwright, JUnit, Selenium</div>
                    <div><span className="text-slate-300 font-medium">Database:</span> MySQL</div>
                    <div><span className="text-slate-300 font-medium">Languages:</span> Java, JavaScript</div>
                  </div>
                </div>

                {/* Education */}
                <div>
                  <h2 className="text-[#00d4ff] font-bold text-xs uppercase tracking-widest mb-2 border-b border-[#00d4ff]/20 pb-1">
                    Education
                  </h2>
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-white font-semibold text-xs">B.Sc. in Computer Science and Engineering</p>
                      <p className="text-slate-400 text-xs">University of Development Alternative (UODA)</p>
                    </div>
                    <span className="text-slate-500 text-xs font-mono">2022</span>
                  </div>
                </div>
              </div>

              {/* Blur overlay for full resume */}
              <div className="relative mt-4">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a0f1e]/90 z-10 pointer-events-none" />
                <div className="h-16 opacity-20">
                  <div className="h-2 bg-white/10 rounded w-3/4 mb-2" />
                  <div className="h-2 bg-white/10 rounded w-full mb-2" />
                  <div className="h-2 bg-white/10 rounded w-2/3" />
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="px-6 sm:px-10 pb-8 flex flex-col sm:flex-row gap-3">
              <a
                href="/RashedRayhanAyon_QA.pdf"
                download
                className="flex-1 flex items-center justify-center gap-2 py-3 btn-primary rounded-xl text-white font-semibold text-sm"
              >
                <Download size={16} />
                Download Resume 
              </a>
              <a
                href="/RashedRayhanAyon_QA.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 btn-outline rounded-xl font-semibold text-sm"
              >
                <Eye size={16} />
                View Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
