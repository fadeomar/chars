import * as d3 from "d3";
import styled from "styled-components";

const Path = styled.path`
  fill: ${({ index }) => d3.schemePaired[index]};
  cursor: pointer;
  stroke: black;
`;

const Arc = ({ arcData }) => {
  const arc = d3.arc().innerRadius(5).outerRadius(75);

  return <Path d={arc(arcData)} index={arcData.data.index} />;
};

export default Arc;
