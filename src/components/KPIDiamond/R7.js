import React from "react";
// Task focus r3
export default function R7({ n = 2, color = "#9A9B57" }) {
  const y = 451 - n * 12;
  const x = 193 + n * 6.4;
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
