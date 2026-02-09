"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="max-w-[90%] mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h1
            className="text-3xl md:text-3xl lg:text-5xl font-semibold text-[#F5BF45] opacity-0 animate-fade-in-up leading-tight"
            style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
          >
            African Founders Fund
          </h1>
          <p
            className="text-3xl md:text-3xl lg:text-4xl font-bold text-gray-900 opacity-0 animate-fade-in-up leading-tight"
            style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
          >
            &ldquo;We Invest In The Future&rdquo;
          </p>
          <p
            className="text-lg md:text-xl text-gray-600 max-w-xl leading-relaxed opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
          >
            AFF invests in african founders with business that need more funds,
            we work hand in hand in helping lift your business off the ground.
          </p>
          <div
            className="pt-2 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
          >
            <a
              href="mailto:dickson@aff.capital"
              className="inline-block w-[40%] px-10 py-4 rounded-lg bg-[#FDCB00] text-white text-lg font-semibold shadow-lg transition-all duration-300 hover:bg-[#e6b800] hover:shadow-xl hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[#FDCB00] focus:ring-offset-2 cursor-pointer text-center"
            >
              Get Started
            </a>
          </div>
        </div>
        <div
          className="relative rounded-2xl overflow-hidden bg-white shadow-xl opacity-0 animate-slide-in-right"
          style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
        >
          <div className="aspect-[4/3] relative">
            <Image
              src="/assets/mathieu.png"
              alt="African founders building the future"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
