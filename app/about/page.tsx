import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#0F172A' }}>
      <Navbar />

      {/* Main Content */}
      <main className="flex-1">
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              About OC Stem Tutors
            </h1>
            <p className="text-xl text-white/70">
              Tired of Tutors who don't help you grow?
            </p>
          </div>

          {/* OC Mentors Introduction */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-primary-green mb-4 text-center">
              OC Mentors
            </h2>
            <p className="text-xl text-white/80 text-center mb-8">
              It is everything you can think of
            </p>
            <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
              <div className="flex items-start gap-3 p-4 bg-white/10 rounded-lg">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-green text-white flex items-center justify-center text-sm font-bold mt-0.5">
                  ✓
                </div>
                <p className="text-white/80">1 on 1 specialized tutoring</p>
              </div>
              <div className="flex items-start gap-3 p-4 bg-white/10 rounded-lg">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-green text-white flex items-center justify-center text-sm font-bold mt-0.5">
                  ✓
                </div>
                <p className="text-white/80">Weekly sessions (3-4x)</p>
              </div>
              <div className="flex items-start gap-3 p-4 bg-white/10 rounded-lg">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-green text-white flex items-center justify-center text-sm font-bold mt-0.5">
                  ✓
                </div>
                <p className="text-white/80">Engaging study guides</p>
              </div>
              <div className="flex items-start gap-3 p-4 bg-white/10 rounded-lg">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-green text-white flex items-center justify-center text-sm font-bold mt-0.5">
                  ✓
                </div>
                <p className="text-white/80">Recorded course videos that are tailored to help you with your classes</p>
              </div>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="mb-12">
            <p className="text-lg text-white/80 text-center mb-8">
              Here at OC Stem Tutors, we use <span className="font-semibold text-primary-green">THREE SPECIFIC METHODS</span> to help your student grow and thrive:
            </p>
          </div>

          {/* Three Methods */}
          <div className="space-y-8 mb-16">
            {/* Method 1 */}
            <div className="bg-white/10 rounded-lg p-6 sm:p-8 border-l-4 border-primary-green">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-green text-white flex items-center justify-center text-xl font-bold">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-white mb-3">
                    Personalized Learning Plans
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                    We assess each student's unique strengths and areas for improvement, creating a tailored roadmap to ensure consistent progress and confidence.
                  </p>
                </div>
              </div>
            </div>

            {/* Method 2 */}
            <div className="bg-white/10 rounded-lg p-6 sm:p-8 border-l-4 border-primary-green">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-green text-white flex items-center justify-center text-xl font-bold">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-white mb-3">
                    Hands-on Learning
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                    By integrating real-world applications and interactive activities, we make STEM fun and engaging, helping students grasp complex concepts through practical experience.
                  </p>
                </div>
              </div>
            </div>

            {/* Method 3 */}
            <div className="bg-white/10 rounded-lg p-6 sm:p-8 border-l-4 border-accent-green">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent-green text-white flex items-center justify-center text-xl font-bold">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-white mb-3">
                    Our Secret Formula
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                    Most importantly, we don't do all the work for our students, we guide them step by step A to Z on how to achieve success in their subject.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Closing Statement */}
          <div className="text-center bg-primary-green/10 rounded-lg p-8 border-2 border-primary-green/20">
            <p className="text-2xl font-semibold text-white">
              At OC Stem Tutors, we don't just teach; we inspire a lifelong love for STEM!
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

