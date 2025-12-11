import React, { useState, useEffect } from 'react';
import { Send, CheckCircle, AlertCircle, FileText, User, Mail, MessageSquare } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const SubmitProjectPage = () => {
  useEffect(() => {
      document.title = 'Submit Project - Sports Forward';
    }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    details: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.details.trim()) newErrors.details = 'Project details are required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      // Create mailto link with form data
      const mailtoLink = `mailto:sportsforwardfoundation@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nProject Details:\n${formData.details}`)}`;
      window.location.href = mailtoLink;
      
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', details: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } else {
      setErrors(newErrors);
    }
  };

  const eligibilityCriteria = [
    { icon: '🏫', title: 'Schools & Educational Institutions', description: 'Public or private schools in underserved areas' },
    { icon: '🏘️', title: 'Community Organizations', description: 'Non-profits working with underprivileged youth' },
    { icon: '⚽', title: 'Sports Facilities', description: 'Projects focused on sports equipment or facility development' },
    { icon: '📍', title: 'Location', description: 'Based in India, particularly rural or underserved areas' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900">
      <Navigation />
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-600/20 to-orange-600/20" />
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="mb-6">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
              <FileText className="w-5 h-5 text-teal-400" />
              <span className="text-white font-semibold">Request Funding</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-teal-300 via-white to-orange-300 bg-clip-text text-transparent">
            Submit Your Project
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            If you are seeking funds to establish or improve sports facilities or equipment in your schools or community, you may be eligible to receive funding from Sports Forward.
          </p>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Who Can Apply?
            </h2>
            <p className="text-xl text-gray-400">
              We support organizations and communities committed to youth development through sports
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {eligibilityCriteria.map((criteria, idx) => (
              <div
                key={idx}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 text-center"
              >
                <div className="text-6xl mb-4">{criteria.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{criteria.title}</h3>
                <p className="text-gray-400 text-sm">{criteria.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-teal-600/20 to-orange-600/20 backdrop-blur-lg border border-white/10 rounded-3xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Project Request Form
              </h2>
              <p className="text-gray-300">
                Please complete and submit the form below and we will get back to you soon
              </p>
            </div>

            {submitted && (
              <div className="mb-8 bg-green-500/20 border border-green-500/50 rounded-2xl p-6 flex items-center gap-4">
                <CheckCircle className="w-8 h-8 text-green-400 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-bold text-green-300 mb-1">Thanks for submitting!</h3>
                  <p className="text-green-200 text-sm">We'll review your project and get back to you soon.</p>
                </div>
              </div>
            )}

            <div className="space-y-6">
              {/* Name Field */}
              <div>
                <label className="block text-white font-semibold mb-2">
                  Your Name *
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full pl-12 pr-4 py-4 bg-white/10 border ${
                      errors.name ? 'border-red-500' : 'border-white/20'
                    } rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-teal-400 transition-colors`}
                    placeholder="Enter your full name"
                  />
                </div>
                {errors.name && (
                  <p className="mt-2 text-red-400 text-sm flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-white font-semibold mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full pl-12 pr-4 py-4 bg-white/10 border ${
                      errors.email ? 'border-red-500' : 'border-white/20'
                    } rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-teal-400 transition-colors`}
                    placeholder="your.email@example.com"
                  />
                </div>
                {errors.email && (
                  <p className="mt-2 text-red-400 text-sm flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Subject Field */}
              <div>
                <label className="block text-white font-semibold mb-2">
                  Project Subject *
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full pl-12 pr-4 py-4 bg-white/10 border ${
                      errors.subject ? 'border-red-500' : 'border-white/20'
                    } rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-teal-400 transition-colors`}
                    placeholder="E.g., Basketball Court for XYZ School"
                  />
                </div>
                {errors.subject && (
                  <p className="mt-2 text-red-400 text-sm flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.subject}
                  </p>
                )}
              </div>

              {/* Details Field */}
              <div>
                <label className="block text-white font-semibold mb-2">
                  Project Details *
                </label>
                <textarea
                  name="details"
                  value={formData.details}
                  onChange={handleChange}
                  rows={8}
                  className={`w-full px-4 py-4 bg-white/10 border ${
                    errors.details ? 'border-red-500' : 'border-white/20'
                  } rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-teal-400 transition-colors resize-none`}
                  placeholder="Please describe:&#10;- Location and community details&#10;- Current situation and needs&#10;- Proposed sports project/equipment&#10;- Expected number of beneficiaries&#10;- Timeline and budget estimate&#10;- Any other relevant information"
                />
                {errors.details && (
                  <p className="mt-2 text-red-400 text-sm flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.details}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                className="w-full py-4 bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl text-white font-bold text-lg shadow-xl hover:shadow-teal-500/50 transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Submit Project Request
              </button>

              <p className="text-center text-gray-400 text-sm">
                * All fields are required
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-20 px-6 bg-gradient-to-r from-teal-600/10 to-orange-600/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              What Happens Next?
            </h2>
            <p className="text-xl text-gray-400">
              Our review process
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '1', icon: '📝', title: 'Submit Request', description: 'Fill out the form with your project details' },
              { step: '2', icon: '🔍', title: 'Review', description: 'Our team evaluates your submission' },
              { step: '3', icon: '💬', title: 'Discussion', description: 'We may reach out for more information' },
              { step: '4', icon: '✅', title: 'Decision', description: 'You receive our funding decision' }
            ].map((item, idx) => (
              <div
                key={idx}
                className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 text-center hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-teal-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl border-4 border-slate-900">
                  {item.step}
                </div>
                <div className="text-6xl mb-4 mt-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-teal-600/20 to-orange-600/20 backdrop-blur-lg border border-white/10 rounded-3xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Have Questions?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Feel free to reach out to us directly
            </p>
            <a
              href="mailto:sportsforwardfoundation@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full text-white font-semibold text-lg shadow-xl hover:shadow-teal-500/50 transition-all duration-300 hover:scale-105"
            >
              <Mail className="w-5 h-5" />
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default SubmitProjectPage;