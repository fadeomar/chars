import React from "react";
import { Page, Text, Image, Document, View } from "@react-pdf/renderer";
import Cover from "./image10.png";
import { styles } from "./styles";

// pages

import CoverPage from "./Pages/CoverPage";
import Page1 from "./Pages/Page1";
const PDFFile = ({ urls }) => {
  return (
    <Document>
      <CoverPage />
      <Page1 />
      {/* <Page style={styles.body}>
        <View style={styles.imgContainer}>
          {urls?.reportImg && (
            <Image style={styles.image} src={urls.reportImg} />
          )}
        </View>
        <Text style={styles.header} fixed></Text>
        <Image style={styles.image} src={Cover} />
        <Text style={styles.text}>test test</Text>
        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
        />
      </Page> */}
    </Document>
  );
};

export default PDFFile;
