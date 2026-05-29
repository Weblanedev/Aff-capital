import Reveal from "../components/Reveal";
import Navbar from "../components/Navbar";
import digitalAfriImage from "../assets/digital-afri.png";

export default function SectorsPage(): JSX.Element {
  return (
    <main className="min-h-screen bg-[#1a1b1e] dark:bg-[#1a1b1e]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-blue-950/20 to-emerald-950/20 dark:from-blue-950/20 dark:to-emerald-950/20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-emerald-500/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <Reveal>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-center mb-6 leading-tight bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent drop-shadow-lg">
              Strategic Focus Sectors
            </h1>
          </Reveal>
          <Reveal delayMs={120}>
            <p className="text-lg sm:text-xl md:text-2xl text-center text-gray-300 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We focus on foundational sectors that are transforming Africa's
              digital economy. Each sector represents unique opportunities for
              innovation and sustainable growth.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Sectors Overview */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#242629] dark:bg-[#242629]">
        <div className="container mx-auto px-4">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white dark:text-white mb-6">
              Our Core Focus Areas
            </h2>
          </Reveal>
          <Reveal delayMs={120}>
            <p className="text-center text-gray-300 dark:text-gray-300 text-lg sm:text-xl max-w-4xl mx-auto leading-relaxed">
              We invest in sectors that form the backbone of Africa's digital
              infrastructure, enabling thousands of other businesses to thrive
              and innovate.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 mt-12 sm:mt-16 lg:mt-20">
            <Reveal delayMs={240}>
              <div className="bg-[#1e293b] dark:bg-[#1e293b] border border-slate-600 dark:border-slate-600 rounded-3xl p-6 sm:p-8 lg:p-10 transition-all duration-400 hover:-translate-y-3 hover:scale-105 hover:shadow-2xl hover:border-blue-500 dark:hover:border-blue-500 cursor-pointer group relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="flex items-center gap-4 sm:gap-6 mb-6">
                  <div className="text-4xl sm:text-5xl lg:text-6xl filter drop-shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                    💳
                  </div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white dark:text-white transition-colors duration-300 group-hover:text-blue-600">
                    Fintech & Payments
                  </h3>
                </div>
                <p className="text-gray-300 dark:text-gray-300 text-base sm:text-lg leading-relaxed mb-6">
                  Revolutionizing financial services through innovative payment
                  solutions, digital lending platforms, and seamless B2B
                  infrastructure.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-200 dark:text-gray-200 text-sm sm:text-base">
                      Digital Payments
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-200 dark:text-gray-200 text-sm sm:text-base">
                      Cross-border Transactions
                    </span>
                  </div>
                </div>
                <div className="text-center">
                  <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-900/30 to-emerald-900/30 dark:from-blue-900/30 dark:to-emerald-900/30 border border-blue-700 dark:border-blue-700 rounded-full text-blue-300 dark:text-blue-300 text-sm font-semibold uppercase tracking-wide transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                    1.4B Population
                  </span>
                </div>
              </div>
            </Reveal>

            <Reveal delayMs={360}>
              <div className="bg-[#1e293b] dark:bg-[#1e293b] border border-slate-600 dark:border-slate-600 rounded-3xl p-6 sm:p-8 lg:p-10 transition-all duration-400 hover:-translate-y-3 hover:scale-105 hover:shadow-2xl hover:border-blue-500 dark:hover:border-blue-500 cursor-pointer group relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="flex items-center gap-4 sm:gap-6 mb-6">
                  <div className="text-4xl sm:text-5xl lg:text-6xl filter drop-shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                    🏦
                  </div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white dark:text-white transition-colors duration-300 group-hover:text-blue-600">
                    Banking & Infrastructure
                  </h3>
                </div>
                <p className="text-gray-300 dark:text-gray-300 text-base sm:text-lg leading-relaxed mb-6">
                  Building the foundation of modern banking with core systems,
                  regulatory compliance, and identity verification solutions.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-200 dark:text-gray-200 text-sm sm:text-base">
                      KYC/AML Solutions
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-200 dark:text-gray-200 text-sm sm:text-base">
                      Banking Infrastructure
                    </span>
                  </div>
                </div>
                <div className="text-center">
                  <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-900/30 to-emerald-900/30 dark:from-blue-900/30 dark:to-emerald-900/30 border border-blue-700 dark:border-blue-700 rounded-full text-blue-300 dark:text-blue-300 text-sm font-semibold uppercase tracking-wide transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                    54 Countries
                  </span>
                </div>
              </div>
            </Reveal>

            <Reveal delayMs={480}>
              <div className="bg-[#1e293b] dark:bg-[#1e293b] border border-slate-600 dark:border-slate-600 rounded-3xl p-6 sm:p-8 lg:p-10 transition-all duration-400 hover:-translate-y-3 hover:scale-105 hover:shadow-2xl hover:border-blue-500 dark:hover:border-blue-500 cursor-pointer group relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="flex items-center gap-4 sm:gap-6 mb-6">
                  <div className="text-4xl sm:text-5xl lg:text-6xl filter drop-shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                    🎓
                  </div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white dark:text-white transition-colors duration-300 group-hover:text-blue-600">
                    Education & Talent
                  </h3>
                </div>
                <p className="text-gray-300 dark:text-gray-300 text-base sm:text-lg leading-relaxed mb-6">
                  Empowering the next generation through innovative learning
                  platforms, talent development tools, and educational financing
                  solutions.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-200 dark:text-gray-200 text-sm sm:text-base">
                      Talent Development
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-200 dark:text-gray-200 text-sm sm:text-base">
                      Educational Finance
                    </span>
                  </div>
                </div>
                <div className="text-center">
                  <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-900/30 to-emerald-900/30 dark:from-blue-900/30 dark:to-emerald-900/30 border border-blue-700 dark:border-blue-700 rounded-full text-blue-300 dark:text-blue-300 text-sm font-semibold uppercase tracking-wide transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                    80% Mobile Penetration
                  </span>
                </div>
              </div>
            </Reveal>

            <Reveal delayMs={600}>
              <div className="bg-[#1e293b] dark:bg-[#1e293b] border border-slate-600 dark:border-slate-600 rounded-3xl p-6 sm:p-8 lg:p-10 transition-all duration-400 hover:-translate-y-3 hover:scale-105 hover:shadow-2xl hover:border-blue-500 dark:hover:border-blue-500 cursor-pointer group relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="flex items-center gap-4 sm:gap-6 mb-6">
                  <div className="text-4xl sm:text-5xl lg:text-6xl filter drop-shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                    ⚡
                  </div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white dark:text-white transition-colors duration-300 group-hover:text-blue-600">
                    Energy & Infrastructure
                  </h3>
                </div>
                <p className="text-gray-300 dark:text-gray-300 text-base sm:text-lg leading-relaxed mb-6">
                  Transforming energy infrastructure with distributed
                  generation, advanced storage solutions, and intelligent grid
                  management.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-200 dark:text-gray-200 text-sm sm:text-base">
                      Grid Software
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-200 dark:text-gray-200 text-sm sm:text-base">
                      Smart Infrastructure
                    </span>
                  </div>
                </div>
                <div className="text-center">
                  <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-900/30 to-emerald-900/30 dark:from-blue-900/30 dark:to-emerald-900/30 border border-blue-700 dark:border-blue-700 rounded-full text-blue-300 dark:text-blue-300 text-sm font-semibold uppercase tracking-wide transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                    60% Youth Population
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Investment Focus */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#1a1b1e] dark:bg-[#1a1b1e]">
        <div className="container mx-auto px-4">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white dark:text-white mb-6">
              Approach by Sector
            </h2>
          </Reveal>
          <Reveal delayMs={120}>
            <p className="text-center text-gray-300 dark:text-gray-300 text-lg sm:text-xl max-w-4xl mx-auto leading-relaxed mb-12 sm:mb-16">
              Each sector requires a tailored approach based on market dynamics,
              regulatory environment, and growth potential.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mt-12 sm:mt-16 lg:mt-20">
            <Reveal delayMs={240}>
              <div className="bg-[#1e293b] dark:bg-[#1e293b] border border-slate-600 dark:border-slate-600 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-blue-500 dark:hover:border-blue-500 text-center group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="text-4xl sm:text-5xl mb-5 filter drop-shadow-lg transition-transform duration-300 group-hover:scale-110">
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mx-auto text-emerald-500"
                    >
                      <path
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-semibold text-white dark:text-white mb-4 relative z-10">
                    Early Stage Focus
                  </h4>
                  <p className="text-gray-300 dark:text-gray-300 text-base leading-relaxed mb-6 relative z-10">
                    We invest at seed and Series A stages when companies are
                    defining their market position and building core teams.
                  </p>
                  <div className="flex gap-2 justify-center flex-wrap">
                    <span className="px-3 py-2 bg-emerald-900/30 text-emerald-300 rounded-full text-sm font-medium border border-emerald-700 transition-all duration-300 hover:-translate-y-1">
                      Seed
                    </span>
                    <span className="px-3 py-2 bg-emerald-900/30 text-emerald-300 rounded-full text-sm font-medium border border-emerald-700 transition-all duration-300 hover:-translate-y-1">
                      Series A
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delayMs={480}>
              <div className="bg-[#1e293b] dark:bg-[#1e293b] border border-slate-600 dark:border-slate-600 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-blue-500 dark:hover:border-blue-500 text-center group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="text-4xl sm:text-5xl mb-5 filter drop-shadow-lg transition-transform duration-300 group-hover:scale-110">
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mx-auto text-emerald-500"
                    >
                      <path
                        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-semibold text-white dark:text-white mb-4 relative z-10">
                    Long-term Partnership
                  </h4>
                  <p className="text-gray-300 dark:text-gray-300 text-base leading-relaxed mb-6 relative z-10">
                    We build lasting relationships with founders, supporting
                    them through multiple funding rounds and growth stages.
                  </p>
                  <div className="flex gap-2 justify-center flex-wrap">
                    <span className="px-3 py-2 bg-emerald-900/30 text-emerald-300 rounded-full text-sm font-medium border border-emerald-700 transition-all duration-300 hover:-translate-y-1">
                      Multi-Round
                    </span>
                    <span className="px-3 py-2 bg-emerald-900/30 text-emerald-300 rounded-full text-sm font-medium border border-emerald-700 transition-all duration-300 hover:-translate-y-1">
                      Growth
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delayMs={600}>
              <div className="bg-[#1e293b] dark:bg-[#1e293b] border border-slate-600 dark:border-slate-600 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-blue-500 dark:hover:border-blue-500 text-center group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="text-4xl sm:text-5xl mb-5 filter drop-shadow-lg transition-transform duration-300 group-hover:scale-110">
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mx-auto text-emerald-500"
                    >
                      <path
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-semibold text-white dark:text-white mb-4 relative z-10">
                    Ecosystem Building
                  </h4>
                  <p className="text-gray-300 dark:text-gray-300 text-base leading-relaxed mb-6 relative z-10">
                    We actively connect our portfolio companies with each other,
                    creating network effects that benefit all participants.
                  </p>
                  <div className="flex gap-2 justify-center flex-wrap">
                    <span className="px-3 py-2 bg-emerald-900/30 text-emerald-300 rounded-full text-sm font-medium border border-emerald-700 transition-all duration-300 hover:-translate-y-1">
                      Network
                    </span>
                    <span className="px-3 py-2 bg-emerald-900/30 text-emerald-300 rounded-full text-sm font-medium border border-emerald-700 transition-all duration-300 hover:-translate-y-1">
                      Collaboration
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Market Analysis */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#242629] dark:bg-[#242629]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6 lg:mb-8">
            <Reveal>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white dark:text-white mb-4 lg:mb-0">
                Sector Market Analysis
              </h2>
            </Reveal>
            <div className="bg-gradient-to-r from-emerald-500 to-blue-600 text-white px-5 py-3 rounded-full flex items-center gap-2 text-sm font-semibold shadow-lg">
              <span className="text-lg">📈</span>
              <span>Market Growth Trends</span>
            </div>
          </div>
          <Reveal delayMs={120}>
            <p className="text-center text-gray-300 dark:text-gray-300 text-lg sm:text-xl max-w-4xl mx-auto leading-relaxed mb-12 sm:mb-16">
              Understanding market dynamics and growth potential across key
              sectors helps us identify the most promising investment
              opportunities.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 mt-12 sm:mt-16 lg:mt-20">
            <Reveal delayMs={240}>
              <div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-blue-600 mb-6">
                  Market Growth Trends
                </h3>
                <p className="text-gray-300 dark:text-gray-300 text-base sm:text-lg leading-relaxed mb-6">
                  Africa's digital transformation is creating unprecedented
                  opportunities across all sectors. The technology sector shows
                  remarkable expansion with significant growth in fintech,
                  energy infrastructure, education technology, and digital
                  banking solutions.
                </p>
                <p className="text-gray-300 dark:text-gray-300 text-base sm:text-lg leading-relaxed mb-8">
                  The combination of rapid urbanization, increasing internet
                  penetration, and a young, tech-savvy population creates
                  perfect conditions for sector-specific innovations and market
                  disruption.
                </p>

                <div className="mt-8">
                  <h4 className="text-emerald-500 text-lg sm:text-xl font-semibold mb-4">
                    Key Growth Drivers:
                  </h4>
                  <ul className="space-y-3 text-gray-300 dark:text-gray-300 leading-relaxed">
                    <li className="flex items-start gap-3">
                      <span className="text-emerald-500 text-lg">✨</span>
                      <span>
                        Mobile penetration exceeding 80% across major markets
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-emerald-500 text-lg">✨</span>
                      <span>Regulatory reforms opening new opportunities</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-emerald-500 text-lg">✨</span>
                      <span>Growing demand for digital-first solutions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-emerald-500 text-lg">✨</span>
                      <span>
                        Infrastructure gaps creating leapfrog opportunities
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </Reveal>

            <Reveal delayMs={360}>
              <div className="flex justify-center items-center">
                <div className="relative">
                  <img
                    src={digitalAfriImage}
                    alt="Digital Africa Market Growth"
                    className="w-full max-w-lg lg:max-w-xl xl:max-w-2xl h-auto rounded-2xl shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1.05)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                    }}
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#1a1b1e] dark:bg-[#1a1b1e] text-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Reveal>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white dark:text-white mb-6">
                Ready to Explore Opportunities?
              </h2>
            </Reveal>
            <Reveal delayMs={120}>
              <p className="text-gray-300 dark:text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed mb-8 sm:mb-10">
                Discover how we're building Africa's digital infrastructure, one
                sector at a time. Let's discuss how we can help you succeed.
              </p>
            </Reveal>
            <Reveal delayMs={240}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-blue-600 text-white font-semibold rounded-full hover:from-emerald-600 hover:to-blue-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  Get in Touch 🚀
                </a>
                <a
                  href="/portfolio"
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#1e293b] dark:bg-[#1e293b] text-gray-200 dark:text-gray-200 font-semibold rounded-full border-2 border-slate-600 dark:border-slate-600 hover:bg-slate-600 dark:hover:bg-slate-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  View Portfolio 📊
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
