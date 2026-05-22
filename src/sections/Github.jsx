import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

const Github = () => {
  const { personalInfo } = portfolioData;
  const githubUsername = personalInfo.github.split('/').pop() || 'maheshdadwal07';

  // Generate a random-ish contribution graph
  const cells = Array.from({ length: 26 * 7 }).map((_, i) => {
    // Weight the random to have more empty cells
    const val = Math.random();
    if (val > 0.85) return 'bg-accent-primary';
    if (val > 0.7) return 'bg-[rgba(99,102,241,0.65)]';
    if (val > 0.5) return 'bg-[rgba(99,102,241,0.4)]';
    if (val > 0.3) return 'bg-[rgba(99,102,241,0.2)]';
    return 'bg-[rgba(255,255,255,0.04)]';
  });

  return (
    <section id="github" className="py-28 relative z-10 w-full">
      <div className="max-w-[1160px] mx-auto px-8 w-full">
        
        <motion.div {...fadeUp(0)}>
          <div className="section-label">Activity</div>
          <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-extrabold leading-[1.1] tracking-[-0.03em] mb-[0.6rem]">
            GitHub presence
          </h2>
          <p className="text-[0.95rem] text-text-muted mb-12 max-w-[480px]">
            Consistent commits, open source contributions, and public project history.
          </p>
        </motion.div>

        <motion.div {...fadeUp(0.1)} className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6">
          
          <div className="bg-card-primary border border-[rgba(255,255,255,0.07)] rounded-[16px] p-6">
            <div className="text-[0.72rem] font-mono text-text-muted tracking-[0.08em] mb-5 uppercase">
              Contribution Graph · {new Date().getFullYear()}
            </div>
            
            <div className="grid grid-cols-[repeat(26,1fr)] gap-[2px]">
              {cells.map((color, i) => (
                <div key={i} className={`aspect-square rounded-[2px] ${color}`}></div>
              ))}
            </div>
            
            <div className="flex items-center gap-1.5 mt-4 text-[0.65rem] text-text-muted font-mono">
              Less
              <div className="w-2.5 h-2.5 rounded-[2px] bg-[rgba(255,255,255,0.04)]"></div>
              <div className="w-2.5 h-2.5 rounded-[2px] bg-[rgba(99,102,241,0.2)]"></div>
              <div className="w-2.5 h-2.5 rounded-[2px] bg-[rgba(99,102,241,0.4)]"></div>
              <div className="w-2.5 h-2.5 rounded-[2px] bg-[rgba(99,102,241,0.65)]"></div>
              <div className="w-2.5 h-2.5 rounded-[2px] bg-accent-primary"></div>
              More
            </div>
          </div>

          <div className="flex flex-col gap-[0.9rem]">
            <div className="flex items-center justify-between p-[0.7rem_0.9rem] bg-[rgba(255,255,255,0.02)] rounded-[8px] border border-[rgba(255,255,255,0.07)]">
              <span className="text-[0.75rem] text-text-muted font-mono">Total Commits</span>
              <span className="text-[0.9rem] font-bold text-accent-secondary">480+</span>
            </div>
            <div className="flex items-center justify-between p-[0.7rem_0.9rem] bg-[rgba(255,255,255,0.02)] rounded-[8px] border border-[rgba(255,255,255,0.07)]">
              <span className="text-[0.75rem] text-text-muted font-mono">Public Repos</span>
              <span className="text-[0.9rem] font-bold text-accent-secondary">18</span>
            </div>
            <div className="flex items-center justify-between p-[0.7rem_0.9rem] bg-[rgba(255,255,255,0.02)] rounded-[8px] border border-[rgba(255,255,255,0.07)]">
              <span className="text-[0.75rem] text-text-muted font-mono">Stars Earned</span>
              <span className="text-[0.9rem] font-bold text-accent-secondary">34</span>
            </div>
            <div className="flex items-center justify-between p-[0.7rem_0.9rem] bg-[rgba(255,255,255,0.02)] rounded-[8px] border border-[rgba(255,255,255,0.07)]">
              <span className="text-[0.75rem] text-text-muted font-mono">Pull Requests</span>
              <span className="text-[0.9rem] font-bold text-accent-secondary">56</span>
            </div>
            <div className="flex items-center justify-between p-[0.7rem_0.9rem] bg-[rgba(255,255,255,0.02)] rounded-[8px] border border-[rgba(255,255,255,0.07)]">
              <span className="text-[0.75rem] text-text-muted font-mono">Top Language</span>
              <span className="text-[0.9rem] font-bold text-accent-teal">JavaScript</span>
            </div>
            <div className="p-[0.8rem] rounded-[8px] border border-[rgba(99,102,241,0.2)] bg-gradient-to-br from-[rgba(99,102,241,0.1)] to-[rgba(34,211,238,0.05)]">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-accent-secondary font-bold text-[0.75rem] hover:underline">
                github.com/{githubUsername}
              </a>
              <div className="font-mono text-[0.65rem] text-text-muted mt-0.5">
                Active since 2022
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Github;
