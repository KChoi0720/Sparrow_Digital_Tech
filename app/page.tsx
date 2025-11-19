'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.fade-in-section').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center pt-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-slide-in-left">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold text-sm">
                ✨ Welcome to Sparrow Digital
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Transform Your
                <span className="gradient-text"> Digital Presence</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                We craft innovative digital solutions that elevate your brand and drive meaningful results. From web development to digital marketing, we bring your vision to life.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn btn-primary text-lg px-8 py-4">
                  Get Started
                </Link>
                <Link href="/services" className="btn btn-outline text-lg px-8 py-4">
                  Our Services
                </Link>
              </div>
              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-gray-600">Projects</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-secondary">98%</div>
                  <div className="text-gray-600">Satisfaction</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-accent">24/7</div>
                  <div className="text-gray-600">Support</div>
                </div>
              </div>
            </div>

            {/* Right Content - Animated Graphics */}
            <div className="relative animate-slide-in-right">
              <div className="relative w-full h-[500px]">
                {/* Floating Cards */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-linear-to-br from-primary to-primary-dark rounded-2xl shadow-2xl animate-float p-6 glass-effect">
                  <div className="text-gray-600">
                    <div className="text-4xl mb-2">🎨</div>
                    <h3 className="text-xl font-bold mb-2">Creative Design</h3>
                    <p className="text-sm opacity-90">Beautiful, user-centric designs</p>
                  </div>
                </div>
                <div className="absolute top-20 right-0 w-64 h-64 bg-linear-to-br from-secondary to-secondary-dark rounded-2xl shadow-2xl animate-float p-6 glass-effect" style={{ animationDelay: '1s' }}>
                  <div className="text-gray-600">
                    <div className="text-4xl mb-2">⚡</div>
                    <h3 className="text-xl font-bold mb-2">Fast Performance</h3>
                    <p className="text-sm opacity-90">Lightning-fast load times</p>
                  </div>
                </div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-linear-to-br from-accent to-accent-dark rounded-2xl shadow-2xl animate-float p-6 glass-effect" style={{ animationDelay: '2s' }}>
                  <div className="text-gray-600">
                    <div className="text-4xl mb-2">🚀</div>
                    <h3 className="text-xl font-bold mb-2">Scalable Solutions</h3>
                    <p className="text-sm opacity-90">Growth-ready infrastructure</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-pulse">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-gray-400 rounded-full animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section bg-white fade-in-section">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We combine creativity, technology, and strategy to deliver exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: '💡',
                title: 'Innovative Solutions',
                description: 'Cutting-edge technology and creative approaches to solve your challenges'
              },
              {
                icon: '🎯',
                title: 'Result-Driven',
                description: 'Focus on measurable outcomes that impact your bottom line'
              },
              {
                icon: '🤝',
                title: 'Collaborative',
                description: 'Working closely with you at every step of the journey'
              },
              {
                icon: '⚙️',
                title: 'Reliable Support',
                description: '24/7 support to ensure your success at every moment'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="card text-center hover:shadow-2xl group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="section bg-gray-50 fade-in-section">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Web Development',
                description: 'Custom websites and web applications built with modern technologies',
                gradient: 'from-primary to-primary-dark',
                link: '/services#web'
              },
              {
                title: 'Mobile Apps',
                description: 'Native and cross-platform mobile applications for iOS and Android',
                gradient: 'from-secondary to-secondary-dark',
                link: '/services#mobile'
              },
              {
                title: 'UI/UX Design',
                description: 'Beautiful, intuitive designs that delight your users',
                gradient: 'from-accent to-accent-dark',
                link: '/services#design'
              },
              {
                title: 'Digital Marketing',
                description: 'Strategic marketing campaigns that drive growth and engagement',
                gradient: 'from-primary to-secondary',
                link: '/services#marketing'
              },
              {
                title: 'Cloud Solutions',
                description: 'Scalable cloud infrastructure and deployment strategies',
                gradient: 'from-secondary to-accent',
                link: '/services#cloud'
              },
              {
                title: 'Consulting',
                description: 'Expert guidance to transform your digital strategy',
                gradient: 'from-accent to-primary',
                link: '/services#consulting'
              }
            ].map((service, index) => (
              <Link
                key={index}
                href={service.link}
                className="group relative overflow-hidden rounded-2xl p-8 bg-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className={`absolute inset-0 bg-linear-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                <div className="relative">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="flex items-center text-primary font-semibold">
                    Learn More
                    <span className="ml-2 transform group-hover:translate-x-2 transition-transform">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="btn btn-primary text-lg px-8 py-4">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-linear-to-r from-primary to-secondary text-white fade-in-section">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let&apos;s discuss how we can help transform your digital presence and achieve your business goals
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="btn bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4">
                Contact Us
              </Link>
              <Link href="/pricing" className="btn btn-outline border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4">
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
