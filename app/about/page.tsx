'use client';

import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section bg-linear-to-b from-gray-50 to-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="gradient-text">Sparrow Digital</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We are a passionate team of digital innovators dedicated to transforming businesses through cutting-edge technology and creative solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 animate-slide-in-left">
              <h2 className="text-4xl font-bold">Our Story</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Founded in 2020, Sparrow Digital began with a simple mission: to help businesses thrive in the digital age. What started as a small team of developers has grown into a full-service digital agency.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe that great digital experiences are born from the perfect blend of strategy, design, and technology. Our approach combines data-driven insights with creative innovation to deliver solutions that not only look beautiful but drive real business results.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, we&apos;re proud to have helped over 500 businesses transform their digital presence and achieve their goals.
              </p>
            </div>
            <div className="relative animate-slide-in-right">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="card bg-primary text-white p-6">
                    <div className="text-4xl font-bold mb-2">500+</div>
                    <div className="text-sm opacity-90">Projects Completed</div>
                  </div>
                  <div className="card bg-secondary text-white p-6">
                    <div className="text-4xl font-bold mb-2">50+</div>
                    <div className="text-sm opacity-90">Team Members</div>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="card bg-accent text-white p-6">
                    <div className="text-4xl font-bold mb-2">98%</div>
                    <div className="text-sm opacity-90">Client Satisfaction</div>
                  </div>
                  <div className="card bg-linear-to-br from-primary to-secondary text-white p-6">
                    <div className="text-4xl font-bold mb-2">24/7</div>
                    <div className="text-sm opacity-90">Support Available</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: '🎯',
                title: 'Excellence',
                description: 'We strive for excellence in every project, never settling for good enough.'
              },
              {
                icon: '🤝',
                title: 'Collaboration',
                description: 'We work closely with our clients as partners in their success.'
              },
              {
                icon: '💡',
                title: 'Innovation',
                description: 'We embrace new technologies and creative approaches to problem-solving.'
              },
              {
                icon: '❤️',
                title: 'Integrity',
                description: 'We operate with honesty, transparency, and ethical practices.'
              }
            ].map((value, index) => (
              <div key={index} className="card text-center group hover:shadow-2xl">
                <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The talented people behind Sparrow Digital
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Sarah Johnson', role: 'CEO & Founder', avatar: '👩‍💼' },
              { name: 'Michael Chen', role: 'CTO', avatar: '👨‍💻' },
              { name: 'Emily Rodriguez', role: 'Creative Director', avatar: '👩‍🎨' },
              { name: 'David Kim', role: 'Lead Developer', avatar: '👨‍🔧' }
            ].map((member, index) => (
              <div key={index} className="card text-center group hover:shadow-2xl">
                <div className="text-8xl mb-4 transform group-hover:scale-110 transition-transform">
                  {member.avatar}
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary font-semibold mb-4">{member.role}</p>
                <div className="flex justify-center space-x-4">
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                    in
                  </a>
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                    𝕏
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-linear-to-r from-primary to-secondary text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Want to Work With Us?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let&apos;s collaborate to bring your digital vision to life
            </p>
            <Link href="/contact" className="btn bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
