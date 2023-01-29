import * as d3 from "d3";
import { useState } from "react";
import Arc from "./Arc";
const DrilldownPie = ({ data, x, y }) => {
  const [renderData, setRenderData] = useState(data);
  console.log({ data });
  const pie = d3.pie().value((d) => d.value);
  const drillDown = (index) => {
    console.log({ index, renderData });
    setRenderData(renderData[index].children);
  };
  return (
    <g transform={`translate(${x}, ${y})`}>
      {pie(renderData).map((d) => (
        <Arc arcData={d} key={d.index} onClick={() => drillDown(d.index)} />
      ))}
    </g>
  );
};

export default DrilldownPie;
