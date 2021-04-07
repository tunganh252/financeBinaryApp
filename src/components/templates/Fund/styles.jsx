import { Platform, StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../constant";

export const styles = StyleSheet.create({
  shadow: {
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  containerHeader: {
    flex: 1,
    paddingBottom: 130,
  },
  viewSectionHeader: {
    width: "100%",
    height: 230,
  },
  viewBgHeader: {
    flex: 1,
    backgroundColor: COLORS.primary,
    alignItems: "center",
    paddingTop: Platform.OS === "ios" ? "12%" : "8%",
    paddingHorizontal: SIZES.padding2,
  },
  viewHeaderBar__eye: {
    width: "100%",
    height: 25,
    marginRight: SIZES.padding * 3,
    alignItems: "flex-end",
  },
  touchAble__icon_eye: {
    justifyContent: "center",
    alignItems: "center",
  },
  viewHeaderBar__asset: {
    width: "100%",
    alignItems: "flex-start",
  },
  textAsset__title: {
    fontSize: 11,
    color: COLORS.white,
  },
  viewAsset__coin: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: SIZES.padding,
  },
  textAsset_coint: {
    color: COLORS.white,
    ...FONTS.h2,
    fontWeight: "100",
  },
});
