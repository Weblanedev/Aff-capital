import { useState } from "react";

export default function Sectors(): JSX.Element {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showControls, setShowControls] = useState(false);

  const sectors = [
    {
      name: "Fintech",
      desc: "Payments, lending, wallets, B2B rails.",
      longDesc:
        "Revolutionizing financial services through innovative payment solutions, digital lending platforms, and seamless B2B infrastructure.",
      color: "var(--accent)",
      icon: "💳",
      features: [
        "Digital Payments",
        "Lending Solutions",
        "B2B Infrastructure",
        "Wallet Technology",
      ],
      investment: "Early-stage to growth",
      market: "High growth potential",
      gradient: "linear-gradient(135deg, #2bd4a7, #22c55e)",
      bgGradient:
        "linear-gradient(135deg, rgba(43, 212, 167, 0.1), rgba(34, 197, 94, 0.05))",
    },
    {
      name: "Banking",
      desc: "Core banking, compliance, KYC, infrastructure.",
      longDesc:
        "Building the foundation of modern banking with core systems, regulatory compliance, and identity verification solutions.",
      color: "#86efac",
      icon: "🏦",
      features: [
        "Core Banking",
        "Regulatory Compliance",
        "KYC/AML",
        "Banking Infrastructure",
      ],
      investment: "Series A to Series C",
      market: "Stable, regulated market",
      gradient: "linear-gradient(135deg, #86efac, #4ade80)",
      bgGradient:
        "linear-gradient(135deg, rgba(134, 239, 172, 0.1), rgba(74, 222, 128, 0.05))",
    },
    {
      name: "Education",
      desc: "Talent platforms, learning tools, financing.",
      longDesc:
        "Empowering the next generation through innovative learning platforms, talent development tools, and educational financing solutions.",
      color: "#f59e0b",
      icon: "🎓",
      features: [
        "Learning Platforms",
        "Talent Development",
        "Educational Finance",
        "Skills Assessment",
      ],
      investment: "Seed to Series B",
      market: "Growing demand for skills",
      gradient: "linear-gradient(135deg, #f59e0b, #eab308)",
      bgGradient:
        "linear-gradient(135deg, rgba(245, 158, 11, 0.1), rgba(234, 179, 8, 0.05))",
    },
    {
      name: "Energy",
      desc: "Distributed generation, storage, grid software.",
      longDesc:
        "Transforming energy infrastructure with distributed generation, advanced storage solutions, and intelligent grid management software.",
      color: "var(--accent-2)",
      icon: "⚡",
      features: [
        "Distributed Generation",
        "Energy Storage",
        "Grid Software",
        "Smart Infrastructure",
      ],
      investment: "Series A to Series D",
      market: "Critical infrastructure need",
      gradient: "linear-gradient(135deg, #6aa6ff, #3b82f6)",
      bgGradient:
        "linear-gradient(135deg, rgba(106, 166, 255, 0.1), rgba(59, 130, 246, 0.05))",
    },
  ];

  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % sectors.length);
  };

  const prevCard = () => {
    setCurrentIndex((prev) => (prev - 1 + sectors.length) % sectors.length);
  };

  const goToCard = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section
      id="sectors"
      className="relative overflow-hidden py-20 bg-[var(--bg)] before:content-[''] before:absolute before:top-[-50%] before:right-[-20%] before:w-[600px] before:h-[600px] before:bg-gradient-to-r before:from-[rgba(43,212,167,0.1)] before:to-transparent before:rounded-full before:z-0 after:content-[''] after:absolute after:bottom-[-30%] after:left-[-15%] after:w-[500px] after:h-[500px] after:bg-gradient-to-r after:from-[rgba(106,166,255,0.08)] after:to-transparent after:rounded-full after:z-0"
    >
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-20 gap-10 relative z-10">
          <div className="flex-1 max-w-2xl">
            <div className="flex items-center justify-between mb-5">
              <div className="inline-block bg-gradient-to-r from-[rgba(43,212,167,0.15)] to-[rgba(106,166,255,0.15)] text-[var(--accent)] px-4 py-2 rounded-full text-sm font-semibold border border-[rgba(43,212,167,0.2)] backdrop-blur-sm">
                Investment Focus
              </div>
              <div className="text-5xl lg:hidden filter drop-shadow-lg animate-bounce">
                🎯
              </div>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[var(--text)] mb-5 leading-tight bg-gradient-to-r from-[var(--text)] to-[var(--accent)] bg-clip-text text-transparent">
              Strategic Sectors Driving Africa's Digital Future
            </h2>
            <p className="text-lg text-[var(--muted)] leading-relaxed max-w-xl">
              We invest in foundational software and infrastructure across key
              sectors that are transforming Africa's digital economy. Each
              sector represents unique opportunities for innovation and growth.
            </p>
          </div>
          <div className="hidden lg:block text-5xl lg:text-6xl filter drop-shadow-lg animate-bounce">
            🎯
          </div>
        </div>

        {/* Desktop Wave Layout - Hidden on Mobile */}
        <div className="hidden lg:flex flex-col gap-16 max-w-7xl mx-auto relative z-10">
          {/* Top Wave */}
          <div className="flex justify-between gap-10 items-start mt-10">
            <div className="w-[48%] transform translate-y-5">
              <div
                className="bg-[var(--sector-bg)] rounded-3xl p-8 border border-white/10 backdrop-blur-xl relative overflow-hidden h-full flex flex-col transition-all duration-400 cursor-pointer hover:transform hover:-translate-y-2 hover:border-white/30 hover:shadow-2xl"
                style={
                  {
                    "--sector-bg": sectors[0].bgGradient,
                  } as React.CSSProperties
                }
              >
                <div className="text-5xl mb-5 filter drop-shadow-lg transition-transform duration-400 hover:scale-110 hover:rotate-6">
                  {sectors[0].icon}
                </div>
                <h3 className="text-3xl font-bold text-[var(--text)] mb-4 leading-tight">
                  {sectors[0].name}
                </h3>
                <p className="text-base text-[var(--muted)] leading-relaxed mb-5 flex-1">
                  {sectors[0].longDesc}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {sectors[0].features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="bg-white/10 text-[var(--text)] px-3 py-1.5 rounded-2xl text-xs font-medium border border-white/20 backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:border-white/40 hover:-translate-y-0.5"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mt-auto">
                  <div className="bg-white/5 rounded-xl p-3 flex-1 border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-white/30">
                    <span className="block text-[var(--muted)] text-xs font-medium mb-1 uppercase tracking-wider">
                      Stage:
                    </span>
                    <span className="block text-[var(--text)] text-sm font-semibold">
                      {sectors[0].investment}
                    </span>
                  </div>
                  <div className="bg-white/5 rounded-xl p-3 flex-1 border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-white/30">
                    <span className="block text-[var(--muted)] text-xs font-medium mb-1 uppercase tracking-wider">
                      Market:
                    </span>
                    <span className="block text-[var(--text)] text-sm font-semibold">
                      {sectors[0].market}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-[48%] transform -translate-y-5">
              <div
                className="bg-[var(--sector-bg)] rounded-3xl p-8 border border-white/10 backdrop-blur-xl relative overflow-hidden h-full flex flex-col transition-all duration-400 cursor-pointer hover:transform hover:-translate-y-2 hover:border-white/30 hover:shadow-2xl"
                style={
                  {
                    "--sector-bg": sectors[1].bgGradient,
                  } as React.CSSProperties
                }
              >
                <div className="text-5xl mb-5 filter drop-shadow-lg transition-transform duration-400 hover:scale-110 hover:rotate-6">
                  {sectors[1].icon}
                </div>
                <h3 className="text-3xl font-bold text-[var(--text)] mb-4 leading-tight">
                  {sectors[1].name}
                </h3>
                <p className="text-base text-[var(--muted)] leading-relaxed mb-5 flex-1">
                  {sectors[1].longDesc}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {sectors[1].features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="bg-white/10 text-[var(--text)] px-3 py-1.5 rounded-2xl text-xs font-medium border border-white/20 backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:border-white/40 hover:-translate-y-0.5"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mt-auto">
                  <div className="bg-white/5 rounded-xl p-3 flex-1 border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-white/30">
                    <span className="block text-[var(--muted)] text-xs font-medium mb-1 uppercase tracking-wider">
                      Stage:
                    </span>
                    <span className="block text-[var(--text)] text-sm font-semibold">
                      {sectors[1].investment}
                    </span>
                  </div>
                  <div className="bg-white/5 rounded-xl p-3 flex-1 border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-white/30">
                    <span className="block text-[var(--muted)] text-xs font-medium mb-1 uppercase tracking-wider">
                      Market:
                    </span>
                    <span className="block text-[var(--text)] text-sm font-semibold">
                      {sectors[1].market}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Center Connection */}
          <div className="flex justify-center items-center relative z-10">
            <div className="flex items-center gap-5">
              <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-[rgba(43,212,167,0.3)] to-transparent rounded-sm"></div>
              <div className="w-3 h-3 bg-gradient-to-br from-[#2bd4a7] to-[#22c55e] rounded-full shadow-lg animate-pulse"></div>
              <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-[rgba(43,212,167,0.3)] to-transparent rounded-sm"></div>
            </div>
          </div>

          {/* Bottom Wave */}
          <div className="flex justify-between gap-10 items-start mb-10">
            <div className="w-[48%] transform translate-y-5">
              <div
                className="bg-[var(--sector-bg)] rounded-3xl p-8 border border-white/10 backdrop-blur-xl relative overflow-hidden h-full flex flex-col transition-all duration-400 cursor-pointer hover:transform hover:-translate-y-2 hover:border-white/30 hover:shadow-2xl"
                style={
                  {
                    "--sector-bg": sectors[2].bgGradient,
                  } as React.CSSProperties
                }
              >
                <div className="text-5xl mb-5 filter drop-shadow-lg transition-transform duration-400 hover:scale-110 hover:rotate-6">
                  {sectors[2].icon}
                </div>
                <h3 className="text-3xl font-bold text-[var(--text)] mb-4 leading-tight">
                  {sectors[2].name}
                </h3>
                <p className="text-base text-[var(--muted)] leading-relaxed mb-5 flex-1">
                  {sectors[2].longDesc}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {sectors[2].features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="bg-white/10 text-[var(--text)] px-3 py-1.5 rounded-2xl text-xs font-medium border border-white/20 backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:border-white/40 hover:-translate-y-0.5"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mt-auto">
                  <div className="bg-white/5 rounded-xl p-3 flex-1 border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-white/30">
                    <span className="block text-[var(--muted)] text-xs font-medium mb-1 uppercase tracking-wider">
                      Stage:
                    </span>
                    <span className="block text-[var(--text)] text-sm font-semibold">
                      {sectors[2].investment}
                    </span>
                  </div>
                  <div className="bg-white/5 rounded-xl p-3 flex-1 border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-white/30">
                    <span className="block text-[var(--muted)] text-xs font-medium mb-1 uppercase tracking-wider">
                      Market:
                    </span>
                    <span className="block text-[var(--text)] text-sm font-semibold">
                      {sectors[2].market}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-[48%] transform -translate-y-5">
              <div
                className="bg-[var(--sector-bg)] rounded-3xl p-8 border border-white/10 backdrop-blur-xl relative overflow-hidden h-full flex flex-col transition-all duration-400 cursor-pointer hover:transform hover:-translate-y-2 hover:border-white/30 hover:shadow-2xl"
                style={
                  {
                    "--sector-bg": sectors[3].bgGradient,
                  } as React.CSSProperties
                }
              >
                <div className="text-5xl mb-5 filter drop-shadow-lg transition-transform duration-400 hover:scale-110 hover:rotate-6">
                  {sectors[3].icon}
                </div>
                <h3 className="text-3xl font-bold text-[var(--text)] mb-4 leading-tight">
                  {sectors[3].name}
                </h3>
                <p className="text-base text-[var(--muted)] leading-relaxed mb-5 flex-1">
                  {sectors[3].longDesc}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {sectors[3].features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="bg-white/10 text-[var(--text)] px-3 py-1.5 rounded-2xl text-xs font-medium border border-white/20 backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:border-white/40 hover:-translate-y-0.5"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mt-auto">
                  <div className="bg-white/5 rounded-xl p-3 flex-1 border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-white/30">
                    <span className="block text-[var(--muted)] text-xs font-medium mb-1 uppercase tracking-wider">
                      Stage:
                    </span>
                    <span className="block text-[var(--text)] text-sm font-semibold">
                      {sectors[3].investment}
                    </span>
                  </div>
                  <div className="bg-white/5 rounded-xl p-3 flex-1 border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-white/30">
                    <span className="block text-[var(--muted)] text-xs font-medium mb-1 uppercase tracking-wider">
                      Market:
                    </span>
                    <span className="block text-[var(--text)] text-sm font-semibold">
                      {sectors[3].market}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Card Carousel - Hidden on Desktop */}
        <div className="lg:hidden relative z-10">
          {/* Current Card with Embedded Controls */}
          <div className="relative">
            <div
              className="bg-[var(--sector-bg)] rounded-3xl p-6 border border-white/10 backdrop-blur-xl relative overflow-hidden transition-all duration-500 ease-in-out"
              style={
                {
                  "--sector-bg": sectors[currentIndex].bgGradient,
                } as React.CSSProperties
              }
            >
              {/* Left Navigation Arrow - Overlay on card */}
              <button
                onClick={prevCard}
                className={`absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/20 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white transition-all duration-300 ${
                  showControls ? "opacity-100" : "opacity-0"
                } hover:bg-black/40 hover:border-white/40 disabled:opacity-30 disabled:cursor-not-allowed`}
                disabled={currentIndex === 0}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              {/* Right Navigation Arrow - Overlay on card */}
              <button
                onClick={nextCard}
                className={`absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/20 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white transition-all duration-300 ${
                  showControls ? "opacity-100" : "opacity-0"
                } hover:bg-black/40 hover:border-white/40 disabled:opacity-30 disabled:cursor-not-allowed`}
                disabled={currentIndex === sectors.length - 1}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
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
              <div className="text-4xl mb-4 filter drop-shadow-lg">
                {sectors[currentIndex].icon}
              </div>
              <h3 className="text-2xl font-bold text-[var(--text)] mb-3 leading-tight">
                {sectors[currentIndex].name}
              </h3>
              <p className="text-sm text-[var(--muted)] leading-relaxed mb-4">
                {sectors[currentIndex].longDesc}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {sectors[currentIndex].features.map((feature, idx) => (
                  <span
                    key={idx}
                    className="bg-white/10 text-[var(--text)] px-3 py-1.5 rounded-2xl text-xs font-medium border border-white/20 backdrop-blur-sm"
                  >
                    {feature}
                  </span>
                ))}
              </div>
              <div className="flex flex-col gap-3">
                <div className="bg-white/5 rounded-xl p-3 border border-white/10">
                  <span className="block text-[var(--muted)] text-xs font-medium mb-1 uppercase tracking-wider">
                    Stage:
                  </span>
                  <span className="block text-[var(--text)] text-sm font-semibold">
                    {sectors[currentIndex].investment}
                  </span>
                </div>
                <div className="bg-white/5 rounded-xl p-3 border border-white/10">
                  <span className="block text-[var(--muted)] text-xs font-medium mb-1 uppercase tracking-wider">
                    Market:
                  </span>
                  <span className="block text-[var(--text)] text-sm font-semibold">
                    {sectors[currentIndex].market}
                  </span>
                </div>
              </div>

              {/* Progress Indicator - Bottom of card */}
              <div className="flex justify-center gap-2 mt-4">
                {sectors.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => goToCard(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      idx === currentIndex
                        ? "bg-white scale-125"
                        : "bg-white/30 hover:bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Card Counter - Below card */}
          <div className="text-center mt-4 text-sm text-[var(--muted)]">
            {currentIndex + 1} of {sectors.length}
          </div>
        </div>
      </div>
    </section>
  );
}
