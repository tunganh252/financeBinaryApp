import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { COLORS, SIZES } from "../../../constant";

const LoadingScreen = ({ color = COLORS.primary }) => (
  <View style={[styles.container, styles.horizontal]}>
    <ActivityIndicator size="large" color={color} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "absolute",
    top: 0,
    left: 0,
    width: SIZES.width,
    height: SIZES.height,
    backgroundColor: "#000000b8",
    zIndex: 9999,
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
  sizeLoading: {
      width: 50,
      height: 50,
  }
});

export default LoadingScreen;
