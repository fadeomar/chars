import * as d3 from "d3";
import Arc from "./Arc";
const DrilldownPie = ({ data, x, y }) => {
  console.log({ data });
  const pie = d3.pie().value((d) => d.value);

  return (
    <g transform={`translate(${x}, ${y})`}>
      {pie(data).map((d) => (
        <Arc arcData={d} key={d.index} />
      ))}
    </g>
  );
};

export default DrilldownPie;
