import { StyleSheet } from "react-native";
import { COLORS, SIZES, STYLES, FONTS } from "constant";

export const styles = StyleSheet.create({
  group: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: SIZES.padding2,
    paddingBottom: SIZES.padding2,
  },
  wrapText: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontSize: SIZES.body3,
    color: COLORS.lightGray,
    ...FONTS.medium
  },
  icon: {
    marginRight: SIZES.padding,
  },
});
