import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

const categories = [
  { key: 'frontend', label: 'Frontend', icon: '⚛️', color: '#61DAFB' },
  { key: 'backend', label: 'Backend', icon: '🟢', color: '#68A063' },
  { key: 'database', label: 'Database', icon: '🗄️', color: '#47A248' },
  { key: 'tools', label: 'Tools & DevOps', icon: '🔧', color: '#f97316' },
  { key: 'concepts', label: 'Concepts', icon: '💡', color: '#6366f1' },
];

const Skills = () => {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-28 relative z-10 w-full">
      <div className="max-w-[1160px] mx-auto px-8 w-full">
        <motion.div {...fadeUp(0)}>
          <div className="section-label">Tech Stack</div>
          <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-extrabold leading-[1.1] tracking-[-0.03em] mb-[0.6rem]">
            Technologies I<br />build with
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.key}
              {...fadeUp(0.1 + idx * 0.1)}
              className="bg-card-primary border border-[rgba(255,255,255,0.07)] rounded-[14px] p-6 transition-all hover:border-[rgba(99,102,241,0.25)]"
            >
              <div className="flex items-center gap-2.5 text-[0.72rem] font-mono text-accent-secondary mb-4 tracking-[0.08em]">
                <span className="text-[1rem]">{cat.icon}</span>{cat.label}
              </div>
              <div className="flex flex-wrap gap-2">
                {skills[cat.key].map((skill, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-1.5 px-2.5 py-1.5 bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.07)] rounded-[7px] text-[0.75rem] transition-all cursor-default hover:bg-[rgba(99,102,241,0.08)] hover:border-[rgba(99,102,241,0.25)] hover:text-accent-secondary hover:-translate-y-0.5"
                  >
                    <div className="w-[7px] h-[7px] rounded-full" style={{ background: cat.color }}></div>
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
