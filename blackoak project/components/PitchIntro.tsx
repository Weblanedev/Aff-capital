export default function PitchIntro(): JSX.Element {
  return (
    <section className="py-20 bg-[var(--background)]">
      <div className="container mx-auto px-4">
        {/* Engaging Content Section */}
        <div className="animate-fade-in-up">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-16">
            {/* Left Column - VC Insights */}
            <div className="flex flex-col gap-8">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:border-white/20 hover:shadow-2xl backdrop-blur-sm">
                <div className="text-5xl mb-5 block text-center lg:text-left">
                  🚀
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-[var(--text)] mb-4 leading-tight text-center lg:text-left">
                  Why Venture Capital?
                </h3>
                <p className="text-sm lg:text-base text-[var(--muted)] leading-relaxed mb-5 flex-1 text-center lg:text-left">
                  Venture capital isn't just about funding—it's about building
                  the future together. We provide strategic guidance, industry
                  connections, and operational support to help founders scale
                  their vision into reality.
                </p>
                <div className="flex flex-col sm:flex-row gap-5">
                  <div className="text-center flex-1">
                    <span className="block text-2xl font-bold text-[var(--accent)] mb-2">
                      Strategic Support
                    </span>
                    <span className="text-sm text-[var(--muted)] block">
                      Beyond Capital
                    </span>
                  </div>
                  <div className="text-center flex-1">
                    <span className="block text-2xl font-bold text-[var(--accent)] mb-2">
                      Industry Network
                    </span>
                    <span className="text-sm text-[var(--muted)] block">
                      Connections & Access
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:border-white/20 hover:shadow-2xl backdrop-blur-sm">
                <div className="text-5xl mb-5 block text-center lg:text-left">
                  🌍
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-[var(--text)] mb-4 leading-tight text-center lg:text-left">
                  Access to Opportunities
                </h3>
                <p className="text-sm lg:text-base text-[var(--muted)] leading-relaxed mb-5 flex-1 text-center lg:text-left">
                  Venture capital opens doors to markets, talent, and resources
                  that would otherwise be out of reach. We help founders access
                  the African ecosystem and connect with the right partners to
                  accelerate growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-5">
                  <div className="text-center flex-1">
                    <span className="block text-2xl font-bold text-[var(--accent-2)] mb-2">
                      Market Access
                    </span>
                    <span className="text-sm text-[var(--muted)] block">
                      Regional & Global Reach
                    </span>
                  </div>
                  <div className="text-center flex-1">
                    <span className="block text-2xl font-bold text-[var(--accent-2)] mb-2">
                      Talent Network
                    </span>
                    <span className="text-sm text-[var(--muted)] block">
                      Expert Connections
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Visual Elements */}
            <div className="flex flex-col gap-10">
              <div className="relative h-80 flex items-center justify-center">
                {/* Floating Card 1 - Top Left (Innovation) - Isolated */}
                <div
                  className="absolute top-5 left-5 bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm transition-all duration-400 hover:scale-105 hover:border-white/20 z-20"
                  style={{
                    animation: "float 6s ease-in-out infinite",
                    animationDelay: "0s",
                  }}
                >
                  <div className="text-2xl mb-3 block">💡</div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-[var(--text)]">
                      Innovation
                    </h4>
                    <p className="text-sm text-[var(--muted)]">
                      Breakthrough ideas
                    </p>
                  </div>
                </div>

                {/* Floating Card 2 - Top Right (Partnership) - Overlapping Growth */}
                <div
                  className="absolute top-5 right-5 bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm transition-all duration-400 hover:scale-105 hover:border-white/20 z-30"
                  style={{
                    animation: "float 6s ease-in-out infinite",
                    animationDelay: "2s",
                  }}
                >
                  <div className="text-2xl mb-3 block">🤝</div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-[var(--text)]">
                      Partnership
                    </h4>
                    <p className="text-sm text-[var(--muted)]">
                      Long-term collaboration
                    </p>
                  </div>
                </div>

                {/* Floating Card 3 - Bottom Right (Growth) - Behind Partnership, extending further right */}
                <div
                  className="absolute top-20 right-2 bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm transition-all duration-400 hover:scale-105 hover:border-white/20 z-10"
                  style={{
                    animation: "float 6s ease-in-out infinite",
                    animationDelay: "4s",
                  }}
                >
                  <div className="text-2xl mb-3 block">📊</div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-[var(--text)]">
                      Growth
                    </h4>
                    <p className="text-sm text-[var(--muted)]">
                      Scalable solutions
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <h3 className="text-xl font-semibold mb-6 text-[var(--text)] text-center">
                  Our Investment Focus
                </h3>
                <div className="flex flex-col items-center gap-8">
                  {/* Pie Chart */}
                  <div className="relative w-48 h-48 lg:w-52 lg:h-52">
                    <div
                      className="w-full h-full rounded-full shadow-lg transition-all duration-300 hover:scale-105"
                      style={{
                        background: `conic-gradient(
                          var(--accent) 0deg 120deg,
                          var(--accent-2) 120deg 240deg,
                          #86efac 240deg 360deg
                        )`,
                      }}
                    >
                      {/* Center Text */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-white font-semibold text-sm text-center">
                          Investment
                          <br />
                          Portfolio
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Legend */}
                  <div className="flex flex-col gap-3 items-center">
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded-full bg-[var(--accent)] border-2 border-white/20"></div>
                      <span className="text-sm text-[var(--text)]">
                        Fintech & Banking
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded-full bg-[var(--accent-2)] border-2 border-white/20"></div>
                      <span className="text-sm text-[var(--text)]">
                        Education
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded-full bg-[#86efac] border-2 border-white/20"></div>
                      <span className="text-sm text-[var(--text)]">Energy</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action Section */}
          <div className="bg-gradient-to-br from-white/5 to-white/2 border border-white/10 rounded-3xl p-10 text-center backdrop-blur-sm">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-5 text-[var(--text)] bg-gradient-to-r from-[var(--text)] to-[var(--accent)] bg-clip-text text-transparent">
                Ready to Build Something Amazing?
              </h2>
              <p className="text-lg text-[var(--muted)] mb-8 leading-relaxed max-w-2xl mx-auto">
                Whether you're a founder with a vision or a partner looking to
                collaborate, we're here to help you succeed. Our team of
                experienced investors and operators is ready to support your
                journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center flex-wrap mb-8">
                <div className="flex items-center gap-3 text-[var(--text)] font-medium">
                  <span className="text-xl">⚡</span>
                  <span>Quick Response</span>
                </div>
                <div className="flex items-center gap-3 text-[var(--text)] font-medium">
                  <span className="text-xl">🔒</span>
                  <span>100% Confidential</span>
                </div>
                <div className="flex items-center gap-3 text-[var(--text)] font-medium">
                  <span className="text-xl">🎯</span>
                  <span>Strategic Guidance</span>
                </div>
              </div>
              <div className="mt-8">
                <a
                  href="/contact"
                  className="inline-block bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  Pitch Your Company
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out 0.2s both;
        }
      `}</style>
    </section>
  );
}
