import React from "react";
// stability_change r1
export default function R17({ n = 3.5, color = "#E2B465" }) {
  const h = n * 15 * 0.9;
  const x = 136.346;
  const y = 427.178 - h;
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
