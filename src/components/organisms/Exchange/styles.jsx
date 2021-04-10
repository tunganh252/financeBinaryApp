import { StyleSheet } from "react-native";
import { COLORS } from "../../../constant";

export const styles = StyleSheet.create({
  textBalance: {
    color: COLORS.gray,
    fontSize: 12,
  },
  viewMoney: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    marginTop: 5,
  },
  viewFilter: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
  viewItemTrading: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 7,
  },

  viewEstimated: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    flexDirection: "column",
  },
});
