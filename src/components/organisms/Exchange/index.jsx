import React, { useState, useEffect } from "react";
import { View, Text, ScrollView } from "react-native";
import { COLORS } from "../../../constant";
import { convertNumToMoney } from "../../../constant/helpers/function";
import { useWalletTradingGetAllSetting } from "../../../services/module/wallet";
import { useAsync } from "../../common/hooks/useAsyncState";
import Loop from "../../common/Loop";

import { styles } from "./styles";

const Exchange = () => {
  /**
   * Stores
   */
  const {
    state: walletTradingReducer,
    get: getAllWalletTrading,
  } = useWalletTradingGetAllSetting();
  const {
    execute: getAllWalletTradingAsync,
    status: getAllWalletTradingStatus,
  } = useAsync(getAllWalletTrading);

  /**
   * State
   */

  const [refreshing, setRefreshing] = useState(false);

  /**
   * Effect
   */

  useEffect(() => {
    getAllWalletTradingAsync();
  }, []);

  /**
   * Function
   */

  console.log(getAllWalletTradingStatus);

  return (
    <ScrollView>
      <Text style={styles.textBalance}>Exchange Balances (BTC)</Text>
      <View style={styles.viewMoney}>
        <Text style={{ color: COLORS.white, fontSize: 13, fontWeight: "700" }}>
          {convertNumToMoney(0, ".", "", false)}
        </Text>
        <Text style={{ color: COLORS.gray, fontSize: 9 }}>
          {" "}
          = {convertNumToMoney(0, ".", "", false)} {"USD"}
        </Text>
      </View>

      <View style={styles.viewFilter}>
        <Text style={{ color: COLORS.gray, fontSize: 9 }}>
          Hide small balances
        </Text>
        <Text style={{ color: COLORS.gray, fontSize: 9 }}>Search</Text>
      </View>
      <Text
        style={{ width: "100%", height: 1, backgroundColor: "#636a7757" , marginTop: 15}}
      />

      <View style={{ marginTop: 20 }}>
        {/* <Loop/> */}
        <View>
          <Text
            style={{ color: COLORS.primary, fontSize: 13, fontWeight: "700" }}
          >
            USDT
          </Text>
          <View style={styles.viewItemTrading}>
            <View>
              <Text
                style={{ color: COLORS.white, color: "#636a77", fontSize: 11 }}
              >
                Available
              </Text>
              <Text style={{ color: COLORS.white }}>00000000</Text>
            </View>
            <View>
              <Text
                style={{ color: COLORS.white, color: "#636a77", fontSize: 11 }}
              >
                On orders
              </Text>
              <Text style={{ color: COLORS.white }}>00000000</Text>
            </View>
            <View style={styles.viewEstimated}>
              <Text
                style={{ color: COLORS.white, color: "#636a77", fontSize: 11 }}
              >
                Estimated(USD)
              </Text>
              <Text style={{ color: COLORS.white }}>0.01</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Exchange;
