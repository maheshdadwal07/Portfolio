import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

const Contact = () => {
  const { personalInfo } = portfolioData;
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-28 pb-20 relative z-10 w-full">
      <div className="max-w-[1160px] mx-auto px-8 w-full">
        
        <motion.div {...fadeUp(0)} className="text-center max-w-[560px] mx-auto">
          <div className="section-label justify-center">Contact</div>
          <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-extrabold leading-[1.1] tracking-[-0.03em] mb-[0.6rem]">
            Let's build something<br />worth shipping
          </h2>
          <p className="text-[0.95rem] text-text-muted mb-12">
            Open to internships, freelance projects, and startup opportunities. Response within 24 hours.
          </p>
        </motion.div>

        <motion.div {...fadeUp(0.1)} className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          <div>
            <p className="text-[1.2rem] font-bold mb-4 leading-[1.4]">Got a project in mind?<br />Let's talk engineering.</p>
            <p className="text-[0.88rem] text-text-muted leading-[1.7] mb-8">
              Whether you're a startup looking for a fullstack developer, or a recruiter with an interesting internship role — I'd love to connect. I take collaboration seriously and respond to every message.
            </p>
            
            <div className="flex flex-col gap-3">
              <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-3 text-[0.85rem] text-text-muted hover:text-accent-secondary transition-colors">
                <div className="w-[32px] h-[32px] flex items-center justify-center border border-[rgba(255,255,255,0.07)] rounded-[7px]">✉️</div>
                <span>{personalInfo.email}</span>
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[0.85rem] text-text-muted hover:text-accent-secondary transition-colors">
                <div className="w-[32px] h-[32px] flex items-center justify-center border border-[rgba(255,255,255,0.07)] rounded-[7px]">💼</div>
                <span>LinkedIn</span>
              </a>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[0.85rem] text-text-muted hover:text-accent-secondary transition-colors">
                <div className="w-[32px] h-[32px] flex items-center justify-center border border-[rgba(255,255,255,0.07)] rounded-[7px]"><FaGithub size={14} /></div>
                <span>GitHub</span>
              </a>
            </div>
          </div>

          <div className="bg-card-primary border border-[rgba(255,255,255,0.07)] rounded-[16px] p-[1.8rem]">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-[0.72rem] font-mono text-text-muted mb-1.5 tracking-[0.06em]">NAME</label>
                  <input required type="text" className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.07)] rounded-[8px] px-[0.9rem] py-[0.65rem] text-text-main text-[0.88rem] focus:outline-none focus:border-accent-primary focus:bg-[rgba(99,102,241,0.04)] transition-all" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-[0.72rem] font-mono text-text-muted mb-1.5 tracking-[0.06em]">EMAIL</label>
                  <input required type="email" className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.07)] rounded-[8px] px-[0.9rem] py-[0.65rem] text-text-main text-[0.88rem] focus:outline-none focus:border-accent-primary focus:bg-[rgba(99,102,241,0.04)] transition-all" placeholder="you@domain.com" />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-[0.72rem] font-mono text-text-muted mb-1.5 tracking-[0.06em]">MESSAGE</label>
                <textarea required className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.07)] rounded-[8px] px-[0.9rem] py-[0.65rem] text-text-main text-[0.88rem] focus:outline-none focus:border-accent-primary focus:bg-[rgba(99,102,241,0.04)] transition-all min-h-[110px] resize-y" placeholder="Tell me about your project..."></textarea>
              </div>
              <button type="submit" className="w-full py-[0.7rem] bg-accent-primary text-white rounded-[8px] font-bold text-[0.88rem] transition-all hover:bg-accent-secondary hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(99,102,241,0.35)]">
                Send Message
              </button>
            </form>
          </div>

        </motion.div>
      </div>

      {/* Toast */}
      <div className={`fixed bottom-8 right-8 bg-card-primary border border-[rgba(52,211,153,0.3)] rounded-[10px] px-[1.4rem] py-[0.9rem] text-[0.85rem] text-accent-green flex items-center gap-2 z-[9999] transition-all duration-300 ${submitted ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0 pointer-events-none'}`}>
        <span>✓ Message Sent Successfully</span>
      </div>

    </section>
  );
};

export default Contact;
