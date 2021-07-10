import { StyleSheet } from "react-native";
import { COLORS, SIZES, STYLES, FONTS } from "constant";

export const styles = StyleSheet.create({
  iconBack: {
    padding: 20,
  },
  title: {
    color: "white",
    fontWeight: "bold",
    ...FONTS.h2,
  },
  main: {
    paddingLeft: 20,
    paddingRight: 20,
    height: "100%",
    flexGrow: 1
  },
  infomation: {
    flexDirection: "row",
    alignItems: "center",
  },
  wrapInfo: {
    width: "85%",
  },
  verify: {
    marginTop: 10,
    maxWidth: 60,
    color: COLORS.black,
    padding: 2,
    borderRadius: 2,
    backgroundColor: COLORS.pink,
    overflow: "hidden",
    fontSize: SIZES.small,
  },
  wrapAvatar: {
    width: "15%",
    aspectRatio: 1/1,
    marginRight: SIZES.padding2,
    position: "relative",
  },
  avatar: {
    width: "100%",
    height: "100%",
    borderRadius: 100,
    position: "absolute",
    top: 0,
    left: 0,
  },
  wrapUid: {
    alignItems: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    opacity: 0.6,
    marginTop: SIZES.padding,
  },
  uid: {
    color: COLORS.white,
    letterSpacing: 0.5,
    ...FONTS.medium,
    marginRight: 6,
  },
  tinyLogo: {
    width: 30,
    height: 30,
  },
  levels: {
    flexDirection: "row",
    marginTop: 20,
    borderRadius: 10,
    borderWidth: 0.3,
    borderColor: COLORS.primary,
    paddingTop: SIZES.padding,
    paddingBottom: SIZES.padding,
    paddingLeft: SIZES.padding2,
    paddingRight: SIZES.padding2,
    backgroundColor: "#071724",
    alignItems: "center",
    overflow: "hidden",
    // justifyContent: "space-between"
  },
  textlevels: {
    color: "#bc9a67",
    marginLeft: SIZES.padding2,
    fontFamily: "RobotoMedium",
  },
});
