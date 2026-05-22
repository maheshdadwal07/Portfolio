import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Code2, Layout, Database } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-indigo-500 rounded" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              {portfolioData.about.summary}
            </p>
            <ul className="space-y-4 mb-8">
              {portfolioData.about.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start text-slate-400">
                  <span className="text-indigo-400 mr-2 mt-1">▹</span>
                  {highlight}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            <div className="glass-card p-6 rounded-2xl flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="w-12 h-12 bg-indigo-500/20 text-indigo-400 rounded-xl flex items-center justify-center mb-4">
                <Layout className="w-6 h-6" />
              </div>
              <h3 className="text-white font-bold text-3xl mb-1">{portfolioData.about.stats.projectsCompleted}+</h3>
              <p className="text-slate-400 text-sm">Projects Completed</p>
            </div>
            
            <div className="glass-card p-6 rounded-2xl flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="w-12 h-12 bg-cyan-500/20 text-cyan-400 rounded-xl flex items-center justify-center mb-4">
                <Code2 className="w-6 h-6" />
              </div>
              <h3 className="text-white font-bold text-3xl mb-1">{portfolioData.about.stats.technologiesUsed}+</h3>
              <p className="text-slate-400 text-sm">Technologies Used</p>
            </div>
            
            <div className="glass-card p-6 rounded-2xl flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300 sm:col-span-2">
              <div className="w-12 h-12 bg-purple-500/20 text-purple-400 rounded-xl flex items-center justify-center mb-4">
                <Database className="w-6 h-6" />
              </div>
              <h3 className="text-white font-bold text-3xl mb-1">{portfolioData.about.stats.githubContributions}+</h3>
              <p className="text-slate-400 text-sm">GitHub Contributions</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
