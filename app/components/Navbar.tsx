"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import AffIcon from "./AffIcon";
import ImageWithSkeleton from "./skeleton/ImageWithSkeleton";
import { AFF_ICONS } from "../lib/assets";

const navLinks = [
  { href: "/thesis", label: "Thesis", icon: AFF_ICONS.ventureCapital },
  { href: "/sectors", label: "Sectors", icon: AFF_ICONS.banking },
  { href: "/portfolio", label: "Portfolio", icon: AFF_ICONS.payments },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const linkClass = (href: string) =>
    pathname === href
      ? "text-[var(--accent)] font-medium"
      : "text-white hover:text-[var(--accent-2)] transition-colors";

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/30 border-b border-white/10 transition-all duration-300">
        <div className="w-full mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/" className="text-white" onClick={closeMobileMenu}>
            <ImageWithSkeleton
              src="/assets/logo-white.png"
              alt="African Founders Fund"
              width={140}
              height={48}
              className="h-9 w-auto sm:h-10"
              priority
              skeletonClassName="h-9 w-[120px] sm:h-10"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map(({ href, label }) => (
              <Link key={href} href={href} className={linkClass(href)}>
                {label}
              </Link>
            ))}
            <Link href="/contact" className="btn btn-primary">
              Pitch Ideas
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            className="md:hidden flex flex-col justify-around w-8 h-8 bg-transparent border-none cursor-pointer p-0"
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span
              className={`w-full h-0.5 bg-white rounded transition-all duration-300 ${
                isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`w-full h-0.5 bg-white rounded transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-full h-0.5 bg-white rounded transition-all duration-300 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-[var(--bg)] flex flex-col items-center justify-start z-[99999]">
          <button
            type="button"
            onClick={closeMobileMenu}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center"
            aria-label="Close mobile menu"
          >
            <span className="text-white text-3xl font-light">×</span>
          </button>

          <div className="flex flex-col items-start w-full pt-20 px-6">
            {navLinks.map(({ href, label, icon }) => (
              <Link
                key={href}
                href={href}
                className="w-full text-left border-b border-white/10 py-6 text-2xl font-semibold text-white transition-all duration-300 hover:bg-white/5 flex items-center gap-4 px-4"
                onClick={closeMobileMenu}
              >
                <AffIcon src={icon} alt="" size={36} />
                {label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="w-full text-left py-6 text-2xl font-semibold text-white transition-all duration-300 hover:bg-white/5 flex items-center gap-4 px-4"
              onClick={closeMobileMenu}
            >
              <AffIcon src={AFF_ICONS.renewableEnergy} alt="" size={36} />
              Pitch Ideas
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
