import { useEffect, useRef } from "react";
import ff from "./ff";

const FFF = () => {
  const ref = useRef();
  const data = {
    n1: { n: 3, color: "#E2B465" },
    n2: { n: 3, color: "#E2B465" },
    n3: { n: 4, color: "#E2B465" },
    n4: { n: 3, color: "red" },

    n5: { n: 3, color: "#E2B465" },
    n6: { n: 5, color: "#E2B465" },
    n7: { n: 3, color: "#E2B465" },
    n8: { n: 3, color: "green" },
    n9: { n: 6, color: "#E2B465" },

    n10: { n: 3, color: "#E2B465" },
    n11: { n: 3, color: "green" },
    n12: { n: 2, color: "#E2B465" },
    n13: { n: 3, color: "#E2B465" },
    n14: { n: 2.5, color: "#E2B465" },
    n15: { n: 3, color: "gold" },
    n16: { n: 3, color: "#E2B465" },
    n17: { n: 1, color: "#E2B465" },
    n18: { n: 3, color: "#E2B465" },
    n19: { n: 3, color: "blue" },
    n20: { n: 3, color: "#E2B465" },
    n21: { n: 3, color: "#E2B465" },
    n22: { n: 3, color: "#E2B465" },
    n23: { n: 3, color: "#E2B465" },
    n24: { n: 3, color: "green" },
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
