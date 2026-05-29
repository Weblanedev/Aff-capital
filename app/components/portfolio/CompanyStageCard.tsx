type CompanyStage = {
  title: string;
  description: string;
  badge: string;
  badgeClassName: string;
  hoverBorderClassName: string;
};

export const companyStages: CompanyStage[] = [
  {
    title: "Seed Stage",
    description:
      "Early-stage companies with innovative ideas and strong founding teams. We provide initial support and strategic guidance to help validate concepts.",
    badge: "Product Validation",
    badgeClassName:
      "bg-emerald-900/30 text-emerald-300 border-emerald-700",
    hoverBorderClassName: "hover:border-emerald-500",
  },
  {
    title: "Series A",
    description:
      "Companies with proven product-market fit and early traction. We help scale operations and expand into new markets.",
    badge: "Market Expansion",
    badgeClassName: "bg-blue-900/30 text-blue-300 border-blue-700",
    hoverBorderClassName: "hover:border-blue-500",
  },
  {
    title: "Series B+",
    description:
      "Established companies with strong growth and market leadership. We support expansion and help prepare for potential exits.",
    badge: "Scale & Exit",
    badgeClassName:
      "bg-emerald-900/30 text-emerald-300 border-emerald-700",
    hoverBorderClassName: "hover:border-emerald-500",
  },
];

export function CompanyStageCard({
  stage,
  interactive = false,
}: {
  stage: CompanyStage;
  interactive?: boolean;
}) {
  return (
    <div
      className={`bg-[#1e293b] border border-slate-600 rounded-2xl p-6 sm:p-8 text-center relative overflow-hidden group ${
        interactive
          ? `transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${stage.hoverBorderClassName}`
          : ""
      }`}
    >
      {interactive && (
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      )}
      <div className="relative z-10">
        <h4 className="text-xl sm:text-2xl font-semibold text-white mb-4">
          {stage.title}
        </h4>
        <p className="text-gray-300 text-base leading-relaxed mb-6">
          {stage.description}
        </p>
        <div className="flex justify-center">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border ${stage.badgeClassName}`}
          >
            <span>{stage.badge}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
