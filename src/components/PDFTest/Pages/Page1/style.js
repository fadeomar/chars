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
});
