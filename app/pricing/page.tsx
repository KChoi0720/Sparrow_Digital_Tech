'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small projects and startups',
      monthlyPrice: 999,
      yearlyPrice: 9990,
      features: [
        'Custom Website Design',
        'Responsive Development',
        'Basic SEO Optimization',
        '3 Months Support',
        '1 Revision Round',
        'Analytics Setup'
      ],
      cta: 'Get Started',
      highlighted: false,
      gradient: 'from-gray-600 to-gray-700'
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses',
      monthlyPrice: 2499,
      yearlyPrice: 24990,
      features: [
        'Everything in Starter',
        'Advanced Web Development',
        'Mobile-First Design',
        '6 Months Support',
        '3 Revision Rounds',
        'CMS Integration',
        'Performance Optimization',
        'Social Media Integration'
      ],
      cta: 'Get Started',
      highlighted: true,
      gradient: 'from-primary to-secondary'
    },
    {
      name: 'Enterprise',
      description: 'For large-scale projects',
      monthlyPrice: 4999,
      yearlyPrice: 49990,
      features: [
        'Everything in Professional',
        'Custom Application Development',
        'Advanced Integrations',
        '12 Months Support',
        'Unlimited Revisions',
        'Dedicated Project Manager',
        'Priority Support',
        'Training & Documentation',
        'Cloud Infrastructure Setup'
      ],
      cta: 'Contact Sales',
      highlighted: false,
      gradient: 'from-accent to-accent-dark'
    }
  ];

  const addons = [
    { name: 'Mobile App Development', price: 'From $3,999' },
    { name: 'E-commerce Integration', price: 'From $1,499' },
    { name: 'Custom API Development', price: 'From $2,499' },
    { name: 'Digital Marketing Package', price: 'From $999/mo' },
    { name: 'Maintenance & Updates', price: 'From $299/mo' },
    { name: 'Security Audit', price: 'From $799' }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section bg-linear-to-b from-gray-50 to-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Simple, <span className="gradient-text">Transparent Pricing</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Choose the perfect plan for your needs. All plans include our quality guarantee.
            </p>

            {/* Billing Toggle */}
            <div className="inline-flex items-center space-x-4 bg-white rounded-full p-2 shadow-lg">
              <button
                onClick={() => setBillingPeriod('monthly')}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  billingPeriod === 'monthly'
                    ? 'bg-primary text-white'
                    : 'text-gray-600 hover:text-primary'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingPeriod('yearly')}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  billingPeriod === 'yearly'
                    ? 'bg-primary text-white'
                    : 'text-gray-600 hover:text-primary'
                }`}
              >
                Yearly
                <span className="ml-2 text-xs bg-secondary text-white px-2 py-1 rounded-full">
                  Save 20%
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`card relative overflow-hidden ${
                  plan.highlighted
                    ? 'ring-2 ring-primary shadow-2xl scale-105 lg:scale-110'
                    : 'hover:shadow-2xl'
                } transition-all duration-300`}
              >
                {plan.highlighted && (
                  <div className="absolute top-0 right-0 bg-secondary text-white px-4 py-1 text-sm font-semibold rounded-bl-lg">
                    Most Popular
                  </div>
                )}

                <div className="text-center mb-6">
                  <div className={`inline-block w-16 h-16 bg-linear-to-br ${plan.gradient} rounded-2xl mb-4`}></div>
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-600">{plan.description}</p>
                </div>

                <div className="text-center mb-8">
                  <div className="text-5xl font-bold mb-2">
                    ${billingPeriod === 'monthly' ? plan.monthlyPrice.toLocaleString() : plan.yearlyPrice.toLocaleString()}
                  </div>
                  <div className="text-gray-600">
                    {billingPeriod === 'monthly' ? 'per project' : 'per year'}
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-primary text-xs">✓</span>
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={plan.cta === 'Contact Sales' ? '/contact' : '/contact'}
                  className={`btn w-full ${
                    plan.highlighted ? 'btn-primary' : 'btn-outline'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Add-Ons & Extensions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Enhance your project with additional services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {addons.map((addon, index) => (
              <div
                key={index}
                className="card flex items-center justify-between hover:shadow-xl transition-all duration-300 group"
              >
                <div>
                  <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                    {addon.name}
                  </h3>
                  <p className="text-gray-600 text-sm">{addon.price}</p>
                </div>
                <span className="text-2xl text-primary transform group-hover:translate-x-1 transition-transform">
                  +
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about our pricing
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: 'What payment methods do you accept?',
                answer: 'We accept all major credit cards, PayPal, and bank transfers. For enterprise clients, we can arrange custom payment terms.'
              },
              {
                question: 'Can I upgrade or downgrade my plan?',
                answer: 'Yes, you can change your plan at any time. We&apos;ll prorate the charges based on your usage.'
              },
              {
                question: 'Is there a setup fee?',
                answer: 'No, there are no hidden setup fees. The price you see is the price you pay.'
              },
              {
                question: 'What if I need a custom solution?',
                answer: 'We specialize in custom solutions! Contact our sales team to discuss your specific requirements and get a tailored quote.'
              },
              {
                question: 'Do you offer refunds?',
                answer: 'We offer a 30-day satisfaction guarantee. If you&apos;re not happy with our work, we&apos;ll make it right or provide a refund.'
              }
            ].map((faq, index) => (
              <div key={index} className="card hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
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
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get in touch with us to discuss your project and receive a custom quote
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="btn bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4">
                Contact Us
              </Link>
              <Link href="/services" className="btn btn-outline border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4">
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
