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
      <section 
        ref={heroRef} 
        className="relative min-h-screen bg-linear-to-b from-gray-50 to-white"
      >
        <div 
          className="container min-h-screen flex items-center"
          style={{ paddingTop: '160px' }}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
            {/* Left Content */}
            <div className="space-y-10 animate-slide-in-left">
              <div className="inline-block px-6 py-3 bg-primary/10 rounded-full text-primary font-semibold text-sm" style={{padding:'8px', marginBottom:'10px'}}>
                ✨ Welcome to Sparrow Digital
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold leading-tight" style={{ marginTop:'10px'}}>
                Transform Your
                <span className="gradient-text"> Digital Presence</span>
              </h1>
              <p className="text-base md:text-xl text-gray-600 leading-relaxed" style={{ marginTop:'10px', marginBottom:'20px'}}>
                We craft innovative digital solutions that elevate your brand and drive meaningful results. From web development to digital marketing, we bring your vision to life.
              </p>
              <div className="flex flex-wrap gap-4 mt-8" style={{marginBottom:'10px'}}>
                <Link href="/contact" className="btn btn-primary">
                  Get Started
                </Link>
                <Link href="/services" className="btn btn-outline">
                  Our Services
                </Link>
              </div>
              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center lg:text-left" style={{marginTop:'10px'}}>
                  <div className="text-3xl font-bold text-primary">10+</div>
                  <div className="text-gray-600">Projects</div>
                </div>
                <div className="text-center lg:text-left" style={{marginTop:'10px'}}>
                  <div className="text-3xl font-bold text-secondary">100%</div>
                  <div className="text-gray-600">Satisfaction</div>
                </div>
                <div className="text-center lg:text-left" style={{marginTop:'10px'}}>
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
      <section 
        className="relative bg-linear-to-br from-primary/5 via-white to-secondary/5 fade-in-section"
        style={{ paddingTop: '6rem', paddingBottom: '6rem' }}
      >
        {/* 装饰性背景元素 */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
        
        <div className="container relative z-10">
          <div className="text-center mb-20 flex flex-col items-center justify-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"  style={{ marginTop:'10px',marginBottom:'40px'}}>
              Why Choose <span className="gradient-text">Us</span>
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"  style={{marginBottom:'40px'}}>
              We combine creativity, technology, and strategy to deliver exceptional results that drive your business forward
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              {
                icon: '💡',
                title: 'Innovative Solutions',
                description: 'Cutting-edge technology and creative approaches to solve your challenges',
                color: 'primary'
              },
              {
                icon: '🎯',
                title: 'Result-Driven',
                description: 'Focus on measurable outcomes that impact your bottom line',
                color: 'secondary'
              },
              {
                icon: '🤝',
                title: 'Collaborative',
                description: 'Working closely with you at every step of the journey',
                color: 'accent'
              },
              {
                icon: '⚙️',
                title: 'Reliable Support',
                description: '24/7 support to ensure your success at every moment',
                color: 'primary'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="card text-center group p-8 lg:p-10 hover:scale-105 transition-all duration-500 cursor-pointer relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* 悬停时的背景渐变效果 */}
                <div className={`absolute inset-0 bg-linear-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-500 ${
                  feature.color === 'primary' ? 'from-primary to-primary-dark' :
                  feature.color === 'secondary' ? 'from-secondary to-secondary-dark' :
                  'from-accent to-accent-dark'
                }`}></div>
                
                {/* 图标容器 */}
                <div className={`relative inline-flex items-center justify-center w-20 h-20 lg:w-24 lg:h-24 mb-6 rounded-2xl bg-linear-to-br transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 ${
                  feature.color === 'primary' ? 'from-primary/10 to-primary/5 group-hover:from-primary/20 group-hover:to-primary/10' :
                  feature.color === 'secondary' ? 'from-secondary/10 to-secondary/5 group-hover:from-secondary/20 group-hover:to-secondary/10' :
                  'from-accent/10 to-accent/5 group-hover:from-accent/20 group-hover:to-accent/10'
                }`}  style={{ marginTop:'20px', marginBottom:'20px'}}>
                  <span className="text-4xl lg:text-5xl" >{feature.icon}</span>
                </div>
                
                <h3 className={`text-xl lg:text-2xl font-bold mb-4 transition-colors duration-300 ${
                  feature.color === 'primary' ? 'group-hover:text-primary' :
                  feature.color === 'secondary' ? 'group-hover:text-secondary' :
                  'group-hover:text-accent'
                }`}  style={{ marginBottom:'20px'}}>
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm lg:text-base"  style={{ marginBottom:'20px'}}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section 
        className="bg-linear-to-b from-gray-50 to-white fade-in-section"
        style={{ paddingTop: '7rem', paddingBottom: '7rem' }}
      >
        <div className="container">
          <div className="text-center mb-20 flex flex-col items-center justify-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed" style={{margin:'20px'}}>
              Comprehensive digital solutions tailored to your needs, powered by cutting-edge technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" style={{ marginBottom:'20px'}}>
            {[
              {
                title: 'Web Development',
                description: 'Custom websites and web applications built with modern technologies',
                gradient: 'from-primary to-primary-dark',
                bgColor: 'primary',
                icon: '🌐',
                link: '/services#web'
              },
              {
                title: 'Mobile Apps',
                description: 'Native and cross-platform mobile applications for iOS and Android',
                gradient: 'from-secondary to-secondary-dark',
                bgColor: 'secondary',
                icon: '📱',
                link: '/services#mobile'
              },
              {
                title: 'UI/UX Design',
                description: 'Beautiful, intuitive designs that delight your users',
                gradient: 'from-accent to-accent-dark',
                bgColor: 'accent',
                icon: '🎨',
                link: '/services#design'
              },
              {
                title: 'Digital Marketing',
                description: 'Strategic marketing campaigns that drive growth and engagement',
                gradient: 'from-primary to-secondary',
                bgColor: 'primary',
                icon: '📈',
                link: '/services#marketing'
              },
              {
                title: 'Cloud Solutions',
                description: 'Scalable cloud infrastructure and deployment strategies',
                gradient: 'from-secondary to-accent',
                bgColor: 'secondary',
                icon: '☁️',
                link: '/services#cloud'
              },
              {
                title: 'Consulting',
                description: 'Expert guidance to transform your digital strategy',
                gradient: 'from-accent to-primary',
                bgColor: 'accent',
                icon: '💼',
                link: '/services#consulting'
              }
            ].map((service, index) => (
              <Link
                key={index}
                href={service.link}
                className="group relative overflow-hidden rounded-3xl p-8 lg:p-10 bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-105"
              >
                {/* 背景渐变效果 */}
                <div className={`absolute inset-0 bg-linear-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* 左上角装饰 */}
                <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full bg-linear-to-br ${service.gradient} opacity-10 blur-2xl group-hover:opacity-20 transition-opacity duration-500`}></div>
                
                <div className="relative">
                  {/* 图标 */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 mb-6 rounded-2xl bg-linear-to-br transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 ${
                    service.bgColor === 'primary' ? 'from-primary/10 to-primary/5 group-hover:from-primary/20 group-hover:to-primary/10' :
                    service.bgColor === 'secondary' ? 'from-secondary/10 to-secondary/5 group-hover:from-secondary/20 group-hover:to-secondary/10' :
                    'from-accent/10 to-accent/5 group-hover:from-accent/20 group-hover:to-accent/10'
                  }`}>
                    <span className="text-3xl lg:text-4xl" >{service.icon}</span>
                  </div>
                  
                  {/* 标题 */}
                  <h3 className={`text-2xl lg:text-3xl font-bold mb-4 transition-colors duration-300 ${
                    service.bgColor === 'primary' ? 'group-hover:text-primary' :
                    service.bgColor === 'secondary' ? 'group-hover:text-secondary' :
                    'group-hover:text-accent'
                  }`} style={{ margin:'20px'}}>
                    {service.title}
                  </h3>
                  
                  {/* 描述 */}
                  <p className="text-gray-600 mb-6 leading-relaxed" style={{ margin:'20px'}}>
                    {service.description}
                  </p>
                  
                  {/* Learn More 按钮 */}
                  <div className={`inline-flex items-center gap-2 font-semibold transition-all duration-300 ${
                    service.bgColor === 'primary' ? 'text-primary' :
                    service.bgColor === 'secondary' ? 'text-secondary' :
                    'text-accent'
                  }`} style={{ margin:'20px'}}>
                    <span>Learn More</span>
                    <span className="transform group-hover:translate-x-2 transition-transform duration-300">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link href="/services" className="btn btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="bg-linear-to-r from-primary to-secondary text-white fade-in-section"
        style={{ paddingTop: '5rem', paddingBottom: '5rem' }}
      >
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let&apos;s discuss how we can help transform your digital presence and achieve your business goals
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="btn bg-white text-primary hover:bg-gray-100">
                Contact Us
              </Link>
              <Link 
                href="/pricing" 
                className="btn btn-outline border-2 hover:bg-white" 
                style={{ borderColor: '#fbbf24', color: '#fbbf24' }}
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
