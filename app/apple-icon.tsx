import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#FFFFFF",
          color: "#202D4E",
          fontSize: 72,
          fontWeight: 800,
          letterSpacing: "-0.06em",
          fontFamily: "system-ui, -apple-system, Segoe UI, sans-serif",
        }}
      >
        AFF
      </div>
    ),
    { ...size }
  );
}
