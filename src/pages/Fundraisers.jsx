import React from 'react';
import { Calendar, Clock, MapPin, Users, Heart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
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
      src: '/images/Fundraisers/dc694313.png',
      alt: 'Speaker addressing the crowd at Family Yoga Day'
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
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-16 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-600/20 to-orange-600/20" />
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-orange-500/20 text-orange-300 rounded-full border border-orange-500/30">
            <Heart className="w-4 h-4" />
            <span className="text-sm font-semibold">Family Yoga Day</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-teal-300 via-white to-orange-300 bg-clip-text text-transparent">
            Fundraisers
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Community-driven events that bring people together to fund sports programs
            for underprivileged children.
          </p>
        </div>
      </section>

      {/* Featured Fundraiser */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl overflow-hidden">
            {/* Large hero photo */}
            <div className="aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden">
              <img
                src={photos[0].src}
                alt={photos[0].alt}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Community Yoga for a Cause
              </h2>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
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
              </div>

              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                Join us for a morning of wellness, reflection, and giving — every dollar
                raised goes toward establishing sports programs in underserved schools.
              </p>

              <Link
                to="/donations"
                className="w-full md:w-auto inline-flex px-8 py-3 bg-gradient-to-r from-teal-500 to-orange-500 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-teal-500/50 transition-all duration-300 hover:scale-105 items-center justify-center gap-2"
              >
                Support This Cause
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">
            Event Gallery
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-teal-600/20 to-orange-600/20 backdrop-blur-lg border border-white/10 rounded-3xl p-10 md:p-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Make an Impact?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Join our next fundraiser and be part of something bigger.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/donations"
                className="px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-teal-500/50 transition-all duration-300 hover:scale-105"
              >
                Donate Now
              </Link>
              <a
                href="mailto:sportsforwardfoundation@gmail.com"
                className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white font-semibold hover:bg-white/20 transition-all duration-300"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FundraisersPage;
