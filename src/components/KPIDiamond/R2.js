import React from "react";

export default function R2({ n = 4.5, color = "#9A9B57" }) {
  const y = 128 - n * 15;
  const h = n * 15;
  return <rect x={330} y={y} width={24} height={h} rx={2} fill={color} />;
  // return <rect x={330} y={49.5} width={24} height={79} rx={2} fill="#9A9B57" />;
}
