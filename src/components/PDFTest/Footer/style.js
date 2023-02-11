// import styles from "styled-components";
import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  cover: {
    position: "relative",
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
  footerWrapper: {
    position: "absolute",
    bottom: "0",
    left: "0",
    right: "0",
    justifyContent: "space-between",
    flexDirection: "row",
    padding: "16px 32px",
  },
  footerText: {
    color: "#ababaa",
    fontSize: "10px",
    fontWeight: "bold",
  },
});
