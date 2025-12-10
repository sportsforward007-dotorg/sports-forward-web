import React, { useState } from 'react';
import { Heart, Shield, TrendingUp, Users, Award, Check, Sparkles, DollarSign } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const DonationsPage = () => {
  const [selectedAmount, setSelectedAmount] = useState(null);

  const impactLevels = [
    { amount: 50, impact: 'Provides basic sports equipment for 2 children', icon: '⚽', color: 'from-blue-500 to-cyan-500' },
    { amount: 100, impact: 'Equips a small team with essential gear', icon: '🏀', color: 'from-teal-500 to-green-500' },
    { amount: 250, impact: 'Funds a complete sports kit for a classroom', icon: '🎯', color: 'from-orange-500 to-yellow-500' },
    { amount: 500, impact: 'Supports facility maintenance for a year', icon: '🏗️', color: 'from-purple-500 to-pink-500' },
    { amount: 1000, impact: 'Helps build a small sports court', icon: '🏟️', color: 'from-red-500 to-orange-500' }
  ];

  const benefits = [
    { icon: <Shield />, title: 'Break Barriers', description: 'Your donation will break down financial barriers that prevent kids from participating in sports. By providing essential equipment and space, we enable them to explore their potential and build self-confidence.' },
    { icon: <Heart />, title: 'Promote Health and Wellness', description: 'Regular physical activity is vital for a child\'s overall development. Your contribution will encourage a healthier lifestyle and combat the sedentary habits that often accompany limited access to sports facilities.' },
    { icon: <Users />, title: 'Foster Team Spirit', description: 'Sports teach valuable life skills such as teamwork, discipline, and leadership. Help us create a generation of empowered individuals who can work together towards a common goal, both on and off the field.' }
  ];

  const donationAreas = [
    { icon: '⚽', title: 'Basic Sports Kits', description: 'A modest contribution can provide a child with a complete set of sports gear and basic equipment related to their chosen sport.' },
    { icon: '🏗️', title: 'Upgrade Facilities', description: 'Donations will also be allocated to improve existing sports facilities, ensuring a safe and conducive environment for young athletes.' },
    { icon: '🎓', title: 'Training Programs', description: 'Support comprehensive sports training programs that go beyond just providing equipment. Your contribution will help in organizing coaching sessions, workshops, and skill-building initiatives.' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900">
      {/* Hero Section */}
      <Navigation currentPath="/donations" />
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-600/20 to-orange-600/20" />
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="mb-6">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
              <Heart className="w-5 h-5 text-teal-400" />
              <span className="text-white font-semibold">Make a Difference</span>
              <Sparkles className="w-5 h-5 text-orange-400" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-teal-300 via-white to-orange-300 bg-clip-text text-transparent">
            Donate Today
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed mb-4">
            At Sports Forward we believe that every child deserves the opportunity to pursue their athletic dreams.
          </p>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Unfortunately, many underprivileged kids in India lack access to proper sports equipment, hindering their ability to develop essential life-skills, stay active, and build a brighter future.
          </p>
        </div>
      </section>

      {/* Impact Levels Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Your Impact
            </h2>
            <p className="text-xl text-gray-400">
              See how your donation transforms lives
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {impactLevels.map((level, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedAmount(level.amount)}
                className={`group cursor-pointer bg-white/5 backdrop-blur-lg border ${
                  selectedAmount === level.amount ? 'border-teal-400 bg-white/10' : 'border-white/10'
                } rounded-3xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-teal-500/20`}
              >
                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${level.color} rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300`}>
                  {level.icon}
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">${level.amount}</div>
                  <p className="text-sm text-gray-300 leading-relaxed">{level.impact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation CTA with PayPal */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-teal-600/30 to-orange-600/30 backdrop-blur-lg border-2 border-white/20 rounded-3xl p-12 text-center relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full" style={{
                backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
                backgroundSize: '30px 30px'
              }} />
            </div>

            <div className="relative z-10">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-teal-400 to-orange-400 rounded-full flex items-center justify-center">
                <Heart className="w-10 h-10 text-white" />
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Make an Impact?
              </h2>
              <p className="text-xl text-gray-200 mb-8">
                Join us in empowering these young athletes with the tools they need to thrive
              </p>

              {/* PayPal Button */}
              <div className="mb-8">
                <a
                  href="https://www.paypal.com/donate/?hosted_button_id=9HZ4T95VULYEE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full text-white font-bold text-xl shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105"
                >
                  <DollarSign className="w-6 h-6" />
                  DONATE WITH PAYPAL
                </a>
              </div>

              {/* PayPal Logo Placeholder */}
              <div className="inline-block bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-8 py-4">
                <div className="text-center">
                  <div className="text-4xl mb-2">💳</div>
                  <p className="text-gray-300 text-sm font-semibold">Secure Payment via PayPal</p>
                </div>
              </div>

              <div className="mt-8 flex items-center justify-center gap-2 text-gray-300 text-sm">
                <Shield className="w-4 h-4 text-teal-400" />
                <span>100% Secure & Tax-Deductible</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Donate Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-teal-600/10 to-orange-600/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Donate?
            </h2>
            <p className="text-xl text-gray-400">
              The impact of your contribution
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <div className="w-16 h-16 mb-6 bg-gradient-to-br from-teal-500 to-orange-500 rounded-2xl flex items-center justify-center text-white">
                  {React.cloneElement(benefit.icon, { className: 'w-8 h-8' })}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Your Donation Helps */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              How Your Donation Helps
            </h2>
            <p className="text-xl text-gray-400">
              Where your contribution makes the most impact
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {donationAreas.map((area, idx) => (
              <div
                key={idx}
                className="group bg-gradient-to-br from-teal-600/20 to-orange-600/20 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:scale-105 transition-all duration-300"
              >
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">
                  {area.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{area.title}</h3>
                <p className="text-gray-300 leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tax Benefits & Corporate Sponsorship */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Tax Benefits */}
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Tax Benefits</h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                As a registered 501(c)(3) non-profit organization, your donation to Sports Forward is eligible for tax benefits under applicable laws.
              </p>
              <p className="text-gray-300 leading-relaxed">
                By supporting our cause, you not only make a difference in the lives of underprivileged children but also receive tax deductions for your charitable contributions.
              </p>
              <div className="mt-6 flex items-center gap-2 text-teal-300">
                <Check className="w-5 h-5" />
                <span className="font-semibold">Tax ID: Available upon request</span>
              </div>
            </div>

            {/* Corporate Sponsorship */}
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-pink-500 rounded-2xl flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Corporate Sponsorship</h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                Partner with us to create a meaningful corporate social responsibility (CSR) initiative. We offer customized partnership opportunities that align with your company's values and goals.
              </p>
              <a
                href="mailto:sportsforwardfoundation@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105"
              >
                Contact Us for Partnerships
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Gratitude Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-teal-600/20 to-orange-600/20 backdrop-blur-lg border border-white/10 rounded-3xl p-12">
            <Sparkles className="w-16 h-16 mx-auto mb-6 text-teal-400" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Thank You!
            </h2>
            <p className="text-xl text-gray-200 mb-6 leading-relaxed">
              Your support can make dreams come true for these young athletes.
            </p>
            <p className="text-lg text-gray-300">
              Thank you for being a champion of change! 🏆
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default DonationsPage;