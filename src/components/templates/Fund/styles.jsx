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
    height: 170,
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
  viewSelectBtn: {
    width: "100%",
    height: 95,
    backgroundColor: COLORS.white,
    borderRadius: 5,
    marginTop: 12,
  },
  viewBlockItemSelect: {
    flex: 1,
    paddingHorizontal: 15,
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
    fontWeight: "600",
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
});
