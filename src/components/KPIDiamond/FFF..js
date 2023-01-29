import { useEffect, useRef } from "react";
import ff from "./ff";

const FFF = () => {
  const ref = useRef();
  const rendered = useRef(false);
  useEffect(() => {
    if (ref?.current && !rendered?.current) {
      ff();
      // rendered.current = true;
    }
  }, []);
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
