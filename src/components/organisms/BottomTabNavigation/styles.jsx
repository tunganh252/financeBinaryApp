import { Platform, StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../constant";

export const styles = StyleSheet.create({
  tabBarOptions: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: Platform.OS === "ios" ? 100 : 60,
    backgroundColor: COLORS.blueDark,
    elevation: 0,
  },
  shadow: {
    shadowColor: COLORS.primary,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  tabBarLabel__text: {
    fontSize: SIZES.body5,
    marginBottom: SIZES.padding,
    marginTop: 5,
  },
  touch__btn: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
});
