import React from "react";
// Task focus r4
export default function R8({ n = 1, color = "#E2B465" }) {
  const y = 469 - n * 12;
  const x = 222.6 + n * 6.4;
  const h = n * 15 * 0.9;
  return (
    <rect
      width={24}
      height={h}
      rx={2}
      transform={`matrix(0.5 0.866025 0.866025 -0.5 ${y} ${x})`}
      fill={color}
    />
  );
}
