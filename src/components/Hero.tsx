import { useEffect, useState } from 'react';
import { MapPin, Phone, Mail, ChevronDown } from 'lucide-react';

const titles = [
  'SQA Enthusiast',
  'Manual Testing',
  'Automation Testing',
  'API Testing',
  'Performance Testing',
  ];

export default function Hero() {
  const [currentTitle, setCurrentTitle] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const target = titles[currentTitle];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && charIndex <= target.length) {
      timeout = setTimeout(() => {
        setDisplayText(target.slice(0, charIndex));
        setCharIndex(charIndex + 1);
      }, 80);
    } else if (!isDeleting && charIndex > target.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayText(target.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, 40);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, currentTitle]);

  // Generate random particles
  const particles = Array.from({ length: 60 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    delay: Math.random() * 4,
    duration: Math.random() * 3 + 2,
  }));

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-pattern"
    >
      {/* Ambient background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00d4ff]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#7b2ff7]/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00ff88]/3 rounded-full blur-3xl" />

        {/* Floating particles */}
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full bg-[#00d4ff]"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              opacity: 0.2,
              animation: `twinkle ${p.duration}s ease-in-out ${p.delay}s infinite`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-[#00d4ff]/20 mb-6 fade-in-up">
              <span className="w-2 h-2 bg-[#00ff88] rounded-full pulse-glow" />
              <span className="text-[#00d4ff] text-xs font-mono font-medium">Available for opportunities</span>
            </div>

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-3 leading-tight fade-in-up">
              Rashed Rayhan
              <span className="block gradient-text">Ayon</span>
            </h1>

            {/* Typed title */}
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
              <span className="text-slate-400 text-base sm:text-lg font-mono">{'>'}</span>
              <span className="text-[#00d4ff] text-base sm:text-lg font-mono font-semibold">
                {displayText}
                <span
                  className="inline-block w-0.5 h-5 bg-[#00d4ff] ml-0.5 align-middle"
                  style={{ animation: 'blink 1s step-end infinite' }}
                />
              </span>
            </div>

            {/* Location */}
            <div className="flex items-center justify-center lg:justify-start gap-2 text-slate-400 text-sm mb-6">
              <MapPin size={14} className="text-[#00d4ff]" />
              <span>West Raja Bazar, Dhaka-1215, Bangladesh</span>
            </div>

            {/* Brief intro */}
            <p className="text-slate-400 text-base leading-relaxed max-w-lg mx-auto lg:mx-0 mb-8">
              <span className="text-[#00d4ff] font-semibold">
              I don't just test software — I defend user experience.
              With 4 months of hands-on QA across Manual, API, Performance & Automation Testing, I turn test cases into quality
              gates and bug reports into better products,  driven by one belief: great software starts with finding what breaks 
              before users ever do.</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-8">
              {/* <a
                href="/resume.pdf"
                download
                className="flex items-center justify-center gap-2 px-6 py-3 btn-primary rounded-xl text-white font-semibold text-sm"
              >
                <Download size={16} />
                Download Resume
              </a> */}
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center justify-center gap-2 px-6 py-3 btn-outline rounded-xl font-semibold text-sm"
              >
                <Mail size={16} />
                Hire Me
              </button>
            </div>

            {/* Social links */}
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <span className="text-slate-500 text-xs font-mono">// find me on</span>
              <a
                href="https://www.linkedin.com/in/rashed-rayhan-ayon-589764168/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 glass rounded-lg flex items-center justify-center text-slate-400 hover:text-[#0077b5] hover:border-[#0077b5]/40 transition-all duration-200 border border-white/5"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              
              <a
                href="https://github.com/RayhanAyon"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 glass rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:border-[#00d4ff]/40 transition-all duration-200 border border-white/5"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
              </a>
              
              <a
                href="mailto:rayhanyon1999@gmail.com"
                className="w-9 h-9 glass rounded-lg flex items-center justify-center text-slate-400 hover:text-[#00d4ff] hover:border-[#00d4ff]/40 transition-all duration-200 border border-white/5"
              >
                <Mail size={16} />
              </a>
              <a
                href="tel:+8801673907895"
                className="w-9 h-9 glass rounded-lg flex items-center justify-center text-slate-400 hover:text-[#00d4ff] hover:border-[#00d4ff]/40 transition-all duration-200 border border-white/5"
              >
                <Phone size={16} />
              </a>
             
            </div>
          </div>

          {/* Right - Profile Photo */}
          <div className="flex-shrink-0 flex flex-col items-center gap-6">
            {/* Profile image */}
            <div className="relative float-animation">
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-full animated-border blur-md opacity-50 scale-110" />
              {/* Gradient border */}
              <div className="profile-ring relative z-10">
                <div className="w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden bg-[#0d1225] border-2 border-[#0a0f1e]">
                  <img
                    src="/profile.jpg"
                    alt="Rashed Rayhan Ayon"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-2 -right-4 glass border border-[#00d4ff]/30 rounded-xl px-3 py-1.5 flex items-center gap-2 glow-cyan">
                <span className="text-[#00d4ff] text-xs font-mono font-bold">SQA</span>
                <span className="text-white text-xs">Engineer</span>
              </div>

              <div className="absolute -bottom-2 -left-4 glass border border-[#7b2ff7]/30 rounded-xl px-3 py-1.5 flex items-center gap-2">
                <span className="text-[#7b2ff7] text-xs font-bold">4+</span>
                <span className="text-white text-xs">Months Exp.</span>
              </div>
            </div>

            {/* Stats row */}
            <div className="flex gap-4">
              {[
                { val: '5+', label: 'Projects' },
                { val: '10+', label: 'Tools' },
                { val: '4+', label: 'Frameworks' },
              ].map((stat) => (
                <div key={stat.label} className="glass border border-white/5 rounded-xl px-4 py-3 text-center">
                  <div className="text-xl font-black gradient-text">{stat.val}</div>
                  <div className="text-slate-500 text-xs">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-16 pb-8">
          <button
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-slate-500 hover:text-[#00d4ff] transition-colors flex flex-col items-center gap-2"
            style={{ animation: 'float 2s ease-in-out infinite' }}
          >
            <span className="text-xs font-mono">scroll down</span>
            <ChevronDown size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
