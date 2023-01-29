import React from "react";
// Task focus r2
export default function R6({ n = 4, color = "#E2B465" }) {
  const h = n * 15 * 0.9;
  return (
    <rect
      width={24}
      height={h}
      rx={2}
      transform="matrix(0.5 0.866025 0.866025 -0.5 473.117 219.178)"
      fill={color}
    />
  );
}
