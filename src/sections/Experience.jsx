import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

const ExperienceItem = ({ item, index, type }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8 sm:pl-32 py-6 group"
    >
      {/* Timeline line and dot */}
      <div className="absolute left-0 sm:left-[108px] top-0 bottom-0 w-px bg-slate-800 group-last:bg-transparent" />
      <div className="absolute left-[-4px] sm:left-[104px] top-8 w-2.5 h-2.5 rounded-full bg-indigo-500 ring-4 ring-slate-950" />
      
      {/* Date (Desktop) */}
      <div className="hidden sm:block absolute left-0 top-6 w-24 text-right">
        <span className="text-sm text-slate-400 font-medium">{item.duration.split(' - ')[0]}</span>
      </div>

      <div className="glass-card p-6 rounded-2xl border border-slate-800/50 hover:border-indigo-500/30 transition-colors">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
          <div>
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              {type === 'work' ? <Briefcase className="w-5 h-5 text-indigo-400" /> : <GraduationCap className="w-5 h-5 text-indigo-400" />}
              {type === 'work' ? item.role : item.degree}
            </h3>
            <h4 className="text-lg text-indigo-400 mt-1">
              {type === 'work' ? item.company : item.institution}
            </h4>
          </div>
          
          {/* Mobile Date & Location */}
          <div className="flex flex-col sm:items-end text-sm text-slate-400">
            <span className="flex items-center gap-1 sm:hidden"><Calendar className="w-3 h-3"/> {item.duration}</span>
            <span>{item.location}</span>
            {type === 'education' && <span className="text-slate-300 mt-1 font-medium">{item.score}</span>}
          </div>
        </div>

        {type === 'work' && (
          <ul className="space-y-2 mt-4 text-slate-300 text-sm leading-relaxed">
            {item.points.map((point, idx) => (
              <li key={idx} className="flex items-start">
                <span className="text-indigo-500 mr-2 mt-0.5">▹</span>
                {point}
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-slate-900/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Journey & Experience</h2>
          <div className="w-20 h-1 bg-indigo-500 rounded mx-auto" />
        </motion.div>

        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-slate-300 mb-6 pl-8 sm:pl-32">Experience</h3>
            {portfolioData.experience.map((exp, index) => (
              <ExperienceItem key={exp.id} item={exp} index={index} type="work" />
            ))}
          </div>
          
          <div className="pt-8">
            <h3 className="text-2xl font-bold text-slate-300 mb-6 pl-8 sm:pl-32">Education</h3>
            {portfolioData.education.map((edu, index) => (
              <ExperienceItem key={edu.id} item={edu} index={index} type="education" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
