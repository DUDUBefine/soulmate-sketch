import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Soulmate Sketch - Discover What Your Soulmate Looks Like";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(180deg, #1a1033 0%, #2D1B4E 100%)",
          fontFamily: "Georgia, serif",
          padding: "60px",
        }}
      >
        {/* Decorative glow */}
        <div
          style={{
            position: "absolute",
            top: "40%",
            left: "50%",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(201,169,110,0.12) 0%, transparent 70%)",
            display: "flex",
            transform: "translate(-50%, -50%)",
          }}
        />

        {/* Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "8px 24px",
            borderRadius: "20px",
            border: "1px solid rgba(201,169,110,0.4)",
            background: "rgba(201,169,110,0.1)",
            marginBottom: "30px",
            fontSize: "18px",
            color: "#C9A96E",
          }}
        >
          ✦ AI-POWERED &amp; FREE
        </div>

        {/* Title */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              fontSize: "72px",
              fontWeight: 700,
              color: "#F8F6FF",
              display: "flex",
              lineHeight: 1.1,
            }}
          >
            Soulmate
          </div>
          <div
            style={{
              fontSize: "72px",
              fontWeight: 700,
              color: "#C9A96E",
              fontStyle: "italic",
              display: "flex",
              lineHeight: 1.1,
            }}
          >
            Sketch
          </div>
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: "28px",
            color: "rgba(255,255,255,0.75)",
            marginTop: "24px",
            display: "flex",
            textAlign: "center",
          }}
        >
          Discover what your soulmate looks like
        </div>

        {/* CTA */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "40px",
            padding: "16px 48px",
            borderRadius: "30px",
            background: "#C9A96E",
            fontSize: "26px",
            fontWeight: 700,
            color: "#1a1033",
          }}
        >
          Try It Free ✦
        </div>
      </div>
    ),
    size
  );
}
