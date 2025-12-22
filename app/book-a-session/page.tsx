"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function BookASession() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // You can add your form submission logic here
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#1A1D29' }}>
      <Navbar />

      {/* Main Content */}
      <main className="flex-1">
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Book a Session
            </h1>
            <p className="text-xl text-white/70">
              Get started with personalized 1-on-1 tutoring
            </p>
          </div>

          {/* Info Section */}
          <div className="mb-12 bg-white/10 rounded-lg p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-white mb-4 text-center">
              What to Expect
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-green text-white flex items-center justify-center text-sm font-bold mt-0.5">
                  ✓
                </div>
                <p className="text-white/80">1-on-1 specialized tutoring sessions</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-green text-white flex items-center justify-center text-sm font-bold mt-0.5">
                  ✓
                </div>
                <p className="text-white/80">Personalized learning plans</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-green text-white flex items-center justify-center text-sm font-bold mt-0.5">
                  ✓
                </div>
                <p className="text-white/80">Weekly sessions (3-4x recommended)</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-green text-white flex items-center justify-center text-sm font-bold mt-0.5">
                  ✓
                </div>
                <p className="text-white/80">Engaging study guides and resources</p>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div className="bg-white/10 rounded-lg border-2 border-white/20 p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-white mb-6 text-center">
              Request a Session
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-white border border-white/30 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-green focus:border-transparent text-dark-purple"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-white border border-white/30 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-green focus:border-transparent text-dark-purple"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-white mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-white border border-white/30 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-green focus:border-transparent text-dark-purple"
                >
                  <option value="">Select a subject</option>
                  <option value="math">Mathematics</option>
                  <option value="physics">Physics</option>
                  <option value="chemistry">Chemistry</option>
                  <option value="biology">Biology</option>
                  <option value="computer-science">Computer Science</option>
                  <option value="engineering">Engineering</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                  Additional Information
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-white border border-white/30 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-green focus:border-transparent text-dark-purple"
                  placeholder="Tell us about your goals, preferred schedule, or any specific topics you'd like to focus on..."
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-full text-lg font-medium bg-primary-green text-white hover:bg-accent-green transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-green focus:ring-offset-2"
                >
                  Submit Request
                </button>
              </div>
            </form>
          </div>

          {/* Alternative CTA */}
          <div className="mt-8 text-center">
            <p className="text-white/70 mb-4">
              Or reach out directly through our Linktree
            </p>
            <a
              href="https://linktr.ee/ocmentors"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-2 rounded-full text-sm font-medium text-primary-green border-2 border-primary-green hover:bg-primary-green hover:text-white transition-all duration-200 cursor-pointer"
            >
              Visit Linktree
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}


