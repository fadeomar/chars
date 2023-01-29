import { useState } from "react";
import * as d3 from "d3";
import styled from "styled-components";

/* fill: ${({ index }) => d3.schemePaired[index]}; */
const Path = styled.path`
  fill: ${({ level, prevIndex, index }) => {
    return level === 4
      ? d3.schemePaired[index]
      : d3.color(d3.schemePaired[prevIndex]).brighter(index);
  }};
  cursor: pointer;
  stroke: black;
`;

const Arc = ({ arcData, onClick }) => {
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
      level={arcData.data.level}
      prevIndex={arcData.data.prevIndex}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      onClick={onClick}
    />
  );
};

export default Arc;
