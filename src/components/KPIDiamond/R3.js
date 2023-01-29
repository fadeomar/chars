import React from "react";

export default function R3({ n = 3.5, color = "#E2B465" }) {
  const y = 134.25;
  const h = n * 15;
  return <rect x={294} y={y} width={24} height={h} rx={2} fill={color} />;
  // <rect x={294} y={134.25} width={24} height={59} rx={2} fill="#E2B465" />
}
