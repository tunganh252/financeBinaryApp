import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constant";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: COLORS.blueBlack,
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
    color: COLORS.white,
  },
  viewForm: {
    flex: 1,
    paddingLeft: SIZES.padding2 * 3.5,
    paddingRight: SIZES.padding2 * 3.5,
    paddingTop: SIZES.padding2 * 2,
    marginTop: 10,
    display: "flex",
    flexDirection: "column",
    backgroundColor: COLORS.blueDark,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: SIZES.height
  },
  viewForm__input: {
    height: 40,
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
    alignContent: "center",
    marginTop: 35,
  },
  touch__login: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.primary,
    color: COLORS.primary,
    borderRadius: 7,
    height: 40,
  },
  viewHaveAccount: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    marginTop: 20,
  },
  viewCreateAccount: {
    alignContent: "center",
    marginTop: 25,

  },
  touch__createAccount: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: COLORS.white,
    borderRadius: 7,
    height: 40,
  },
});
