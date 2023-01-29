import React from "react";
// Task focus r1
export default function R5({ n = 4, color = "#9A9B57" }) {
  const h = n * 15 * 0.9;
  return (
    <rect
      width={24}
      height={h}
      rx={2}
      transform="matrix(0.5 0.866025 0.866025 -0.5 455.117 188)"
      fill={color}
    />
  );
}
