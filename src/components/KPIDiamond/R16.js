import React from "react";
// challenge_Support r4
export default function R16({ n = 3, color = "#E2B465" }) {
  const y = 468;
  const h = n * 15;
  return <rect x={330} y={y} width={24} height={h} rx={2} fill={color} />;
}
