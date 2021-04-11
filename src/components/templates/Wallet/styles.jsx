import { Platform, StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../constant";

export const styles = StyleSheet.create({
  shadow: {
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: Platform.OS === "ios" ? 0.05 : 0.5,
    shadowRadius: 3.84,
    elevation: 5,
  },
  containerHeader: {
    flex: 1,
    paddingBottom: Platform.OS === "ios" ? 45 : 42,
    backgroundColor: "#000"
  },
  viewSectionHeader: {
    width: "100%",
    height: Platform.OS === "ios" ? 190 : 170,
  },
  viewBgHeader: {
    flex: 1,
    backgroundColor: COLORS.primary,
    alignItems: "center",
    paddingTop: Platform.OS === "ios" ? "12%" : "8%",
    paddingHorizontal: SIZES.padding * 2,
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
    marginTop: -12,
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
    marginTop: SIZES.padding / 2,
  },
  textAsset_coint: {
    color: COLORS.white,
    ...FONTS.h2,
    fontWeight: "100",
  },
  textConver__coint: {
    color: COLORS.white,
    fontSize: 12,
    marginTop: 5
  },
  viewSelectBtn: {
    width: "100%",
    height: 95,
    backgroundColor: COLORS.blueBlack,
    borderRadius: 5,
    marginTop: 12,
  },
  viewBlockItemSelect: {
    flex: 1,
    paddingHorizontal: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  touchAbleSelectBtn: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
  linearGradientStyle: {
    borderRadius: "50%",
    width: 43,
    height: 43,
    borderRadius: 43 / 2,
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
  textNameSelectBtn: {
    fontSize: 11,
    color: "#8b8b8b",
    // fontWeight: "600",
    marginTop: 3,
  },
  viewBgSelectBtn: {
    borderRadius: "50%",
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },

  /**
   * Content
   */

  viewContentContainer: {
    flex: 1,
    backgroundColor: COLORS.blueBlack,
    minHeight: 600,
    paddingBottom: 70,
  },
  viewTabHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 20,
  },
  tabHeader__text: {
    textAlign: "center",
    paddingBottom: 20,
    fontSize: Platform.OS === "ios" ? 11 : 13,
    color: "#636a7757",
    fontWeight: "800",
  },
  viewLine: {
    flex: 1,
    maxHeight: 0.7,
    backgroundColor: COLORS.primary,
    color: COLORS.primary,
  },
  viewLine__text: {
    backgroundColor: COLORS.primary,
    color: COLORS.primary,
    width: "100%",
    height: 2,
    position: "absolute",
    bottom: 0,
    left: 0,
  },
});
