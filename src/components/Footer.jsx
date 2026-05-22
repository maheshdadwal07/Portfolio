import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="flex space-x-6 mb-6">
          <a href={portfolioData.personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
            <span className="sr-only">GitHub</span>
            <Github className="h-6 w-6" />
          </a>
          <a href={portfolioData.personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
            <span className="sr-only">LinkedIn</span>
            <Linkedin className="h-6 w-6" />
          </a>
          <a href={`mailto:${portfolioData.personalInfo.email}`} className="text-slate-400 hover:text-white transition-colors">
            <span className="sr-only">Email</span>
            <Mail className="h-6 w-6" />
          </a>
        </div>
        <p className="text-slate-500 text-sm text-center">
          &copy; {new Date().getFullYear()} {portfolioData.personalInfo.name}. All rights reserved.
        </p>
        <p className="text-slate-600 text-xs mt-2 text-center">
          Built with React & Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
