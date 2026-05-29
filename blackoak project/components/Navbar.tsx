import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../assets/logo.svg";

export default function Navbar(): JSX.Element {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    console.log("Mobile menu toggled:", !isMobileMenuOpen);
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    console.log("Mobile menu closing");
    setIsMobileMenuOpen(false);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/30 border-b border-white/10 transition-all duration-300">
        <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
          <Link to="/" className="text-white" onClick={closeMobileMenu}>
            <img
              src={logo}
              alt="Blackoak Ventures Logo"
              className="w-32 h-10"
            />
          </Link>

          {/* Desktop Navigation - Hidden on mobile, visible on md+ */}
          <div className="hidden md:flex items-center space-x-6">
            <NavLink
              to="/thesis"
              className="text-white hover:text-blue-300 transition-colors"
            >
              Thesis
            </NavLink>
            <NavLink
              to="/sectors"
              className="text-white hover:text-blue-300 transition-colors"
            >
              Sectors
            </NavLink>
            <NavLink
              to="/portfolio"
              className="text-white hover:text-blue-300 transition-colors"
            >
              Portfolio
            </NavLink>

            <NavLink to="/contact" className="btn btn-primary">
              Pitch Ideas
            </NavLink>
          </div>

          {/* Mobile Menu Button - Only visible on mobile */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden flex flex-col justify-around w-8 h-8 bg-transparent border-none cursor-pointer p-0"
            aria-label="Toggle mobile menu"
          >
            <span
              className={`w-full h-0.5 bg-white rounded transition-all duration-300 ${
                isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></span>
            <span
              className={`w-full h-0.5 bg-white rounded transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`w-full h-0.5 bg-white rounded transition-all duration-300 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></span>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Overlay - Completely outside navbar structure */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black flex flex-col items-center justify-start z-[99999]"
          style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0 }}
        >
          {/* Close Button - Positioned same as hamburger */}
          <button
            onClick={closeMobileMenu}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center transition-all duration-300"
            aria-label="Close mobile menu"
          >
            <span className="text-white text-3xl font-light">×</span>
          </button>

          {/* Navigation Items Container */}
          <div className="flex flex-col items-start w-full pt-20 px-6">
            <NavLink
              to="/thesis"
              className="w-full text-left border-b border-white/10 py-6 text-2xl font-semibold text-white transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-600/20 hover:to-purple-600/20 bg-gradient-to-r from-gray-800/30 to-gray-700/30 flex items-center gap-4 px-4"
              onClick={closeMobileMenu}
            >
              <span className="text-3xl">📚</span>
              Thesis
            </NavLink>
            <NavLink
              to="/sectors"
              className="w-full text-left border-b border-white/10 py-6 text-2xl font-semibold text-white transition-all duration-300 hover:bg-gradient-to-r hover:from-green-600/20 hover:to-teal-600/20 bg-gradient-to-r from-gray-800/30 to-gray-700/30 flex items-center gap-4 px-4"
              onClick={closeMobileMenu}
            >
              <span className="text-3xl">🏢</span>
              Sectors
            </NavLink>
            <NavLink
              to="/portfolio"
              className="w-full text-left border-b border-white/10 py-6 text-2xl font-semibold text-white transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-pink-600/20 bg-gradient-to-r from-gray-800/30 to-gray-700/30 flex items-center gap-4 px-4"
              onClick={closeMobileMenu}
            >
              <span className="text-3xl">💼</span>
              Portfolio
            </NavLink>
            <NavLink
              to="/contact"
              className="w-full text-left py-6 text-2xl font-semibold text-white transition-all duration-300 hover:bg-gradient-to-r hover:from-orange-600/20 hover:to-red-600/20 bg-gradient-to-r from-gray-800/30 to-gray-700/30 flex items-center gap-4 px-4"
              onClick={closeMobileMenu}
            >
              <span className="text-3xl">💡</span>
              Pitch Ideas
            </NavLink>
          </div>
        </div>
      )}
    </>
  );
}
