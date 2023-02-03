import { useEffect, useRef } from "react";
import ff from "./ff";

const FFF = () => {
  const ref = useRef();
  const data = {
    n1: { n: 1, color: "red", circleN: 3, circleColor: "#3F4546" },
    n2: { n: 3, color: "red", circleN: 3, circleColor: "#3F4546" },
    n3: { n: 1.5, color: "red", circleN: 3, circleColor: "#3F4546" },
    n4: { n: 6, color: "#E2B465", circleN: 3, circleColor: "#3F4546" },

    n5: { n: 6, color: "#E2B465", circleN: 3, circleColor: "#3F4546" },
    n6: { n: 6, color: "#E2B465", circleN: 3, circleColor: "#3F4546" },
    n7: { n: 6, color: "#E2B465", circleN: 3, circleColor: "#3F4546" },
    n8: { n: 6, color: "green", circleN: 3, circleColor: "#3F4546" },
    n9: { n: 6, color: "#E2B465", circleN: 3, circleColor: "#3F4546" },

    n10: { n: 6, color: "#E2B465", circleN: 3, circleColor: "#3F4546" },
    n11: { n: 6, color: "green", circleN: 3, circleColor: "#3F4546" },
    n12: { n: 6, color: "#E2B465", circleN: 3, circleColor: "#3F4546" },
    n13: { n: 6, color: "#E2B465", circleN: 3, circleColor: "#3F4546" },
    n14: { n: 6, color: "#E2B465", circleN: 3, circleColor: "#3F4546" },
    n15: { n: 6, color: "gold", circleN: 3, circleColor: "#3F4546" },
    n16: { n: 6, color: "#E2B465", circleN: 3, circleColor: "#3F4546" },
    n17: { n: 6, color: "#E2B465", circleN: 3, circleColor: "#3F4546" },
    n18: { n: 6, color: "#E2B465", circleN: 3, circleColor: "#3F4546" },
    n19: { n: 6, color: "blue", circleN: 3, circleColor: "#3F4546" },
    n20: { n: 6, color: "#E2B465", circleN: 3, circleColor: "#3F4546" },
    n21: { n: 6, color: "#E2B465", circleN: 3, circleColor: "#3F4546" },
    n22: { n: 6, color: "#E2B465", circleN: 3, circleColor: "#3F4546" },
    n23: { n: 6, color: "#E2B465", circleN: 3, circleColor: "#3F4546" },
    n24: { n: 6, color: "green", circleN: 3, circleColor: "#3F4546" },
  };

  useEffect(() => {
    if (ref?.current) {
      ff(data);
    }
  }, [data, ref?.current]);
  return (
    <div
      className="testrtrrrrrrrrr"
      ref={ref}
      style={{
        border: "1px solid red",
        width: "fit-content",
        transform: "scale(1)",
      }}
    />
  );
};
export default FFF;
