import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // NEW: Import Link
import { Heart, Target, Users, ArrowRight, PlayCircle, ChevronDown } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const HomePage = () => {
  const [scrollY, setScrollY] = useState(0);
  const [stats, setStats] = useState({ projects: 0, children: 0, equipment: 0, states: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const animateStats = () => {
      const duration = 2000;
      const steps = 60;
      const increment = duration / steps;
      let currentStep = 0;

      const targets = { projects: 6, children: 500, equipment: 150, states: 5 };

      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;

        setStats({
          projects: Math.floor(targets.projects * progress),
          children: Math.floor(targets.children * progress),
          equipment: Math.floor(targets.equipment * progress),
          states: Math.floor(targets.states * progress)
        });

        if (currentStep >= steps) {
          setStats(targets);
          clearInterval(timer);
        }
      }, increment);
    };

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        animateStats();
        observer.disconnect();
      }
    });

    const statsElement = document.getElementById('stats-section');
    if (statsElement) observer.observe(statsElement);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900">
      <Navigation currentPath="/sports-forward-web/" />
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-teal-600/20 to-orange-600/20"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        />
        
        {/* Animated Background Circles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl">
          <div className="mb-8 inline-block">
            <div className="w-32 h-32 mx-auto bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 shadow-2xl">
              <div className="w-24 h-24 bg-gradient-to-br from-teal-400 to-orange-400 rounded-full flex items-center justify-center">
                <span className="text-4xl">🏆</span>
              </div>
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-teal-300 via-white to-orange-300 bg-clip-text text-transparent animate-fade-in">
            Sports Forward
          </h1>
          
          <p className="text-2xl md:text-3xl text-gray-200 mb-4 font-light">
            Every Child Deserves a Chance to Play
          </p>
          
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
            Empowering underprivileged children across India through sports, one community at a time
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* FIX: Changed <a> to <Link> */}
            <Link to="/donations" className="group relative px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full text-white font-semibold text-lg shadow-xl hover:shadow-teal-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-2">
              <Heart className="w-5 h-5" />
              Donate Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            {/* FIX: Changed <a> to <Link> */}
            <Link to="/projects" className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white font-semibold text-lg hover:bg-white/20 transition-all duration-300 flex items-center gap-2">
              <Target className="w-5 h-5" />
              View Projects
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/60" />
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '📖', title: 'ABOUT', link: '/about-us', description: 'Learn about our mission and vision' },
              { icon: '🎯', title: 'PROJECTS', link: '/projects', description: 'Explore our impact across India' },
              { icon: '📝', title: 'SUBMIT YOUR PROJECT', link: '/request-project', description: 'Partner with us to help communities' }
            ].map((item, idx) => (
              /* FIX: Changed <a> to <Link> */
              <Link 
                key={idx}
                to={item.link}
                className="group relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/20"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
                <ArrowRight className="absolute top-8 right-8 w-6 h-6 text-teal-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats-section" className="py-20 px-6 bg-gradient-to-r from-teal-600/20 to-orange-600/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
            Our Impact in Numbers
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: stats.projects, label: 'Projects Completed', icon: '🎯', suffix: '+' },
              { value: stats.children, label: 'Children Impacted', icon: '👧', suffix: '+' },
              { value: stats.equipment, label: 'Equipment Donated', icon: '⚽', suffix: '+' },
              { value: stats.states, label: 'States Reached', icon: '📍', suffix: '' }
            ].map((stat, idx) => (
              <div key={idx} className="text-center group">
                <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                    {stat.icon}
                  </div>
                  <div className="text-5xl md:text-6xl font-bold text-transparent bg-gradient-to-r from-teal-300 to-orange-300 bg-clip-text mb-2">
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="text-gray-300 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-gradient-to-br from-teal-500/20 to-orange-500/20 rounded-3xl p-8 backdrop-blur-lg border border-white/10">
                <img 
                  src="/sports-forward-web/images/homepage/mission-section.png"
                  alt="School children in Chandala near Ghadchiroli"
                  className="w-full h-auto rounded-2xl object-cover"
                  onError={(e) => {
                    console.error('Image failed to load:', e.target.src);
                    e.target.style.border = '2px solid red';
                  }}
                />
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Mission
              </h2>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                Every child deserves a chance to play, learn, and grow. At Sports Forward, we are on a mission to make this dream a reality for underprivileged kids in India.
              </p>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                We believe in the power of sports to transform lives and provide opportunities for a brighter future. Join us in making a difference today!
              </p>
              
              {/* FIX: Changed <a> to <Link> */}
              <Link to="/about-us" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-teal-500/50 transition-all duration-300 hover:scale-105">
                Learn More
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;