import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Copy, 
  Check, 
  Send, 
  MessageSquare, 
  CheckCircle2 
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/resumeData';
import { GithubIcon } from './Icons';
import confetti from 'canvas-confetti';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    confetti({
      particleCount: 40,
      spread: 50,
      origin: { y: 0.8 },
    });
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2200);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      formData.subject || `Inquiry from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Hi Travis,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`
    )}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#fafaf9] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5" /> Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Let's Build Something High-Impact
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Whether you are looking for staff engineering leadership in AI systems, platform architecture, or open-source collaboration, let's talk.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-5xl mx-auto items-start">
          
          {/* Left: Quick Connect Card */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Direct Email Card */}
            <div className="p-7 rounded-3xl bg-white border border-stone-200 shadow-xs hover:shadow-md transition-all">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-cyan-50 border border-cyan-200 text-cyan-700">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  Preferred
                </span>
              </div>
              <div className="text-xs text-slate-500 font-medium">Direct Email</div>
              <div className="text-sm sm:text-base font-bold text-slate-950 mt-1 truncate">
                {PERSONAL_INFO.email}
              </div>
              <div className="mt-5 flex flex-wrap items-center gap-2.5">
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold transition-all shadow-xs cursor-pointer whitespace-nowrap"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 shrink-0" /> : <Copy className="w-3.5 h-3.5 shrink-0" />}
                  <span>{copiedEmail ? 'Copied!' : 'Copy Email'}</span>
                </button>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="px-3.5 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-slate-800 text-xs font-semibold transition-colors border border-stone-200 whitespace-nowrap"
                >
                  Open Mail App
                </a>
              </div>
            </div>

            {/* Phone & Location Card */}
            <div className="p-7 rounded-3xl bg-white border border-stone-200 shadow-xs hover:shadow-md transition-all space-y-5">
              <div>
                <div className="flex items-center gap-2 text-slate-500 text-xs font-medium mb-1">
                  <Phone className="w-3.5 h-3.5 text-emerald-600" /> Phone
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-slate-950">{PERSONAL_INFO.phone}</span>
                  <button
                    onClick={handleCopyPhone}
                    className="text-xs text-cyan-700 hover:underline font-semibold flex items-center gap-1 cursor-pointer"
                  >
                    {copiedPhone ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedPhone ? 'Copied!' : 'Copy'}</span>
                  </button>
                </div>
              </div>

              <div className="pt-4 border-t border-stone-200">
                <div className="flex items-center gap-2 text-slate-500 text-xs font-medium mb-1">
                  <MapPin className="w-3.5 h-3.5 text-rose-500" /> Location
                </div>
                <div className="text-sm font-bold text-slate-950">{PERSONAL_INFO.location}</div>
                <div className="text-xs text-slate-400 mt-0.5">Open to remote & leadership roles</div>
              </div>

              <div className="pt-4 border-t border-stone-200">
                <div className="flex items-center gap-2 text-slate-500 text-xs font-medium mb-1">
                  <span className="text-slate-800">⚡</span> GitHub
                </div>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-cyan-800 hover:text-cyan-900 hover:underline flex items-center gap-1.5"
                >
                  <GithubIcon className="w-4 h-4 text-slate-800" />
                  <span>github.com/kovartravis</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right: Quick Direct Message Form */}
          <div className="lg:col-span-7 bg-white border border-stone-200 rounded-3xl p-7 sm:p-10 shadow-xs">
            <h3 className="text-xl font-bold text-slate-950 mb-1.5 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-cyan-700" />
              Send a Direct Message
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              Fills your default mail client with formatted details or lets you shoot a message straight away.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Jane Doe"
                    className="w-full bg-stone-50 border border-stone-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-cyan-600 shadow-2xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1.5">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jane@company.com"
                    className="w-full bg-stone-50 border border-stone-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-cyan-600 shadow-2xs"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Staff Engineer Opportunity / AI Architecture Inquiry"
                  className="w-full bg-stone-50 border border-stone-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-cyan-600 shadow-2xs"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1.5">
                  Message
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Hi Travis, I saw your work on Neuron and the lead-qualification AI agents at St. Jude..."
                  className="w-full bg-stone-50 border border-stone-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-cyan-600 resize-none shadow-2xs"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-xs hover:shadow-md transition-all cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </button>

              {submitted && (
                <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2 animate-in fade-in">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Opening your mail app with the formatted message!</span>
                </div>
              )}
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
