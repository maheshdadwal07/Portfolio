import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

const Architecture = () => {
  return (
    <section id="architecture" className="py-28 w-full bg-gradient-to-b from-transparent via-[rgba(99,102,241,0.02)] to-transparent relative z-10">
      <div className="max-w-[1160px] mx-auto px-8 w-full">
        <motion.div {...fadeUp(0)}>
          <div className="section-label">System Design</div>
          <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-extrabold leading-[1.1] tracking-[-0.03em] mb-[0.6rem]">
            How I architect<br />full stack systems
          </h2>
          <p className="text-[0.95rem] text-text-muted max-w-[480px]">
            Clean separation of concerns, RESTful APIs, JWT-based auth, and cloud-ready deployments.
          </p>
        </motion.div>

        <motion.div {...fadeUp(0.1)} className="grid grid-cols-2 md:grid-cols-5 items-center mt-14 gap-4 md:gap-0">
          
          <div className="bg-card-primary border border-[rgba(99,102,241,0.25)] rounded-[14px] p-5 text-center transition-all hover:border-[rgba(99,102,241,0.3)] hover:shadow-[0_0_30px_rgba(99,102,241,0.1)] relative z-10">
            <div className="text-3xl mb-2.5">⚛️</div>
            <div className="text-[0.82rem] font-bold mb-1">React Frontend</div>
            <div className="text-[0.65rem] text-text-muted font-mono mb-2">Component-driven UI</div>
            <div className="flex flex-col gap-1">
              <span className="text-[0.6rem] font-mono px-1.5 py-0.5 rounded-[3px] bg-[rgba(99,102,241,0.08)] text-accent-secondary">Vite</span>
              <span className="text-[0.6rem] font-mono px-1.5 py-0.5 rounded-[3px] bg-[rgba(99,102,241,0.08)] text-accent-secondary">Tailwind</span>
              <span className="text-[0.6rem] font-mono px-1.5 py-0.5 rounded-[3px] bg-[rgba(99,102,241,0.08)] text-accent-secondary">React Query</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center justify-center text-xl text-accent-primary animate-[arrow-pulse_1.5s_ease-in-out_infinite]">→</div>
          
          <div className="bg-card-primary border border-[rgba(34,211,238,0.2)] rounded-[14px] p-5 text-center transition-all hover:border-[rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.1)] relative z-10">
            <div className="text-3xl mb-2.5">🔌</div>
            <div className="text-[0.82rem] font-bold mb-1">REST API Layer</div>
            <div className="text-[0.65rem] text-text-muted font-mono mb-2">Express.js routes</div>
            <div className="flex flex-col gap-1">
              <span className="text-[0.6rem] font-mono px-1.5 py-0.5 rounded-[3px] bg-[rgba(34,211,238,0.08)] text-[#22d3ee]">JWT Auth</span>
              <span className="text-[0.6rem] font-mono px-1.5 py-0.5 rounded-[3px] bg-[rgba(34,211,238,0.08)] text-[#22d3ee]">Middleware</span>
              <span className="text-[0.6rem] font-mono px-1.5 py-0.5 rounded-[3px] bg-[rgba(34,211,238,0.08)] text-[#22d3ee]">Validation</span>
            </div>
          </div>

          <div className="hidden md:flex items-center justify-center text-xl text-accent-primary animate-[arrow-pulse_1.5s_ease-in-out_infinite]">→</div>

          <div className="bg-card-primary border border-[rgba(52,211,153,0.2)] rounded-[14px] p-5 text-center transition-all hover:border-[rgba(52,211,153,0.3)] hover:shadow-[0_0_30px_rgba(52,211,153,0.1)] relative z-10">
            <div className="text-3xl mb-2.5">🟢</div>
            <div className="text-[0.82rem] font-bold mb-1">Node.js Backend</div>
            <div className="text-[0.65rem] text-text-muted font-mono mb-2">MVC Architecture</div>
            <div className="flex flex-col gap-1">
              <span className="text-[0.6rem] font-mono px-1.5 py-0.5 rounded-[3px] bg-[rgba(52,211,153,0.08)] text-[#34d399]">Controllers</span>
              <span className="text-[0.6rem] font-mono px-1.5 py-0.5 rounded-[3px] bg-[rgba(52,211,153,0.08)] text-[#34d399]">Models</span>
              <span className="text-[0.6rem] font-mono px-1.5 py-0.5 rounded-[3px] bg-[rgba(52,211,153,0.08)] text-[#34d399]">Services</span>
            </div>
          </div>

          <div className="hidden md:flex items-center justify-center text-xl text-accent-primary animate-[arrow-pulse_1.5s_ease-in-out_infinite]">→</div>

          <div className="bg-card-primary border border-[rgba(74,222,128,0.2)] rounded-[14px] p-5 text-center transition-all hover:border-[rgba(74,222,128,0.3)] hover:shadow-[0_0_30px_rgba(74,222,128,0.1)] relative z-10">
            <div className="text-3xl mb-2.5">🍃</div>
            <div className="text-[0.82rem] font-bold mb-1">MongoDB Atlas</div>
            <div className="text-[0.65rem] text-text-muted font-mono mb-2">NoSQL + Mongoose</div>
            <div className="flex flex-col gap-1">
              <span className="text-[0.6rem] font-mono px-1.5 py-0.5 rounded-[3px] bg-[rgba(74,222,128,0.08)] text-[#4ade80]">Schemas</span>
              <span className="text-[0.6rem] font-mono px-1.5 py-0.5 rounded-[3px] bg-[rgba(74,222,128,0.08)] text-[#4ade80]">Aggregation</span>
              <span className="text-[0.6rem] font-mono px-1.5 py-0.5 rounded-[3px] bg-[rgba(74,222,128,0.08)] text-[#4ade80]">Indexing</span>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Architecture;
