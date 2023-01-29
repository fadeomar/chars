import React from "react";
// challenge_Support r2
export default function R14({ n = 4, color = "#E2B465" }) {
  const y = 462 - n * 15;
  const h = n * 15;
  return <rect x={330} y={y} width={24} height={h} rx={2} fill={color} />;
  // return <rect x={330} y={404} width={24} height={58} rx={2} fill="#E2B465" />;
}
