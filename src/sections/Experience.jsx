import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

const icons = ['🚀', '⚙️', '🏗️', '🏆', '🎯'];

const Experience = () => {
  // Combine work and education to form a single journey timeline
  const journey = [...portfolioData.experience, ...portfolioData.education].map(item => ({
    ...item,
    year: item.duration.split(' ')[0] || item.duration
  }));

  return (
    <section id="journey" className="py-28 relative z-10 w-full">
      <div className="max-w-[1160px] mx-auto px-8 w-full">
        <motion.div {...fadeUp(0)} className="text-center">
          <div className="section-label justify-center">Journey</div>
          <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-extrabold leading-[1.1] tracking-[-0.03em] mb-[0.6rem]">
            The engineering<br />timeline
          </h2>
        </motion.div>

        <div className="relative max-w-[680px] mx-auto mt-12 before:content-[''] before:absolute before:left-[20px] md:before:left-1/2 md:before:-translate-x-1/2 before:top-0 before:bottom-0 before:w-[1px] before:bg-gradient-to-b before:from-transparent before:via-accent-primary before:to-transparent">
          {journey.map((item, idx) => (
            <motion.div 
              key={idx} 
              {...fadeUp(0.1 * idx)}
              className="grid grid-cols-[40px_1fr] md:grid-cols-[1fr_40px_1fr] gap-4 mb-10 items-center group relative z-10"
            >
              
              {/* Left content for odd (desktop), hidden for even */}
              <div className={`hidden md:block ${idx % 2 === 0 ? 'text-right' : 'md:hidden'}`}>
                {idx % 2 === 0 && (
                  <div className="bg-card-primary border border-[rgba(255,255,255,0.07)] rounded-[12px] p-[1.1rem]">
                    <div className="text-[0.65rem] font-mono text-accent-secondary mb-[0.3rem]">{item.duration}</div>
                    <div className="text-[0.9rem] font-bold mb-[0.3rem]">{item.role || item.degree}</div>
                    <div className="text-[0.78rem] text-text-muted leading-[1.5]">{item.company || item.institution}</div>
                  </div>
                )}
              </div>

              {/* Center Node */}
              <div className="w-[36px] h-[36px] rounded-full flex items-center justify-center text-[0.9rem] bg-card-primary border-2 border-accent-primary relative z-10 col-start-1 md:col-start-2">
                {icons[idx % icons.length]}
                <div className="absolute w-[52px] h-[52px] rounded-full border border-[rgba(99,102,241,0.2)] animate-[ring-pulse_2s_ease-in-out_infinite]"></div>
              </div>

              {/* Right content for even (desktop) and ALL mobile */}
              <div className={`col-start-2 md:col-start-3 ${idx % 2 === 0 ? 'md:hidden' : ''}`}>
                {(idx % 2 !== 0 || true) && (
                  <div className="bg-card-primary border border-[rgba(255,255,255,0.07)] rounded-[12px] p-[1.1rem]">
                    <div className="text-[0.65rem] font-mono text-accent-secondary mb-[0.3rem]">{item.duration}</div>
                    <div className="text-[0.9rem] font-bold mb-[0.3rem]">{item.role || item.degree}</div>
                    <div className="text-[0.78rem] text-text-muted leading-[1.5]">{item.company || item.institution}</div>
                  </div>
                )}
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
