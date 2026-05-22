import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const navLinks = [
  { name: 'About',      href: '#about' },
  { name: 'Projects',   href: '#projects' },
  { name: 'Skills',     href: '#skills' },
  { name: 'Experience', href: '#journey' },
  { name: 'Contact',    href: '#contact' },
];

const Navbar = () => {
  const [open,     setOpen]     = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-[100] transition-all duration-300 h-16 flex items-center justify-center ${
        scrolled ? 'bg-[#050816]/85 backdrop-blur-[20px] border-b border-[rgba(255,255,255,0.07)]' : 'bg-transparent'
      }`}
    >
      <div className="w-full max-w-[1160px] mx-auto px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-[1.1rem] font-extrabold tracking-[-0.02em] text-gradient">
          MD.
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              className="px-[0.85rem] py-[0.4rem] text-[0.82rem] font-medium text-text-muted rounded-md hover:text-text-main hover:bg-[rgba(99,102,241,0.1)] transition-all"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-2 text-[0.72rem] px-[0.8rem] py-[0.3rem] rounded-full bg-[rgba(52,211,153,0.1)] border border-[rgba(52,211,153,0.25)] text-accent-green">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-green animate-[pulse-dot_2s_infinite]"></span>
            Open to internships
          </div>
          <a
            href={portfolioData.personalInfo.resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[0.78rem] px-[1.1rem] py-[0.45rem] bg-accent-primary text-white rounded-[7px] font-semibold hover:bg-accent-secondary hover:-translate-y-[1px] transition-all border-none"
          >
            Resume ↗
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-text-muted hover:text-white transition-colors"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="absolute top-16 left-0 right-0 md:hidden border-b border-[rgba(255,255,255,0.07)] bg-[#050816]">
          <div className="px-8 py-4 flex flex-col gap-4">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-[0.9rem] font-medium text-text-muted hover:text-text-main transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href={portfolioData.personalInfo.resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[0.9rem] font-medium text-text-muted hover:text-text-main transition-colors"
            >
              Resume ↗
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
