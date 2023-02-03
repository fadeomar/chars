import { useEffect, useRef } from "react";

import d3Code from "./d3Code";

const data = {
  n1: { n: 6, color: "#E2B465", circleN: 3, circleColor: "red" },
  n2: { n: 1, color: "#E2B465", circleN: 3, circleColor: "red" },
  n3: { n: 4, color: "#E2B465", circleN: 3, circleColor: "red" },
  n4: { n: 3, color: "red", circleN: 3, circleColor: "red" },

  n5: { n: 3, color: "#E2B465", circleN: 3, circleColor: "red" },
  n6: { n: 5, color: "#E2B465", circleN: 3, circleColor: "red" },
  n7: { n: 3, color: "#E2B465", circleN: 3, circleColor: "red" },
  n8: { n: 3, color: "green", circleN: 3, circleColor: "red" },
  n9: { n: 6, color: "#E2B465", circleN: 3, circleColor: "red" },

  n10: { n: 3, color: "#E2B465", circleN: 3, circleColor: "red" },
  n11: { n: 3, color: "green", circleN: 3, circleColor: "red" },
  n12: { n: 2, color: "#E2B465", circleN: 3, circleColor: "red" },
  n13: { n: 3, color: "#E2B465", circleN: 3, circleColor: "red" },
  n14: { n: 2.5, color: "#E2B465", circleN: 3, circleColor: "red" },
  n15: { n: 3, color: "gold", circleN: 3, circleColor: "red" },
  n16: { n: 3, color: "#E2B465", circleN: 3, circleColor: "red" },
  n17: { n: 1, color: "#E2B465", circleN: 3, circleColor: "red" },
  n18: { n: 3, color: "#E2B465", circleN: 3, circleColor: "red" },
  n19: { n: 2, color: "blue", circleN: 3, circleColor: "red" },
  n20: { n: 3, color: "#E2B465", circleN: 3, circleColor: "red" },
  n21: { n: 3, color: "#E2B465", circleN: 3, circleColor: "red" },
  n22: { n: 3, color: "#E2B465", circleN: 3, circleColor: "red" },
  n23: { n: 3, color: "#E2B465", circleN: 3, circleColor: "red" },
  n24: { n: 3, color: "green", circleN: 3, circleColor: "red" },
};

const KPIWheel = () => {
  const ref = useRef();
  useEffect(() => {
    if (ref?.current) {
      d3Code(data);
    }
  }, [data, ref?.current]);
  return (
    <div
      className="KPIWheel"
      ref={ref}
      style={{
        border: "1px solid red",
        width: "fit-content",
        transform: "scale(1)",
      }}
    />
  );
};

export default KPIWheel;
