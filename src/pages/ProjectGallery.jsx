import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Download, Share2, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ProjectGalleryPage = ({ projectData }) => {

  useEffect(() => {
    document.title = 'Project Gallery - Sports Forward';
  }, []);

  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // This would be populated with actual project images
  const galleryImages = projectData?.images || [];

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setSelectedImage(galleryImages[index]);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    const newIndex = direction === 'next'
      ? (currentIndex + 1) % galleryImages.length
      : (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setCurrentIndex(newIndex);
    setSelectedImage(galleryImages[newIndex]);
  };

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
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Projects
          </Link>
          
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-teal-300 via-white to-orange-300 bg-clip-text text-transparent">
              Project Gallery
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A visual journey of our project from start to finish
            </p>
          </div>
        </div>
      </section>

      {/* Project Info Card */}
      <section className="px-6 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-teal-600/20 to-orange-600/20 backdrop-blur-lg border border-white/10 rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-2">📍</div>
                <h3 className="text-white font-bold mb-1">Location</h3>
                <p className="text-gray-300">{projectData?.location || 'Project Location'}</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">📅</div>
                <h3 className="text-white font-bold mb-1">Completed</h3>
                <p className="text-gray-300">{projectData?.year || 'Project Date'}</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">👥</div>
                <h3 className="text-white font-bold mb-1">Impact</h3>
                <p className="text-gray-300">{projectData?.impact || 'Children Benefited'}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryImages.map((image, idx) => (
              <div
                key={image.id}
                onClick={() => openLightbox(idx)}
                className="group relative bg-gradient-to-br from-teal-600/20 to-orange-600/20 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden cursor-pointer hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-teal-500/20"
              >
                {/* Image Placeholder */}
                <div className="aspect-square bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={image.url} 
                      alt={image.caption || `Gallery image ${idx + 1}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div>
                    <h3 className="text-white font-bold mb-1">{image.title}</h3>
                    <p className="text-gray-300 text-sm">{image.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg flex items-center justify-center p-4">
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Navigation Buttons */}
          <button
            onClick={() => navigateImage('prev')}
            className="absolute left-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={() => navigateImage('next')}
            className="absolute right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Image Container */}
          <div className="max-w-6xl max-h-[90vh] w-full">
            {/* Large Image Placeholder */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden">
              <img 
                src={selectedImage.url}
                alt={selectedImage.caption || 'Gallery image'}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
            </div>

            {/* Image Info */}
            <div className="mt-6 text-center">
              <h2 className="text-2xl font-bold text-white mb-2">{selectedImage.caption}</h2>
              <p className="text-gray-500 text-sm mt-2">
                Image {currentIndex + 1} of {galleryImages.length}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 justify-center mt-6">
              <button className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white flex items-center gap-2 transition-all">
                <Share2 className="w-4 h-4" />
                Share
              </button>
              <button className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white flex items-center gap-2 transition-all">
                <Download className="w-4 h-4" />
                Download
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Project Description */}
      <section className="py-20 px-6 bg-gradient-to-r from-teal-600/10 to-orange-600/10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              About This Project
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                This project represents our commitment to bringing sports opportunities to underserved communities. Through the dedication of our team and the support of generous donors, we were able to transform this area into a vibrant sports facility.
              </p>
              <p>
                The journey from concept to completion involved careful planning, community engagement, and hands-on construction work. Every step of the way, we kept the needs of the children at the forefront of our decisions.
              </p>
              <p>
                Today, this facility serves as a beacon of hope and opportunity, providing a safe space for children to play, learn, and grow through sports.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-teal-600/20 to-orange-600/20 backdrop-blur-lg border border-white/10 rounded-3xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Support More Projects Like This
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Your donation can help us create more opportunities for children across India
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/donations"
                className="px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full text-white font-semibold text-lg shadow-xl hover:shadow-teal-500/50 transition-all duration-300 hover:scale-105"
              >
                Donate Now
              </Link>
              <Link
                to="/projects"
                className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white font-semibold text-lg hover:bg-white/20 transition-all duration-300"
              >
                View All Projects
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

export default ProjectGalleryPage;