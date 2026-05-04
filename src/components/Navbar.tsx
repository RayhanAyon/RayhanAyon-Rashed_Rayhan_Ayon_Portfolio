import { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map(l => l.href.replace('#', ''));
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a0f1e]/95 backdrop-blur-xl border-b border-[#00d4ff]/10 shadow-lg shadow-black/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleNavClick('#home')}>
            <div className="w-8 h-8 rounded-lg animated-border flex items-center justify-center">
              <div className="w-7 h-7 bg-[#0a0f1e] rounded-md flex items-center justify-center">
                <Code2 size={16} className="text-[#00d4ff]" />
              </div>
            </div>
            <span className="font-bold text-white font-mono text-sm">
              As-salamu Alaykum<span className="text-[#00d4ff]">..</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative group ${
                  activeSection === link.href.replace('#', '')
                    ? 'text-[#00d4ff]'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {link.label}
                {activeSection === link.href.replace('#', '') && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#00d4ff] rounded-full" />
                )}
              </button>
            ))}
            <a
              href="/RashedRayhanAyon_QA.pdf"
              download
              className="ml-4 px-4 py-2 btn-primary rounded-lg text-sm font-semibold text-white"
            >
              Download CV
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-slate-300 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0d1225]/98 backdrop-blur-xl border-b border-[#00d4ff]/10">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                  activeSection === link.href.replace('#', '')
                    ? 'text-[#00d4ff] bg-[#00d4ff]/10'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </button>
            ))}
            <a
              href="../RashedRayhanAyon_QA.pdf"
              download
              className="block mt-3 px-4 py-3 btn-primary rounded-lg text-sm font-semibold text-white text-center"
            >
              Download CV
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
