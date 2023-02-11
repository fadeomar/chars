import React from "react";
import { Page, Text, Image, Document, View } from "@react-pdf/renderer";
import Cover from "./image10.png";
import { styles } from "./style";

const CoverPage = () => {
  return (
    <Page
      style={styles.cover}
      pageMode={"fullScreen"}
      pageLayout={"singlePage"}
      size="A4"
    >
      <Image src={Cover} style={styles.coverImage} />
    </Page>
  );
};

export default CoverPage;
