import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { ExternalLink, Github, X } from 'lucide-react';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm"
      >
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-card rounded-2xl shadow-2xl"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-slate-800/50 hover:bg-slate-700 text-slate-300 rounded-full transition-colors z-10"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="p-6 sm:p-8">
            <h2 className="text-3xl font-bold text-white mb-2">{project.title}</h2>
            <p className="text-indigo-400 text-lg mb-6">{project.tagline}</p>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {project.techStack.map((tech, idx) => (
                <span key={idx} className="px-3 py-1 bg-indigo-500/10 text-indigo-300 text-sm rounded-full border border-indigo-500/20">
                  {tech}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">About</h3>
                <p className="text-slate-300 leading-relaxed">{project.description}</p>
                
                <h3 className="text-xl font-semibold text-white mb-3 mt-6">Challenges Solved</h3>
                <p className="text-slate-300 leading-relaxed">{project.challenges}</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Key Features</h3>
                <ul className="space-y-2 text-slate-300">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-indigo-500 mr-2 mt-1">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="border-t border-slate-800 pt-6 flex flex-wrap gap-4">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors"
              >
                <ExternalLink className="w-4 h-4" /> Live Demo
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 rounded-lg font-medium transition-colors"
              >
                <Github className="w-4 h-4" /> Source Code
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const ProjectCard = ({ project, onClick, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card rounded-2xl overflow-hidden group cursor-pointer hover:border-indigo-500/50 transition-all duration-300"
      onClick={() => onClick(project)}
    >
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10" />
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-indigo-400 transition-colors">{project.title}</h3>
        <p className="text-slate-400 text-sm mb-4 line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.slice(0, 3).map((tech, idx) => (
            <span key={idx} className="text-xs px-2 py-1 bg-slate-800 text-slate-300 rounded">
              {tech}
            </span>
          ))}
          {project.techStack.length > 3 && (
            <span className="text-xs px-2 py-1 bg-slate-800 text-slate-400 rounded">
              +{project.techStack.length - 3}
            </span>
          )}
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-indigo-400 font-medium">View Details &rarr;</span>
          <div className="flex gap-3 text-slate-400">
            {project.githubLink && <Github className="w-4 h-4 hover:text-white transition-colors" />}
            {project.liveLink && <ExternalLink className="w-4 h-4 hover:text-white transition-colors" />}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-indigo-500 rounded" />
          <p className="mt-4 text-slate-400 max-w-2xl">
            A selection of my recent work. Click on any project to see more details, features, and links.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index} 
              onClick={setSelectedProject} 
            />
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
};

export default Projects;
