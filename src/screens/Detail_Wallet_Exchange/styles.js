import { Platform, StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../constant";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.blueBlack,
    position: "relative",
  },
  viewBlockHeader: {
    flex: 1,
    height: 300,
    width: "100%",
    paddingHorizontal: 20,
    paddingTop: Platform.OS === "ios" ? 10 : 40,
    backgroundColor: COLORS.blueBlack,
  },
  textNameCoin: {
    marginTop: 17,
    color: COLORS.primary,
    ...FONTS.h1,
  },
  viewMoney: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 30,
  },
  textTitle: {
    color: COLORS.gray,
    fontWeight: "700",
  },
  textViewMoney: {
    color: COLORS.white,
    fontWeight: "600",
    fontSize: 18,
  },

  textTrade: { color: COLORS.white, marginTop: 30, ...FONTS.h1, fontSize: 24 },
});
