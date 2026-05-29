"use client";

import { useState, useEffect } from "react";
import { HERO_CAROUSEL, AFF_ICONS } from "../lib/assets";
import { AFF_BRAND_NAME_LINES, AFF_HERO_INTRO, AFF_TAGLINE_DISPLAY } from "../lib/aff-copy";
import Carousel from "./Carousel";
import AffIcon from "./AffIcon";

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

  const carouselImages = [...HERO_CAROUSEL];

  const sectors = [
    {
      name: "Fintech",
      description: "Payments, wallets, credit",
      icon: AFF_ICONS.payments,
    },
    {
      name: "Banking",
      description: "Core, rails, compliance",
      icon: AFF_ICONS.banking,
    },
    {
      name: "Education",
      description: "Talent, tools, access",
      icon: AFF_ICONS.ventureCapital,
    },
    {
      name: "Energy",
      description: "Generation, storage, grids",
      icon: AFF_ICONS.renewableEnergy,
    },
  ];

  const marqueeSectors = [...sectors, ...sectors];

  function FocusSectorCard({ sector }: { sector: (typeof sectors)[0] }) {
    return (
      <div className="hero-focus-marquee-card">
        <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[var(--bg)]/80 p-1.5 shrink-0">
          <AffIcon src={sector.icon} alt={sector.name} size={24} />
        </div>
        <div className="min-w-0">
          <h4 className="text-sm font-semibold text-white mb-0.5 truncate">
            {sector.name}
          </h4>
          <p className="text-xs text-white/70 truncate">{sector.description}</p>
        </div>
      </div>
    );
  }

  return (
    <header className="relative min-h-screen w-full max-w-[100vw] overflow-x-clip">
      {/* Full Background Carousel */}
      <div className="absolute inset-0 z-0">
        <Carousel
          height={800}
          autoPlayMs={5000}
          showArrows={false}
          showIndicators={false}
        >
          {carouselImages.map((src, index) => (
            <div key={src} className="relative h-full">
              <img
                src={src}
                alt={`African Founders Fund ${index + 1}`}
                className="w-full h-full object-cover block"
                fetchPriority={index === 0 ? "high" : "auto"}
              />
              <div className="absolute inset-0 bg-black/60 pointer-events-none" />
            </div>
          ))}
        </Carousel>
      </div>

      {/* Content Overlay */}
      <div className="container relative z-10 pb-20 sm:pb-24 md:pt-36 md:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 sm:gap-12 lg:gap-20 items-start pt-28 sm:pt-36 lg:pt-0">
          <div>
            <h1
              className={`text-6xl sm:text-7xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.02] tracking-tight mb-4 md:mb-5 transition-all duration-600 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5"
              }`}
              style={{ transitionDelay: "0.1s" }}
            >
              {AFF_BRAND_NAME_LINES.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>
            <p
              className={`text-xl md:text-2xl lg:text-3xl font-semibold leading-snug mb-6 md:mb-8 text-[var(--accent)] transition-all duration-600 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5"
              }`}
              style={{ transitionDelay: "0.2s" }}
            >
              {AFF_TAGLINE_DISPLAY}
            </p>
            <p
              className={`muted text-base md:text-lg lg:text-xl max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl mb-8 md:mb-10 leading-relaxed transition-all duration-600 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5"
              }`}
              style={{ transitionDelay: "0.3s" }}
            >
              {AFF_HERO_INTRO}
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
                Get Started
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
              <div className="pill hero-breathe-pill text-xs md:text-sm px-3 md:px-4 py-2">
                Early-stage support
              </div>
              <div className="pill hero-breathe-pill text-xs md:text-sm px-3 md:px-4 py-2">
                Lead or follow
              </div>
              <div className="pill hero-breathe-pill text-xs md:text-sm px-3 md:px-4 py-2">
                Operator support
              </div>
            </div>

            {/* Mobile: horizontal focus areas marquee */}
            <div
              className={`lg:hidden mt-8 -mx-4 sm:-mx-6 transition-all duration-600 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5"
              }`}
              style={{ transitionDelay: "0.55s" }}
            >
              <div className="flex items-center justify-between mb-3 px-4 sm:px-6">
                <div>
                  <h3 className="text-lg font-bold text-white">
                    Our Focus Areas
                  </h3>
                  <p className="text-sm text-white/70">
                    Building Africa&apos;s digital economy
                  </p>
                </div>
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--accent), var(--accent-2))",
                  }}
                >
                  4
                </div>
              </div>
              <div className="hero-focus-marquee px-4 sm:px-6">
                <div className="hero-focus-marquee-track">
                  {marqueeSectors.map((sector, index) => (
                    <FocusSectorCard
                      key={`${sector.name}-${index}`}
                      sector={sector}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Focus Areas Card - Hidden on mobile, shown on larger screens */}
          <div className="hidden lg:flex lg:justify-end lg:items-start">
            <div
              className={`rounded-3xl p-6 h-96 w-80 transition-all duration-600 ease-out cursor-pointer ${
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
                className="flex flex-col px-1 overflow-hidden pointer-events-none"
                style={{
                  animation: isVisible ? "autoScroll 15s ease-in-out infinite" : "none",
                }}
              >
                {sectors.map((sector) => (
                  <div
                    key={sector.name}
                    className="flex items-center gap-4 p-5 rounded-2xl transition-all duration-300 ease-in-out hover:translate-x-2"
                  >
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[var(--bg)]/80 p-1.5">
                      <AffIcon
                        src={sector.icon}
                        alt={sector.name}
                        size={28}
                      />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1.5">
                        {sector.name}
                      </h4>
                      <p className="text-sm text-white/70">
                        {sector.description}
                      </p>
                    </div>
                  </div>
                ))}

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
