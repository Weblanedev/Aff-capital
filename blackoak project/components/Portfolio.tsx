import { getAssetUrl } from "../lib/images";

export default function Portfolio(): JSX.Element {
  const companies = [
    {
      name: "PayWeave",
      tagline: "Unified payments for African SMEs",
      sector: "Fintech",
    },
    {
      name: "GridStack",
      tagline: "Software for distributed energy fleets",
      sector: "Energy",
    },
    {
      name: "EduBridge",
      tagline: "Credentialing and financing for learners",
      sector: "Education",
    },
    {
      name: "CoreNest",
      tagline: "Composable core banking for challengers",
      sector: "Banking",
    },
    {
      name: "NovaCredit",
      tagline: "Alt-data underwriting rails",
      sector: "Fintech",
    },
    {
      name: "Lumina",
      tagline: "Solar-as-a-service for last-mile",
      sector: "Energy",
    },
  ];
  return (
    <section id="portfolio" className="section">
      <div className="container">
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            gap: 16,
            flexWrap: "wrap",
          }}
        >
          <h2 style={{ margin: 0 }}>Selected portfolio</h2>
          <span className="muted">
            Representative; includes active and prior investments
          </span>
        </div>
        <div className="card-grid" style={{ marginTop: 16 }}>
          {companies.map((c) => {
            const logo =
              getAssetUrl(`logos/${c.name.toLowerCase()}.png`) ||
              getAssetUrl(`logos/${c.name.toLowerCase()}.svg`);
            const banner =
              getAssetUrl(`portfolio/${c.name.toLowerCase()}.jpg`) ||
              getAssetUrl(`portfolio/${c.name.toLowerCase()}.webp`);
            return (
              <div
                key={c.name}
                className="card"
                style={{ gridColumn: "span 4", overflow: "hidden", padding: 0 }}
              >
                {banner && (
                  <img
                    src={banner}
                    alt={`${c.name} banner`}
                    style={{
                      width: "100%",
                      height: 120,
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                )}
                <div
                  style={{
                    padding: 16,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 12,
                  }}
                >
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 12 }}
                  >
                    {logo && (
                      <img
                        src={logo}
                        alt={`${c.name} logo`}
                        style={{
                          width: 36,
                          height: 36,
                          borderRadius: 8,
                          objectFit: "cover",
                        }}
                      />
                    )}
                    <div>
                      <strong style={{ fontSize: 18 }}>{c.name}</strong>
                      <div className="muted" style={{ marginTop: 6 }}>
                        {c.tagline}
                      </div>
                    </div>
                  </div>
                  <div className="pill">{c.sector}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
