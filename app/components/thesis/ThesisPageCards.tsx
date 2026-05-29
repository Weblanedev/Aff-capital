type ThesisPhilosophyCardData = {
  title: string;
  description: string;
  stats?: string[];
  tags?: string[];
  features?: string[];
};

export function ThesisPhilosophyCard({
  card,
}: {
  card: ThesisPhilosophyCardData;
}) {
  return (
    <div
      className="border border-gray-200 dark:border-gray-600 rounded-3xl p-6 sm:p-8 transition-all duration-400 relative overflow-hidden group"
      style={{ background: "var(--card)" }}
    >
      <h3 className="text-white font-bold text-2xl mb-4 leading-tight">
        {card.title}
      </h3>
      <p className="text-gray-200 text-lg leading-relaxed">{card.description}</p>
      {card.stats && (
        <div className="flex gap-3 mt-5 flex-wrap">
          {card.stats.map((stat) => (
            <span
              key={stat}
              className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg shadow-emerald-500/30"
            >
              {stat}
            </span>
          ))}
        </div>
      )}
      {card.tags && (
        <div className="flex gap-2 mt-5 flex-wrap">
          {card.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-gradient-to-r from-emerald-500 to-blue-500 text-white text-sm font-semibold rounded-xl shadow-lg"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      {card.features && (
        <div className="flex gap-2 mt-5 flex-wrap">
          {card.features.map((feature) => (
            <span
              key={feature}
              className="px-3 py-1 bg-gradient-to-r from-emerald-500 to-blue-500 text-white text-sm font-semibold rounded-xl shadow-lg"
            >
              {feature}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

type ThesisStrategyCardData = {
  title: string;
  description: string;
  tags: string[];
};

export function ThesisStrategyCard({
  card,
}: {
  card: ThesisStrategyCardData;
}) {
  return (
    <div
      className="border border-gray-200 dark:border-gray-600 rounded-2xl p-6 sm:p-8 relative overflow-hidden group"
      style={{ background: "var(--card)" }}
    >
      <h4 className="text-xl font-semibold text-white mb-4">{card.title}</h4>
      <p className="text-gray-200 mb-4">{card.description}</p>
      <div className="flex gap-2 mt-4 flex-wrap">
        {card.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 bg-gradient-to-r from-emerald-500 to-blue-500 text-white text-sm font-semibold rounded-xl shadow-lg"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export type { ThesisPhilosophyCardData, ThesisStrategyCardData };
