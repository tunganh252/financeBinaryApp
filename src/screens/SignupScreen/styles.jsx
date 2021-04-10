import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constant";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: COLORS.blueDark,
    position: "relative",
  },
  viewBlockHeader: {
    flexDirection: "row",
    paddingLeft: 25,
    paddingRight: 25,
  },
  viewIcon: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    marginRight: SIZES.padding * 5,
  },
  viewIcon__block: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  viewIcon__block_text: {
    fontFamily: "RobotoBlack",
    fontSize: 24,
    marginLeft: SIZES.padding / 2,
    color: COLORS.white
  },
  viewTabHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 45,
  },
  tabHeader__text: {
    ...FONTS.body3,
    textAlign: "center",
    paddingBottom: 15,
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
    height: 0.7,
    position: "absolute",
    bottom: 0,
    left: 0,
  },
  viewForm: {
    flex: 1,
    marginTop: SIZES.padding2 * 2,
    paddingLeft: SIZES.padding2 * 3.5,
    paddingRight: SIZES.padding2 * 3.5,
    display: "flex",
    flexDirection: "column",
  },
  viewForm__input: {
    height: 40,
    width: "100%",
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.white,
    color: COLORS.white
  },
  viewForgotPass: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    marginTop: 35,
  },
  viewBtnLogin: {
    flex: 1,
    alignContent: "center",
    marginTop: 35,
    maxHeight: 40,
  },
  touch__login:{
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.primary,
    color: COLORS.primary,
    borderRadius: 5,
  },
  viewHaveAccount: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    marginTop: 20,
  },
  viewCreateAccount: {
    flex: 1,
    alignContent: "center",
    marginTop: 25,
    maxHeight: 40,
  },
  touch__createAccount: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: COLORS.white,
    borderRadius: 20,
  },
  viewLanguage: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    marginTop: 50,
  }
});
