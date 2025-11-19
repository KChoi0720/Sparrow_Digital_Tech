import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        company: [
            { name: 'About Us', path: '/about' },
            { name: 'Services', path: '/services' },
            { name: 'Pricing', path: '/pricing' },
            { name: 'Contact', path: '/contact' },
        ],
        services: [
            { name: 'Web Development', path: '/services#web' },
            { name: 'Mobile Apps', path: '/services#mobile' },
            { name: 'UI/UX Design', path: '/services#design' },
            { name: 'Digital Marketing', path: '/services#marketing' },
        ],
        legal: [
            { name: 'Privacy Policy', path: '/privacy' },
            { name: 'Terms of Service', path: '/terms' },
            { name: 'Cookie Policy', path: '/cookies' },
        ],
    };

    const socialLinks = [
        { name: 'Twitter', icon: '𝕏', url: '#' },
        { name: 'LinkedIn', icon: 'in', url: '#' },
        { name: 'GitHub', icon: '⚡', url: '#' },
        { name: 'Instagram', icon: '📷', url: '#' },
    ];

    return (
        <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
            <div className="container">
                {/* Main Footer Content */}
                <div className="section py-16" >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {/* Brand Section */}
                        <div className="space-y-6" style={{ marginTop: '20px' }}>
                            <Link
                                href="/"
                                className="flex items-center space-x-3 animate-fade-in group"
                            >
                                <div className="relative w-11 h-11 group-hover:scale-105 transition-all duration-300"
                                    style={{ marginRight: '20px' }}>
                                    <Image
                                        src="/images/sparrow-logo.png"
                                        alt="Sparrow Digital Logo"
                                        width={11}
                                        height={11}
                                        className="object-contain w-11 h-11 rounded-2xl border-primary border"
                                        priority
                                    />
                                </div>
                                <span className="text-xl font-bold gradient-text group-hover:scale-105 transition-transform duration-300">
                                    Sparrow Digital
                                </span>
                            </Link>
                            <p className="text-gray-400 leading-relaxed text-[12px]">
                                Building innovative digital solutions that transform businesses and create exceptional user experiences.
                            </p>
                            {/* Social Links */}
                            <div className="flex space-x-4" style={{marginTop: '10px', marginBottom:'10px'}}>
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.name}
                                        href={social.url}
                                        className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[var(--primary)] flex items-center justify-center transition-all duration-300 hover:scale-110"
                                        aria-label={social.name}
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Company Links */}
                        <div>
                            <h3 className="text-lg font-semibold mb-6" style={{ marginTop: '20px' }}>Company</h3>
                            <ul className="space-y-3">
                                {footerLinks.company.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.path}
                                            className="text-[13px] text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-300"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Services Links */}
                        <div>
                            <h3 className="text-lg font-semibold mb-6" style={{ marginTop: '20px' }}>Services</h3>
                            <ul className="space-y-3">
                                {footerLinks.services.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.path}
                                            className="text-[13px] text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-300"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Newsletter */}
                        <div>
                            <h3 className="text-lg font-semibold mb-6" style={{ marginTop: '20px' }}>Stay Updated</h3>
                            <p className="text-[12px] text-gray-400 mb-4">
                                Subscribe to our newsletter for the latest updates and insights.
                            </p>
                            <form className="space-y-3" style={{marginTop:'10px'}}>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-[var(--primary)] focus:outline-none transition-colors duration-300"
                                    style={{height:'40px'}}
                                />
                                <button
                                    type="submit"
                                    className="btn btn-primary w-full"
                                    style={{marginTop:'10px', fontSize:'14px', width:'80%'}}
                                >
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-gray-400 text-sm">
                            © {currentYear} Sparrow Digital. All rights reserved.
                        </p>
                        <div className="flex space-x-6" style={{marginBottom:'20px'}}>
                            {footerLinks.legal.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.path}
                                    className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
