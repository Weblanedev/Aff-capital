"use client";

import Reveal from "./Reveal";
import AffIcon from "./AffIcon";
import MobileSwipeCarousel from "./ui/MobileSwipeCarousel";
import { AFF_ICONS } from "../lib/assets";
import { AFF_CORE_SERVICES_INTRO } from "../lib/aff-copy";

const services = [
  {
    title: "Renewable Energy",
    description:
      "we believe Renewable energy is the future, so we are always ready to support a new venture",
    icon: AFF_ICONS.renewableEnergy,
  },
  {
    title: "Banking",
    description:
      "If your start up is a banking type we can connect to specialists in the field.",
    icon: AFF_ICONS.banking,
  },
  {
    title: "Real Estate",
    description:
      "if you are ready for the struggle ahead AFF will support you all the way",
    icon: AFF_ICONS.realEstate,
  },
  {
    title: "Venture Capital",
    description:
      "if you are ready for the struggle ahead AFF will support you all the way",
    icon: AFF_ICONS.ventureCapital,
  },
  {
    title: "Healthcare",
    description:
      "if you are ready for the struggle ahead AFF will support you all the way",
    icon: AFF_ICONS.healthCare,
  },
  {
    title: "Payments",
    description:
      "if you are ready for the struggle ahead AFF will support you all the way",
    icon: AFF_ICONS.payments,
  },
];

export default function CoreServices() {
  return (
    <section id="core-services" className="py-16 sm:py-20 lg:py-24 bg-[var(--bg-elev)]">
      <div className="container mx-auto px-4">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text)] text-center mb-5">
            Our Core Services
          </h2>
        </Reveal>
        <Reveal delayMs={120}>
          <p className="text-base sm:text-lg text-[var(--muted)] text-center max-w-3xl mx-auto mb-12 sm:mb-16 leading-relaxed">
            {AFF_CORE_SERVICES_INTRO}
          </p>
        </Reveal>

        <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <Reveal key={service.title} delayMs={180 + index * 80}>
              <div className="bg-[var(--card)] border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center min-h-[260px] transition-all duration-300 hover:border-[var(--accent)]/30 hover:-translate-y-1 hover:shadow-xl">
                <div className="mb-5">
                  <AffIcon src={service.icon} alt={service.title} size={56} />
                </div>
                <h3 className="font-bold text-[var(--text)] text-xl mb-3">
                  {service.title}
                </h3>
                <p className="text-[var(--muted)] text-sm sm:text-base leading-relaxed">
                  {service.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <MobileSwipeCarousel
          className="lg:hidden"
          aria-label="Core services"
        >
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-[var(--card)] border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center min-h-[260px]"
            >
              <div className="mb-5">
                <AffIcon src={service.icon} alt={service.title} size={56} />
              </div>
              <h3 className="font-bold text-[var(--text)] text-xl mb-3">
                {service.title}
              </h3>
              <p className="text-[var(--muted)] text-sm sm:text-base leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </MobileSwipeCarousel>
      </div>
    </section>
  );
}
