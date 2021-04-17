import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constant";

export const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.55,
    shadowRadius: 14.78,
    elevation: 22,
  },
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: COLORS.blueBlack,
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
  viewForm: {
    flex: 1,
    paddingLeft: SIZES.padding2 * 3.5,
    paddingRight: SIZES.padding2 * 3.5,
    paddingTop: SIZES.padding2 * 3.5,
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
    width: "100%",
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.white,
    color: COLORS.white
  },
  viewBtnRegister: {
    alignContent: "center",
    marginTop: 35,
    height: 40,
  },
  touch__register: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.primary,
    color: COLORS.primary,
    borderRadius: 7,
    height: 40,
  },
  viewAlreadyLogin: {
    alignContent: "center",
    marginTop: 35,
    height: 40,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  textAlready: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: "800",
    marginRight: 5,
  },
  textLogin: {
    color: COLORS.blueLight,
    fontSize: 12,
    fontWeight: "800",
  },
  viewCardModal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    
  },
  viewContentModal: {
    backgroundColor: COLORS.blueBlack,
    paddingHorizontal: 80,
    paddingVertical: 30,
    borderRadius: 10,
  }
});
