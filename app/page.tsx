"use client";

import Image from "next/image";
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

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      {/* Main Content */}
      <main className="flex flex-1 items-center justify-center">
        <div className="w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
          {/* Title */}
          <h2 className="text-3xl font-semibold text-dark-purple mb-12 text-center">
            Choose a subject
          </h2>

          {/* Category Cards */}
          <div className="flex flex-wrap justify-center gap-8">
            {subjects.map((subject) => (
              <button
                key={subject.id}
                className="flex flex-col items-center gap-3 group cursor-pointer"
              >
                <div className="w-24 h-24 rounded-lg border-2 border-dark-purple flex items-center justify-center transition-colors group-hover:border-primary-green group-hover:bg-primary-green/5">
                  <Image
                    src={subject.icon}
                    alt={subject.name}
                    width={48}
                    height={48}
                    className="w-12 h-12"
                  />
                </div>
                <span className="text-sm text-dark-purple/70 group-hover:text-dark-purple transition-colors">
                  {subject.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
