import React, { useState, useEffect } from 'react';
import { Mail, Linkedin, Award, Sparkles } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const TeamPage = () => {
  useEffect(() => {
    document.title = 'Our Team - Sports Forward';
  }, []);
  const [hoveredMember, setHoveredMember] = useState(null);

  const team = [
    {
      name: 'Paarth Sharma ',
      role: 'President',
      image: '/images/team/paarth_sharma.jpg',
      bio: 'Paarth Sharma is a Cupertino High School student with a passion for sports, fitness, and learning. An avid athlete, he actively participates in track and field, cricket, and enjoys spending time at the gym. Beyond athletics, Paarth has a deep interest in design, psychology, and business. Paarth is committed to making sports accessible for underprivileged children, especially in underdeveloped and developing countries. Driven by this mission, he regularly travels to India to lead projects that provide sports equipment and promote inclusive development in schools. He stays connected with students, offering guidance and mentorship on various issues, fostering opportunities for growth and empowerment through sports.',
      color: 'from-teal-500 to-blue-500'
    },
    {
      name: 'Raj Keswani',
      role: 'Founder and Vice President',
      image: '/images/team/raj-keswani_new.png',
      bio: 'Raj Keswani is a student at Vanderbilt University with a passion for sports, having played baseball, basketball, and football. He founded Sports Forward in 2023 and previously served as President for three years before stepping into the role of Vice President to empower younger leaders. Raj is committed to community service and increasing representation for underprivileged children through sports.',
      color: 'from-teal-500 to-blue-500'
    },
    {
      name: 'Damodar',
      role: 'Director of Operations',
      image: '/images/team/damodar.jpg',
      bio: 'Damodar brings extensive experience in operations management and community outreach to Sports Forward. With a background in nonprofit management and a passion for youth development, he oversees project execution and ensures smooth operations across all initiatives. His dedication to creating sustainable impact through sports has been instrumental in expanding our reach to underserved communities.',
      color: 'from-orange-500 to-red-500'
    },
    {
      name: 'Kristen Hay',
      role: 'Social Worker',
      image: '/images/team/kristen_hay.jpg',
      bio: 'Kristen Hay believes in the value of sports and their ability to build community, improve health, increase self-esteem, and provide recreation. In her career as a social worker she actively works with underserved populations and provides support to individuals as they identify and progress towards their goals. In her spare time she enjoys hiking, yoga, and reading.',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900">
      {/* Hero Section */}
      <Navigation />
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-600/20 to-orange-600/20" />
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Award className="w-12 h-12 text-teal-400" />
            <Sparkles className="w-10 h-10 text-orange-400" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-teal-300 via-white to-orange-300 bg-clip-text text-transparent">
            Meet The Team
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate individuals united by a common goal: empowering children through sports
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, idx) => (
              <div
                key={idx}
                className="group relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/20"
                onMouseEnter={() => setHoveredMember(idx)}
                onMouseLeave={() => setHoveredMember(null)}
              >
                {/* Card Header with Gradient */}
                <div className={`relative h-48 bg-gradient-to-br ${member.color} flex items-center justify-center`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
                  
                  {/* Profile Image Placeholder */}
                  <div className="relative z-10 w-32 h-32 bg-white/10 backdrop-blur-md rounded-full overflow-hidden border-4 border-white/30 shadow-2xl group-hover:scale-110 transition-transform duration-500">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:rotate-12">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-teal-300 transition-colors">
                      {member.name}
                    </h3>
                    <div className={`inline-block px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r ${member.color} text-white`}>
                      {member.role}
                    </div>
                  </div>

                  <div className={`mb-6 transition-all duration-300 ${
                    hoveredMember === idx ? 'max-h-64 overflow-y-auto' : 'max-h-32 overflow-hidden'
                  }`}>
                    <p className="text-gray-300 leading-relaxed text-sm pr-2">
                      {member.bio}
                    </p>
                  </div>

                  {/* Social Links */}
                  <div className="flex gap-3">
                    <button className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-xl text-white hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2 text-sm font-semibold">
                      <Mail className="w-4 h-4" />
                      Contact
                    </button>
                    <button className="px-4 py-2 bg-white/10 border border-white/20 rounded-xl text-white hover:bg-white/20 transition-all duration-300 flex items-center justify-center">
                      <Linkedin className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-gradient-to-br from-teal-600/20 to-orange-600/20 backdrop-blur-lg border border-white/10 rounded-3xl p-12 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full" style={{
                backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
                backgroundSize: '30px 30px'
              }} />
            </div>

            <div className="relative z-10 text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-teal-400 to-orange-400 rounded-full flex items-center justify-center">
                <Award className="w-10 h-10 text-white" />
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Want to Join Our Mission?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                We're always looking for passionate individuals who want to make a difference in children's lives through sports.
              </p>
              
              <a
                href="mailto:sportsforwardfoundation@gmail.com"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full text-white font-semibold text-lg shadow-xl hover:shadow-teal-500/50 transition-all duration-300 hover:scale-105"
              >
                <Mail className="w-5 h-5" />
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-teal-600/10 to-orange-600/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Team's Approach
            </h2>
            <p className="text-xl text-gray-400">
              How we work together to create impact
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: '🎯', title: 'Strategic Planning', description: 'Identifying communities in need' },
              { icon: '🤝', title: 'Partnerships', description: 'Building local connections' },
              { icon: '💡', title: 'Implementation', description: 'Executing projects efficiently' },
              { icon: '📊', title: 'Impact Measurement', description: 'Tracking our success' }
            ].map((approach, idx) => (
              <div
                key={idx}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <div className="text-5xl mb-4">{approach.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{approach.title}</h3>
                <p className="text-gray-400 text-sm">{approach.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default TeamPage;