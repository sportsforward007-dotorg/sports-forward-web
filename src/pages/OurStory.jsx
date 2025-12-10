import React, { useState, useEffect } from 'react';
import { Heart, MapPin, Lightbulb, TrendingUp, ArrowRight, Sparkles } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const StoryPage = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      setScrollProgress((scrolled / scrollable) * 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const timeline = [
    { year: '2023', icon: '💡', title: 'The Inspiration', description: 'Raj visits Chandala village and witnesses the lack of opportunities for children' },
    { year: '2023', icon: '🎯', title: 'Foundation Launch', description: 'Sports Forward Inc. officially becomes a 501(c)(3) non-profit' },
    { year: '2024', icon: '🏗️', title: 'First Project', description: 'Chandala sports recreational area completed successfully' },
    { year: '2024', icon: '🚀', title: 'Expansion', description: 'Multiple projects launched across different Indian states' },
    { year: '2025', icon: '🌟', title: 'Growing Impact', description: 'Continuing to empower more children through sports' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900">
      {/* Progress Bar */}
      <Navigation currentPath="/sports-forward-web/our-story" />
      <div className="fixed top-0 left-0 w-full h-1 bg-white/10 z-50">
        <div 
          className="h-full bg-gradient-to-r from-teal-500 to-orange-500 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-600/20 to-orange-600/20" />
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
              <Heart className="w-5 h-5 text-teal-400" />
              <span className="text-white font-semibold">Our Journey</span>
              <Sparkles className="w-5 h-5 text-orange-400" />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-teal-300 via-white to-orange-300 bg-clip-text text-transparent">
            The Story Behind
            <br />
            Sports Forward
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A journey that began with one village and a dream to transform lives through the power of sports
          </p>
        </div>
      </section>

      {/* Founder's Story - Main Content */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-teal-600/20 to-orange-600/20 backdrop-blur-lg border border-white/10 rounded-3xl p-8 md:p-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-orange-400 rounded-full flex items-center justify-center">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">Founder's Story</h2>
                <p className="text-gray-400">by Raj Keswani</p>
              </div>
            </div>

            <div className="space-y-6 text-gray-200 leading-relaxed">
              <p className="text-lg md:text-xl">
                Having been to India several times to see family, I've noticed the major differences between my American lifestyle and their Indian customs, but it never occurred to me how many people struggled as a result of the opportunities they lacked.
              </p>

              <p className="text-lg md:text-xl">
                However, after learning about the inequalities in different global populations, I realized that not only did the issue affect an area near and dear to my heart, but that there was also something I could do about the lack of opportunities.
              </p>

              <div className="bg-white/5 border-l-4 border-teal-400 rounded-r-2xl p-6 my-8">
                <p className="text-lg italic text-teal-200">
                  "Shortly thereafter, a couple of friends and I connected with some of my family members in India who showed me what was happening in Chandala, a remote tribal village mixed with community members and Naxalites (those distrustful of government rule and services)."
                </p>
              </div>

              <p className="text-lg md:text-xl">
                This past summer, I finally got the chance to visit the village myself to better understand what was happening. Village leaders were able to give me some insight into some of the hardships the people faced, and they also connected me with a few of the kids there.
              </p>

              <p className="text-lg md:text-xl font-semibold text-white">
                What I saw shocked me; children spent most of their time helping their parents meet financial needs. Moreover, children lacked the resources to find true enjoyment.
              </p>

              <p className="text-lg md:text-xl">
                Seeing these kids forced into adulthood at such a young age made me realize what to do - help allow these kids to have a more fulfilling childhood. This experience inspired me to start Sports Forward and help many more children across India.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Story Cards */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl overflow-hidden hover:scale-105 transition-all duration-500">
              <div className="h-64 bg-gradient-to-br from-orange-500/30 to-red-500/30 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-7xl mb-4 group-hover:scale-110 transition-transform">📸</div>
                  <p className="text-gray-300 font-semibold">Image Placeholder</p>
                  <p className="text-sm text-gray-500">Chandala Village - Before</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">The Challenge</h3>
                <p className="text-gray-300">
                  A village where children had no access to sports, play areas, or recreational facilities - working instead of enjoying their childhood.
                </p>
              </div>
            </div>

            <div className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl overflow-hidden hover:scale-105 transition-all duration-500">
              <div className="h-64 bg-gradient-to-br from-teal-500/30 to-green-500/30 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-7xl mb-4 group-hover:scale-110 transition-transform">📸</div>
                  <p className="text-gray-300 font-semibold">Image Placeholder</p>
                  <p className="text-sm text-gray-500">Sports Facility Completed</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">The Solution</h3>
                <p className="text-gray-300">
                  A fully equipped sports recreational area with volleyball and kabbadi courts, lighting, and equipment - giving children a place to play and grow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-teal-600/10 to-orange-600/10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-400">
              From one village to multiple states across India
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-teal-500 via-orange-500 to-teal-500 rounded-full hidden md:block" />

            <div className="space-y-12">
              {timeline.map((item, idx) => (
                <div
                  key={idx}
                  className={`relative flex items-center ${
                    idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col gap-8`}
                >
                  {/* Content Card */}
                  <div className="flex-1 w-full">
                    <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="text-4xl">{item.icon}</div>
                        <span className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-orange-400 bg-clip-text text-transparent">
                          {item.year}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </div>

                  {/* Center Dot */}
                  <div className="w-6 h-6 bg-gradient-to-br from-teal-400 to-orange-400 rounded-full border-4 border-slate-900 shadow-xl hidden md:block" />

                  {/* Spacer */}
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Where We Are Today
            </h2>
            <p className="text-xl text-gray-400">
              The impact of following a dream
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '🏫', number: '10+', label: 'Schools Partnered', color: 'from-teal-500 to-blue-500' },
              { icon: '👧', number: '500+', label: 'Children Impacted', color: 'from-orange-500 to-pink-500' },
              { icon: '📍', number: '5', label: 'Indian States', color: 'from-purple-500 to-indigo-500' }
            ].map((stat, idx) => (
              <div
                key={idx}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 text-center hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <div className="text-6xl mb-4">{stat.icon}</div>
                <div className={`text-5xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                  {stat.number}
                </div>
                <div className="text-gray-300 font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-teal-600/20 to-orange-600/20 backdrop-blur-lg border border-white/10 rounded-3xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Be Part of Our Story
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Help us write the next chapter - together we can empower more children through the power of sports
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/donations"
                className="px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full text-white font-semibold text-lg shadow-xl hover:shadow-teal-500/50 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2"
              >
                <Heart className="w-5 h-5" />
                Donate Now
              </a>
              <a
                href="/projects"
                className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white font-semibold text-lg hover:bg-white/20 transition-all duration-300 inline-flex items-center justify-center gap-2"
              >
                View Our Projects
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default StoryPage;