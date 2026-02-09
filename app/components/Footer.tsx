"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#C9A227] text-white py-12 sm:py-16 mt-12 sm:mt-16 md:mt-24">
      <div className="max-w-[90%] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12 md:gap-8 text-center md:text-left">
          <div className="space-y-4 flex flex-col items-center md:items-start">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <Image
                src="/assets/logo-white.png"
                alt="AFF"
                width={96}
                height={96}
                className="h-10 w-auto sm:h-12 md:h-14 object-contain"
              />
              {/* <span className="font-bold text-xl">AFF</span> */}
            </div>
            <p className="text-white/95 text-sm leading-relaxed max-w-xs">
              AFF provides African innovators, with as much funds and resources
              as we can to push entrepreneurship in Africa.
            </p>
            <a
              href="mailto:dickson@aff.capital"
              className="inline-block min-h-[44px] flex items-center justify-center px-6 py-2.5 rounded-full bg-white text-gray-600 font-medium text-sm transition-all duration-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#C9A227] cursor-pointer"
            >
              Email Us
            </a>
          </div>
          <div className="space-y-3 flex flex-col items-center md:items-start">
            <h3 className="font-bold text-lg">Address</h3>
            <p className="text-white/95 text-sm">Lekki</p>
            <p className="text-white/95 text-sm">Lagos, Nigeria</p>
          </div>
          <div className="space-y-3 flex flex-col items-center md:items-start">
            <h3 className="font-bold text-lg">Help</h3>
            <div className="flex flex-col gap-1">
              <button
                type="button"
                className="text-left text-white/95 text-sm hover:underline cursor-pointer"
              >
                Help Center
              </button>
              <button
                type="button"
                className="text-left text-white/95 text-sm hover:underline cursor-pointer"
              >
                How It Works
              </button>
              <button
                type="button"
                className="text-left text-white/95 text-sm hover:underline cursor-pointer"
              >
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
