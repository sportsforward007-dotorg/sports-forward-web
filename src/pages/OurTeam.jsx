import React, { useState } from 'react';
import { Mail, Linkedin, Award, Sparkles } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const TeamPage = () => {
  const [hoveredMember, setHoveredMember] = useState(null);

  const team = [
    {
      name: 'Raj Keswani',
      role: 'President & Founder',
      image: '👨‍💼',
      bio: 'Raj Keswani is a high school student attending Menlo School in Atherton, California. Growing up, Raj has always been passionate about sports, playing baseball, basketball, and football. Additionally, Raj is dedicated to giving back to the community and ensuring that the underprivileged are always represented. Raj has a deep interest in the intersection between sports, business, and law and hopes to study it in the future.',
      color: 'from-teal-500 to-blue-500'
    },
    {
      name: 'Gunjan Goswami Sinha',
      role: 'Vice President',
      image: '👩‍💼',
      bio: 'Gunjan is a Certified Rehabilitation Counselor with a decade of experience in the counseling field, focusing on vocational counseling for individuals with disabilities. Early in her career she actively worked at the grassroot level in rural India. She is passionate about promoting overall health and well-being, and empowering underprivileged youth through sports. In her spare time she enjoys exploring the beautiful outdoors with her family.',
      color: 'from-orange-500 to-pink-500'
    },
    {
      name: 'Hanu Mehrotra',
      role: 'Treasurer',
      image: '💼',
      bio: 'Hanu Mehrotra is VP of Corporate Finance at Visa Inc, where he oversees financial planning and analysis for Visa\'s global business. Prior to Visa, Hanu held finance leadership roles at Meta and Microsoft. He holds an MBA from the University of Iowa and Bachelors of Engineering from University of Mumbai.',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      name: 'Kashish Sharma',
      role: 'Secretary',
      image: '📝',
      bio: 'Kashish Sharma is Senior Manager at Applied Materials where he leads a group to develop innovative processes for chip manufacturers. Before Applied Materials, Kashish worked at Lam Research. He holds Ph.D. in applied physics from the Eindhoven University of Technology.',
      color: 'from-green-500 to-teal-500'
    },
    {
      name: 'Ka\'ili Crabbe',
      role: 'Head of Communications',
      image: '📢',
      bio: 'Ka\'ili started her career providing clinical services focusing on community mental health and women with eating disorders before transitioning to the vocational rehabilitation field. She currently works as a Vocational Rehabilitation Counseling Supervisor in the Bay Area. Hailing from Hawai\'i, Ka\'ili has always been drawn to the natural beauty of the outdoors, fostering a deep passion for nature, sports, and community. This fuels her commitment in providing youth with safe and accessible play spaces. During her downtime, she enjoys spending time with her husband and 1-year old son – continuing to explore all the Bay Area has to offer.',
      color: 'from-pink-500 to-rose-500'
    },
    {
      name: 'Neel Chatterjee',
      role: 'Head of Marketing',
      image: '📱',
      bio: 'Neel Chatterjee is a high school student at Aragon High School where he plays on the varsity basketball team, and is president of the Sports Performance club. He works at Legarza in his free time as a coach for little kids. He is also part of a research team looking at the effect of COVID-19 on dietary habits.',
      color: 'from-cyan-500 to-blue-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900">
      {/* Hero Section */}
      <Navigation currentPath="/our-team" />
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
                  <div className="relative z-10 w-32 h-32 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border-4 border-white/30 shadow-2xl group-hover:scale-110 transition-transform duration-500">
                    <span className="text-6xl">{member.image}</span>
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

                  <p className="text-gray-300 leading-relaxed text-sm mb-6 line-clamp-6">
                    {member.bio}
                  </p>

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