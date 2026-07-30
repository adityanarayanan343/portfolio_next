'use client';

import { Mail, Phone, ChevronDown } from 'lucide-react';
import { Github, Linkedin } from './SocialIcons';

export default function Hero() {
  const scroll = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950"
    >
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-blue-600/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-4 py-1.5 mb-8">
          <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
          <span className="text-cyan-400 text-sm font-medium tracking-wide">Available for Opportunities</span>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-4 tracking-tight leading-none">
          Aditya{' '}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Narayanan S
          </span>
        </h1>

        <p className="text-xl sm:text-2xl text-slate-400 font-light mb-4 tracking-wide">
          Enterprise Network Engineer · Azure Network Engineer · Automation Enthusiast
        </p>

        <p className="text-slate-500 text-base max-w-2xl mx-auto mb-10 leading-relaxed">
          CCNA-certified with AZ-700 · Building resilient enterprise networks at TCS · Passionate about Network Automation & Cloud Networking
        </p>

        {/* Contact links */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <a
            href="mailto:adityanarayanan343@gmail.com"
            className="flex items-center gap-2 bg-white/5 hover:bg-cyan-500/15 border border-white/10 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-300 rounded-lg px-4 py-2 text-sm transition-all duration-200"
          >
            <Mail size={15} />
            adityanarayanan343@gmail.com
          </a>
          <a
            href="tel:+919952991924"
            className="flex items-center gap-2 bg-white/5 hover:bg-cyan-500/15 border border-white/10 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-300 rounded-lg px-4 py-2 text-sm transition-all duration-200"
          >
            <Phone size={15} />
            +91 99529 91924
          </a>
          <a
            href="https://linkedin.com/in/aditya-narayanan-s"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white/5 hover:bg-blue-500/15 border border-white/10 hover:border-blue-500/40 text-slate-300 hover:text-blue-300 rounded-lg px-4 py-2 text-sm transition-all duration-200"
          >
            <Linkedin size={15} />
            LinkedIn
          </a>
          <a
            href="https://github.com/adityanarayanan343"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white/5 hover:bg-slate-500/20 border border-white/10 hover:border-slate-400/40 text-slate-300 hover:text-slate-200 rounded-lg px-4 py-2 text-sm transition-all duration-200"
          >
            <Github size={15} />
            GitHub
          </a>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => scroll('#experience')}
            className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold px-8 py-3 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25 text-sm tracking-wide"
          >
            View My Work
          </button>
          <button
            onClick={() => scroll('#contact')}
            className="border border-white/20 hover:border-cyan-500/50 text-slate-300 hover:text-cyan-300 font-medium px-8 py-3 rounded-lg transition-all duration-200 hover:bg-cyan-500/5 text-sm tracking-wide"
          >
            Get In Touch
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scroll('#about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 hover:text-cyan-400 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={28} />
      </button>
    </section>
  );
}
