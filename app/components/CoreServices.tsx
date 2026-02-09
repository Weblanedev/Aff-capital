"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const services = [
  {
    title: "Renewable Energy",
    description:
      "we believe Renewable energy is the future, so we are always ready to support a new venture",
    image: "/assets/renewable-energy.png",
  },
  {
    title: "Banking",
    description:
      "If your start up is a banking type we can connect to specialists in the field.",
    image: "/assets/banking.png",
  },
  {
    title: "Real Estate",
    description:
      "if you are ready for the struggle ahead AFF will support you all the way",
    image: "/assets/real-estate.png",
  },
  {
    title: "Venture Capital",
    description:
      "if you are ready for the struggle ahead AFF will support you all the way",
    image: "/assets/venture-capital.png",
  },
  {
    title: "Healthcare",
    description:
      "if you are ready for the struggle ahead AFF will support you all the way",
    image: "/assets/health-care.png",
  },
  {
    title: "Payments",
    description:
      "if you are ready for the struggle ahead AFF will support you all the way",
    image: "/assets/payments.png",
  },
];

export default function CoreServices() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-[90%] mx-auto px-6">
        <ScrollReveal>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-6 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
          >
            Our Core Services
          </h2>
          <p
            className="text-lg md:text-xl text-gray-600 text-center max-w-2xl mx-auto mb-12 leading-relaxed opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
          >
            We provide sustainable investments to numerous lines of business,
            But we have some core sectors who are almost certain to receive
            support from us at AFF. These sectors are:
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div
                key={service.title}
                className="bg-white rounded-2xl border border-gray-100 shadow-lg p-10 md:p-12 flex flex-col items-center text-center min-h-[320px] md:min-h-[360px] opacity-0 animate-fade-in-up transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-[#FDCB00]/30"
                style={{
                  animationDelay: `${0.15 + i * 0.05}s`,
                  animationFillMode: "forwards",
                }}
              >
                <div className="relative w-20 h-20 mb-6 flex items-center justify-center">
                  <Image
                    src={service.image}
                    alt=""
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>
                <h3 className="font-bold text-gray-900 text-xl mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
