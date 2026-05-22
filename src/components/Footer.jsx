import React from 'react';
import { portfolioData } from '../data/portfolioData';

const Footer = () => {
  return (
    <footer className="p-8 border-t border-[rgba(255,255,255,0.07)] text-center text-[0.78rem] text-text-muted font-mono relative z-10 bg-bg-primary">
      <p>
        Built by <span className="text-accent-secondary">{portfolioData.personalInfo.name}</span>. All rights reserved &copy; {new Date().getFullYear()}.
      </p>
    </footer>
  );
};

export default Footer;
