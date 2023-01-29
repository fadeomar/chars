import React from "react";
// stability_change r2
export default function R18({ n = 4.2, color = "#9A9B57" }) {
  const h = n * 15 * 0.9;
  const x = 174.346;
  const y = 426.678 - h;
  return (
    <rect
      width={24}
      height={h}
      rx={2}
      x={x}
      y={y}
      transform="rotate(60 217.346 415.178)"
      fill={color}
    />
  );
}
