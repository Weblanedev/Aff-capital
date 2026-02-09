"use client";

import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 animate-fade-in">
      <div className="max-w-[90%] mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#"
          className="flex items-center gap-2 group"
          aria-label="AFF Home"
        >
          <Image
            src="/assets/logo.png"
            alt="AFF"
            width={96}
            height={96}
            className="transition-transform duration-300 group-hover:scale-105"
          />
        </a>
        <a
          href="mailto:dickson@aff.capital"
          className="inline-block px-6 py-2.5 rounded-full border-2 border-[#FDCB00] bg-white text-gray-900 font-medium transition-all duration-300 hover:bg-[#FDCB00] hover:text-aff-navy focus:outline-none focus:ring-2 focus:ring-[#FDCB00] focus:ring-offset-2 cursor-pointer"
        >
          Contact Us
        </a>
      </div>
    </header>
  );
}
