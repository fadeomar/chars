import React from "react";
// direct empower r2
export default function R10({ n = 6, color = "#E2B465" }) {
  const h = n * 15 * 0.9;

  return (
    <rect
      x={461.396}
      y={406.336}
      width={24}
      height={h}
      rx={2}
      transform="rotate(-60 461.396 411.336)"
      fill={color}
    />
  );
}
