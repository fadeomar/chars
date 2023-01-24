import "./App.css";
import DrilldownPie from "./components/DrilldownPie";
import * as d3 from "d3";

const data = (level) => {
  const N = d3.randomUniform(1, 10)();
  return d3.range(N).map((i) => {
    return {
      value: Math.abs(d3.randomNormal()()),
      id: `${level}-${i}`,
      name: `n-${level}-${i}`,
      level,
      index: i,
      children: level > 0 ? data(level - 1) : [],
    };
  });
};
function App() {
  return (
    <div className="App">
      <svg width="500" height="500">
        <DrilldownPie data={data(4)} x={250} y={250} />
      </svg>
    </div>
  );
}

export default App;
