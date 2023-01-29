import React from "react";

export default function R4({ n = 2.5, color = "#E2B465" }) {
  const y = 134.25;
  const h = n * 15;
  return <rect x={330} y={y} width={24} height={h} rx={2} fill={color} />;
  // <rect x={330} y={134.25} width={24} height={48} rx={2} fill="#E2B465" />
}
