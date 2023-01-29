import React, { useState } from "react";
import PDFFile from "./PDFFile";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PDFElements from "./PDFElements";
import { PDFViewer } from "@react-pdf/renderer";

const PDFTest = () => {
  const [urls, setUrls] = useState({});
  return (
    <div className="App">
      <PDFElements setUrls={setUrls} />
      <PDFDownloadLink document={<PDFFile urls={urls} />} filename="FORM">
        {({ loading }) =>
          loading ? (
            <button>Loading Document...</button>
          ) : (
            <button>Download</button>
          )
        }
      </PDFDownloadLink>
      <PDFViewer
        style={{
          width: "100%",
          height: "100vh",
          border: "1px solid red",
          marginTop: 100,
        }}
      >
        <PDFFile urls={urls} />
      </PDFViewer>
    </div>
  );
};

export default PDFTest;
