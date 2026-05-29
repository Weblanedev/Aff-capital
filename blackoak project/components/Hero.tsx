import { useState, useEffect } from "react";
import { getAssetUrl } from "../lib/images";
import Carousel from "./Carousel";

export default function Hero(): JSX.Element {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Add simple auto-scroll for sectors
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @keyframes autoScroll {
        0%, 25% { transform: translateY(0); }
        50% { transform: translateY(-80px); }
        75%, 100% { transform: translateY(0); }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // Select three beautiful images for the carousel
  const carouselImages = [
    "adeolu-eletu-E7RLgUjjazc-unsplash.jpg", // African landscape
    "markus-winkler-44QtHj3fZDY-unsplash.jpg", // Modern business
    "jason-briscoe-amLfrL8LGls-unsplash.jpg", // Tech/innovation
  ];

  const sectors = [
    {
      name: "Fintech",
      description: "Payments, wallets, credit",
      color: "var(--accent)",
      image: "fintech.jpg",
    },
    {
      name: "Banking",
      description: "Core, rails, compliance",
      color: "var(--accent-2)",
      image: "banking.jpg",
    },
    {
      name: "Education",
      description: "Talent, tools, access",
      color: "var(--accent)",
      image: "education.jpg",
    },
    {
      name: "Energy",
      description: "Generation, storage, grids",
      color: "var(--accent-2)",
      image: "energy.jpg",
    },
  ];

  return (
    <header className="relative min-h-screen w-screen -ml-[calc(50vw-50%)] -mr-[calc(50vw-50%)]">
      {/* Full Background Carousel */}
      <div className="absolute inset-0 z-0">
        <Carousel
          height={800}
          autoPlayMs={5000}
          showArrows={false}
          showIndicators={false}
        >
          {carouselImages.map((imageName, index) => (
            <div key={index} className="relative h-full">
              <img
                src={getAssetUrl(imageName)}
                alt={`Hero background ${index + 1}`}
                className="w-full h-full object-cover block"
              />
              <div className="absolute inset-0 bg-black/60" />
            </div>
          ))}
        </Carousel>
      </div>

      {/* Content Overlay */}
      <div className="container relative z-0 pb-24 md:pt-36 md:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-center pt-40 lg:pt-0">
          <div>
            <div
              className={`pill mb-6 transition-all duration-600 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5"
              }`}
              style={{ transitionDelay: "0.1s" }}
            >
              Early-stage VC • Africa
            </div>
            <h1
              className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6 md:mb-8 transition-all duration-600 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5"
              }`}
              style={{ transitionDelay: "0.2s" }}
            >
              Powering Africa's future: finance, education & energy founders.
            </h1>
            <p
              className={`muted text-base md:text-lg lg:text-xl max-w-2xl lg:max-w-3xl mb-8 md:mb-10 leading-relaxed transition-all duration-600 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5"
              }`}
              style={{ transitionDelay: "0.3s" }}
            >
              We invest pre-seed to Series A in category-defining companies
              across fintech, banking, education and energy — the rails of
              Africa's digital economy.
            </p>
            <div
              className={`flex gap-4 mb-6 md:mb-8 flex-wrap transition-all duration-600 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5"
              }`}
              style={{ transitionDelay: "0.4s" }}
            >
              <a
                href="/contact"
                className="btn btn-primary text-sm md:text-base px-4 md:px-6 py-3 md:py-4"
              >
                Pitch Your Company
              </a>
              <a
                href="#thesis"
                className="btn text-sm md:text-base px-4 md:px-6 py-3 md:py-4"
              >
                Read Our Thesis
              </a>
            </div>
            <div
              className={`flex gap-4 flex-wrap transition-all duration-600 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5"
              }`}
              style={{ transitionDelay: "0.5s" }}
            >
              <div className="pill text-xs md:text-sm px-3 md:px-4 py-2">
                Early-stage support
              </div>
              <div className="pill text-xs md:text-sm px-3 md:px-4 py-2">
                Lead or follow
              </div>
              <div className="pill text-xs md:text-sm px-3 md:px-4 py-2">
                Operator support
              </div>
            </div>
          </div>

          {/* Focus Areas Card - Hidden on mobile, shown on larger screens */}
          <div className="hidden lg:block relative h-full">
            <div
              className={`absolute bottom-0 right-0 rounded-3xl p-6 h-96 w-80 transition-all duration-600 ease-out cursor-pointer ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
              }`}
              style={{
                transitionDelay: "0.6s",
                animation: isVisible ? "float 3s ease-in-out infinite" : "none",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                  "scale(1.02) translateY(-8px)";
                e.currentTarget.style.boxShadow = "0 25px 50px rgba(0,0,0,0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1) translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Header Section */}
              <div className="flex justify-between items-center mb-8 pb-6 border-b border-white/10">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Our Focus Areas
                  </h3>
                  <p className="text-sm text-white/70">
                    Building Africa's digital economy
                  </p>
                </div>
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold text-white"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--accent), var(--accent-2))",
                  }}
                >
                  4
                </div>
              </div>

              {/* Sectors Grid */}
              <div
                className="flex flex-col px-1 overflow-hidden"
                style={{
                  height: "calc(100% - -20px)",
                  animation: "autoScroll 15s ease-in-out infinite",
                }}
              >
                {/* Fintech Row */}
                <div className="flex items-center gap-4 p-5 rounded-2xl transition-all duration-300 ease-in-out hover:translate-x-2">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold text-white"
                    style={{
                      background:
                        "linear-gradient(135deg, var(--accent), #ff6b6b)",
                    }}
                  >
                    💳
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1.5">
                      {sectors[0].name}
                    </h4>
                    <p className="text-sm text-white/70">
                      {sectors[0].description}
                    </p>
                  </div>
                </div>

                {/* Banking Row */}
                <div className="flex items-center gap-4 p-5 rounded-2xl transition-all duration-300 ease-in-out hover:translate-x-2">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold text-white"
                    style={{
                      background:
                        "linear-gradient(135deg, var(--accent-2), #4ecdc4)",
                    }}
                  >
                    🏦
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1.5">
                      {sectors[1].name}
                    </h4>
                    <p className="text-sm text-white/70">
                      {sectors[1].description}
                    </p>
                  </div>
                </div>

                {/* Education Row */}
                <div className="flex items-center gap-4 p-5 rounded-2xl transition-all duration-300 ease-in-out hover:translate-x-2">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold text-white"
                    style={{
                      background: "linear-gradient(135deg, #4ecdc4, #44a08d)",
                    }}
                  >
                    🎓
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1.5">
                      {sectors[2].name}
                    </h4>
                    <p className="text-sm text-white/70">
                      {sectors[2].description}
                    </p>
                  </div>
                </div>

                {/* Energy Row */}
                <div className="flex items-center gap-4 p-5 rounded-2xl transition-all duration-300 ease-in-out hover:translate-x-2">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold text-white"
                    style={{
                      background: "linear-gradient(135deg, #ff6b6b, #ffa726)",
                    }}
                  >
                    ⚡
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1.5">
                      {sectors[3].name}
                    </h4>
                    <p className="text-sm text-white/70">
                      {sectors[3].description}
                    </p>
                  </div>
                </div>

                {/* Stats Row */}
                <div className="flex justify-around items-center p-5 rounded-2xl">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white mb-1">4</div>
                    <div className="text-xs text-white/60">Focus Areas</div>
                  </div>
                  <div className="w-px h-10 bg-white/10" />
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white mb-1">
                      24+
                    </div>
                    <div className="text-xs text-white/60">Portfolio</div>
                  </div>
                  <div className="w-px h-10 bg-white/10" />
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white mb-1">
                      25+
                    </div>
                    <div className="text-xs text-white/60">Companies</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
