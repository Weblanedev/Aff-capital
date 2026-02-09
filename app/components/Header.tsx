"use client";

import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 animate-fade-in">
      <div className="max-w-[90%] mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between gap-3">
        <a
          href="#"
          className="flex items-center gap-2 group shrink-0"
          aria-label="AFF Home"
        >
          <Image
            src="/assets/logo.png"
            alt="AFF"
            width={96}
            height={96}
            className="h-8 w-auto sm:h-10 md:h-12 lg:h-14 object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </a>
        <a
          href="mailto:dickson@aff.capital"
          className="inline-block min-h-[44px] flex items-center justify-center px-4 sm:px-6 py-2.5 rounded-full border-2 border-[#FDCB00] bg-white text-gray-900 text-sm sm:text-base font-medium transition-all duration-300 hover:bg-[#FDCB00] hover:text-aff-navy focus:outline-none focus:ring-2 focus:ring-[#FDCB00] focus:ring-offset-2 cursor-pointer shrink-0"
        >
          Contact Us
        </a>
      </div>
    </header>
  );
}
