import React from "react";
// challenge_Support r1
export default function R13({ n = 2, color = "#9A9B57" }) {
  const y = 462 - n * 15;
  const h = n * 15;
  return <rect x={294} y={y} width={24} height={h} rx={2} fill={color} />;
  // return <rect x={294} y={437} width={24} height={25} rx={2} fill="#9A9B57" />;
}
