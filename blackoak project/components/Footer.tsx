export default function Footer(): JSX.Element {
  return (
    <footer
      id="footer"
      className="bg-[var(--bg)] border-t border-[var(--border)] relative overflow-hidden py-12 lg:py-16"
    >
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-12 mb-8 lg:mb-12">
          {/* Company Info Section */}
          <div className="flex-1 max-w-lg lg:max-w-md">
            <div className="flex items-center gap-3 mb-5">
              <div className="text-3xl filter drop-shadow-lg">🌳</div>
              <h3 className="text-2xl lg:text-3xl font-bold text-[var(--text)] bg-gradient-to-r from-[var(--text)] to-[var(--accent)] bg-clip-text text-transparent">
                Blackoak
              </h3>
            </div>
            <p className="text-[var(--muted)] leading-relaxed mb-6 text-sm lg:text-base">
              We invest in exceptional founders building the future of finance,
              technology, and sustainable innovation. Our mission is to support
              visionary entrepreneurs who are reshaping industries.
            </p>
          </div>

          {/* Investment Focus Section */}
          <div className="flex-shrink-0 text-center lg:text-left">
            <h4 className="text-[var(--text)] text-lg lg:text-xl font-semibold mb-5">
              🎯 Investment Focus
            </h4>
            <ul className="grid grid-cols-2 gap-3 lg:gap-4 justify-center lg:justify-start max-w-md lg:max-w-none">
              <li className="flex items-center gap-4 p-4 lg:p-4 bg-white/5 border border-white/10 rounded-2xl transition-all duration-300 hover:bg-white/10 hover:border-[var(--accent)]/20 hover:-translate-y-1">
                <span className="text-2xl flex-shrink-0">💳</span>
                <div className="flex flex-col gap-1">
                  <strong className="text-[var(--text)] text-sm lg:text-base font-semibold">
                    Fintech
                  </strong>
                  <span className="text-[var(--muted)] text-xs lg:text-sm">
                    Payments & Banking
                  </span>
                </div>
              </li>
              <li className="flex items-center gap-4 p-4 lg:p-4 bg-white/5 border border-white/10 rounded-2xl transition-all duration-300 hover:bg-white/10 hover:border-[var(--accent)]/20 hover:-translate-y-1">
                <span className="text-2xl flex-shrink-0">🎓</span>
                <div className="flex flex-col gap-1">
                  <strong className="text-[var(--text)] text-sm lg:text-base font-semibold">
                    Education
                  </strong>
                  <span className="text-[var(--muted)] text-xs lg:text-sm">
                    Learning & Talent
                  </span>
                </div>
              </li>
              <li className="flex items-center gap-4 p-4 lg:p-4 bg-white/5 border border-white/10 rounded-2xl transition-all duration-300 hover:bg-white/10 hover:border-[var(--accent)]/20 hover:-translate-y-1">
                <span className="text-2xl flex-shrink-0">⚡</span>
                <div className="flex flex-col gap-1">
                  <strong className="text-[var(--text)] text-sm lg:text-base font-semibold">
                    Energy
                  </strong>
                  <span className="text-[var(--muted)] text-xs lg:text-sm">
                    Clean Tech
                  </span>
                </div>
              </li>
              <li className="flex items-center gap-4 p-4 lg:p-4 bg-white/5 border border-white/10 rounded-2xl transition-all duration-300 hover:bg-white/10 hover:border-[var(--accent)]/20 hover:-translate-y-1">
                <span className="text-2xl flex-shrink-0">🌍</span>
                <div className="flex flex-col gap-1">
                  <strong className="text-[var(--text)] text-sm lg:text-base font-semibold">
                    Infrastructure
                  </strong>
                  <span className="text-[var(--muted)] text-xs lg:text-sm">
                    Digital Foundation
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Interactive Elements Section */}
        <div className="mb-10 lg:mb-12">
          <div className="bg-[var(--bg)] border border-[var(--border)] rounded-3xl p-8 lg:p-12 relative overflow-hidden flex flex-col items-center text-center w-full shadow-lg transition-all duration-300 hover:border-[var(--accent)]/25 hover:-translate-y-1">
            <div className="text-center max-w-2xl mx-auto">
              <h4 className="text-[var(--text)] text-2xl lg:text-3xl font-bold mb-5 bg-gradient-to-r from-[var(--text)] to-[var(--accent)] bg-clip-text text-transparent leading-tight">
                🚀 Ready to Pitch Ideas?
              </h4>
              <p className="text-[var(--muted)] leading-relaxed mb-10 text-base lg:text-lg max-w-2xl mx-auto">
                Let's discuss how we can support your vision and accelerate your
                growth. Start a conversation and let's explore the possibilities
                together.
              </p>

              <div className="flex justify-center items-center">
                <div className="text-center w-full max-w-md">
                  <h5 className="text-[var(--text)] text-lg lg:text-xl font-semibold mb-5 flex items-center justify-center gap-2">
                    🤝 Start a Conversation
                  </h5>
                  <a
                    href="mailto:ideas@blackoak.capital?subject=Ready%20to%20Pitch%20Ideas%20-%20Seeking%20Investment%20Support"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 lg:px-10 lg:py-5 bg-gradient-to-r from-[var(--accent)] to-[#2bd4a7] text-white text-base lg:text-lg font-semibold rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border-2 border-transparent hover:border-[var(--accent)]/30 w-full"
                  >
                    <span>Start Conversation</span>
                    <span className="text-xl transition-transform duration-300 group-hover:scale-110">
                      ✉️
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-[var(--bg)] border-t border-[var(--border)] py-8 lg:py-10 relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center text-center">
            <div className="text-center">
              <p className="text-[var(--muted)] text-sm lg:text-base">
                &copy; 2024 Blackoak Capital. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
