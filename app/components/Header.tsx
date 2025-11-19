'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'glass-effect shadow-xl pt-6 pb-6' : 'bg-transparent pt-20 pb-8'
      }`}
      style={{ paddingTop: isScrolled ? '24px' : '20px' }}
    >
      <nav className="container">
        <div className="flex items-center justify-between min-h-16">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-3 animate-fade-in group"
          >
            <div className="relative w-15 h-15 group-hover:scale-105 transition-all duration-300"
                            style={{marginRight: '20px'}}>
              <Image
                src="/images/sparrow-logo.png"
                alt="Sparrow Digital Logo"
                width={44}
                height={44}
                className="object-contain w-15 h-15 rounded-2xl border-primary border"  
                priority
              />
            </div>
            <span className="text-xl font-bold gradient-text group-hover:scale-105 transition-transform duration-300">
              Sparrow Digital
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.path}
                className="relative text-gray-700 hover:text-primary transition-all duration-300 font-semibold text-[18px] group py-2 px-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-primary to-secondary group-hover:w-full transition-all duration-300 ease-out"></span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-primary to-secondary opacity-30 group-hover:w-full transition-all duration-300 ease-out blur-sm"></span>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link 
              href="/contact" 
              className="btn btn-primary shadow-lg hover:shadow-xl px-4 py-2.5"
              style={{padding:'10px'}}
            >
              Get Started <span className="ml-1 group-hover:translate-x-1 inline-block transition-transform duration-300" style={{marginLeft:'10px'}}>→</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-3 rounded-xl hover:bg-gray-100 transition-all duration-300 active:scale-95"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`block h-0.5 w-full bg-gray-800 rounded-full transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              ></span>
              <span
                className={`block h-0.5 w-full bg-gray-800 rounded-full transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`}
              ></span>
              <span
                className={`block h-0.5 w-full bg-gray-800 rounded-full transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 flex justify-end ${
            isMobileMenuOpen ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div 
            className="bg-linear-to-br from-primary to-secondary rounded-2xl shadow-xl flex flex-col items-center w-fit"
            style={{ paddingTop: '1rem', paddingBottom: '2rem'}}
          >
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.path}
                className="block text-white hover:text-white hover:bg-white/20 transition-all duration-300 font-semibold rounded-xl whitespace-nowrap"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{ 
                  animationDelay: `${index * 0.05}s`,
                  paddingTop: '0.2rem',
                  paddingBottom: '0.5rem',
                }}
              >
                {item.name}
              </Link>
            ))}
            <div style={{ paddingTop: '1.5rem', paddingLeft: '0.5rem', paddingRight: '0.5rem' }}>
              <Link
                href="/contact"
                className="btn bg-white text-primary hover:bg-gray-100 shadow-lg px-8"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started
                <span className="ml-2">→</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
