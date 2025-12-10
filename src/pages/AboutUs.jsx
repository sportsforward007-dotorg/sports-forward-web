import React from 'react';
import { Heart, Target, Users, Lightbulb, TrendingUp, Shield, ArrowRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AboutPage = () => {
  const features = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Equip and Empower',
      description: 'We provide funds for sports equipment and facility development to schools, community centers, and youth organizations in underserved areas in India.'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Youth Development',
      description: 'Our programs go beyond sports through sports. We offer mentorship, life skills, and educational/sports scholarship support to help children succeed in all aspects of life.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Community Building',
      description: 'We create safe spaces for kids to play, learn, and bond. We believe in building strong, supportive communities through sports.'
    }
  ];

  const values = [
    { icon: '🎯', title: 'Mission-Driven', description: 'Every action aligned with our goal to empower children' },
    { icon: '🤝', title: 'Transparent', description: 'Open about our work, finances, and impact' },
    { icon: '💪', title: 'Empowering', description: 'Building confidence and skills for life' },
    { icon: '🌟', title: 'Inclusive', description: 'Creating opportunities for all children, regardless of background' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900">
      {/* Hero Section */}
      <Navigation currentPath="/sports-forward-web/about-us" />
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-600/20 to-orange-600/20" />
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-teal-300 via-white to-orange-300 bg-clip-text text-transparent">
            About Us
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Sports Forward is a dedicated non-profit organization that focuses on promoting sports and physical activity among underprivileged kids in India.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-teal-600/20 to-orange-600/20 backdrop-blur-lg border border-white/10 rounded-3xl p-12 md:p-16 text-center">
            <div className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-teal-400 to-orange-400 rounded-full flex items-center justify-center">
              <Heart className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our Belief
            </h2>
            <p className="text-xl text-gray-200 leading-relaxed max-w-4xl mx-auto">
              We understand that sports can be a vehicle for change, offering a way out of adversity and a path toward a better life. Through the power of play, we're building brighter futures for children across India.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              What We Do
            </h2>
            <p className="text-xl text-gray-400">
              Creating lasting impact through three core pillars
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/20"
              >
                <div className="w-16 h-16 mb-6 bg-gradient-to-br from-teal-500 to-orange-500 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-teal-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-teal-600/10 to-orange-600/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-400">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {values.map((value, idx) => (
              <div
                key={idx}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                <p className="text-gray-400 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Story Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Making Dreams Reality
              </h2>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                Every project we undertake transforms lives. From building sports facilities in remote villages to providing equipment to schools that never had access, we're creating opportunities for children to discover their potential.
              </p>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                Through sports, children learn teamwork, discipline, leadership, and resilience - skills that will serve them throughout their lives.
              </p>
              <a
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-teal-500/50 transition-all duration-300 hover:scale-105"
              >
                See Our Impact
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-teal-500/20 to-orange-500/20 rounded-2xl p-6 backdrop-blur-lg border border-white/10 aspect-square flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl mb-2">🏀</div>
                  <p className="text-gray-400 text-sm">Basketball Courts</p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-orange-500/20 to-teal-500/20 rounded-2xl p-6 backdrop-blur-lg border border-white/10 aspect-square flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl mb-2">⚽</div>
                  <p className="text-gray-400 text-sm">Soccer Equipment</p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-orange-500/20 to-teal-500/20 rounded-2xl p-6 backdrop-blur-lg border border-white/10 aspect-square flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl mb-2">♟️</div>
                  <p className="text-gray-400 text-sm">Chess Programs</p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-teal-500/20 to-orange-500/20 rounded-2xl p-6 backdrop-blur-lg border border-white/10 aspect-square flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl mb-2">🎯</div>
                  <p className="text-gray-400 text-sm">Archery Training</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How You Can Help */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              How You Can Help
            </h2>
            <p className="text-xl text-gray-400">
              Join us in creating positive change
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-teal-600/20 to-orange-600/20 backdrop-blur-lg border border-white/10 rounded-3xl p-10 hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-teal-500 to-orange-500 rounded-full flex items-center justify-center">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Donate</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Your support can make a real impact. Help us provide sports equipment and opportunities to more children in need.
              </p>
              <a
                href="/donations"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-teal-500/50 transition-all duration-300"
              >
                Donate Now
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            <div className="bg-gradient-to-br from-orange-600/20 to-teal-600/20 backdrop-blur-lg border border-white/10 rounded-3xl p-10 hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-orange-500 to-teal-500 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Spread the Word</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Share our mission with your friends, family, and social networks. Together, we can create a movement for change.
              </p>
              <div className="flex gap-3">
                <button className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20 transition-all">
                  Share
                </button>
                <button className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20 transition-all">
                  Follow
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutPage;