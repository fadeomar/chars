import React from "react";
// direct empower r4
export default function R12({ n = 1, color = "#E2B465" }) {
  const h = n * 15 * 0.9;
  const x = 405.5;
  const y = 430.5 - n * 13.5;
  return (
    <rect
      x={x}
      y={y}
      width={24}
      height={h}
      rx={2}
      transform="rotate(-60 405.32 378.961)"
      fill={color}
    />
  );
}
