import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [currentPath]);

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'PROJECTS', path: '/projects' },
    { name: 'ABOUT US', path: '/about-us' },
    { name: 'OUR TEAM', path: '/our-team' },
    { name: 'OUR STORY', path: '/our-story' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/40 backdrop-blur-lg shadow-xl' : 'bg-black/20 backdrop-blur-md'
    } border-b border-white/10`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-orange-400 rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
              <span className="text-2xl">🏆</span>
            </div>
            <span className="text-white font-bold text-xl hidden sm:block">Sports Forward</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-semibold transition-all duration-300 ${
                  currentPath === link.path
                    ? 'text-white border-b-2 border-teal-400'
                    : 'text-gray-300 hover:text-white hover:scale-105'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/donations"
              className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-teal-500/50 transition-all duration-300 hover:scale-105"
            >
              <Heart className="w-4 h-4" />
              DONATE
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 pb-6' : 'max-h-0'
        }`}>
          <div className="space-y-3 mt-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block py-3 px-4 rounded-lg transition-all ${
                  currentPath === link.path
                    ? 'text-white bg-teal-500/20 border-l-4 border-teal-400'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/donations" 
              className="block mt-4 px-6 py-3 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full text-white font-semibold text-center"
              onClick={() => setIsOpen(false)}
            >
              ❤️ DONATE
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;