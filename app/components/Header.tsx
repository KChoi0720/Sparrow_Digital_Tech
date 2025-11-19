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
              className="btn btn-primary shadow-lg hover:shadow-xl px-6 py-2.5"
            >
              Get Started <span className="ml-1 group-hover:translate-x-1 inline-block transition-transform duration-300">→</span>
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
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            isMobileMenuOpen ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-6 space-y-2 bg-white/95 backdrop-blur-lg rounded-2xl shadow-xl border border-gray-100">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.path}
                className="block py-3 px-6 text-gray-700 hover:text-primary hover:bg-primary/5 transition-all duration-300 font-semibold rounded-xl mx-2"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <span className="flex items-center justify-between">
                  {item.name}
                  <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </span>
              </Link>
            ))}
            <div className="pt-4 px-2">
              <Link
                href="/contact"
                className="btn btn-primary w-full shadow-lg"
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
