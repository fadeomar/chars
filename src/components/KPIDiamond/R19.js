import React from "react";
// stability_change r3
export default function R19({ n = 3, color = "#9A9B57" }) {
  const h = n * 15 * 0.9;
  const x = 143.074;
  const y = 374.158;
  return (
    <rect
      x={x}
      y={y}
      width={24}
      height={h}
      rx={2}
      transform="rotate(60  168.074  380.158)"
      fill={color}
    />
  );
}
