import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function JoinAsMentor() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      {/* Main Content */}
      <main className="flex-1">
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-dark-purple mb-4">
              Join as Mentor
            </h1>
            <p className="text-xl text-dark-purple/70">
              Help students grow and thrive in STEM
            </p>
          </div>

          {/* Benefits Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-dark-purple mb-6 text-center">
              Why Become a Mentor?
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-light-gray/50 rounded-lg p-6 border-l-4 border-primary-green">
                <h3 className="text-xl font-semibold text-dark-purple mb-3">
                  Make a Difference
                </h3>
                <p className="text-dark-purple/80">
                  Guide students on their learning journey and help them achieve their academic goals.
                </p>
              </div>
              <div className="bg-light-gray/50 rounded-lg p-6 border-l-4 border-primary-green">
                <h3 className="text-xl font-semibold text-dark-purple mb-3">
                  Flexible Schedule
                </h3>
                <p className="text-dark-purple/80">
                  Work on your own time and set your availability to fit your schedule.
                </p>
              </div>
              <div className="bg-light-gray/50 rounded-lg p-6 border-l-4 border-primary-green">
                <h3 className="text-xl font-semibold text-dark-purple mb-3">
                  Competitive Compensation
                </h3>
                <p className="text-dark-purple/80">
                  Earn while sharing your knowledge and expertise with motivated students.
                </p>
              </div>
              <div className="bg-light-gray/50 rounded-lg p-6 border-l-4 border-primary-green">
                <h3 className="text-xl font-semibold text-dark-purple mb-3">
                  Professional Growth
                </h3>
                <p className="text-dark-purple/80">
                  Develop your teaching skills and build your reputation as an expert mentor.
                </p>
              </div>
            </div>
          </div>

          {/* Requirements Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-dark-purple mb-6 text-center">
              What We're Looking For
            </h2>
            <div className="bg-light-gray/30 rounded-lg p-6 sm:p-8">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-green text-white flex items-center justify-center text-sm font-bold mt-0.5">
                    ✓
                  </div>
                  <p className="text-dark-purple/80">Strong expertise in STEM subjects (Math, Science, Engineering, Technology)</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-green text-white flex items-center justify-center text-sm font-bold mt-0.5">
                    ✓
                  </div>
                  <p className="text-dark-purple/80">Excellent communication and teaching skills</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-green text-white flex items-center justify-center text-sm font-bold mt-0.5">
                    ✓
                  </div>
                  <p className="text-dark-purple/80">Patience and ability to guide students step-by-step</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-green text-white flex items-center justify-center text-sm font-bold mt-0.5">
                    ✓
                  </div>
                  <p className="text-dark-purple/80">Commitment to helping students learn and grow independently</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-green text-white flex items-center justify-center text-sm font-bold mt-0.5">
                    ✓
                  </div>
                  <p className="text-dark-purple/80">Reliable internet connection and suitable environment for online sessions</p>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-primary-green/10 rounded-lg p-8 border-2 border-primary-green/20">
            <h2 className="text-2xl font-semibold text-dark-purple mb-4">
              Ready to Make an Impact?
            </h2>
            <p className="text-dark-purple/80 mb-6">
              Join our team of dedicated mentors and help shape the next generation of STEM leaders.
            </p>
            <a
              href="https://linktr.ee/ocmentors"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full text-lg font-medium bg-primary-green text-white hover:bg-accent-green transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-green focus:ring-offset-2"
            >
              Apply Now
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}


