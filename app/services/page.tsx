'use client';

import Link from 'next/link';

export default function ServicesPage() {
  const services = [
    {
      id: 'web',
      icon: '🌐',
      title: 'Web Development',
      description: 'Custom websites and web applications built with cutting-edge technologies',
      features: [
        'Responsive Design',
        'Progressive Web Apps',
        'E-commerce Solutions',
        'CMS Integration',
        'Performance Optimization'
      ],
      gradient: 'from-primary to-primary-dark'
    },
    {
      id: 'mobile',
      icon: '📱',
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android',
      features: [
        'iOS & Android Apps',
        'Cross-Platform Development',
        'App Store Optimization',
        'Push Notifications',
        'Offline Functionality'
      ],
      gradient: 'from-secondary to-secondary-dark'
    },
    {
      id: 'design',
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive designs that create exceptional user experiences',
      features: [
        'User Research',
        'Wireframing & Prototyping',
        'Visual Design',
        'Usability Testing',
        'Design Systems'
      ],
      gradient: 'from-accent to-accent-dark'
    },
    {
      id: 'marketing',
      icon: '📈',
      title: 'Digital Marketing',
      description: 'Strategic marketing campaigns that drive growth and engagement',
      features: [
        'SEO Optimization',
        'Content Marketing',
        'Social Media Management',
        'Email Campaigns',
        'Analytics & Reporting'
      ],
      gradient: 'from-primary to-secondary'
    },
    {
      id: 'cloud',
      icon: '☁️',
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and deployment strategies',
      features: [
        'Cloud Migration',
        'Infrastructure Setup',
        'DevOps & CI/CD',
        'Server Management',
        'Security & Compliance'
      ],
      gradient: 'from-secondary to-accent'
    },
    {
      id: 'consulting',
      icon: '💼',
      title: 'Digital Consulting',
      description: 'Expert guidance to transform your digital strategy and operations',
      features: [
        'Technology Strategy',
        'Digital Transformation',
        'Process Optimization',
        'Training & Workshops',
        'Technical Audits'
      ],
      gradient: 'from-accent to-primary'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section bg-linear-to-b from-gray-50 to-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Comprehensive digital solutions designed to help your business thrive in the modern digital landscape
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section bg-white">
        <div className="container">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="inline-block">
                    <div className={`w-20 h-20 bg-linear-to-br ${service.gradient} rounded-2xl flex items-center justify-center text-4xl shadow-lg`}>
                      {service.icon}
                    </div>
                  </div>
                  <h2 className="text-4xl font-bold">{service.title}</h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-primary text-sm">✓</span>
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4">
                    <Link href="/contact" className="btn btn-primary">
                      Learn More
                    </Link>
                  </div>
                </div>

                {/* Visual */}
                <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="card relative overflow-hidden group hover:shadow-2xl">
                    <div className={`absolute inset-0 bg-linear-to-br ${service.gradient} opacity-10`}></div>
                    <div className="relative p-12">
                      <div className="text-9xl mb-6 transform group-hover:scale-110 transition-transform duration-500">
                        {service.icon}
                      </div>
                      <div className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <div
                            key={idx}
                            className="bg-white/50 backdrop-blur-sm rounded-lg p-3 transform hover:translate-x-2 transition-transform duration-300"
                          >
                            <span className="text-sm font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven methodology that delivers results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'We learn about your business, goals, and challenges'
              },
              {
                step: '02',
                title: 'Strategy',
                description: 'We develop a tailored plan to achieve your objectives'
              },
              {
                step: '03',
                title: 'Execution',
                description: 'We bring the strategy to life with expert implementation'
              },
              {
                step: '04',
                title: 'Optimization',
                description: 'We continuously improve and refine for maximum impact'
              }
            ].map((phase, index) => (
              <div key={index} className="card text-center group hover:shadow-2xl relative">
                <div className="text-6xl font-bold text-primary/10 mb-4">
                  {phase.step}
                </div>
                <h3 className="text-xl font-bold mb-3">{phase.title}</h3>
                <p className="text-gray-600">{phase.description}</p>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <span className="text-2xl text-primary">→</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Technologies We Use</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We work with the latest and most reliable technologies
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              'React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'AWS',
              'Docker', 'MongoDB', 'PostgreSQL', 'GraphQL', 'Tailwind', 'Figma'
            ].map((tech, index) => (
              <div
                key={index}
                className="card text-center group hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <div className="text-3xl font-bold gradient-text">{tech}</div>
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
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let&apos;s discuss which services are right for your project
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
