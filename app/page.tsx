"use client";

import Link from "next/link";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#0F172A' }}>
      <Navbar />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section - Centered */}
        <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
              OC Mentors
            </h1>
            
            <p className="text-xl sm:text-2xl text-primary-green font-semibold mb-8">
              To Learn Is To Grow
            </p>
            
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-12 max-w-5xl mx-auto">
              Ever wondered what you could achieve, if only you had the right teacher? Welcome to the place where you'll never stop growing, no matter how much you know.
            </p>

            <Link
              href="/login"
              className="inline-block px-7 py-3 bg-primary-green text-white font-semibold rounded-xl hover:bg-accent-green transition-all duration-200 shadow-lg hover:shadow-xl text-base"
            >
              Get Started
            </Link>
          </div>
        </section>

        {/* Tired of Tutors Section - Left Aligned with Image on Right */}
        <section className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8 py-12 bg-white/5">
          <div className="w-full max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Text Content - Left */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">
                  Tired of Tutors who don't help you grow?
                </h2>
                <p className="text-lg text-white/80 mb-8">
                  Here at OC Stem Tutors, we use <span className="text-primary-green font-semibold">THREE SPECIFIC METHODS</span> to help your student grow and thrive:
                </p>
                
                <div className="space-y-6">
                  {/* Method 1 */}
                  <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary-green flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl font-bold text-white">1</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">
                          Personalized Learning Plans
                        </h3>
                        <p className="text-white/80 leading-relaxed text-sm">
                          We assess each student's unique strengths and areas for improvement, creating a tailored roadmap to ensure consistent progress and confidence.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Method 2 */}
                  <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary-green flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl font-bold text-white">2</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">
                          Hands-on Learning
                        </h3>
                        <p className="text-white/80 leading-relaxed text-sm">
                          By integrating real-world applications and interactive activities, we make STEM fun and engaging, helping students grasp complex concepts through practical experience.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Method 3 */}
                  <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary-green flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl font-bold text-white">3</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">
                          Our Secret Formula
                        </h3>
                        <p className="text-white/80 leading-relaxed text-sm">
                          Most importantly, we don't do all the work for our students, we guide them step by step A to Z on how to achieve success in their subject.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-lg text-white/80 mt-8 font-semibold">
                  At OC Stem Tutors, we don't just teach; we inspire a lifelong love for STEM!
                </p>
              </div>

              {/* Image - Right */}
              <div className="relative h-[350px] lg:h-[400px] rounded-xl overflow-hidden">
                <Image
                  src="/students-whiteboard.jpeg"
                  alt="Students collaborating around whiteboard"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover rounded-xl"
                  quality={85}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.className = "bg-white/10 rounded-xl flex items-center justify-center h-[350px] lg:h-[400px]";
                      parent.innerHTML = '<div class="text-white/50 text-center p-8"><p class="text-lg mb-2">Students at Whiteboard</p><p class="text-sm">Image: students-whiteboard.png</p></div>';
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Us Section - Right Aligned with Image on Left */}
        <section className="h-screen flex items-center px-4 sm:px-6 lg:px-8 py-8">
          <div className="w-full max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image - Left */}
              <div className="lg:order-1 order-2 relative h-[400px] lg:h-[500px] rounded-xl overflow-hidden">
                <Image
                  src="/oc-mentors-event.png"
                  alt="OC Mentors event"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-top rounded-xl"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.className = "bg-white/10 rounded-xl flex items-center justify-center h-[250px] lg:h-[300px]";
                      parent.innerHTML = '<div class="text-white/50 text-center p-8"><p class="text-lg mb-2">OC Mentors Event</p><p class="text-sm">Image: oc-mentors-event.png</p></div>';
                    }
                  }}
                />
              </div>

              {/* Text Content - Right */}
              <div className="lg:order-2 order-1">
                <h2 className="text-3xl font-bold text-white mb-8">
                  About Us
                </h2>
                
                {/* Daniyal Rauf Card */}
                <div className="bg-white/10 rounded-xl p-8 border border-white/20">
                  <div className="flex flex-col sm:flex-row gap-6 mb-6">
                    {/* Daniyal's Image */}
                    <div className="flex-shrink-0">
                      <div className="w-32 h-32 rounded-xl bg-white/10 border-2 border-primary-blue/50 flex items-center justify-center overflow-hidden">
                        <Image
                          src="/daniyal-image.jpeg"
                          alt="Daniyal Rauf"
                          width={128}
                          height={128}
                          className="w-full h-full object-cover"
                          quality={85}
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            const parent = target.parentElement;
                            if (parent) {
                              parent.innerHTML = '<span class="text-3xl font-bold text-cyan-accent">DR</span>';
                            }
                          }}
                        />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        Daniyal Rauf
                      </h3>
                      <p className="text-cyan-accent text-base mb-4 font-semibold">
                        Expert Lead Tutor
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3 text-soft-slate-gray text-sm">
                    <p className="flex items-start gap-2">
                      <span className="text-cyan-accent font-bold">•</span>
                      <span>3+ Years Tutoring Experience</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-cyan-accent font-bold">•</span>
                      <span>UCI Class of 2027 GPA 3.8+ (Deans Honor List)</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-cyan-accent font-bold">•</span>
                      <span>Vocational Intern Work with Special Needs</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-cyan-accent font-bold">•</span>
                      <span>Mathematics Tutor - Mathnasium</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-cyan-accent font-bold">•</span>
                      <span>EyeLevel Learning Center - UCI Antrepreneur Center</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section - Left Aligned with Image on Right */}
        <section className="h-screen flex items-center px-4 sm:px-6 lg:px-8 py-8 bg-white/5">
          <div className="w-full max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Text Content - Left */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">
                  OC Mentors
                </h2>
                <p className="text-lg text-white/80 mb-8">
                  It is everything you can think of
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-xl p-5 border border-white/20">
                    <h3 className="text-lg font-semibold text-white mb-2">1 on 1 Specialized Tutoring</h3>
                    <p className="text-white/70 text-sm">Personalized attention tailored to your learning style and pace.</p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-5 border border-white/20">
                    <h3 className="text-lg font-semibold text-white mb-2">Weekly Sessions (3-4x)</h3>
                    <p className="text-white/70 text-sm">Regular sessions for consistent progress and improvement.</p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-5 border border-white/20">
                    <h3 className="text-lg font-semibold text-white mb-2">Engaging Study Guides</h3>
                    <p className="text-white/70 text-sm">Comprehensive materials designed to reinforce learning.</p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-5 border border-white/20">
                    <h3 className="text-lg font-semibold text-white mb-2">Recorded Course Videos</h3>
                    <p className="text-white/70 text-sm">Tailored video content to help you with your classes.</p>
                  </div>
                </div>
              </div>

              {/* Image - Right */}
              <div className="relative h-[500px] lg:h-[400px] rounded-xl overflow-hidden">
                <Image
                  src="/students-studying.png"
                  alt="Students studying together"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-left rounded-xl"
                  style={{ transform: 'scale(1.05)', transformOrigin: 'left center' }}
                  quality={85}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.className = "bg-white/10 rounded-xl flex items-center justify-center h-[250px] lg:h-[300px]";
                      parent.innerHTML = '<div class="text-white/50 text-center p-8"><p class="text-lg mb-2">Students Studying</p><p class="text-sm">Image: students-studying.png</p></div>';
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Book A Meeting CTA Section - Centered */}
        <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Book A Meeting
            </h2>
            <p className="text-lg text-white/80 mb-4">
              Book a call with our Student Success Coach to see if you are a good fit for the program!
            </p>
            <p className="text-base text-cyan-accent font-semibold mb-8">
              (Note: Spots are VERY Limited and will close very soon!)
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book-a-session"
                className="inline-block px-7 py-3 bg-primary-green text-white font-semibold rounded-xl hover:bg-accent-green transition-all duration-200 shadow-lg hover:shadow-xl text-base"
              >
                Book a Session
              </Link>
              <Link
                href="/login"
                className="inline-block px-7 py-3 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-200 border border-white/20 text-base"
              >
                Get Started
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
