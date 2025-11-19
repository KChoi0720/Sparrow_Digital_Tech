'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

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

  const handleCardClick = (index: number) => {
    if (activeCard === index) {
      setActiveCard(null);
    } else {
      setActiveCard(index);
    }
  };

  const handleScroll = () => {
    // 滑动时关闭展开的卡片
    if (activeCard !== null) {
      setActiveCard(null);
    }
  };

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
              <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold leading-tight" style={{ marginTop:'10px'}}>
                Transform Your
                <span className="gradient-text"> Digital Presence</span>
              </h1>
              <p className="text-sm md:text-lg text-gray-600 leading-relaxed" style={{ marginTop:'10px', marginBottom:'20px'}}>
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
                  <div className="text-sm md:text-xl font-bold text-primary">10+</div>
                  <div className="text-gray-600">Projects</div>
                </div>
                <div className="text-center lg:text-left" style={{marginTop:'10px'}}>
                  <div className="text-sm md:text-xl font-bold text-secondary">100%</div>
                  <div className="text-gray-600">Satisfaction</div>
                </div>
                <div className="text-center lg:text-left" style={{marginTop:'10px'}}>
                  <div className="text-sm md:text-xl font-bold text-accent">7d</div>
                  <div className="text-gray-600">Support</div>
                </div>
              </div>
            </div>

            {/* Right Content - Animated Graphics */}
            <div className="relative animate-slide-in-right" style={{marginTop:'80px', marginBottom:'100px'}}>
              <div className="relative w-full h-[500px]">
                {/* Floating Cards */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-linear-to-br from-primary to-primary-dark rounded-2xl shadow-2xl animate-float p-6 glass-effect">
                  <div className="text-gray-600" style={{margin:'20px'}}>
                    <h3 className="text-sm md:text-lg font-bold mb-2">Creative Design</h3>
                    <p className="text-sm opacity-90">Beautiful, user-centric designs</p>
                  </div>
                </div>
                <div className="absolute top-20 right-0 w-64 h-64 bg-linear-to-br from-secondary to-secondary-dark rounded-2xl shadow-2xl animate-float p-6 glass-effect" style={{ animationDelay: '1s' }}>
                  <div className="text-gray-600" style={{margin:'20px'}}>
                    <h3 className="text-sm md:text-lg font-bold mb-2">Fast Performance</h3>
                    <p className="text-sm opacity-90">Lightning-fast load times</p>
                  </div>
                </div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-linear-to-br from-accent to-accent-dark rounded-2xl shadow-2xl animate-float p-6 glass-effect" style={{ animationDelay: '2s' }}>
                  <div className="text-gray-600" style={{margin:'20px'}}>
                    <h3 className="text-sm md:text-lg font-bold mb-2">Scalable Solutions</h3>
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
        className="relative bg-linear-to-br bg-primary to-secondary/40 fade-in-section"
        style={{ paddingTop: '6rem', paddingBottom: '6rem' }}
      >
        <div className="container relative z-10">
          <div className="text-center mb-20 flex flex-col items-center justify-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"  style={{ marginTop:'10px',marginBottom:'40px'}}>
              Why Choose Us
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"  style={{marginBottom:'40px'}}>
              We combine creativity, technology, and strategy to deliver exceptional results that drive your business forward
            </p>
          </div>

          <div className="flex flex-col items-center gap-6 md:grid md:grid-cols-2 md:items-stretch lg:grid-cols-4 lg:gap-8">
            {[
              {
                title: 'Innovative Solutions',
                description: 'Cutting-edge technology and creative approaches to solve your challenges',
                color: 'primary'
              },
              {
                title: 'Result-Driven',
                description: 'Focus on measurable outcomes that impact your bottom line',
                color: 'secondary'
              },
              {
                title: 'Collaborative',
                description: 'Working closely with you at every step of the journey',
                color: 'accent'
              },
              {
                title: 'Reliable Support',
                description: '24/7 support to ensure your success at every moment',
                color: 'primary'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="card text-center group hover:scale-105 transition-all duration-500 cursor-pointer relative overflow-hidden w-[280px] md:w-auto md:h-full"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  padding: '1.5rem'
                }}
              >
                {/* 悬停时的背景渐变效果 */}
                <div className={`absolute inset-0 bg-linear-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-500 ${
                  feature.color === 'primary' ? 'from-primary to-primary-dark' :
                  feature.color === 'secondary' ? 'from-secondary to-secondary-dark' :
                  'from-accent to-accent-dark'
                }`}></div>
                
                {/* 图标容器 */}
                <div 
                  className={`relative inline-flex items-center justify-center rounded-2xl bg-linear-to-br transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 ${
                    feature.color === 'primary' ? 'from-primary/10 to-primary/5 group-hover:from-primary/20 group-hover:to-primary/10' :
                    feature.color === 'secondary' ? 'from-secondary/10 to-secondary/5 group-hover:from-secondary/20 group-hover:to-secondary/10' :
                    'from-accent/10 to-accent/5 group-hover:from-accent/20 group-hover:to-accent/10'
                  }`}  
                  style={{ 
                    width: '60px',
                    height: '60px',
                    marginTop: '10px',
                    marginBottom: '15px'
                  }}
                >
                  {/* <span className="text-3xl lg:text-5xl">{feature.icon}</span> */}
                </div>
                
                <h3 
                  className={`font-bold transition-colors duration-300 ${
                    feature.color === 'primary' ? 'group-hover:text-primary' :
                    feature.color === 'secondary' ? 'group-hover:text-secondary' :
                    'group-hover:text-accent'
                  }`}  
                  style={{ 
                    fontSize: '1rem',
                    marginBottom: '12px'
                  }}
                >
                  {feature.title}
                </h3>
                <p 
                  className="text-gray-600 leading-relaxed"  
                  style={{ 
                    fontSize: '0.875rem',
                    marginBottom: '10px'
                  }}
                >
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

          {/* 3D卡片轮播容器 */}
          <div 
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="overflow-x-auto overflow-y-visible pb-20 pt-10 flex justify-center"
            style={{ 
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            <style jsx>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            
            <div 
              className="flex items-center px-4 md:px-10" 
              style={{ 
                perspective: '1000px',
                gap: '1.5rem'
              }}
            >
              {[
              {
                title: 'Web Development',
                description: 'Custom websites and web applications built with modern technologies',
                gradient: 'from-primary to-primary-dark',
                bgColor: 'primary',
                link: '/services#web',
                coverImage: '/images/art-1.png'
              },
              {
                title: 'Mobile Apps',
                description: 'Native and cross-platform mobile applications for iOS and Android',
                gradient: 'from-secondary to-secondary-dark',
                bgColor: 'secondary',
                link: '/services#mobile',
                coverImage: '/images/art-2.png'
              },
              {
                title: 'UI/UX Design',
                description: 'Beautiful, intuitive designs that delight your users',
                gradient: 'from-accent to-accent-dark',
                bgColor: 'accent',
                link: '/services#design',
                coverImage: '/images/art-3.png'
              },
              {
                title: 'Digital Marketing',
                description: 'Strategic marketing campaigns that drive growth and engagement',
                gradient: 'from-primary to-secondary',
                bgColor: 'primary',
                link: '/services#marketing',
                coverImage: '/images/art-4.png'
              },
              {
                title: 'Cloud Solutions',
                description: 'Scalable cloud infrastructure and deployment strategies',
                gradient: 'from-secondary to-accent',
                bgColor: 'secondary',
                link: '/services#cloud',
                coverImage: '/images/art-5.png'
              },
              {
                title: 'Consulting',
                description: 'Expert guidance to transform your digital strategy',
                gradient: 'from-accent to-primary',
                bgColor: 'accent',
                link: '/services#consulting'
              }
            ].map((service, index) => {
              const isActive = activeCard === index;
              const totalCards = 6;
              // 对于偶数个卡片，中心点应该在两个中间卡片之间
              const middleIndex = (totalCards - 1) / 2; // (6-1)/2 = 2.5
              const distanceFromCenter = index - middleIndex;
              const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
              
              // 计算宽度：距离中心越远，宽度越宽（仅桌面端）
              const getWidth = () => {
                if (isActive) return isMobile ? '320px' : '400px';
                if (isMobile) return '100px'; // 手机端所有卡片统一宽度，增加到100px更容易点击
                
                const absDistance = Math.abs(distanceFromCenter);
                // 桌面端：最接近中心(0.5): 120px, 1.5: 180px, 2.5: 200px
                if (absDistance === 0.5) return '120px';
                if (absDistance === 1.5) return '180px';
                if (absDistance === 2.5) return '200px';
                return '200px';
              };
              
              // 计算3D变换和旋转角度
              const getTransform = () => {
                if (isActive) {
                  return isMobile ? 'scale(1.05)' : 'rotateY(0deg) translateZ(50px) scale(1.1)';
                }
                
                // 手机端：所有卡片都竖直显示（无3D效果）
                if (isMobile) {
                  return 'rotateY(90deg) scale(0.95)';
                }
                
                // 桌面端：3D书架效果
                const absDistance = Math.abs(distanceFromCenter);
                
                // 左边的卡片 - 角度逐渐减小
                if (distanceFromCenter < 0) {
                  // 0.5: 75deg, 1.5: 65deg, 2.5: 55deg
                  const rotation = 75 - (absDistance - 0.5) * 10;
                  return `rotateY(${rotation}deg) translateZ(-20px) scale(0.95)`;
                }
                
                // 右边的卡片 - 角度逐渐减小
                // 0.5: -75deg, 1.5: -65deg, 2.5: -55deg
                const rotation = -75 + (absDistance - 0.5) * 10;
                return `rotateY(${rotation}deg) translateZ(-20px) scale(0.95)`;
              };

              return (
                <div
                  key={index}
                  onClick={(e) => {
                    e.preventDefault();
                    handleCardClick(index);
                  }}
                  className="relative cursor-pointer transition-all duration-700 ease-out"
                  style={{
                    width: getWidth(),
                    height: isMobile ? '300px' : '380px',
                    transformStyle: isMobile ? 'flat' : 'preserve-3d',
                    transform: getTransform(),
                    zIndex: isActive ? 50 : 10 - Math.abs(distanceFromCenter),
                    marginTop:'40px',
                    marginBottom:'40px',
                  }}
                >
                  {/* 书脊 - 根据卡片位置显示在左侧或右侧 */}
                  {!isActive && !isMobile && (() => {
                    const isLeftSide = distanceFromCenter < 0;
                    const isRightSide = distanceFromCenter > 0;
                    
                    if (isLeftSide) {
                      // 左边的卡片 - 书脊在左侧
                      return (
                        <div 
                          className={`absolute top-0 bottom-0 bg-linear-to-br ${service.gradient} transition-all duration-700 rounded-l-lg`}
                          style={{
                            width: '20px',
                            left: '-20px',
                            boxShadow: 'inset -2px 0 4px rgba(0,0,0,0.3)'
                          }}
                        >
                          <div className="absolute inset-y-0 right-0 w-px bg-black/30"></div>
                          <div className="absolute top-6 bottom-6 left-1/2 w-px bg-white/20 -translate-x-1/2"></div>
                        </div>
                      );
                    } else if (isRightSide) {
                      // 右边的卡片 - 书脊在右侧
                      return (
                        <div 
                          className={`absolute top-0 bottom-0 bg-linear-to-br ${service.gradient} transition-all duration-700 rounded-r-lg`}
                          style={{
                            width: '20px',
                            right: '-20px',
                            boxShadow: 'inset 2px 0 4px rgba(0,0,0,0.3)'
                          }}
                        >
                          <div className="absolute inset-y-0 left-0 w-px bg-black/30"></div>
                          <div className="absolute top-6 bottom-6 left-1/2 w-px bg-white/20 -translate-x-1/2"></div>
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform -rotate-90 whitespace-nowrap">
                          </div>
                        </div>
                      );
                    }
                    return null;
                  })()}
                  
                  {/* 卡片主体 */}
                  <div 
                    className={`absolute inset-0 shadow-2xl bg-linear-to-br ${service.gradient} overflow-hidden transition-all duration-700`}
                    style={{
                      backfaceVisibility: 'hidden'
                    }}
                  >
                    {/* 书脊/侧面视图 - 未展开时显示 */}
                    {!isActive && (() => {
                      const cardWidth = getWidth();
                      
                      // 手机端 - 所有卡片都只显示书脊
                      if (isMobile || cardWidth === '100px') {
                        return (
                          <div className="h-full flex items-center justify-center">
                            <div className="transform -rotate-90 whitespace-nowrap">
                              <h3 className="text-white font-bold text-base md:text-xl">{service.title}</h3>
                            </div>
                          </div>
                        );
                      }
                      
                      // 桌面端 - 所有卡片都显示封面图片（不再有纯书脊模式）
                      return (
                        <div className="h-full relative overflow-hidden">
                          {/* 封面图片 */}
                          {service.coverImage && (
                            <Image
                              src={service.coverImage}
                              alt={service.title}
                              fill
                              className="object-cover"
                              sizes={cardWidth}
                            />
                          )}
                          
                          {/* 渐变遮罩层 - 让标题更清晰可见 */}
                          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent"></div>
                          
                          {/* 标题覆盖层 */}
                          <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
                            <h3 className={`font-bold text-center ${
                              cardWidth === '120px' ? 'text-xs' : 
                              cardWidth === '180px' ? 'text-sm' : 
                              'text-base'
                            }`}>
                              {service.title}
                            </h3>
                          </div>
                        </div>
                      );
                    })()}

                    {/* 完整内容视图 - 展开时显示 */}
                    {isActive && (
                      <div className="h-full p-8 flex flex-col justify-between text-white overflow-y-auto">
                        <div>
                          
                          {/* 标题 */}
                          <h3 className="text-3xl font-bold mb-4">
                            {service.title}
                          </h3>
                          
                          {/* 描述 */}
                          <p className="text-lg opacity-90 leading-relaxed mb-6">
                            {service.description}
                          </p>

                          {/* 特性列表 */}
                          <div className="space-y-3 mb-6">
                            <div className="flex items-center gap-2">
                              <span className="text-xl">✓</span>
                              <span className="opacity-90">Modern Technology Stack</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-xl">✓</span>
                              <span className="opacity-90">Expert Team</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-xl">✓</span>
                              <span className="opacity-90">24/7 Support</span>
                            </div>
                          </div>
                        </div>

                        {/* 底部按钮 */}
                        <Link
                          href={service.link}
                          className="block w-full text-center bg-white/20 hover:bg-white/30 rounded-xl py-3 font-semibold transition-colors"
                        >
                          Learn More →
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
            </div>
          </div>

          <div className="text-center mt-16" style={{marginTop:'40px'}}>
            <Link href="/services" className="btn btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="relative bg-linear-to-br bg-primary to-secondary/40 fade-in-section text-white"
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
