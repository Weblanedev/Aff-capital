import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
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
          fontSize: 13,
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
