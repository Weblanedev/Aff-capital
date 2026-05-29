"use client";

import Reveal from "../../components/Reveal";
import MobileSwipeCarousel from "../../components/ui/MobileSwipeCarousel";
import {
  SectorApproachCard,
  SectorFocusCard,
  sectorApproaches,
  sectorFocusAreas,
} from "../../components/sectors/SectorsPageCards";
const digitalAfriImage = "/assets/digital-afri.png";

export default function SectorsPage(): JSX.Element {
  return (
    <main className="min-h-screen bg-[var(--bg)] dark:bg-[var(--bg)]">

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-[var(--bg)]/80 to-[var(--bg-elev)]/80 dark:from-[var(--bg)]/80 dark:to-[var(--bg-elev)]/80">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/10 to-[var(--accent-2)]/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <Reveal>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-center mb-6 leading-tight bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] bg-clip-text text-transparent drop-shadow-lg">
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
      <section className="py-16 sm:py-20 lg:py-24 bg-[var(--bg-elev)] dark:bg-[var(--bg-elev)]">
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

          <div className="hidden lg:grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 mt-12 sm:mt-16 lg:mt-20">
            {sectorFocusAreas.map((area, index) => (
              <Reveal key={area.title} delayMs={240 + index * 120}>
                <SectorFocusCard area={area} />
              </Reveal>
            ))}
          </div>

          <MobileSwipeCarousel
            className="lg:hidden mt-12 sm:mt-16"
            aria-label="Core focus sectors"
          >
            {sectorFocusAreas.map((area) => (
              <SectorFocusCard key={area.title} area={area} />
            ))}
          </MobileSwipeCarousel>
        </div>
      </section>

      {/* Investment Focus */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[var(--bg)] dark:bg-[var(--bg)]">
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

          <div className="hidden lg:grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mt-12 sm:mt-16 lg:mt-20">
            {sectorApproaches.map((approach, index) => (
              <Reveal key={approach.title} delayMs={240 + index * 120}>
                <SectorApproachCard approach={approach} />
              </Reveal>
            ))}
          </div>

          <MobileSwipeCarousel
            className="lg:hidden mt-12 sm:mt-16"
            aria-label="Sector investment approach"
          >
            {sectorApproaches.map((approach) => (
              <SectorApproachCard key={approach.title} approach={approach} />
            ))}
          </MobileSwipeCarousel>
        </div>
      </section>

      {/* Market Analysis */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[var(--bg-elev)] dark:bg-[var(--bg-elev)]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6 lg:mb-8">
            <Reveal>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white dark:text-white mb-4 lg:mb-0">
                Sector Market Analysis
              </h2>
            </Reveal>
            <div className="bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] text-white px-5 py-3 rounded-full text-sm font-semibold shadow-lg">
              Market Growth Trends
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
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] mb-6">
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
      <section className="py-16 sm:py-20 lg:py-24 bg-[var(--bg)] dark:bg-[var(--bg)] text-center">
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
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] text-white font-semibold rounded-full hover:from-emerald-600 hover:to-blue-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg aff-cta"
                >
                  Get in Touch
                </a>
                <a
                  href="/portfolio"
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#1e293b] dark:bg-[#1e293b] text-gray-200 dark:text-gray-200 font-semibold rounded-full border-2 border-slate-600 dark:border-slate-600 hover:bg-slate-600 dark:hover:bg-slate-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg aff-cta-secondary"
                >
                  View Portfolio
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
