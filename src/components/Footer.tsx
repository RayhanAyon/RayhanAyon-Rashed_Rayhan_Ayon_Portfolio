import { Heart, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative py-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Left - Logo */}
          <div className="flex items-center gap-2">
            <span className="text-slate-500 text-xs font-mono">
              &lt;RRA<span className="text-[#00d4ff]">/</span>&gt;
            </span>
            <span className="text-slate-500 text-xs">
              Rashed Rayhan Ayon
            </span>
          </div>

          {/* Center - Copyright */}
          <div className="flex items-center gap-1.5 text-slate-500 text-xs">
            <span>© {new Date().getFullYear()} Made with</span>
            {/* <Heart size={12} className="text-red-500 fill-red-500" /> */}
            <span>AI</span>
          </div>

          {/* Right - Scroll to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 glass border border-white/5 rounded-lg text-slate-400 hover:text-[#00d4ff] hover:border-[#00d4ff]/30 transition-all text-xs font-mono group"
          >
            <span>back to top</span>
            <ArrowUp size={13} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Bottom line */}
        <div className="mt-6 pt-4 border-t border-white/3 text-center">
          <p className="text-slate-600 text-xs font-mono">
            Built with <span className="text-[#00d4ff]">React</span> + <span className="text-[#7b2ff7]">TypeScript</span> + <span className="text-[#00ff88]">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
