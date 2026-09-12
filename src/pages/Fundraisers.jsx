import React from 'react';
import { Calendar, Clock, MapPin, Users, Heart, ArrowRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const FundraisersPage = () => {
  const photos = [
    {
      src: '/images/Fundraisers/IMG_0023.jpeg',
      alt: 'Community yoga session at Chaat Bhavan Field'
    },
    {
      src: '/images/Fundraisers/IMG_2611.jpeg',
      alt: 'Instructor leading yoga session on stage'
    },
    {
      src: '/images/Fundraisers/Screenshot 2026-09-12 at 12.00.27 PM.png',
      alt: 'Group participating in outdoor yoga activities'
    }
  ];

  const eventDetails = [
    {
      icon: Calendar,
      label: 'Date',
      value: 'August 8, 2026'
    },
    {
      icon: Clock,
      label: 'Time',
      value: '7:00 AM - 9:00 AM'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Chaat Bhavan Field at Eisenhower Elementary'
    },
    {
      icon: Users,
      label: 'Partner',
      value: 'Isha Foundation'
    },
    {
      icon: Heart,
      label: 'Instructor',
      value: 'Certified Yoga Instructor'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-600/20 to-orange-600/20" />
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="mb-8 inline-block">
            <div className="w-32 h-32 mx-auto bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 shadow-2xl">
              <div className="w-24 h-24 bg-gradient-to-br from-teal-400 to-orange-400 rounded-full flex items-center justify-center">
                <Heart className="w-12 h-12 text-white" />
              </div>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-teal-300 via-white to-orange-300 bg-clip-text text-transparent">
            Fundraisers
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Join us in making a difference through community-driven fundraising events.
            Our fundraisers bring people together to support sports programs and create
            lasting change for underprivileged children.
          </p>
        </div>
      </section>

      {/* Featured Fundraiser */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-teal-500/20 text-teal-300 rounded-full text-sm font-semibold mb-4 border border-teal-500/30">
              Community • Wellness • Giving
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Featured Fundraiser
            </h2>
             <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
               Family Yoga Day<br />
               In partnership with Isha Foundation<br />
               August 8, 2026<br />
               7:00 AM<br />
               Chaat Bhavan Field at Eisenhower Elementary
             </p>
           </div>

          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image Gallery Side */}
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 h-full">
                  <div className="space-y-4">
                    {photos.slice(0, 2).map((photo, idx) => (
                      <div key={idx} className="rounded-2xl overflow-hidden aspect-[4/3] hover:scale-[1.02] transition-transform duration-300">
                        <img
                          src={photo.src}
                          alt={photo.alt}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="pt-8">
                    <div className="rounded-2xl overflow-hidden aspect-[4/3] hover:scale-[1.02] transition-transform duration-300">
                      <img
                        src={photos[2].src}
                        alt={photos[2].alt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Details Side */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/20 text-orange-300 rounded-full w-fit mb-6 border border-orange-500/30">
                  <Heart className="w-4 h-4" />
                  <span className="text-sm font-semibold">Family Yoga Day</span>
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Community Yoga for a Cause
                </h3>

                <div className="space-y-4 mb-8">
                  {eventDetails.slice(0, 3).map((detail, idx) => {
                    const Icon = detail.icon;
                    return (
                      <div key={idx} className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                        <div className="w-12 h-12 bg-teal-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-teal-400" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-400">{detail.label}</p>
                          <p className="text-white font-semibold">{detail.value}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="p-4 bg-white/5 rounded-xl border border-white/10 text-center">
                    <p className="text-sm text-gray-400 mb-1">Partner</p>
                    <p className="text-white font-semibold">Isha Foundation</p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-xl border border-white/10 text-center">
                    <p className="text-sm text-gray-400 mb-1">Instructor</p>
                    <p className="text-white font-semibold">Certified Yoga Instructor</p>
                  </div>
                </div>

                <button className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-teal-500 to-orange-500 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-teal-500/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                  Support This Cause
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Event Details with Table */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Event Details
            </h2>
            <p className="text-xl text-gray-400">
              Everything you need to know about Family Yoga Day
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 md:p-12">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="pb-4 text-teal-400 font-semibold">Detail</th>
                    <th className="pb-4 text-teal-400 font-semibold">Information</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  {eventDetails.map((detail, idx) => {
                    const Icon = detail.icon;
                    return (
                      <div key={idx} className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                        <div className="w-12 h-12 bg-teal-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-teal-400" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-400">{detail.label}</p>
                          <p className="text-white font-semibold">{detail.value}</p>
                        </div>
                      </div>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-teal-600/20 to-orange-600/20 backdrop-blur-lg border border-white/10 rounded-3xl p-8 md:p-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
              A Story of Community Through Movement
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              Family Yoga Day is more than just a fundraiser — it's a celebration of
              community connection through the mindful practice of movement. Families,
              friends, and neighbors gathered at Chaat Bhavan Field to share in the joy
              of yoga, supporting a cause that extends beyond ourselves.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed mb-8">
              Organized in partnership with the Isha Foundation, this event brought
              together certified instructors and local families for a morning of
              wellness, reflection, and giving. Every dollar raised goes toward
              establishing sports programs in underserved schools, proving that when we
              move together, we grow stronger.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-6 py-2 bg-teal-500/20 text-teal-300 rounded-full border border-teal-500/30 font-semibold">
                Community
              </span>
              <span className="px-6 py-2 bg-orange-500/20 text-orange-300 rounded-full border border-orange-500/30 font-semibold">
                Wellness
              </span>
              <span className="px-6 py-2 bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30 font-semibold">
                Giving
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Event Gallery
            </h2>
            <p className="text-xl text-gray-400">
              Relive the moments from Family Yoga Day
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {photos.map((photo, idx) => (
              <div key={idx} className="group relative rounded-3xl overflow-hidden aspect-[4/3] hover:scale-[1.02] transition-transform duration-300">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover rounded-3xl group-hover:rounded-2xl transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white font-semibold">{photo.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-teal-600/20 to-orange-600/20 backdrop-blur-lg border border-white/10 rounded-3xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Make an Impact?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join our next fundraiser and be part of something bigger
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-teal-500/50 transition-all duration-300 hover:scale-105">
                Donate Now
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white font-semibold text-lg hover:bg-white/20 transition-all duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FundraisersPage;