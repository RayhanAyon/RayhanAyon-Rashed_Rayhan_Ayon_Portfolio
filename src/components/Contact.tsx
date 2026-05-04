import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const contactInfo = [
  {
    icon: <Mail size={20} className="text-[#00d4ff]" />,
    label: 'Email',
    value: 'rayhanyon1999@gmail.com',
    href: 'mailto:rayhanyon1999@gmail.com',
    color: '#00d4ff',
  },
  {
    icon: <Phone size={20} className="text-[#7b2ff7]" />,
    label: 'Phone',
    value: '+880 1673-907895',
    href: 'tel:+8801673907895',
    color: '#7b2ff7',
  },
  {
    icon: <MapPin size={20} className="text-[#00ff88]" />,
    label: 'Location',
    value: 'West Raja Bazar, Dhaka-1215',
    href: 'https://maps.google.com/?q=West+Raja+Bazar,Dhaka',
    color: '#00ff88',
  },
];

const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/rashed-rayhan-ayon-589764168/',
    color: '#0077b5',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: 'GitHub',
    href: 'https://github.com/RayhanAyon',
    color: '#ffffff',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
];

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    const mailtoLink = `mailto:rayhanyon1999@gmail.com?subject=${encodeURIComponent(subject || `Portfolio Contact from ${name}`)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
    window.open(mailtoLink);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00d4ff]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#7b2ff7]/30 to-transparent" />

      {/* Background blobs */}
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-[#00d4ff]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-64 h-64 bg-[#7b2ff7]/5 rounded-full blur-3xl pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-[#00d4ff] font-mono text-sm mb-2">// 07. contact</p>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-md mx-auto">
            I'm currently open to new opportunities. Whether you have a question, want to collaborate, or just want to say hi — my inbox is always open!
          </p>
          <div className="w-16 h-1 animated-border rounded-full mx-auto mt-4" />
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left - Info */}
          <div className={`transition-all duration-700 delay-100 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="glass border border-white/5 rounded-2xl p-6 sm:p-8 h-full">
              <h3 className="text-white font-bold text-lg mb-2">Let's Build Something Together</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-8">
                I'm a passionate SQA engineer ready to contribute to quality-driven teams. Feel free to reach out through any channel below.
              </p>

              {/* Contact info items */}
              <div className="space-y-4 mb-8">
                {contactInfo.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 glass border border-white/5 rounded-xl hover:border-opacity-30 transition-all duration-200 group"
                    style={{ borderColor: `${item.color}20` }}
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                      style={{ background: `${item.color}15`, border: `1px solid ${item.color}30` }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-slate-500 text-xs font-mono">{item.label}</p>
                      <p className="text-white font-medium text-sm group-hover:text-[#00d4ff] transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social links */}
              <div>
                <p className="text-slate-500 text-xs font-mono mb-3">// social profiles</p>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2.5 glass border border-white/5 rounded-xl hover:border-opacity-30 transition-all duration-200 group"
                      style={{ borderColor: `${social.color}20` }}
                    >
                      <span style={{ color: social.color }} className="group-hover:scale-110 transition-transform">
                        {social.icon}
                      </span>
                      <span className="text-slate-300 text-sm font-medium group-hover:text-white transition-colors">
                        {social.name}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className={`transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <form onSubmit={handleSubmit} className="glass border border-[#00d4ff]/15 rounded-2xl p-6 sm:p-8">
              <p className="text-slate-400 text-xs font-mono mb-6">// send me a message</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-slate-400 text-xs font-mono mb-1.5">name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-white/3 border border-white/10 rounded-xl text-white text-sm placeholder-slate-600 focus:outline-none focus:border-[#00d4ff]/50 focus:ring-1 focus:ring-[#00d4ff]/20 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 text-xs font-mono mb-1.5">email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 bg-white/3 border border-white/10 rounded-xl text-white text-sm placeholder-slate-600 focus:outline-none focus:border-[#00d4ff]/50 focus:ring-1 focus:ring-[#00d4ff]/20 transition-all"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-slate-400 text-xs font-mono mb-1.5">subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  className="w-full px-4 py-3 bg-white/3 border border-white/10 rounded-xl text-white text-sm placeholder-slate-600 focus:outline-none focus:border-[#00d4ff]/50 focus:ring-1 focus:ring-[#00d4ff]/20 transition-all"
                />
              </div>

              <div className="mb-6">
                <label className="block text-slate-400 text-xs font-mono mb-1.5">message *</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  className="w-full px-4 py-3 bg-white/3 border border-white/10 rounded-xl text-white text-sm placeholder-slate-600 focus:outline-none focus:border-[#00d4ff]/50 focus:ring-1 focus:ring-[#00d4ff]/20 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3.5 btn-primary rounded-xl text-white font-semibold text-sm"
              >
                {submitted ? (
                  <>
                    <CheckCircle size={16} className="text-[#00ff88]" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>

              <p className="text-slate-500 text-xs text-center mt-3">
                This will open your email client to send the message
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
