"use client";

import Reveal from "../Reveal";
import MobileSwipeCarousel from "../ui/MobileSwipeCarousel";
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

function HelpCard({ title, description, metric }: (typeof helpCards)[0]) {
  return (
    <div
      className="border border-white/10 rounded-2xl p-6 sm:p-8 text-center"
      style={{ background: "var(--card)" }}
    >
      <HelpCardContent title={title} description={description} metric={metric} />
    </div>
  );
}

export default function ThesisHelpSection() {
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

        <MobileSwipeCarousel
          className="lg:hidden mt-4"
          aria-label="How we help founders"
        >
          {helpCards.map((item) => (
            <HelpCard key={item.title} {...item} />
          ))}
        </MobileSwipeCarousel>
      </div>
    </section>
  );
}
