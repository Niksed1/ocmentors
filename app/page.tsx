"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import subjectsData from "@/data/subjects.json";

interface Subject {
  id: string;
  name: string;
  icon: string;
}

export default function Home() {
  const subjects = subjectsData as Subject[];

  // Circular progress component
  const CircularProgress = ({ percentage }: { percentage: number }) => {
    const radius = 35;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;

    return (
      <div className="relative w-20 h-20">
        <svg className="transform -rotate-90 w-20 h-20">
          <circle
            cx="40"
            cy="40"
            r={radius}
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth="8"
            fill="none"
          />
          <circle
            cx="40"
            cy="40"
            r={radius}
            stroke="#4169E1"
            strokeWidth="8"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            className="transition-all duration-500"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white font-bold text-lg">{percentage}%</span>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#1A1D29' }}>
      <Navbar />

      {/* Main Content */}
      <main className="flex-1">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {/* Header Section with Greeting */}
          <div className="mb-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-3">
              Hi, Daniyal 👋
            </h1>
            <p className="text-lg sm:text-xl text-white/70 mb-6">
              You have Chemistry with Debra in 2 hours.
            </p>
            
            {/* CTA Button */}
            <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-xl hover:from-blue-500 hover:to-blue-400 transition-all duration-200 shadow-lg hover:shadow-xl">
              Start Today's Learning Plan
            </button>
          </div>

          {/* Today's Plan Card */}
          <div className="bg-white/10 rounded-xl p-6 mb-8 border border-white/20">
            <h2 className="text-xl font-semibold text-white mb-4">Today's Plan</h2>
            <div className="flex items-center gap-6">
              <CircularProgress percentage={80} />
              <div className="flex-1">
                <p className="text-white font-medium mb-1">80% Complete</p>
                <p className="text-white/70 text-sm mb-1">Next task:</p>
                <p className="text-white font-medium">Finish Math Homework (2 min)</p>
              </div>
            </div>
          </div>

          {/* Choose a Subject Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-6">Choose a subject</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
              {subjects.map((subject) => (
                <Link
                  key={subject.id}
                  href={`/tutors/${subject.id}`}
                  className="flex flex-col items-center gap-3 group cursor-pointer"
                >
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg border-2 border-white/30 flex items-center justify-center transition-colors group-hover:border-primary-green group-hover:bg-primary-green/10">
                    <Image
                      src={subject.icon}
                      alt={subject.name}
                      width={48}
                      height={48}
                      className="w-10 h-10 sm:w-12 sm:h-12"
                    />
                  </div>
                  <span className="text-sm text-white/70 group-hover:text-white transition-colors text-center">
                    {subject.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Recommended Resources Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-6">Recommended Resources</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* YouTube Video 1 - Chemistry */}
              <div className="bg-white/10 rounded-lg overflow-hidden border border-white/20 hover:border-primary-green/50 transition-all">
                <div className="aspect-video bg-white/5">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/bka20Q9TN6M?si=h5ire5jHUsAZPauD"
                    title="Chemistry Tutorial"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-4">
                  <h3 className="text-white font-medium mb-1">Introduction to Chemistry</h3>
                  <p className="text-white/60 text-sm">Khan Academy</p>
                </div>
              </div>

              {/* YouTube Video 2 - Math */}
              <div className="bg-white/10 rounded-lg overflow-hidden border border-white/20 hover:border-primary-green/50 transition-all">
                <div className="aspect-video bg-white/5">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/NybHckSEQBI"
                    title="Algebra Basics"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-4">
                  <h3 className="text-white font-medium mb-1">Algebra Basics</h3>
                  <p className="text-white/60 text-sm">Khan Academy</p>
                </div>
              </div>

              {/* YouTube Video 3 - Physics */}
              <div className="bg-white/10 rounded-lg overflow-hidden border border-white/20 hover:border-primary-green/50 transition-all">
                <div className="aspect-video bg-white/5">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/b1t41Q3xRM8?si=c4eILwTiN3KI_E9Z"
                    title="Physics Fundamentals"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-4">
                  <h3 className="text-white font-medium mb-1">Physics Fundamentals</h3>
                  <p className="text-white/60 text-sm">Crash Course</p>
                </div>
              </div>

              {/* YouTube Video 4 - Writing */}
              <div className="bg-white/10 rounded-lg overflow-hidden border border-white/20 hover:border-primary-green/50 transition-all">
                <div className="aspect-video bg-white/5">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/liyFKUFCQno?si=4tzuoL61o29VVg3G"
                    title="Essay Writing Tips"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-4">
                  <h3 className="text-white font-medium mb-1">Essay Writing Tips</h3>
                  <p className="text-white/60 text-sm">TED-Ed</p>
                </div>
              </div>

              {/* YouTube Video 5 - Biology */}
              <div className="bg-white/10 rounded-lg overflow-hidden border border-white/20 hover:border-primary-green/50 transition-all">
                <div className="aspect-video bg-white/5">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/8IlzKri08kk"
                    title="Biology Basics"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-4">
                  <h3 className="text-white font-medium mb-1">Introduction to Cells</h3>
                  <p className="text-white/60 text-sm">Amoeba Sisters</p>
                </div>
              </div>

              {/* YouTube Video 6 - Study Tips */}
              <div className="bg-white/10 rounded-lg overflow-hidden border border-white/20 hover:border-primary-green/50 transition-all">
                <div className="aspect-video bg-white/5">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/TjPFZaMe2yw?si=wxnpfDJLZjZ_sMnD"
                    title="Study Techniques"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-4">
                  <h3 className="text-white font-medium mb-1">Effective Study Techniques</h3>
                  <p className="text-white/60 text-sm">Ali Abdaal</p>
                </div>
              </div>
            </div>
          </div>

          {/* Upcoming Sessions Section */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-white">Upcoming Sessions</h2>
              <Link href="/book-a-session" className="text-primary-green hover:text-accent-green transition-colors text-sm font-medium">
                View All
              </Link>
            </div>
            <div className="bg-white/10 rounded-lg p-6 border border-white/20">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-green/20 flex items-center justify-center">
                  <span className="text-primary-green font-bold text-lg">D</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-medium">Chemistry with Debra</h3>
                  <p className="text-white/60 text-sm">Today at 3:00 PM</p>
                </div>
                <button className="px-4 py-2 bg-primary-green/20 text-primary-green rounded-lg hover:bg-primary-green/30 transition-colors text-sm font-medium">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
