import { Page, Text, Image, Document, View } from "@react-pdf/renderer";
import { styles } from "./style";
import PartImage from "./Part.png";

const PartHeadPage = () => {
  return (
    <Page
      style={styles.page}
      pageMode={"fullScreen"}
      pageLayout={"singlePage"}
      size="A4"
    >
      <View style={styles.textWrapper}>
        <Text style={styles.headingText}>PART 1</Text>
        <Text style={styles.title}>SELF RESULTS</Text>
      </View>
      <Image src={PartImage} style={styles.coverImage} />
      {/* <View style={styles.textWrapper}>
        <Text style={styles.headingText}>PART 1</Text>
      </View> */}
    </Page>
  );
};

export default PartHeadPage;
