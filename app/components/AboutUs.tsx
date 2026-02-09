"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function AboutUs() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Subtle background */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-white via-amber-50/30 to-white"
        aria-hidden
      />
      <div className="relative max-w-[90%] mx-auto px-6">
        <ScrollReveal>
          <div className="grid md:grid-cols-2 gap-14 md:gap-20 items-center">
            {/* Image - modern card with accent */}
            <div
              className="relative opacity-0 animate-slide-in-left"
              style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5 transition-all duration-500 hover:shadow-2xl hover:ring-[#FDCB00]/40">
                <div className="aspect-[4/3] relative">
                  <Image
                    src="/assets/aboutaff.png"
                    alt="About African Founders Fund"
                    fill
                    className="object-cover object-center transition-transform duration-500 hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FDCB00] to-amber-400"
                  aria-hidden
                />
              </div>
            </div>

            {/* Text block */}
            <div className="space-y-8">
              <div
                className="opacity-0 animate-fade-in-up"
                style={{
                  animationDelay: "0.2s",
                  animationFillMode: "forwards",
                }}
              >
                <span className="inline-block text-[#FDCB00] font-semibold text-sm uppercase tracking-widest mb-3">
                  Who we are
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
                  About Us
                </h2>
                <div
                  className="mt-3 h-1 w-16 rounded-full bg-[#FDCB00]"
                  aria-hidden
                />
              </div>
              <div className="space-y-6 border-l-2 border-[#FDCB00]/40 pl-6 md:pl-8">
                <p
                  className="text-gray-700 text-lg leading-relaxed opacity-0 animate-fade-in-up"
                  style={{
                    animationDelay: "0.3s",
                    animationFillMode: "forwards",
                  }}
                >
                  At African Founders Fund (AFF), our mission is to advance
                  Africa by solving the world&apos;s hardest problems. We
                  believe that empowering entrepreneurs of Africa who seek to
                  improve the lives of the people around them is the best way to
                  create more opportunity globally.
                </p>
                <p
                  className="text-gray-700 text-lg leading-relaxed opacity-0 animate-fade-in-up"
                  style={{
                    animationDelay: "0.4s",
                    animationFillMode: "forwards",
                  }}
                >
                  AFF invests from a balance sheet of permanent capital to fuel
                  entrepreneurship at all stages, all over Africa, so that we
                  can partner with entrepreneurs for as long as it takes. We
                  leverage data and machine learning to build great companies
                  and then help them be operationally excellent to drive long
                  term success.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
