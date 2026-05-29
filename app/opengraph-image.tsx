import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { SITE_DESCRIPTION, SITE_NAME } from "./lib/site-metadata";
import { AFF_TAGLINE } from "./lib/aff-copy";

export const alt = `${SITE_NAME} — ${AFF_TAGLINE}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const logoPath = join(process.cwd(), "public/assets/logo-white.png");
  const logoData = await readFile(logoPath);
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

  const description =
    SITE_DESCRIPTION.length > 140
      ? `${SITE_DESCRIPTION.slice(0, 137)}…`
      : SITE_DESCRIPTION;

  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #202D4E 0%, #2a3a62 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "64px 80px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <img src={logoSrc} width={320} height={106} alt="" />
        <p
          style={{
            fontSize: 52,
            fontWeight: 700,
            color: "#FDCB00",
            margin: "36px 0 0",
            textAlign: "center",
            lineHeight: 1.15,
          }}
        >
          {AFF_TAGLINE}
        </p>
        <p
          style={{
            fontSize: 26,
            color: "#cbd5e1",
            margin: "28px 0 0",
            textAlign: "center",
            lineHeight: 1.45,
            maxWidth: 920,
          }}
        >
          {description}
        </p>
      </div>
    ),
    { ...size }
  );
}
