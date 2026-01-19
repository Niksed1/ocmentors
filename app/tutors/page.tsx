"use client";

import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import tutorsData from "@/data/tutors.json";

interface Tutor {
  id: string;
  name: string;
  subject: string;
  subjectName: string;
  rating: number;
  reviews: number;
  price: number;
  image: string;
  bio: string;
  availability: string;
  calendlyLink: string;
  specializations: string[];
}

export default function TutorsPage() {
  const tutors = tutorsData as Tutor[];

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#0F172A' }}>
      <Navbar />

      {/* Main Content */}
      <main className="flex-1">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Header Section */}
          <div className="mb-12">
            <Link 
              href="/"
              className="inline-flex items-center text-white/70 hover:text-white mb-6 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Home
            </Link>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              All Tutors
            </h1>
            <p className="text-xl text-white/70">
              Choose from {tutors.length} experienced tutors across all subjects
            </p>
          </div>

          {/* Tutors Grid */}
          {tutors.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tutors.map((tutor) => (
                <div
                  key={tutor.id}
                  className="bg-white/10 rounded-lg p-6 border border-white/20 hover:border-primary-green/50 transition-all hover:bg-white/15"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <img
                      src={tutor.image}
                      alt={tutor.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-1">
                        {tutor.name}
                      </h3>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-1 bg-primary-green/20 text-primary-green text-xs rounded">
                          {tutor.subjectName}
                        </span>
                        <div className="flex items-center">
                          <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <span className="text-white font-medium ml-1">{tutor.rating}</span>
                        </div>
                        <span className="text-white/60 text-sm">({tutor.reviews} reviews)</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-white/80 mb-4 text-sm leading-relaxed">
                    {tutor.bio}
                  </p>

                  <div className="mb-4">
                    <p className="text-white/60 text-xs mb-2">Specializations:</p>
                    <div className="flex flex-wrap gap-2">
                      {tutor.specializations.slice(0, 3).map((spec, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-primary-green/20 text-primary-green text-xs rounded"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-white/20">
                    <div>
                      <p className="text-white/60 text-sm">Starting at</p>
                      <p className="text-2xl font-bold text-white">
                        ${tutor.price}<span className="text-sm font-normal text-white/70">/hr</span>
                      </p>
                    </div>
                    <a
                      href={tutor.calendlyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2.5 bg-primary-green text-white rounded-lg hover:bg-accent-green transition-colors font-medium text-base inline-block text-center"
                    >
                      Book Session
                    </a>
                  </div>

                  <p className="text-primary-green text-sm mt-3 text-center">
                    {tutor.availability}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-white/70 text-xl mb-4">
                No tutors available yet.
              </p>
              <Link
                href="/"
                className="text-primary-green hover:text-accent-green transition-colors"
              >
                Return to home
              </Link>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
