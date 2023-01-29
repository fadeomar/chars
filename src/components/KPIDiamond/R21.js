import React from "react";
// action_reflection r1
export default function R21({ n = 2, color = "#9A9B57" }) {
  const h = n * 15 * 0.9;
  const x = 218.768;
  const y = 226.75 - n * 13.5;
  return (
    <rect
      x={x}
      y={y}
      width={24}
      height={h}
      rx={2}
      transform="rotate(120 218.768 203.25)"
      fill={color}
    />
  );
}
