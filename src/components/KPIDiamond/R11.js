import React from "react";
// direct empower r3
export default function R11({ n = 6, color = "#9A9B57" }) {
  const h = n * 15 * 0.9;
  const x = 405.5;
  const y = 409.5 - n * 13.5;
  return (
    <rect
      x={x}
      y={y}
      width={24}
      height={h}
      rx={2}
      transform="rotate(-60 406 337.783)"
      fill={color}
    />
  );
}
