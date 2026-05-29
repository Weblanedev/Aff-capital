"use client";

import { useState } from "react";
import Reveal from "../Reveal";
import CarouselNavButton from "../ui/CarouselNavButton";
import {
  helpCards,
  metricBadgeClassName,
  metricBadgeTextClassName,
} from "./helpCards";

function HelpCardContent({
  title,
  description,
  metric,
}: {
  title: string;
  description: string;
  metric: string;
}) {
  return (
    <>
      <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
      <p className="text-gray-200 mb-4">{description}</p>
      <div className={metricBadgeClassName}>
        <span className={metricBadgeTextClassName}>{metric}</span>
      </div>
    </>
  );
}

export default function ThesisHelpSection() {
  const [currentHelpIndex, setCurrentHelpIndex] = useState(0);
  const [showHelpControls, setShowHelpControls] = useState(false);

  const nextHelp = () => {
    setCurrentHelpIndex((prev) => Math.min(prev + 1, helpCards.length - 1));
  };

  const prevHelp = () => {
    setCurrentHelpIndex((prev) => Math.max(prev - 1, 0));
  };

  const card = helpCards[currentHelpIndex];

  return (
    <section
      className="py-12 sm:py-16 lg:py-20"
      style={{
        background:
          "linear-gradient(135deg, rgba(253, 203, 0, 0.04), rgba(245, 191, 69, 0.04))",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-center text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">
            How We Help Founders Succeed
          </h2>
        </Reveal>
        <Reveal delayMs={120}>
          <p className="text-center text-base sm:text-lg text-gray-200 max-w-3xl mx-auto mb-10 sm:mb-12 px-4">
            We provide more than just capital — we are active partners in
            building the future of Africa&apos;s digital economy.
          </p>
        </Reveal>

        <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {helpCards.map((item, index) => (
            <Reveal key={item.title} delayMs={240 + index * 120}>
              <div
                className="border border-white/10 rounded-2xl p-6 sm:p-8 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-[var(--accent)]/30"
                style={{ background: "var(--card)" }}
              >
                <HelpCardContent {...item} />
              </div>
            </Reveal>
          ))}
        </div>

        <div className="lg:hidden relative z-10 mt-4">
          <div className="relative">
            <div
              className="border border-white/10 rounded-2xl p-6 sm:p-8 text-center relative overflow-hidden"
              style={{ background: "var(--card)" }}
              onMouseEnter={() => setShowHelpControls(true)}
              onMouseLeave={() => setShowHelpControls(false)}
            >
              <CarouselNavButton
                direction="prev"
                onClick={prevHelp}
                disabled={currentHelpIndex === 0}
                visible={showHelpControls}
                aria-label="Previous help item"
              />
              <CarouselNavButton
                direction="next"
                onClick={nextHelp}
                disabled={currentHelpIndex === helpCards.length - 1}
                visible={showHelpControls}
                aria-label="Next help item"
              />
              <button
                type="button"
                onClick={() => setShowHelpControls(!showHelpControls)}
                className="absolute top-3 right-3 z-10 min-h-[32px] px-2 rounded-full bg-black/20 backdrop-blur-sm border border-white/20 text-xs text-white hover:bg-black/40"
                aria-label="Toggle carousel controls"
              >
                {showHelpControls ? "Hide" : "Nav"}
              </button>
              <HelpCardContent {...card} />
            </div>
          </div>
          <div className="flex justify-center gap-2 mt-6">
            {helpCards.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentHelpIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentHelpIndex
                    ? "bg-[var(--accent)] w-6"
                    : "bg-gray-400 w-2 hover:bg-gray-300"
                }`}
                aria-label={`Go to help item ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
