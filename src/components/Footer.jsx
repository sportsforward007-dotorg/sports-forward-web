import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-black/30 backdrop-blur-lg border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-orange-400 rounded-full flex items-center justify-center text-2xl">
                🏆
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">Sports Forward</h3>
                <p className="text-gray-400 text-sm">501(c)(3) Inc.</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Empowering underprivileged children across India through sports.
            </p>
          </div>
          
          {/* Quick Links Section */}
          <div>
            <h4 className="text-white font-semibold mb-3">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/about-us" className="block text-gray-400 hover:text-teal-400 transition-colors">
                About Us
              </Link>
              <Link to="/projects" className="block text-gray-400 hover:text-teal-400 transition-colors">
                Projects
              </Link>
              <Link to="/our-team" className="block text-gray-400 hover:text-teal-400 transition-colors">
                Our Team
              </Link>
              <Link to="/our-story" className="block text-gray-400 hover:text-teal-400 transition-colors">
                Our Story
              </Link>
              <Link to="/donations" className="block text-gray-400 hover:text-teal-400 transition-colors">
                Donate
              </Link>
            </div>
          </div>
          
          {/* Contact Section */}
          <div>
            <h4 className="text-white font-semibold mb-3">Contact</h4>
            <a 
              href="mailto:sportsforwardfoundation@gmail.com" 
              className="text-gray-400 hover:text-teal-400 transition-colors break-all"
            >
              sportsforwardfoundation@gmail.com
            </a>
          </div>
        </div>
        
        {/* Copyright Section */}
        <div className="border-t border-white/10 pt-8 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Sports Forward Foundation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;