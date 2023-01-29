import { useEffect, useRef } from "react";
import { toPng, toJpeg, toSvg, toCanvas } from "html-to-image";
import KPIDiamond from "../KPIDiamond";

const PDFElements = ({ setUrls }) => {
  const ref = useRef(null);
  useEffect(() => {
    console.log({ ref: ref.current });
    if (ref.current) {
      toCanvas(ref.current)
        .then(function (canvas) {
          const imgData = canvas.toDataURL("img/png");
          setUrls((old) => ({ ...old, reportImg: imgData }));

          // setUrls((old) => ({ ...old, reportImg: dataUrl }));
          // var img = new Image();
          // img.src = dataUrl;
          // document.body.appendChild(img);
        })
        .catch(function (error) {
          console.error("oops, something went wrong!", error);
        });
    }
  }, []);
  return (
    <div style={{ position: "absolute", top: "-4000px" }}>
      <div ref={ref} style={{ width: 660, height: 605 }}>
        <KPIDiamond />
      </div>
    </div>
  );
};

export default PDFElements;
