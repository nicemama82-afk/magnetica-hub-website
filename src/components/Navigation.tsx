import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Marketplace', path: '/marketplace' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Creators', path: '/creators' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-dark/95 backdrop-blur-md border-b border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl">✨</span>
            <span className="text-xl font-bold text-primary">Magnetica Hub</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path} className="text-secondary hover:text-primary transition-colors">
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" className="btn-primary btn-sm">
              Download App
            </a>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-primary">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path} className="block px-4 py-2 text-secondary hover:text-primary hover:bg-accent/20 rounded-lg" onClick={() => setIsOpen(false)}>
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
