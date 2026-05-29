import Reveal from "../components/Reveal";
import Navbar from "../components/Navbar";

export default function PortfolioPage(): JSX.Element {
  return (
    <main className="min-h-screen bg-[#1a1b1e] dark:bg-[#1a1b1e]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-blue-950/20 to-emerald-950/20 dark:from-blue-950/20 dark:to-emerald-950/20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-emerald-500/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <Reveal>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-center mb-6 leading-tight bg-gradient-to-r from-emerald-500 to-blue-600 bg-clip-text text-transparent drop-shadow-lg">
              Our Portfolio Companies
            </h1>
          </Reveal>
          <Reveal delayMs={120}>
            <p className="text-lg sm:text-xl md:text-2xl text-center text-gray-300 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Discover the innovative companies we're backing to build Africa's
              digital future. Our portfolio represents the best of African
              entrepreneurship and innovation.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Portfolio Companies */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#242629] dark:bg-[#242629]">
        <div className="container mx-auto px-4">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white dark:text-white mb-6">
              Featured Portfolio Companies
            </h2>
          </Reveal>
          <Reveal delayMs={120}>
            <p className="text-center text-gray-300 dark:text-gray-300 text-base sm:text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed mb-12 sm:mb-16 lg:mb-20">
              Meet the innovative companies that are transforming Africa's
              digital landscape and creating lasting value for millions of
              people.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 mt-12 sm:mt-16 lg:mt-20">
            <div className="space-y-6 sm:space-y-8 lg:space-y-10">
              {/* Card 1 - Fintech & Banking (Bottom Layer) */}
              <Reveal delayMs={240}>
                <div className="bg-[#1e293b] dark:bg-[#1e293b] border border-slate-600 dark:border-slate-600 rounded-3xl p-6 sm:p-8 lg:p-10 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-emerald-500 dark:hover:border-emerald-500 cursor-pointer group relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="flex items-center gap-4 sm:gap-6 mb-6">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-2xl flex items-center justify-center text-white font-bold text-lg sm:text-xl lg:text-2xl shadow-lg transition-transform duration-300 group-hover:scale-110">
                      FB
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white dark:text-white transition-colors duration-300 group-hover:text-emerald-500">
                        FinFlow & BankCore
                      </h3>
                      <div className="text-emerald-400 text-xs sm:text-sm font-semibold uppercase tracking-wide">
                        Fintech & Banking Infrastructure
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300 dark:text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed">
                    Revolutionizing Africa's financial services through
                    blockchain payments, core banking systems, and regulatory
                    compliance solutions. Serving 50+ financial institutions and
                    millions of users across the continent.
                  </p>
                </div>
              </Reveal>

              {/* Card 2 - Education (Middle Layer) */}
              <Reveal delayMs={360}>
                <div className="bg-[#1e293b] dark:bg-[#1e293b] border border-slate-600 dark:border-slate-600 rounded-3xl p-6 sm:p-8 lg:p-10 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-blue-500 dark:hover:border-blue-500 cursor-pointer group relative overflow-hidden ml-4 sm:ml-8 lg:ml-12">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="flex items-center gap-4 sm:gap-6 mb-6">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-blue-600 to-emerald-500 rounded-2xl flex items-center justify-center text-white font-bold text-lg sm:text-xl lg:text-2xl shadow-lg transition-transform duration-300 group-hover:scale-110">
                      E
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white dark:text-white transition-colors duration-300 group-hover:text-blue-500">
                        EduTech Pro
                      </h3>
                      <div className="text-blue-400 text-xs sm:text-sm font-semibold uppercase tracking-wide">
                        Education & Learning
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300 dark:text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed">
                    Building Africa's largest online learning platform,
                    providing access to quality education for over 2 million
                    students across the continent.
                  </p>
                </div>
              </Reveal>

              {/* Card 3 - Energy (Top Layer) */}
              <Reveal delayMs={480}>
                <div className="bg-[#1e293b] dark:bg-[#1e293b] border border-slate-600 dark:border-slate-600 rounded-3xl p-6 sm:p-8 lg:p-10 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-emerald-500 dark:hover:border-emerald-500 cursor-pointer group relative overflow-hidden ml-8 sm:ml-16 lg:ml-20">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="flex items-center gap-4 sm:gap-6 mb-6">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-2xl flex items-center justify-center text-white font-bold text-lg sm:text-xl lg:text-2xl shadow-lg transition-transform duration-300 group-hover:scale-110">
                      P
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white dark:text-white transition-colors duration-300 group-hover:text-emerald-500">
                        PowerGrid
                      </h3>
                      <div className="text-emerald-400 text-xs sm:text-sm font-semibold uppercase tracking-wide">
                        Energy & Infrastructure
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300 dark:text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed">
                    Developing smart grid solutions for renewable energy
                    distribution, helping African cities transition to
                    sustainable energy sources.
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Right Column - Marketing Message */}
            <div className="flex flex-col justify-center items-start lg:items-start text-center lg:text-left">
              {/* Floating Elements */}
              <div className="hidden lg:block relative">
                <div className="w-2 h-2 bg-blue-500 rounded-full opacity-60 animate-bounce absolute top-8 right-16"></div>
                <div
                  className="w-2 h-2 bg-emerald-500 rounded-full opacity-60 animate-bounce absolute top-16 right-8"
                  style={{ animationDelay: "2s" }}
                ></div>
                <div
                  className="w-2 h-2 bg-blue-500 rounded-full opacity-60 animate-bounce absolute top-24 right-20"
                  style={{ animationDelay: "4s" }}
                ></div>
              </div>

              <Reveal delayMs={600}>
                <div className="bg-[#1e293b] dark:bg-[#1e293b] border border-slate-600 dark:border-slate-600 rounded-3xl p-8 sm:p-10 lg:p-12 backdrop-blur-20 shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-emerald-500 opacity-80"></div>
                  <div className="relative z-10">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white dark:text-white mb-6 sm:mb-8 leading-tight">
                      Targeted engagement at scale
                    </h3>
                    <p className="text-gray-300 dark:text-gray-300 text-base sm:text-lg lg:text-xl leading-relaxed mb-8 sm:mb-10 max-w-lg">
                      With the help of our portfolio companies, now you can
                      access financial services, education, and energy solutions
                      from every corner of Africa. Simply connect with our
                      companies and enjoy the widest variety of functions and
                      features.
                    </p>
                    <a
                      href="/contact"
                      className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-emerald-500 text-white font-semibold rounded-2xl hover:from-blue-700 hover:to-emerald-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                    >
                      Learn more
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Stages */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#1a1b1e] dark:bg-[#1a1b1e]">
        <div className="container mx-auto px-4">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white dark:text-white mb-6">
              Company Stages
            </h2>
          </Reveal>
          <Reveal delayMs={120}>
            <p className="text-center text-gray-300 dark:text-gray-300 text-base sm:text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed mb-12 sm:mb-16 lg:mb-20">
              We invest across different stages of company development,
              providing the right level of support and guidance for each growth
              phase.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mt-12 sm:mt-16 lg:mt-20">
            <Reveal delayMs={240}>
              <div className="bg-[#1e293b] dark:bg-[#1e293b] border border-slate-600 dark:border-slate-600 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-emerald-500 dark:hover:border-emerald-500 text-center group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="text-4xl sm:text-5xl mb-5 filter drop-shadow-lg transition-transform duration-300 group-hover:scale-110 text-emerald-500">
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mx-auto"
                    >
                      <path
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-semibold text-white dark:text-white mb-4 relative z-10">
                    Seed Stage
                  </h4>
                  <p className="text-gray-300 dark:text-gray-300 text-base leading-relaxed mb-6 relative z-10">
                    Early-stage companies with innovative ideas and strong
                    founding teams. We provide initial support and strategic
                    guidance to help validate concepts.
                  </p>
                  <div className="flex justify-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-900/30 text-emerald-300 rounded-full text-sm font-medium border border-emerald-700 transition-all duration-300 hover:-translate-y-1">
                      <span>🎯</span>
                      <span>Product Validation</span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delayMs={360}>
              <div className="bg-[#1e293b] dark:bg-[#1e293b] border border-slate-600 dark:border-slate-600 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-blue-500 dark:hover:border-blue-500 text-center group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="text-4xl sm:text-5xl mb-5 filter drop-shadow-lg transition-transform duration-300 group-hover:scale-110 text-blue-500">
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mx-auto"
                    >
                      <path
                        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-semibold text-white dark:text-white mb-4 relative z-10">
                    Series A
                  </h4>
                  <p className="text-gray-300 dark:text-gray-300 text-base leading-relaxed mb-6 relative z-10">
                    Companies with proven product-market fit and early traction.
                    We help scale operations and expand into new markets.
                  </p>
                  <div className="flex justify-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-900/30 text-blue-300 rounded-full text-sm font-medium border border-blue-700 transition-all duration-300 hover:-translate-y-1">
                      <span>🚀</span>
                      <span>Market Expansion</span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delayMs={480}>
              <div className="bg-[#1e293b] dark:bg-[#1e293b] border border-slate-600 dark:border-slate-600 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-emerald-500 dark:hover:border-emerald-500 text-center group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="text-4xl sm:text-5xl mb-5 filter drop-shadow-lg transition-transform duration-300 group-hover:scale-110 text-emerald-500">
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mx-auto"
                    >
                      <path
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-semibold text-white dark:text-white mb-4 relative z-10">
                    Series B+
                  </h4>
                  <p className="text-gray-300 dark:text-gray-300 text-base leading-relaxed mb-6 relative z-10">
                    Established companies with strong growth and market
                    leadership. We support expansion and help prepare for
                    potential exits.
                  </p>
                  <div className="flex justify-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-900/30 text-emerald-300 rounded-full text-sm font-medium border border-emerald-700 transition-all duration-300 hover:-translate-y-1">
                      <span>📈</span>
                      <span>Scale & Exit</span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#242629] dark:bg-[#242629] text-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Reveal>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white dark:text-white mb-6">
                Join Our Portfolio
              </h2>
            </Reveal>
            <Reveal delayMs={120}>
              <p className="text-gray-300 dark:text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed mb-8 sm:mb-10">
                Are you building the next great African company? We're always
                looking for innovative founders and teams to partner with.
              </p>
            </Reveal>
            <Reveal delayMs={240}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-blue-600 text-white font-semibold rounded-full hover:from-emerald-600 hover:to-blue-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  Pitch Your Company 🚀
                </a>
                <a
                  href="/thesis"
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#1e293b] dark:bg-[#1e293b] text-gray-200 dark:text-gray-200 font-semibold rounded-full border-2 border-slate-600 dark:border-slate-600 hover:bg-slate-600 dark:hover:bg-slate-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  Learn Our Thesis 📚
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
