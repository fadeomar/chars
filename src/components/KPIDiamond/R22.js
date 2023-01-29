import React from "react";
// action_reflection r2
export default function R22({ n = 1.5, color = "#E2B465" }) {
  const h = n * 15 * 0.9;
  const x = 229.346;
  const y = 306.428 - n * 13.5;
  return (
    <rect
      x={x}
      y={y}
      width={24}
      height={h}
      rx={2}
      transform="rotate(120 229.346 250.928)"
      fill={color}
    />
  );
}
