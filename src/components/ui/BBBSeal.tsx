"use client";

/**
 * BBBSeal — Official Better Business Bureau accreditation badge.
 *
 * Rules:
 * - The iframe src is never modified — only the official BBB embed URL is used.
 * - Inline width/height are removed from the iframe element and controlled via CSS wrapper.
 * - Max size is capped at the official 293×61px to comply with BBB display requirements.
 * - On screens narrower than 293px, CSS scale() shrinks the badge proportionally without
 *   modifying the iframe itself, preserving the official embed while preventing overflow.
 * - The fixed-height wrapper reserves space before the iframe loads, preventing CLS.
 */
export default function BBBSeal() {
  return (
    <div className="bbb-seal-outer">
      <div className="bbb-seal-inner">
        <iframe
          title="Better Business Bureau Accredited Business"
          loading="lazy"
          src="https://seal-seflorida.bbb.org/frame/blue-seal-293-61-whitetxt-bbb-92035845.png?chk=8D1510C4D2"
          style={{
            border: "none",
            width: "293px",
            height: "61px",
            display: "block",
          }}
        />
      </div>

    </div>
  );
}
