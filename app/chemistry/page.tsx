import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Chemistry() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#1A1D29' }}>
      <Navbar />

      {/* Main Content */}
      <main className="flex-1">
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Chemistry
            </h1>
            <p className="text-xl text-white/70">
              Discover the fascinating world of chemistry
            </p>
          </div>

          {/* Chemistry Facts */}
          <div className="space-y-8">
            {/* Fact 1 */}
            <div className="bg-white/10 rounded-lg p-6 sm:p-8 border-l-4 border-primary-green">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-green text-white flex items-center justify-center text-xl font-bold">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-white mb-3">
                    Water is the Universal Solvent
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                    Water is often called the "universal solvent" because it can dissolve more substances than any other liquid. This property makes water essential for life and many chemical reactions.
                  </p>
                </div>
              </div>
            </div>

            {/* Fact 2 */}
            <div className="bg-white/10 rounded-lg p-6 sm:p-8 border-l-4 border-primary-green">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-green text-white flex items-center justify-center text-xl font-bold">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-white mb-3">
                    The Periodic Table Has 118 Elements
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                    The periodic table organizes all known chemical elements based on their atomic number, electron configuration, and recurring chemical properties. Currently, there are 118 confirmed elements.
                  </p>
                </div>
              </div>
            </div>

            {/* Fact 3 */}
            <div className="bg-white/10 rounded-lg p-6 sm:p-8 border-l-4 border-accent-green">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent-green text-white flex items-center justify-center text-xl font-bold">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-white mb-3">
                    Chemical Reactions Are Everywhere
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                    From the food we digest to the air we breathe, chemical reactions happen constantly in our daily lives. Photosynthesis, combustion, and even baking a cake all involve chemical reactions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}


