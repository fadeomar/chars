import React from "react";
import { Page, Text, Image, Document, View } from "@react-pdf/renderer";
import Page1Image from "./page1.png";
import { styles } from "./style";
import Footer from "../../Footer";
const Page1 = () => {
  return (
    <Page
      style={styles.cover}
      pageMode={"fullScreen"}
      pageLayout={"singlePage"}
      size="A4"
    >
      <Footer />
      <Image src={Page1Image} style={styles.coverImage} />
    </Page>
  );
};

export default Page1;
