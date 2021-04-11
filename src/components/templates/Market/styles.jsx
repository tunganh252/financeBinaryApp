import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../constant";

export const styles = StyleSheet.create({
  scrollViewContainerAll: {
    minHeight: 1000,
    maxHeight: "100%",
    backgroundColor: COLORS.blueBlack,
    paddingVertical: SIZES.padding * 3.5,
  },
  viewHeader: {
    paddingHorizontal: SIZES.padding * 1.5,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  viewTabHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 3,
  },
  viewActionHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    flex: 1,
  },
   viewIconHeader: {
   }
});
