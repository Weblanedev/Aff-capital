export type HelpCard = {
  title: string;
  description: string;
  metric: string;
};

export const helpCards: HelpCard[] = [
  {
    title: "Strategic Capital",
    description:
      "Adequate funding to ensure companies can execute their vision and reach key milestones.",
    metric: "Lead / Follow",
  },
  {
    title: "Talent Acquisition",
    description:
      "Access to our network of exceptional engineers, operators, and leaders across Africa and globally.",
    metric: "Global Network",
  },
  {
    title: "Strategic Partnerships",
    description:
      "Connect with potential customers, distribution partners, and strategic allies across our ecosystem.",
    metric: "Ecosystem",
  },
  {
    title: "Regulatory Navigation",
    description:
      "Navigate complex regulatory environments with insights from our network of legal experts.",
    metric: "Expert Network",
  },
  {
    title: "Follow-on Funding",
    description:
      "Maintain meaningful ownership and support through subsequent funding rounds and growth stages.",
    metric: "Long-term",
  },
  {
    title: "Market Expansion",
    description:
      "Scale beyond initial markets with insights into new geographies and customer segments.",
    metric: "Scale Ready",
  },
];

export const metricBadgeClassName =
  "flex items-center justify-center mt-4 p-3 bg-emerald-900/20 rounded-xl border border-emerald-700/30 w-full text-center";

export const metricBadgeTextClassName =
  "text-sm font-semibold text-emerald-300 uppercase tracking-wide";
