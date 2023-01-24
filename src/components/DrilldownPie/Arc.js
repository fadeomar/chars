import { useState } from "react";
import * as d3 from "d3";
import styled from "styled-components";

const Path = styled.path`
  fill: ${({ index }) => d3.schemePaired[index]};
  cursor: pointer;
  stroke: black;
`;

const Arc = ({ arcData }) => {
  const [r, setR] = useState(0);
  const arc = d3
    .arc()
    .innerRadius(15 + r)
    .outerRadius(105 + r);
  const onMouseOver = () => {
    setR(20);
  };
  const onMouseOut = () => {
    setR(0);
  };
  return (
    <Path
      d={arc(arcData)}
      index={arcData.data.index}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    />
  );
};

export default Arc;
