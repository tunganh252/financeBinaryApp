import React from "react";
import { Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  bigtitle: {
    fontFamily: "RobotoBold",
    fontSize: 26,
  },
});
const BigTitle = (props) => {
  const { style } = props;
  return <Text style={{ ...styles.bigtitle,...style }}>{props.children}</Text>;
};

export default BigTitle;
