export type SectorFocusArea = {
  icon: string;
  title: string;
  description: string;
  bullets: string[];
  stat: string;
};

export const sectorFocusAreas: SectorFocusArea[] = [
  {
    icon: "💳",
    title: "Fintech & Payments",
    description:
      "Revolutionizing financial services through innovative payment solutions, digital lending platforms, and seamless B2B infrastructure.",
    bullets: ["Digital Payments", "Cross-border Transactions"],
    stat: "1.4B Population",
  },
  {
    icon: "🏦",
    title: "Banking & Infrastructure",
    description:
      "Building the foundation of modern banking with core systems, regulatory compliance, and identity verification solutions.",
    bullets: ["KYC/AML Solutions", "Banking Infrastructure"],
    stat: "54 Countries",
  },
  {
    icon: "🎓",
    title: "Education & Talent",
    description:
      "Empowering the next generation through innovative learning platforms, talent development tools, and educational financing solutions.",
    bullets: ["Talent Development", "Educational Finance"],
    stat: "80% Mobile Penetration",
  },
  {
    icon: "⚡",
    title: "Energy & Infrastructure",
    description:
      "Transforming energy infrastructure with distributed generation, advanced storage solutions, and intelligent grid management.",
    bullets: ["Grid Software", "Smart Infrastructure"],
    stat: "60% Youth Population",
  },
];

export type SectorApproach = {
  title: string;
  description: string;
  tags: string[];
};

export const sectorApproaches: SectorApproach[] = [
  {
    title: "Early Stage Focus",
    description:
      "We invest at seed and Series A stages when companies are defining their market position and building core teams.",
    tags: ["Seed", "Series A"],
  },
  {
    title: "Long-term Partnership",
    description:
      "We build lasting relationships with founders, supporting them through multiple funding rounds and growth stages.",
    tags: ["Multi-Round", "Growth"],
  },
  {
    title: "Ecosystem Building",
    description:
      "We actively connect our portfolio companies with each other, creating network effects that benefit all participants.",
    tags: ["Network", "Collaboration"],
  },
];

export function SectorFocusCard({ area }: { area: SectorFocusArea }) {
  return (
    <div className="bg-[#1e293b] border border-slate-600 rounded-3xl p-6 sm:p-8 relative overflow-hidden">
      <div className="flex items-center gap-4 mb-6">
        <div className="text-4xl filter drop-shadow-lg">{area.icon}</div>
        <h3 className="text-xl sm:text-2xl font-bold text-white">{area.title}</h3>
      </div>
      <p className="text-gray-300 text-base leading-relaxed mb-6">
        {area.description}
      </p>
      <div className="space-y-3 mb-6">
        {area.bullets.map((bullet) => (
          <div key={bullet} className="flex items-center gap-3">
            <div className="w-2 h-2 bg-emerald-500 rounded-full shrink-0" />
            <span className="text-gray-200 text-sm sm:text-base">{bullet}</span>
          </div>
        ))}
      </div>
      <div className="text-center">
        <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-900/30 to-emerald-900/30 border border-blue-700 rounded-full text-blue-300 text-sm font-semibold uppercase tracking-wide">
          {area.stat}
        </span>
      </div>
    </div>
  );
}

export function SectorApproachCard({ approach }: { approach: SectorApproach }) {
  return (
    <div className="bg-[#1e293b] border border-slate-600 rounded-2xl p-6 sm:p-8 text-center relative overflow-hidden">
      <h4 className="text-xl sm:text-2xl font-semibold text-white mb-4">
        {approach.title}
      </h4>
      <p className="text-gray-300 text-base leading-relaxed mb-6">
        {approach.description}
      </p>
      <div className="flex gap-2 justify-center flex-wrap">
        {approach.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-2 bg-emerald-900/30 text-emerald-300 rounded-full text-sm font-medium border border-emerald-700"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
