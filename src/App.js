import "./App.css";
// import DrilldownPie from "./components/DrilldownPie";
import KPIDiamond from "./components/KPIDiamond";
import PDFTest from "./components/PDFTest";
import * as d3 from "d3";
import KPIWheel from "./components/KPIWheel";
// import Wheel from "./components/Wheel";

import FFF from "./components/KPIDiamond/FFF.";

// const data = (level, prevIndex) => {
//   const N = d3.randomUniform(1, 10)();
//   return d3.range(N).map((i) => {
//     return {
//       value: Math.abs(d3.randomNormal()()),
//       id: `${level}-${i}`,
//       name: `n-${level}-${i}`,
//       level,
//       index: i,
//       children: level > 0 ? data(level - 1, i) : [],
//       prevIndex,
//     };
//   });
// };
function App() {
  return (
    <div className="App">
      {/* <KPIDiamond /> */}
      {/* <FFF /> */}
      {/* <Wheel /> */}
      {/* <KPIWheel /> */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "500px",
          height: "500px",
        }}
      >
        <p>dddddddddddd sss 360</p>
      </div>
      <PDFTest />
      {/* <svg width="500" height="500">
        <DrilldownPie data={data(4)} x={250} y={250} />
      </svg> */}
    </div>
  );
}

export default App;
