import { Page, Text, Image, Document, View } from "@react-pdf/renderer";
import { styles } from "./style";

const Footer = () => {
  return (
    <View style={styles.footerWrapper}>
      <Text style={styles.footerText}>Human KPI 360</Text>

      <Text style={styles.footerText}>
        Copyright 2022 Andiron, LLC. All rights reserved.
      </Text>
      <Text style={styles.footerText}>Philip Hayton | 3</Text>
    </View>
  );
};

export default Footer;
