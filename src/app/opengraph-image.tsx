import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Parlezhub: AI-powered language learning and expert marketplace";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "76px",
          color: "#172d35",
          background: "linear-gradient(135deg, #fff8f1 0%, #ffffff 58%, #fff1e5 100%)",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            fontSize: 32,
            fontWeight: 700,
            color: "#172d35",
          }}
        >
          <div
            style={{
              width: 54,
              height: 54,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 14,
              color: "white",
              background: "#f47c20",
              fontSize: 30,
            }}
          >
            P
          </div>
          Parlez<span style={{ color: "#f47c20" }}>hub</span>
        </div>
        <div style={{ marginTop: 54, fontSize: 68, fontWeight: 700, lineHeight: 1.1, maxWidth: 940 }}>
          Learn languages. Connect with experts.
        </div>
        <div style={{ marginTop: 28, fontSize: 30, color: "#51636a" }}>
          AI voice practice and a global teacher marketplace
        </div>
        <div
          style={{
            position: "absolute",
            right: -90,
            bottom: -200,
            width: 430,
            height: 430,
            borderRadius: 215,
            background: "rgba(244, 124, 32, 0.12)",
          }}
        />
      </div>
    ),
    size,
  );
}
