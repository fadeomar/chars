// import styles from "styled-components";
import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  page: {
    position: "relative",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  coverImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    zIndex: "-1",
  },
  textWrapper: {
    width: "250px",
    marginBottom: 20,
  },
  headingText: {
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "32px",
    color: "#0A4E5C",
  },
  title: {
    marginTop: "48px",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "24px",
    color: "#0A4E5C",
  },
});
