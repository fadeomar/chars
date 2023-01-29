import React from "react";
// direct empower r1
export default function R9({ n = 2, color = "#E2B465" }) {
  const h = n * 15 * 0.9;

  return (
    <rect
      x={479.396}
      y={375.158}
      width={24}
      height={h}
      rx={2}
      transform="rotate(-60 479.396 380.158)"
      fill={color}
    />
  );
}
