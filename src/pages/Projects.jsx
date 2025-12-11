import React, { useState } from 'react';
import { MapPin, Calendar, Users, ExternalLink, Filter, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      number: '01',
      title: 'Chandala Project',
      location: 'Chandala, Ghadchiroli, Maharashtra',
      status: 'Completed',
      description: 'Partnership to build a sports recreational area in a tribal village. Included volleyball court, kabbadi court, lighting, sports equipment, and area maintenance.',
      impact: 'First sports facility in the village',
      category: 'Infrastructure',
      galleryLink: '/chandala',
      fundraiserLink: 'https://www.gofundme.com/f/sports-recreation-area-in-chandala-india',
      image: '/sports-forward-web/images/projects/chandala/chandala-main.jpg'
    },
    {
      id: 2,
      number: '02',
      title: 'Hoops for Growth',
      location: 'Modern Public School, Tarikhet',
      status: 'Completed',
      description: 'First organized sports program at Modern Public School. Provided basketball equipment enabling children to pursue their passion through organized play.',
      impact: 'First sports initiative in school history',
      category: 'Equipment',
      galleryLink: '/hoops',
      image: '/sports-forward-web/images/projects/hoops/hoops-preview-1.png'
    },
    {
      id: 3,
      number: '03',
      title: 'Checkmate for Change',
      location: 'Channulal Navin Vidya Bhavan, Nagpur',
      status: 'Completed',
      description: 'Brought chess to kids in low-income families. Donated multiple chess sets, provided teacher for entire year, organized four tournaments with scholarships.',
      impact: 'Year-long chess program with tournaments',
      category: 'Equipment',
      galleryLink: '/checkmate',
      image: '/sports-forward-web/images/projects/chess/gallery/chess-1.png'
    },
    {
      id: 4,
      number: '04',
      title: 'Archery for All',
      location: 'Chak Mochanwala, Punjab',
      status: 'Completed',
      description: 'Introduced archery to kids in rural areas. Donated archery sets with essential safety equipment and target boards.',
      impact: 'First archery program in rural Punjab',
      category: 'Equipment',
      galleryLink: '/archery',
      image: '/sports-forward-web/images/projects/archery/archery-1.png'
    },
    {
      id: 5,
      number: '05',
      title: 'Fields of Opportunity',
      location: 'Uttar Pradesh',
      status: 'In Progress',
      description: 'Full set of sports equipment including soccer goalpost, soccer balls, and badminton sets to a school with no prior access.',
      impact: 'First sports equipment for the school',
      category: 'Equipment',
      galleryLink: '/field',
      image: '/sports-forward-web/images/projects/fields/gallery/fields-1.png'
    },
    {
      id: 6,
      number: '06',
      title: 'Odisha Opportunities',
      location: 'Rourkela, Odisha',
      status: 'Completed',
      description: 'Delivered variety of nets (volleyball, badminton), rackets, balls, bats, and shuttle corks to high school with no prior sports equipment access.',
      impact: 'Comprehensive sports equipment donation',
      category: 'Equipment',
      galleryLink: '/odisha',
      image: '/sports-forward-web/images/projects/odisha/odisha-1.png'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter || p.status === filter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900">
      {/* Header */}
      <Navigation />
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-600/20 to-orange-600/20" />
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-teal-300 via-white to-orange-300 bg-clip-text text-transparent">
            Our Projects
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transforming communities across India, one sports facility at a time
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="px-6 pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {['all', 'Completed', 'In Progress', 'Infrastructure', 'Equipment'].map((filterOption) => (
              <button
                key={filterOption}
                onClick={() => setFilter(filterOption)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  filter === filterOption
                    ? 'bg-gradient-to-r from-teal-500 to-teal-600 text-white shadow-lg shadow-teal-500/50'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
                }`}
              >
                {filterOption.charAt(0).toUpperCase() + filterOption.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project, idx) => (
              <div
                key={project.id}
                className="group relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-teal-500/20"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {/* Project Number Badge */}
                <div className="absolute top-6 left-6 z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-xl">
                    <span className="text-white font-bold text-xl">{project.number}</span>
                  </div>
                </div>

                {/* Status Badge */}
                <div className="absolute top-6 right-6 z-10">
                  <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                    project.status === 'Completed' 
                      ? 'bg-green-500/20 text-green-300 border border-green-500/30' 
                      : 'bg-orange-500/20 text-orange-300 border border-orange-500/30'
                  }`}>
                    {project.status}
                  </span>
                </div>

                {/* Image Placeholder */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-teal-300 transition-colors">
                    {project.title}
                  </h3>

                  <div className="flex items-center gap-2 text-gray-400 mb-4">
                    <MapPin className="w-4 h-4 text-teal-400" />
                    <span className="text-sm">{project.location}</span>
                  </div>

                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="bg-teal-500/10 border border-teal-500/30 rounded-xl p-3 mb-6">
                    <p className="text-sm text-teal-300 font-semibold">
                      💡 Impact: {project.impact}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {project.galleryLink && (
                      <Link
                        to={project.galleryLink}
                        className="flex-1 px-4 py-3 bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl text-white font-semibold text-center hover:shadow-lg hover:shadow-teal-500/50 transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        View Gallery
                        <ExternalLink className="w-4 h-4" />
                      </Link>
                    )}
                    {project.fundraiserLink && (
                      <a
                        href={project.fundraiserLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white font-semibold hover:bg-white/20 transition-all duration-300 flex items-center gap-2"
                      >
                        Fundraiser
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-teal-600/20 to-orange-600/20 backdrop-blur-lg border border-white/10 rounded-3xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Want to Make a Difference?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Help us bring sports and opportunities to more children across India
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/donations"
              className="px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full text-white font-semibold text-lg shadow-xl hover:shadow-teal-500/50 transition-all duration-300 hover:scale-105"
            >
              Donate Now
            </Link>
            <Link
              to="/request-project"
              className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white font-semibold text-lg hover:bg-white/20 transition-all duration-300"
            >
              Submit a Project
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ProjectsPage;