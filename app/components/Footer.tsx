import AffIcon from "./AffIcon";
import ImageWithSkeleton from "./skeleton/ImageWithSkeleton";
import { AFF_ICONS } from "../lib/assets";
import { AFF_FOOTER_BLURB } from "../lib/aff-copy";

const focusAreas = [
  {
    title: "Fintech",
    subtitle: "Payments & Banking",
    icon: AFF_ICONS.payments,
  },
  {
    title: "Education",
    subtitle: "Learning & Talent",
    icon: AFF_ICONS.ventureCapital,
  },
  {
    title: "Energy",
    subtitle: "Clean Tech",
    icon: AFF_ICONS.renewableEnergy,
  },
  {
    title: "Infrastructure",
    subtitle: "Digital Foundation",
    icon: AFF_ICONS.banking,
  },
];

export default function Footer() {
  return (
    <footer
      id="footer"
      className="bg-[var(--bg)] border-t border-[var(--border)] relative overflow-hidden py-12 lg:py-16"
    >
      <div className="container">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-12">
          <div className="flex-1 max-w-lg lg:max-w-md">
            <div className="flex items-center gap-3 mb-5">
              <ImageWithSkeleton
                src="/assets/logo-white.png"
                alt="African Founders Fund"
                width={120}
                height={40}
                className="h-9 w-auto"
                skeletonClassName="h-9 w-[100px]"
              />
            </div>
            <p className="text-[var(--muted)] leading-relaxed mb-6 text-sm lg:text-base">
              {AFF_FOOTER_BLURB}
            </p>
            <a
              href="mailto:dickson@aff.capital"
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] text-[var(--bg)] text-sm font-semibold rounded-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              Email Us
            </a>
          </div>

          <div className="flex-shrink-0 w-full lg:w-auto text-center lg:text-left">
            <h4 className="text-[var(--text)] text-lg lg:text-xl font-semibold mb-5">
              Investment Focus
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4 justify-center lg:justify-start max-w-md lg:max-w-none mx-auto lg:mx-0">
              {focusAreas.map((area) => (
                <li
                  key={area.title}
                  className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-2xl transition-all duration-300 hover:bg-white/10 hover:border-[var(--accent)]/20 hover:-translate-y-1"
                >
                  <AffIcon src={area.icon} alt={area.title} size={36} />
                  <div className="flex flex-col gap-1 text-left">
                    <strong className="text-[var(--text)] text-sm lg:text-base font-semibold">
                      {area.title}
                    </strong>
                    <span className="text-[var(--muted)] text-xs lg:text-sm">
                      {area.subtitle}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <section
          className="mt-10 lg:mt-12"
          aria-labelledby="footer-pitch-heading"
        >
          <div className="bg-[var(--bg)] border border-[var(--border)] rounded-3xl p-6 sm:p-8 lg:p-12 shadow-lg transition-all duration-300 hover:border-[var(--accent)]/25">
            <div className="text-center max-w-2xl mx-auto">
              <h4
                id="footer-pitch-heading"
                className="text-[var(--text)] text-xl sm:text-2xl lg:text-3xl font-bold mb-5 bg-gradient-to-r from-[var(--text)] to-[var(--accent)] bg-clip-text text-transparent leading-tight flex items-center justify-center gap-3 flex-wrap"
              >
                <AffIcon src={AFF_ICONS.ventureCapital} alt="" size={32} />
                Ready to Pitch Ideas?
              </h4>
              <p className="text-[var(--muted)] leading-relaxed mb-8 text-base lg:text-lg">
                Let&apos;s discuss how we can support your vision and accelerate
                your growth. Start a conversation and explore the possibilities
                together.
              </p>
              <a
                href="mailto:dickson@aff.capital?subject=Ready%20to%20Pitch%20Ideas%20-%20Seeking%20Investment%20Support"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 lg:px-10 lg:py-5 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] text-[var(--bg)] text-base lg:text-lg font-semibold rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border-2 border-transparent hover:border-[var(--accent)]/30 w-full max-w-md mx-auto"
              >
                Start Conversation
              </a>
            </div>
          </div>
        </section>
      </div>

      <div className="bg-[var(--bg)] border-t border-[var(--border)] py-8 lg:py-10 mt-10 lg:mt-12">
        <div className="container">
          <p className="text-[var(--muted)] text-sm lg:text-base text-center">
            &copy; {new Date().getFullYear()} African Founders Fund. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
