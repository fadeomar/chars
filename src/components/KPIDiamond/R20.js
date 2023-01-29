import React from "react";
// stability_change r4
export default function R20({ n = 4, color = "#9A9B57" }) {
  const h = n * 15 * 0.9;
  const x = 163.074;
  const y = 405.336;
  return (
    <rect
      x={x}
      y={y}
      width={24}
      height={h}
      rx={2}
      transform="rotate(60 186.074 411.336)"
      fill={color}
    />
  );
}
