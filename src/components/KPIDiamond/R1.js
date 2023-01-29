import React from "react";

export default function R1({ n = 2.5, color = "#E2B465" }) {
  const y = 128 - n * 15;
  const h = n * 15;
  return <rect x={294} y={y} width={24} height={h} rx={2} fill={color} />;
}
