import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  return (
    <section id="projects" className="py-28 relative z-10 w-full">
      <div className="max-w-[1160px] mx-auto px-8 w-full">
        <motion.div {...fadeUp(0)}>
          <div className="section-label">Featured Work</div>
          <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-extrabold leading-[1.1] tracking-[-0.03em] mb-[0.6rem]">
            Projects that<br />ship to production
          </h2>
          <p className="text-[0.95rem] text-text-muted max-w-[480px] mb-10">
            End-to-end applications built with real architecture decisions, auth systems, and deployment pipelines.
          </p>
        </motion.div>

        <motion.div {...fadeUp(0.1)} className="flex flex-wrap gap-2 mb-12">
          {['all', 'fullstack', 'frontend', 'backend'].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-1.5 border rounded-full text-[0.78rem] transition-all font-syne capitalize ${
                filter === f 
                  ? 'bg-[rgba(99,102,241,0.12)] border-accent-primary text-accent-secondary'
                  : 'bg-transparent border-[rgba(255,255,255,0.07)] text-text-muted hover:bg-[rgba(99,102,241,0.12)] hover:border-accent-primary hover:text-accent-secondary'
              }`}
            >
              {f === 'all' ? 'All' : f === 'api' ? 'API / Backend' : f}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {portfolioData.projects.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-card-primary border border-[rgba(255,255,255,0.07)] rounded-[16px] overflow-hidden cursor-pointer transition-all hover:border-[rgba(99,102,241,0.3)] hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)] relative group"
              >
                <div className="absolute inset-0 rounded-[16px] bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.06),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-0"></div>
                
                {/* Mock Visual (Instead of real image for the cyber look) */}
                <div className="h-[180px] bg-gradient-to-br from-[#0a1628] to-[#0d2044] relative overflow-hidden flex items-center justify-center z-10">
                  <div className="w-[85%] h-[80%] bg-[rgba(5,8,22,0.8)] border border-[rgba(255,255,255,0.07)] rounded-[10px] flex flex-col overflow-hidden">
                    <div className="h-[26px] bg-[rgba(255,255,255,0.03)] border-b border-[rgba(255,255,255,0.07)] flex items-center px-2.5 gap-1.5">
                      <div className="w-[7px] h-[7px] rounded-full bg-[#f87171]"></div>
                      <div className="w-[7px] h-[7px] rounded-full bg-[#fbbf24]"></div>
                      <div className="w-[7px] h-[7px] rounded-full bg-[#34d399]"></div>
                      <span className="text-[0.58rem] text-text-muted ml-1.5 font-mono">app.live.com</span>
                    </div>
                    <div className="flex-1 grid grid-cols-[2fr_1fr] gap-1.5 p-2">
                       <div className="flex flex-col gap-1.5">
                          <div className="bg-[rgba(99,102,241,0.18)] rounded-[4px] flex-1 max-h-[30px]"></div>
                          <div className="bg-[rgba(99,102,241,0.07)] rounded-[4px] flex-1 max-h-[20px]"></div>
                       </div>
                       <div className="flex flex-col gap-1.5">
                          <div className="bg-[rgba(99,102,241,0.07)] rounded-[4px] flex-1 max-h-[25px]"></div>
                          <div className="bg-[rgba(99,102,241,0.18)] rounded-[4px] flex-1 max-h-[60px]"></div>
                       </div>
                    </div>
                  </div>
                </div>

                <div className="p-5 relative z-10">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <div className="text-[1rem] font-bold tracking-[-0.02em]">{project.title}</div>
                      <div className="inline-block text-[0.62rem] font-mono text-accent-secondary bg-[rgba(99,102,241,0.1)] px-2 py-0.5 rounded-full mt-1">
                        Full Stack
                      </div>
                    </div>
                  </div>
                  <p className="text-[0.8rem] text-text-muted mb-3 line-clamp-2 leading-[1.5]">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.techStack.map((tech, idx) => (
                      <span key={idx} className="text-[0.65rem] font-mono px-2 py-0.5 rounded-[4px] bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.07)] text-text-muted">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex-1 text-center py-2 rounded-[7px] text-[0.75rem] font-semibold transition-all bg-accent-primary text-white hover:bg-accent-secondary">
                      Live Demo
                    </a>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex-1 text-center py-2 rounded-[7px] text-[0.75rem] font-semibold transition-all border border-[rgba(255,255,255,0.07)] text-text-muted hover:border-accent-primary hover:text-accent-secondary">
                      GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Projects;
