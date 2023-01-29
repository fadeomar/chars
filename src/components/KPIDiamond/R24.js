import React from "react";
// action_reflection r4
export default function R24({ n = 3, color = "#E2B465" }) {
  const h = n * 15 * 0.9;

  return (
    <rect
      x={174.354}
      y={219.178}
      width={24}
      height={h}
      rx={2}
      transform="rotate(120 174.354 219.178)"
      fill="#E2B465"
    />
  );
}
