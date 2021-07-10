import React from "react";
import { View, StyleSheet } from "react-native";
import { COLORS } from "constant/themes";

const styles = StyleSheet.create({
  wrap: {
    width: "100%",
    height: 4,
    backgroundColor: "#ffffff2b",
    position: "relative",
    borderRadius: 5,
    overflow: "hidden",
    marginTop: 10,
  },
  progress: {
    width: "100%",
    height: 4,
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: COLORS.pinkBlack,
  },
});

const ProgressBar = (props) => {
  const { progress } = props;
  const left = -100 + progress;
  return (
    <View style={styles.wrap}>
      <View style={[styles.progress, { left: left + "%" }]}></View>
    </View>
  );
};

export default ProgressBar;
