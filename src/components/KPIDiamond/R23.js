import React from "react";
// action_reflection r3
export default function R23({ n = 5, color = "#E2B465" }) {
  const h = n * 15 * 0.9;

  return (
    <rect
      x={192.354}
      y={188}
      width={24}
      height={h}
      rx={2}
      transform="rotate(120 192.354 188)"
      fill="#E2B465"
    />
  );
}
