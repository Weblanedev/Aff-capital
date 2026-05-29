import { getAssetUrl } from "../lib/images";

export default function Team(): JSX.Element {
  const members = [
    {
      name: "Ada Okoye",
      role: "General Partner",
      bio: "Fintech operator; led payments at pan-African scale.",
    },
    {
      name: "Kwame Mensah",
      role: "Partner",
      bio: "Energy and infra expert; ex-utility digital.",
    },
    {
      name: "Lara Adeyemi",
      role: "Platform",
      bio: "Talent, GTM and community builder.",
    },
  ];
  return (
    <section id="team" className="section">
      <div className="container">
        <h2>Team</h2>
        <div className="card-grid" style={{ marginTop: 12 }}>
          {members.map((m) => {
            const avatar =
              getAssetUrl(
                `team/${m.name.toLowerCase().replace(/\s+/g, "-")}.jpg`
              ) ||
              getAssetUrl(
                `team/${m.name.toLowerCase().replace(/\s+/g, "-")}.png`
              );
            return (
              <div
                key={m.name}
                className="card"
                style={{ gridColumn: "span 4" }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                  {avatar ? (
                    <img
                      src={avatar}
                      alt={m.name}
                      style={{
                        width: 56,
                        height: 56,
                        borderRadius: 14,
                        objectFit: "cover",
                      }}
                    />
                  ) : (
                    <div
                      style={{
                        width: 56,
                        height: 56,
                        borderRadius: 14,
                        background:
                          "linear-gradient(135deg, var(--accent), var(--accent-2))",
                      }}
                    />
                  )}
                  <div>
                    <strong>{m.name}</strong>
                    <div className="muted">{m.role}</div>
                  </div>
                </div>
                <p className="muted" style={{ marginTop: 12 }}>
                  {m.bio}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
