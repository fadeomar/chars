import React from "react";
// challenge_Support r3
export default function R15({ n = 4, color = "#E2B465" }) {
  const y = 468;
  const h = n * 15;
  return <rect x={294} y={y} width={24} height={h} rx={2} fill={color} />;
}
