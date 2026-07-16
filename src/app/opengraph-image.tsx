import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "A&E Insurance Agency — Independent Medicare Broker, South Florida Since 2009";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          backgroundColor: "#1A1A2E",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "80px 90px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Gold top accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "10px",
            backgroundColor: "#E8A020",
            display: "flex",
          }}
        />

        {/* Blue bottom accent bar */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "5px",
            backgroundColor: "#1A72C0",
            display: "flex",
          }}
        />

        {/* Brand eyebrow */}
        <div
          style={{
            fontSize: "21px",
            fontWeight: "700",
            color: "#E8A020",
            letterSpacing: "5px",
            textTransform: "uppercase",
            marginBottom: "36px",
            display: "flex",
          }}
        >
          A&amp;E INSURANCE AGENCY · EST. 2009
        </div>

        {/* Main headline */}
        <div
          style={{
            fontSize: "66px",
            fontWeight: "800",
            color: "#FFFFFF",
            lineHeight: "1.08",
            marginBottom: "30px",
            maxWidth: "920px",
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          Get Your Medicare Right the First Time.
        </div>

        {/* Trust signal row */}
        <div
          style={{
            fontSize: "25px",
            color: "#94A3B8",
            marginBottom: "52px",
            display: "flex",
            letterSpacing: "0.3px",
          }}
        >
          Independent Broker&nbsp;·&nbsp;25+ Carriers&nbsp;·&nbsp;Licensed in 35 States
        </div>

        {/* Author attribution */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "18px",
          }}
        >
          <div
            style={{
              width: "4px",
              height: "52px",
              backgroundColor: "#E8A020",
              borderRadius: "2px",
              display: "flex",
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "4px",
            }}
          >
            <div
              style={{
                fontSize: "22px",
                fontWeight: "700",
                color: "#FFFFFF",
                display: "flex",
              }}
            >
              Steve Germain
            </div>
            <div
              style={{
                fontSize: "17px",
                color: "#94A3B8",
                display: "flex",
              }}
            >
              Author of Medicare Decoded · South Florida
            </div>
          </div>
        </div>

        {/* URL watermark bottom-right */}
        <div
          style={{
            position: "absolute",
            bottom: "28px",
            right: "90px",
            fontSize: "15px",
            color: "#4B5563",
            letterSpacing: "1px",
            display: "flex",
          }}
        >
          aeinsurancefl.com
        </div>
      </div>
    ),
    { ...size }
  );
}
