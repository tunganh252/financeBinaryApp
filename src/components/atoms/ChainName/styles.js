import { COLORS } from "constant/themes";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    // width: "100%",
    height: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: COLORS.blueDark,
  },
  textName: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: "600"
  },

});
