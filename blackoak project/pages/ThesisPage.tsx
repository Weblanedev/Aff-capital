import { useState } from "react";
import Reveal from "../components/Reveal";
import Navbar from "../components/Navbar";

export default function ThesisPage(): JSX.Element {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [currentStrategyIndex, setCurrentStrategyIndex] = useState(0);
  const [currentHelpIndex, setCurrentHelpIndex] = useState(0);
  const [showControls, setShowControls] = useState(false);
  const [showStrategyControls, setShowStrategyControls] = useState(false);
  const [showHelpControls, setShowHelpControls] = useState(false);

  const thesisCards = [
    {
      icon: (
        <svg
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-emerald-500"
        >
          <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
            fill="currentColor"
          />
        </svg>
      ),
      title: "Market Opportunity",
      description:
        "Africa's digital transformation represents one of the largest market opportunities of our generation, with over 1.4 billion people coming online and building digital-first economies.",
      stats: ["1.4B+", "80%+", "60%"],
      tags: ["Infrastructure", "Software", "Platforms"],
      features: ["Digital Payments", "Cloud Services", "Data Centers"],
    },
    {
      icon: (
        <svg
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-emerald-500"
        >
          <path
            d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
            fill="currentColor"
          />
        </svg>
      ),
      title: "Network Effects",
      description:
        "We actively connect our portfolio companies with each other, creating a network effect that benefits all participants.",
      tags: ["Community", "Collaboration", "Growth"],
      features: ["Peer Learning", "Resource Sharing", "Joint Ventures"],
    },
    {
      icon: (
        <svg
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-emerald-500"
        >
          <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
            fill="currentColor"
          />
        </svg>
      ),
      title: "Long-term Vision",
      description:
        "We take a long-term view of Africa's digital transformation, backing companies that will define the continent's digital infrastructure for decades to come.",
      tags: ["Vision", "Infrastructure", "Legacy"],
      features: [
        "Strategic Planning",
        "Patient Capital",
        "Foundation Building",
      ],
    },
  ];

  const nextCard = () => {
    setCurrentCardIndex((prev) => (prev + 1) % thesisCards.length);
  };

  const prevCard = () => {
    setCurrentCardIndex(
      (prev) => (prev - 1 + thesisCards.length) % thesisCards.length
    );
  };

  const strategyCards = [
    {
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-emerald-500"
        >
          <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
            fill="currentColor"
          />
        </svg>
      ),
      title: "Early Stage Focus",
      description:
        "We invest at the seed and Series A stages, when companies are defining their market position and building their core team.",
      tags: ["Seed", "Series A"],
    },
    {
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-emerald-500"
        >
          <path
            d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
            fill="currentColor"
          />
        </svg>
      ),
      title: "Long-term Partnership",
      description:
        "We build lasting relationships with founders, supporting them through multiple funding rounds and growth stages.",
      tags: ["Strategic", "Partnership"],
    },
    {
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-emerald-500"
        >
          <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
            fill="currentColor"
          />
        </svg>
      ),
      title: "Market Expansion",
      description:
        "Scale beyond initial markets with insights into new geographies and customer segments.",
      tags: ["Scale Ready"],
    },
  ];

  const helpCards = [
    {
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-emerald-500"
        >
          <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
            fill="currentColor"
          />
        </svg>
      ),
      title: "Strategic Capital",
      description:
        "Adequate funding to ensure companies can execute their vision and reach key milestones.",
      metric: "Lead/Follow",
    },
    {
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-emerald-500"
        >
          <path
            d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H17c-.8 0-1.54.37-2.01 1l-1.7 2.55A1 1 0 0 0 14 12v8h-2v-8c0-.55.45-1 1-1s1 .45 1 1v6h2v-6c0-.55.45-1 1-1s1 .45 1 1v6h2z"
            fill="currentColor"
          />
        </svg>
      ),
      title: "Talent Acquisition",
      description:
        "Access to our network of exceptional engineers, operators, and leaders across Africa and globally.",
      metric: "Network",
    },
    {
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-emerald-500"
        >
          <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
            fill="currentColor"
          />
        </svg>
      ),
      title: "Strategic Partnerships",
      description:
        "Connect with potential customers, distribution partners, and strategic allies across our ecosystem.",
      metric: "Ecosystem",
    },
    {
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-emerald-500"
        >
          <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
            fill="currentColor"
          />
        </svg>
      ),
      title: "Regulatory Navigation",
      description:
        "Navigate complex regulatory environments with insights from our network of legal experts.",
      metric: "Expertise",
    },
    {
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-emerald-500"
        >
          <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
            fill="currentColor"
          />
        </svg>
      ),
      title: "Follow-on Funding",
      description:
        "Maintain meaningful ownership and support through subsequent funding rounds and growth stages.",
      metric: "Long-term",
    },
    {
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-emerald-500"
        >
          <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
            fill="currentColor"
          />
        </svg>
      ),
      title: "Market Expansion",
      description:
        "Scale beyond initial markets with insights into new geographies and customer segments.",
      metric: "Scale Ready",
    },
  ];

  const nextStrategy = () => {
    setCurrentStrategyIndex((prev) => (prev + 1) % strategyCards.length);
  };

  const prevStrategy = () => {
    setCurrentStrategyIndex(
      (prev) => (prev - 1 + strategyCards.length) % strategyCards.length
    );
  };

  const nextHelp = () => {
    setCurrentHelpIndex((prev) => (prev + 1) % helpCards.length);
  };

  const prevHelp = () => {
    setCurrentHelpIndex(
      (prev) => (prev - 1 + helpCards.length) % helpCards.length
    );
  };
  return (
    <main
      className="min-h-screen"
      style={{
        background: "var(--bg)",
      }}
    >
      <Navbar />

      {/* Hero Section with Thesis */}
      <section
        className="relative overflow-hidden pt-20 sm:pt-24 lg:pt-30 pb-16 sm:pb-20 lg:pb-32"
        style={{
          background:
            "linear-gradient(135deg, rgba(43, 212, 167, 0.05), rgba(106, 166, 255, 0.05))",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 80%, rgba(43, 212, 167, 0.03) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(106, 166, 255, 0.03) 0%, transparent 50%)",
          }}
        ></div>
        <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-8 sm:mt-12 lg:mt-16">
          <Reveal>
            <h1 className="text-center text-3xl font-extrabold text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight mb-4 sm:mb-6">
              Building Africa's Digital Future
            </h1>
          </Reveal>
          <Reveal delayMs={120}>
            <p className="text-center text-base sm:text-lg md:text-xl text-gray-200 max-w-4xl mx-auto mb-6 sm:mb-10 leading-relaxed px-4">
              Our approach centers on backing foundational software and
              infrastructure that will power Africa's digital economy for
              decades to come.
            </p>
          </Reveal>

          <Reveal delayMs={240}>
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 lg:gap-10 mt-6 sm:mt-10">
              <div
                className="text-center p-4 sm:p-6 rounded-2xl border backdrop-blur-sm transition-all duration-300 hover:border-emerald-300/30 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/15 min-w-[120px] sm:min-w-[140px]"
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  borderColor: "rgba(255, 255, 255, 0.1)",
                }}
              >
                <span className="block text-4xl font-bold text-emerald-500 dark:text-emerald-400 mb-2">
                  1.4B
                </span>
                <span className="text-gray-500 dark:text-gray-400 text-sm font-medium uppercase tracking-wider">
                  People
                </span>
              </div>
              <div
                className="text-center p-4 sm:p-6 rounded-2xl border backdrop-blur-sm transition-all duration-300 hover:border-emerald-300/30 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/15 min-w-[120px] sm:min-w-[140px]"
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  borderColor: "rgba(255, 255, 255, 0.1)",
                }}
              >
                <span className="block text-4xl font-bold text-emerald-500 dark:text-emerald-400 mb-2">
                  80%+
                </span>
                <span className="text-gray-500 dark:text-gray-400 text-sm font-medium uppercase tracking-wider">
                  Mobile Penetration
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Investment Philosophy */}
      <section
        className="py-12 sm:py-16 lg:py-20"
        style={{
          background: "var(--bg-elev)",
        }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-center text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">
              Investment Philosophy
            </h2>
          </Reveal>
          <Reveal delayMs={120}>
            <p className="text-center text-base sm:text-lg text-gray-200 max-w-3xl mx-auto mb-10 sm:mb-15 px-4">
              We believe Africa's digital transformation requires more than just
              apps - it needs the foundational infrastructure that enables
              innovation across all sectors.
            </p>
          </Reveal>

          {/* Desktop Grid - Hidden on Mobile */}
          <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-10 sm:mt-15">
            <Reveal delayMs={240}>
              <div
                className="border border-gray-200 dark:border-gray-600 rounded-3xl p-6 sm:p-8 lg:p-10 transition-all duration-400 hover:-translate-y-3 hover:scale-105 hover:border-emerald-300/30 hover:shadow-2xl hover:shadow-emerald-500/20 cursor-pointer relative overflow-hidden group"
                style={{
                  background: "var(--card)",
                }}
              >
                <div className="text-5xl mb-6 block drop-shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-emerald-500"
                  >
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-bold text-2xl mb-4 leading-tight transition-colors duration-300 group-hover:text-emerald-500">
                    Market Opportunity
                  </h3>
                  <p className="text-gray-200 text-lg leading-relaxed">
                    Africa's 1.4 billion people represent the world's largest
                    untapped market for digital services, with mobile
                    penetration exceeding 80% and growing rapidly.
                  </p>
                  <div className="flex gap-3 mt-5 flex-wrap">
                    <span className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg shadow-emerald-500/30">
                      1.4B+
                    </span>
                    <span className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg shadow-emerald-500/30">
                      80%+
                    </span>
                    <span className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg shadow-emerald-500/30">
                      25%
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delayMs={360}>
              <div
                className="border border-gray-200 dark:border-gray-600 rounded-3xl p-6 sm:p-8 lg:p-10 transition-all duration-400 hover:-translate-y-3 hover:scale-105 hover:border-emerald-300/30 hover:shadow-2xl hover:shadow-emerald-500/20 cursor-pointer relative overflow-hidden group"
                style={{
                  background: "var(--card)",
                }}
              >
                <div className="text-5xl mb-6 block drop-shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-emerald-500"
                  >
                    <path
                      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-bold text-2xl mb-4 leading-tight transition-colors duration-300 group-hover:text-emerald-500">
                    Infrastructure First
                  </h3>
                  <p className="text-gray-200 text-lg leading-relaxed">
                    We invest in the foundational layers - payments, banking,
                    education, and energy - that enable thousands of other
                    businesses to thrive.
                  </p>
                  <div className="flex gap-2 mt-5 flex-wrap">
                    <span className="bg-emerald-100 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 px-3 py-1.5 rounded-2xl text-sm font-medium border border-emerald-200 dark:border-emerald-800 transition-all duration-300 hover:bg-emerald-200 hover:-translate-y-0.5">
                      Payments
                    </span>
                    <span className="bg-emerald-100 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 px-3 py-1.5 rounded-2xl text-sm font-medium border border-emerald-200 dark:border-emerald-800 transition-all duration-300 hover:bg-emerald-200 hover:-translate-y-0.5">
                      Banking
                    </span>
                    <span className="bg-emerald-100 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 px-3 py-1.5 rounded-2xl text-sm font-medium border border-emerald-200 dark:border-emerald-800 transition-all duration-300 hover:bg-emerald-200 hover:-translate-y-0.5">
                      Education
                    </span>
                    <span className="bg-emerald-100 dark:bg-emerald-100/20 text-emerald-600 dark:text-emerald-400 px-3 py-1.5 rounded-2xl text-sm font-medium border border-emerald-200 dark:border-emerald-800 transition-all duration-300 hover:bg-emerald-200 hover:-translate-y-0.5">
                      Energy
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delayMs={480}>
              <div
                className="border border-gray-200 dark:border-gray-600 rounded-3xl p-6 sm:p-8 lg:p-10 transition-all duration-400 hover:-translate-y-3 hover:scale-105 hover:border-emerald-300/30 hover:shadow-2xl hover:shadow-emerald-500/20 cursor-pointer relative overflow-hidden group"
                style={{
                  background: "var(--card)",
                }}
              >
                <div className="text-5xl mb-6 block drop-shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-emerald-500"
                  >
                    <path
                      d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H17c-.8 0-1.54.37-2.01 1l-1.7 2.55A1 1 0 0 0 14 12v8h-2v-8c0-.55.45-1 1-1s1 .45 1 1v6h2v-6c0-.55.45-1 1-1s1 .45 1 1v6h2z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-bold text-2xl mb-4 leading-tight transition-colors duration-300 group-hover:text-emerald-500">
                    Operator Support
                  </h3>
                  <p className="text-gray-200 text-lg leading-relaxed">
                    Beyond capital, we provide hands-on support with
                    distribution, talent acquisition, regulatory navigation, and
                    strategic partnerships.
                  </p>
                  <div className="flex gap-4 mt-5 flex-wrap">
                    <div
                      className="flex items-center gap-2 px-3 py-2 rounded-xl border transition-all duration-300 hover:bg-emerald-100/10 hover:border-emerald-300/30 hover:-translate-y-0.5"
                      style={{
                        background: "rgba(255, 255, 255, 0.05)",
                        borderColor: "rgba(255, 255, 255, 0.1)",
                      }}
                    >
                      <span className="text-xl">🎯</span>
                      <span className="text-white text-sm">Distribution</span>
                    </div>
                    <div
                      className="flex items-center gap-2 px-3 py-2 rounded-xl border transition-all duration-300 hover:bg-emerald-100/10 hover:border-emerald-300/30 hover:-translate-y-0.5"
                      style={{
                        background: "rgba(255, 255, 255, 0.05)",
                        borderColor: "rgba(255, 255, 255, 0.1)",
                      }}
                    >
                      <span className="text-xl">👥</span>
                      <span className="text-white text-sm">Talent</span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Mobile Card Carousel - Hidden on Desktop */}
          <div className="lg:hidden relative z-10 mt-8">
            {/* Current Card with Embedded Controls */}
            <div className="relative">
              <div
                className="border border-gray-200 dark:border-gray-600 rounded-3xl p-6 sm:p-8 transition-all duration-400 hover:border-emerald-300/30 cursor-pointer relative overflow-hidden group"
                style={{
                  background: "var(--card)",
                }}
              >
                {/* Left Navigation Arrow - Overlay on card */}
                <button
                  onClick={prevCard}
                  className={`absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/20 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white transition-all duration-300 ${
                    showControls ? "opacity-100" : "opacity-0"
                  } hover:bg-black/40 hover:border-white/40 disabled:opacity-30 disabled:cursor-not-allowed`}
                  disabled={currentCardIndex === 0}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 12h14"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M12 19l7-7-7 7"
                    />
                  </svg>
                </button>

                {/* Right Navigation Arrow - Overlay on card */}
                <button
                  onClick={nextCard}
                  className={`absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/20 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white transition-all duration-300 ${
                    showControls ? "opacity-100" : "opacity-0"
                  } hover:bg-black/40 hover:border-white/40 disabled:opacity-30 disabled:cursor-not-allowed`}
                  disabled={currentCardIndex === thesisCards.length - 1}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M19 12H5"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M12 5l-7-7 7-7"
                    />
                  </svg>
                </button>

                {/* Toggle Controls Button - Top right corner */}
                <button
                  onClick={() => setShowControls(!showControls)}
                  className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/20 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-black/40 hover:border-white/40 transition-all duration-300"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"
                    />
                  </svg>
                </button>

                {/* Card Content */}
                <div className="text-5xl mb-6 block drop-shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  {thesisCards[currentCardIndex].icon}
                </div>
                <div>
                  <h3 className="text-white font-bold text-2xl mb-4 leading-tight transition-colors duration-300 group-hover:text-emerald-500">
                    {thesisCards[currentCardIndex].title}
                  </h3>
                  <p className="text-gray-200 text-lg leading-relaxed">
                    {thesisCards[currentCardIndex].description}
                  </p>
                  {thesisCards[currentCardIndex].stats && (
                    <div className="flex gap-3 mt-5 flex-wrap">
                      {thesisCards[currentCardIndex].stats.map((stat, idx) => (
                        <span
                          key={idx}
                          className="bg-gradient-to-br from-emerald-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
                        >
                          {stat}
                        </span>
                      ))}
                    </div>
                  )}
                  {thesisCards[currentCardIndex].tags && (
                    <div className="flex gap-2 mt-5 flex-wrap">
                      {thesisCards[currentCardIndex].tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gradient-to-r from-emerald-500 to-blue-500 text-white text-sm font-semibold rounded-xl shadow-lg"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  {thesisCards[currentCardIndex].features && (
                    <div className="flex gap-2 mt-5 flex-wrap">
                      {thesisCards[currentCardIndex].features.map(
                        (feature, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gradient-to-r from-emerald-500 to-blue-500 text-white text-sm font-semibold rounded-xl shadow-lg"
                          >
                            {feature}
                          </span>
                        )
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Card Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {thesisCards.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentCardIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentCardIndex
                      ? "bg-emerald-500 w-6"
                      : "bg-gray-400 hover:bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Investment Strategy */}
      <section
        className="py-12 sm:py-16 lg:py-20"
        style={{
          background:
            "linear-gradient(135deg, rgba(43, 212, 167, 0.02), rgba(106, 166, 255, 0.02))",
        }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-center text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">
              Investment Strategy
            </h2>
          </Reveal>
          <Reveal delayMs={120}>
            <p className="text-center text-base sm:text-lg text-gray-200 max-w-3xl mx-auto mb-10 sm:mb-15 px-4">
              We take a systematic approach to identifying and supporting the
              companies that will define Africa's digital future.
            </p>
          </Reveal>

          {/* Desktop Grid - Hidden on Mobile */}
          <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mt-10 sm:mt-15">
            <Reveal delayMs={240}>
              <div
                className="border border-gray-200 dark:border-gray-600 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:-translate-y-2 hover:border-emerald-300/30 hover:shadow-xl hover:shadow-emerald-500/10 relative overflow-hidden group"
                style={{
                  background: "var(--card)",
                }}
              >
                <div className="text-4xl mb-5 text-emerald-500 filter drop-shadow-lg transition-transform duration-300 group-hover:scale-110">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className="relative z-10">
                  <h4 className="text-xl font-semibold text-white mb-4">
                    Early Stage Focus
                  </h4>
                  <p className="text-gray-200 mb-4">
                    We invest at the seed and Series A stages, when companies
                    are defining their market position and building their core
                    team.
                  </p>
                  <div className="flex gap-2 mt-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-emerald-500 to-blue-500 text-white text-sm font-semibold rounded-xl shadow-lg">
                      Seed
                    </span>
                    <span className="px-3 py-1 bg-gradient-to-r from-emerald-500 to-blue-500 text-white text-sm font-semibold rounded-xl shadow-lg">
                      Series A
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delayMs={480}>
              <div
                className="border border-gray-300 dark:border-gray-600 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:-translate-y-2 hover:border-emerald-300/30 hover:shadow-xl hover:shadow-emerald-500/10 relative overflow-hidden group"
                style={{
                  background: "var(--card)",
                }}
              >
                <div className="text-4xl mb-5 text-emerald-500 filter drop-shadow-lg transition-transform duration-300 group-hover:scale-110">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className="relative z-10">
                  <h4 className="text-xl font-semibold text-white mb-4">
                    Long-term Partnership
                  </h4>
                  <p className="text-gray-200 mb-4">
                    We build lasting relationships with founders, supporting
                    them through multiple funding rounds and growth stages.
                  </p>
                  <div className="flex flex-col items-center mt-4 p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl border border-emerald-200 dark:border-emerald-700/30">
                    <span className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                      Strategic
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Partnership
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delayMs={600}>
              <div
                className="border border-gray-200 dark:border-gray-600 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:-translate-y-2 hover:border-emerald-300/30 hover:shadow-xl hover:shadow-emerald-500/10 relative overflow-hidden group"
                style={{
                  background: "var(--card)",
                }}
              >
                <div className="text-4xl mb-5 text-emerald-500 filter drop-shadow-lg transition-transform duration-300 group-hover:scale-110">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className="relative z-10">
                  <h4 className="text-xl font-semibold text-white mb-4">
                    Ecosystem Building
                  </h4>
                  <p className="text-gray-200 mb-4">
                    We connect our portfolio companies with each other, creating
                    a network effect that benefits all participants.
                  </p>
                  <div className="flex items-center gap-2 mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-700/30 transition-all duration-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:-translate-y-1">
                    <span className="text-lg">🔗</span>
                    <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">
                      Portfolio Network
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Mobile Strategy Carousel - Hidden on Desktop */}
          <div className="lg:hidden relative z-10 mt-8">
            {/* Current Card with Embedded Controls */}
            <div className="relative">
              <div
                className="border border-gray-200 dark:border-gray-600 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:border-emerald-300/30 cursor-pointer relative overflow-hidden group"
                style={{
                  background: "var(--card)",
                }}
              >
                {/* Left Navigation Arrow - Overlay on card */}
                <button
                  onClick={prevStrategy}
                  className={`absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/20 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white transition-all duration-300 ${
                    showStrategyControls ? "opacity-100" : "opacity-0"
                  } hover:bg-black/40 hover:border-white/40 disabled:opacity-30 disabled:cursor-not-allowed`}
                  disabled={currentStrategyIndex === 0}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 12h14"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M12 19l7-7-7 7"
                    />
                  </svg>
                </button>

                {/* Right Navigation Arrow - Overlay on card */}
                <button
                  onClick={nextStrategy}
                  className={`absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/20 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white transition-all duration-300 ${
                    showStrategyControls ? "opacity-100" : "opacity-0"
                  } hover:bg-black/40 hover:border-white/40 disabled:opacity-30 disabled:cursor-not-allowed`}
                  disabled={currentStrategyIndex === strategyCards.length - 1}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M19 12H5"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M12 5l-7-7 7-7"
                    />
                  </svg>
                </button>

                {/* Toggle Controls Button - Top right corner */}
                <button
                  onClick={() => setShowStrategyControls(!showStrategyControls)}
                  className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/20 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-black/40 hover:border-white/40 transition-all duration-300"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"
                    />
                  </svg>
                </button>

                {/* Card Content */}
                <div className="text-4xl mb-5 text-emerald-500 filter drop-shadow-lg transition-transform duration-300 group-hover:scale-110">
                  {strategyCards[currentStrategyIndex].icon}
                </div>
                <div className="relative z-10">
                  <h4 className="text-xl font-semibold text-white mb-4">
                    {strategyCards[currentStrategyIndex].title}
                  </h4>
                  <p className="text-gray-200 mb-4">
                    {strategyCards[currentStrategyIndex].description}
                  </p>
                  <div className="flex gap-2 mt-4">
                    {strategyCards[currentStrategyIndex].tags.map(
                      (tag, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gradient-to-r from-emerald-500 to-blue-500 text-white text-sm font-semibold rounded-xl shadow-lg"
                        >
                          {tag}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Card Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {strategyCards.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentStrategyIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentStrategyIndex
                      ? "bg-emerald-500 w-6"
                      : "bg-gray-400 hover:bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Market Opportunity */}
      <section
        className="py-12 sm:py-16 lg:py-20 relative overflow-hidden"
        style={{
          background: "var(--bg-elev)",
        }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: "url('/src/assets/Map - africa 2.jpg')" }}
        ></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <Reveal>
            <h2 className="text-center text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">
              The Market Opportunity
            </h2>
          </Reveal>
          <Reveal delayMs={120}>
            <p className="text-center text-base sm:text-lg text-gray-200 max-w-3xl mx-auto mb-10 sm:mb-15 px-4">
              Africa's digital transformation is creating unprecedented
              opportunities for innovative companies to build lasting value.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-15 items-center mt-10 sm:mt-15">
            <Reveal delayMs={240}>
              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-white mb-6">
                  Why Africa Now?
                </h3>
                <p className="text-gray-200 text-lg leading-relaxed mb-8">
                  Over 60% of Africa's population is under 25, with mobile
                  penetration exceeding 80%. This demographic dividend, combined
                  with rapid urbanization and increasing internet connectivity,
                  creates a perfect storm for digital innovation.
                </p>
                <p className="text-gray-200 text-lg leading-relaxed mb-8">
                  Traditional infrastructure gaps in banking, education, and
                  energy present massive opportunities for leapfrog solutions
                  that can serve hundreds of millions of people who are coming
                  online for the first time.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                  <div
                    className="text-center p-4 sm:p-6 rounded-2xl border"
                    style={{
                      background: "rgba(255, 255, 255, 0.02)",
                      borderColor: "rgba(255, 255, 255, 0.05)",
                    }}
                  >
                    <span className="block text-3xl font-bold text-emerald-500 dark:text-emerald-400 mb-2">
                      1.4B
                    </span>
                    <span className="text-gray-200 text-sm font-medium">
                      Population
                    </span>
                  </div>
                  <div
                    className="text-center p-4 sm:p-6 rounded-2xl border"
                    style={{
                      background: "rgba(255, 255, 255, 0.02)",
                      borderColor: "rgba(255, 255, 255, 0.05)",
                    }}
                  >
                    <span className="block text-3xl font-bold text-emerald-500 dark:text-emerald-400 mb-2">
                      80%+
                    </span>
                    <span className="text-gray-200 text-sm font-medium">
                      Mobile Penetration
                    </span>
                  </div>
                  <div
                    className="text-center p-4 sm:p-6 rounded-2xl border"
                    style={{
                      background: "rgba(255, 255, 255, 0.02)",
                      borderColor: "rgba(255, 255, 255, 0.05)",
                    }}
                  >
                    <span className="block text-3xl font-bold text-emerald-500 dark:text-emerald-400 mb-2">
                      60%
                    </span>
                    <span className="text-gray-200 text-sm font-medium">
                      Under 25
                    </span>
                  </div>
                  <div
                    className="text-center p-4 sm:p-6 rounded-2xl border"
                    style={{
                      background: "rgba(255, 255, 255, 0.02)",
                      borderColor: "rgba(255, 255, 255, 0.05)",
                    }}
                  >
                    <span className="block text-3xl font-bold text-emerald-500 dark:text-emerald-400 mb-2">
                      54
                    </span>
                    <span className="text-gray-200 text-sm font-medium">
                      Countries
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delayMs={360}>
              <div className="flex items-center justify-center h-80">
                <div className="text-center text-gray-400 dark:text-gray-500">
                  <div className="text-6xl mb-4 opacity-60">🌍</div>
                  <p className="text-2xl font-semibold text-white opacity-80">
                    Africa's Digital Future
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* How We Help */}
      <section
        className="py-12 sm:py-16 lg:py-20"
        style={{
          background:
            "linear-gradient(135deg, rgba(43, 212, 167, 0.02), rgba(106, 166, 255, 0.02))",
        }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-center text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">
              How We Help Founders Succeed
            </h2>
          </Reveal>
          <Reveal delayMs={120}>
            <p className="text-center text-base sm:text-lg text-gray-200 max-w-3xl mx-auto mb-10 sm:mb-15 px-4">
              We provide more than just capital - we're active partners in
              building the future of Africa's digital economy.
            </p>
          </Reveal>

          {/* Desktop Grid - Hidden on Mobile */}
          <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-10 sm:mt-15">
            <Reveal delayMs={240}>
              <div
                className="border border-gray-200 dark:border-gray-700 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-emerald-300 dark:hover:border-emerald-500 text-center relative overflow-hidden group"
                style={{
                  background: "var(--card)",
                }}
              >
                <div className="text-4xl mb-5 filter drop-shadow-lg transition-transform duration-300 group-hover:scale-110">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold text-white mb-4">
                    Strategic Capital
                  </h3>
                  <p className="text-gray-200 mb-4">
                    Adequate funding to ensure companies can execute their
                    vision and reach key milestones.
                  </p>
                  <div className="flex items-center gap-2 mt-4 p-3 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl border border-emerald-200 dark:border-emerald-700/30 transition-all duration-300 hover:bg-emerald-100 dark:hover:bg-emerald-900/30 hover:-translate-y-1">
                    <span className="text-lg">💎</span>
                    <span className="text-sm font-semibold text-emerald-700 dark:text-emerald-300 uppercase tracking-wide">
                      Lead/Follow
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delayMs={360}>
              <div
                className="border border-gray-200 dark:border-gray-700 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-emerald-300 dark:hover:border-emerald-500 text-center relative overflow-hidden group"
                style={{
                  background: "var(--card)",
                }}
              >
                <div className="text-4xl mb-5 filter drop-shadow-lg transition-transform duration-300 group-hover:scale-110">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H17c-.8 0-1.54.37-2.01 1l-1.7 2.55A1 1 0 0 0 14 12v8h-2v-8c0-.55.45-1 1-1s1 .45 1 1v6h2v-6c0-.55.45-1 1-1s1 .45 1 1v6h2z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold text-white mb-4">
                    Talent Acquisition
                  </h3>
                  <p className="text-gray-200 mb-4">
                    Access to our network of exceptional engineers, operators,
                    and leaders across Africa and globally.
                  </p>
                  <div className="flex items-center gap-2 mt-4 p-3 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl border border-emerald-200 dark:border-emerald-700/30 transition-all duration-300 hover:bg-emerald-100 dark:hover:bg-emerald-900/30 hover:-translate-y-1">
                    <span className="text-lg">🌍</span>
                    <span className="text-sm font-semibold text-emerald-700 dark:text-emerald-300 uppercase tracking-wide">
                      Global Network
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delayMs={480}>
              <div
                className="border border-gray-200 dark:border-gray-700 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-emerald-300 dark:hover:border-emerald-500 text-center relative overflow-hidden group"
                style={{
                  background: "var(--card)",
                }}
              >
                <div className="text-4xl mb-5 filter drop-shadow-lg transition-transform duration-300 group-hover:scale-110">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold text-white mb-4">
                    Strategic Partnerships
                  </h3>
                  <p className="text-gray-200 mb-4">
                    Connect with potential customers, distribution partners, and
                    strategic allies across our ecosystem.
                  </p>
                  <div className="flex items-center gap-2 mt-4 p-3 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl border border-emerald-200 dark:border-emerald-700/30 transition-all duration-300 hover:bg-emerald-100 dark:hover:bg-emerald-900/30 hover:-translate-y-1">
                    <span className="text-lg">🤝</span>
                    <span className="text-sm font-semibold text-emerald-700 dark:text-emerald-300 uppercase tracking-wide">
                      Ecosystem
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delayMs={600}>
              <div
                className="border border-gray-200 dark:border-gray-700 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-emerald-300 dark:hover:border-emerald-500 text-center relative overflow-hidden group"
                style={{
                  background: "var(--card)",
                }}
              >
                <div className="text-4xl mb-5 filter drop-shadow-lg transition-transform duration-300 group-hover:scale-110">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold text-white mb-4">
                    Regulatory Navigation
                  </h3>
                  <p className="text-gray-200 mb-4">
                    Navigate complex regulatory environments with insights from
                    our network of legal experts.
                  </p>
                  <div className="flex items-center gap-2 mt-4 p-3 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl border border-emerald-200 dark:border-emerald-700/30 transition-all duration-300 hover:bg-emerald-100 dark:hover:bg-emerald-900/30 hover:-translate-y-1">
                    <span className="text-lg">📋</span>
                    <span className="text-sm font-semibold text-emerald-700 dark:text-emerald-300 uppercase tracking-wide">
                      Expert Network
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delayMs={720}>
              <div
                className="border border-gray-200 dark:border-gray-700 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-emerald-300 dark:hover:border-emerald-500 text-center relative overflow-hidden group"
                style={{
                  background: "var(--card)",
                }}
              >
                <div className="text-4xl mb-5 filter drop-shadow-lg transition-transform duration-300 group-hover:scale-110">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold text-white mb-4">
                    Follow-on Funding
                  </h3>
                  <p className="text-gray-200 mb-4">
                    Maintain meaningful ownership and support through subsequent
                    funding rounds and growth stages.
                  </p>
                  <div className="flex items-center gap-2 mt-4 p-3 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl border border-emerald-200 dark:border-emerald-700/30 transition-all duration-300 hover:bg-emerald-100 dark:hover:bg-emerald-900/30 hover:-translate-y-1">
                    <span className="text-lg">🚀</span>
                    <span className="text-sm font-semibold text-emerald-700 dark:text-emerald-300 uppercase tracking-wide">
                      Long-term
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delayMs={840}>
              <div
                className="border border-gray-200 dark:border-gray-700 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-emerald-300 dark:hover:border-emerald-500 text-center relative overflow-hidden group"
                style={{
                  background: "var(--card)",
                }}
              >
                <div className="text-4xl mb-5 filter drop-shadow-lg transition-transform duration-300 group-hover:scale-110">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold text-white mb-4">
                    Market Expansion
                  </h3>
                  <p className="text-gray-200 mb-4">
                    Scale beyond initial markets with insights into new
                    geographies and customer segments.
                  </p>
                  <div className="flex items-center gap-2 mt-4 p-3 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl border border-emerald-200 dark:border-emerald-700/30 transition-all duration-300 hover:bg-emerald-100 dark:hover:bg-emerald-900/30 hover:-translate-y-1">
                    <span className="text-lg">📈</span>
                    <span className="text-sm font-semibold text-emerald-700 dark:text-emerald-300 uppercase tracking-wide">
                      Scale Ready
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Mobile Help Carousel - Hidden on Desktop */}
          <div className="lg:hidden relative z-10 mt-8">
            {/* Current Card with Embedded Controls */}
            <div className="relative">
              <div
                className="border border-gray-200 dark:border-gray-700 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-emerald-300 dark:hover:border-emerald-500 text-center relative overflow-hidden group"
                style={{
                  background: "var(--card)",
                }}
              >
                {/* Left Navigation Arrow - Overlay on card */}
                <button
                  onClick={prevHelp}
                  className={`absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/20 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white transition-all duration-300 ${
                    showHelpControls ? "opacity-100" : "opacity-0"
                  } hover:bg-black/40 hover:border-white/40 disabled:opacity-30 disabled:cursor-not-allowed`}
                  disabled={currentHelpIndex === 0}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 12h14"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M12 19l7-7-7 7"
                    />
                  </svg>
                </button>

                {/* Right Navigation Arrow - Overlay on card */}
                <button
                  onClick={nextHelp}
                  className={`absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/20 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white transition-all duration-300 ${
                    showHelpControls ? "opacity-100" : "opacity-0"
                  } hover:bg-black/40 hover:border-white/40 disabled:opacity-30 disabled:cursor-not-allowed`}
                  disabled={currentHelpIndex === helpCards.length - 1}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M19 12H5"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M12 5l-7-7 7-7"
                    />
                  </svg>
                </button>

                {/* Toggle Controls Button - Top right corner */}
                <button
                  onClick={() => setShowHelpControls(!showHelpControls)}
                  className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/20 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-black/40 hover:border-white/40 transition-all duration-300"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"
                    />
                  </svg>
                </button>

                {/* Card Content */}
                <div className="text-4xl mb-5 filter drop-shadow-lg transition-transform duration-300 group-hover:scale-110">
                  {helpCards[currentHelpIndex].icon}
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {helpCards[currentHelpIndex].title}
                  </h3>
                  <p className="text-gray-200 mb-4">
                    {helpCards[currentHelpIndex].description}
                  </p>
                  <div className="flex items-center gap-2 mt-4 p-3 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl border border-emerald-200 dark:border-emerald-700/30 transition-all duration-300 hover:bg-emerald-100 dark:hover:bg-emerald-900/30 hover:-translate-y-1">
                    <span className="text-lg">💎</span>
                    <span className="text-sm font-semibold text-emerald-700 dark:text-emerald-300 uppercase tracking-wide">
                      {helpCards[currentHelpIndex].metric}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {helpCards.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentHelpIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentHelpIndex
                      ? "bg-emerald-500 w-6"
                      : "bg-gray-400 hover:bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-12 sm:py-16 lg:py-20 text-center"
        style={{
          background: "var(--bg-elev)",
        }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Reveal>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">
                Ready to Build Africa's Future?
              </h2>
            </Reveal>
            <Reveal delayMs={120}>
              <p className="text-base sm:text-lg text-gray-200 mb-6 sm:mb-10 px-4">
                If you're building foundational software or infrastructure for
                Africa's digital economy, we'd love to hear from you. Let's
                discuss how we can help you scale and succeed.
              </p>
            </Reveal>
            <Reveal delayMs={240}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1 text-base sm:text-lg"
                >
                  Get in Touch 🚀
                </a>
                <a
                  href="/portfolio"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border border-gray-300 dark:border-gray-600 text-white font-semibold rounded-xl hover:bg-gray-50 dark:hover:bg-gray-600 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 text-base sm:text-lg"
                  style={{
                    background: "var(--card)",
                  }}
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
