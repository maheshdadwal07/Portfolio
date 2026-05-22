import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

const Hero = () => {
  const { personalInfo } = portfolioData;

  return (
    <section id="hero" className="min-h-screen pt-20 flex items-center w-full relative z-10">
      <div className="max-w-[1160px] mx-auto px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
          
          {/* LEFT SIDE */}
          <motion.div {...fadeUp(0)}>
            <div className="flex items-center gap-2.5 font-mono text-[0.78rem] text-accent-teal mb-5">
              <span className="w-7 h-px bg-accent-teal"></span>
              Available for new opportunities
            </div>
            
            <h1 className="text-[clamp(2.6rem,5vw,4rem)] font-extrabold tracking-[-0.04em] leading-[1.05] mb-2">
              Hey, I'm<br />
              <span className="text-gradient">{personalInfo.name}.</span>
            </h1>
            
            <p className="text-[1.05rem] text-text-muted font-mono mb-5">
              // <span className="text-accent-secondary">{personalInfo.role}</span>
            </p>
            
            <p className="text-[0.95rem] text-text-muted leading-[1.7] max-w-[440px] mb-8">
              {personalInfo.shortIntro || "I architect and ship production-grade web applications — from performant React frontends to scalable Node.js APIs backed by MongoDB. I write clean code, sweat the details, and care deeply about what ships."}
            </p>
            
            <div className="flex flex-wrap gap-3 mb-8">
              <a href="#projects" className="btn-primary">View Projects →</a>
              <a href={personalInfo.resumeLink} target="_blank" rel="noopener noreferrer" className="btn-outline">⬇ Download Resume</a>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="btn-outline">GitHub ↗</a>
            </div>
            
            <div className="flex gap-3 mb-10">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center border border-[rgba(255,255,255,0.07)] rounded-lg text-text-muted text-[0.9rem] transition-all hover:border-accent-primary hover:text-accent-primary hover:bg-[rgba(99,102,241,0.08)]">
                <FaGithub size={16} />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center border border-[rgba(255,255,255,0.07)] rounded-lg text-text-muted text-[0.9rem] transition-all hover:border-accent-primary hover:text-accent-primary hover:bg-[rgba(99,102,241,0.08)]">
                <FaLinkedin size={16} />
              </a>
              <a href={`mailto:${personalInfo.email}`} className="w-9 h-9 flex items-center justify-center border border-[rgba(255,255,255,0.07)] rounded-lg text-text-muted text-[0.9rem] transition-all hover:border-accent-primary hover:text-accent-primary hover:bg-[rgba(99,102,241,0.08)]">
                <Mail size={16} />
              </a>
            </div>
            
            <div className="flex gap-8">
              <div className="text-center">
                <div className="text-[1.6rem] font-extrabold text-gradient">12+</div>
                <div className="text-[0.72rem] text-text-muted font-mono">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-[1.6rem] font-extrabold text-gradient">2yr</div>
                <div className="text-[0.72rem] text-text-muted font-mono">Building</div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT VISUAL */}
          <motion.div {...fadeUp(0.2)} className="relative h-[340px] lg:h-[460px]">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.12)_0%,transparent_70%)] pointer-events-none"></div>

            {/* Dashboard Card */}
            <div className="absolute top-1/2 left-1/2 -translate-x-[55%] -translate-y-1/2 w-[320px] bg-[rgba(13,21,38,0.9)] border border-[rgba(255,255,255,0.07)] rounded-[16px] p-[1.2rem] backdrop-blur-[10px]">
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-1.5">
                  <div className="w-[9px] h-[9px] rounded-full bg-[#f87171]"></div>
                  <div className="w-[9px] h-[9px] rounded-full bg-[#fbbf24]"></div>
                  <div className="w-[9px] h-[9px] rounded-full bg-[#34d399]"></div>
                </div>
                <span className="text-[0.72rem] font-mono text-text-muted">project-dashboard · live</span>
              </div>
              <div className="grid grid-cols-3 gap-2 mb-3">
                <div className="bg-[rgba(99,102,241,0.07)] border border-[rgba(99,102,241,0.12)] rounded-lg p-2">
                  <div className="text-[0.95rem] font-bold text-text-main">98%</div>
                  <div className="text-[0.62rem] text-text-muted font-mono">Uptime</div>
                </div>
                <div className="bg-[rgba(99,102,241,0.07)] border border-[rgba(99,102,241,0.12)] rounded-lg p-2">
                  <div className="text-[0.95rem] font-bold text-text-main">1.2k</div>
                  <div className="text-[0.62rem] text-text-muted font-mono">Users</div>
                </div>
                <div className="bg-[rgba(99,102,241,0.07)] border border-[rgba(99,102,241,0.12)] rounded-lg p-2">
                  <div className="text-[0.95rem] font-bold text-text-main">42ms</div>
                  <div className="text-[0.62rem] text-text-muted font-mono">P95 Lat</div>
                </div>
              </div>
              <div className="text-[0.65rem] font-mono text-text-muted mb-1.5">API Requests / Day</div>
              <div className="h-[60px] flex items-end gap-1 pt-2 border-t border-[rgba(255,255,255,0.07)]">
                <div className="rounded-t-[3px] flex-1 bg-[rgba(99,102,241,0.3)] transition-all duration-500 h-[40%]"></div>
                <div className="rounded-t-[3px] flex-1 bg-[rgba(99,102,241,0.3)] transition-all duration-500 h-[65%]"></div>
                <div className="rounded-t-[3px] flex-1 bg-[rgba(99,102,241,0.3)] transition-all duration-500 h-[50%]"></div>
                <div className="rounded-t-[3px] flex-1 bg-[rgba(99,102,241,0.3)] transition-all duration-500 h-[80%]"></div>
                <div className="rounded-t-[3px] flex-1 bg-accent-primary transition-all duration-500 h-[95%]"></div>
                <div className="rounded-t-[3px] flex-1 bg-[rgba(99,102,241,0.3)] transition-all duration-500 h-[70%]"></div>
                <div className="rounded-t-[3px] flex-1 bg-[rgba(99,102,241,0.3)] transition-all duration-500 h-[85%]"></div>
                <div className="rounded-t-[3px] flex-1 bg-accent-primary transition-all duration-500 h-[75%]"></div>
              </div>
            </div>

            {/* Terminal Card */}
            <div className="absolute top-[20px] right-[-20px] w-[220px] bg-[rgba(13,21,38,0.9)] border border-[rgba(255,255,255,0.07)] rounded-[16px] p-[1.2rem] backdrop-blur-[10px] font-mono text-[0.65rem] hidden lg:block">
              <div className="flex items-center gap-1.5 mb-2">
                <div className="flex gap-1.5">
                  <div className="w-[7px] h-[7px] rounded-full bg-[#f87171]"></div>
                  <div className="w-[7px] h-[7px] rounded-full bg-[#fbbf24]"></div>
                  <div className="w-[7px] h-[7px] rounded-full bg-[#34d399]"></div>
                </div>
                <span className="text-[0.6rem] text-text-muted">zsh</span>
              </div>
              <div className="mb-1 text-text-muted"><span className="text-accent-green">$ npm run dev</span></div>
              <div className="mb-1 text-accent-teal">✓ Ready on localhost:3000</div>
              <div className="mb-1 text-text-muted"><span className="text-accent-green">$ git push origin main</span></div>
              <div className="mb-1 text-accent-teal">Deployed to Vercel ✓</div>
              <div className="text-text-muted">$ <span className="inline-block w-[7px] h-[11px] bg-accent-green animate-[blink_1.2s_infinite]"></span></div>
            </div>

            {/* Stack Badges */}
            <div className="absolute bottom-[10px] left-[-10px] flex flex-wrap gap-1.5 w-[200px]">
              <div className="flex items-center gap-1.5 bg-[rgba(13,21,38,0.95)] border border-[rgba(255,255,255,0.07)] rounded-full px-2.5 py-1 text-[0.65rem] font-mono text-text-muted animate-[float-y_3s_ease-in-out_infinite]">
                <div className="w-1.5 h-1.5 rounded-full bg-[#61DAFB]"></div>React
              </div>
              <div className="flex items-center gap-1.5 bg-[rgba(13,21,38,0.95)] border border-[rgba(255,255,255,0.07)] rounded-full px-2.5 py-1 text-[0.65rem] font-mono text-text-muted animate-[float-y_3s_ease-in-out_infinite] [animation-delay:0.4s]">
                <div className="w-1.5 h-1.5 rounded-full bg-[#68A063]"></div>Node.js
              </div>
              <div className="flex items-center gap-1.5 bg-[rgba(13,21,38,0.95)] border border-[rgba(255,255,255,0.07)] rounded-full px-2.5 py-1 text-[0.65rem] font-mono text-text-muted animate-[float-y_3s_ease-in-out_infinite] [animation-delay:0.8s]">
                <div className="w-1.5 h-1.5 rounded-full bg-[#47A248]"></div>MongoDB
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
