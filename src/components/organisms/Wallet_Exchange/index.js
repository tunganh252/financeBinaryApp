import React, { useState, useEffect, useRef } from "react";
import { View, Text, ScrollView } from "react-native";
import { useScrollToTop } from "@react-navigation/native";

import { TouchableOpacity } from "react-native-gesture-handler";
import { COLORS } from "../../../constant";
import { convertNumToMoney } from "../../../constant/helpers/function";
import { useMarketGetListCoins } from "../../../services/module/market";
import { useWalletTradingGetAllSetting } from "../../../services/module/wallet";
import { useAsync } from "../../common/hooks/useAsyncState";
import Loop from "../../common/Loop";

import { styles } from "./styles";

const Wallet_Exchange = ({ navigation, isShowEyes, setLoadingPage }) => {
  const refScroll = useRef(null);
  useScrollToTop(refScroll);

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

  const {
    state: listCoinsReducer,
    get: getAllListCoins,
  } = useMarketGetListCoins();

  const {
    execute: getAllListCoinsAsync,
    status: getAllListCoinsStatus,
  } = useAsync(getAllListCoins);

  /**
   * State
   */

  /**
   * Effect
   */
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      getAllWalletTradingAsync();
      getAllListCoinsAsync();
    });
    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    getAllWalletTradingAsync();
    getAllListCoinsAsync();
  }, []);

  useEffect(() => {
    if (
      getAllWalletTradingStatus === "loading" ||
      getAllListCoinsStatus === "loading"
    )
      setLoadingPage(true);
    else setLoadingPage(false);
  }, [getAllWalletTradingStatus, getAllListCoinsStatus]);

  /**
   * Function
   */

  return (
    <ScrollView ref={refScroll}>
      <Text style={styles.textBalance}>Wallet Exchange Balances (BTC)</Text>
      <View style={styles.viewMoney}>
        <Text style={{ color: COLORS.white, fontSize: 13, fontWeight: "700" }}>
          {isShowEyes ? "****" : convertNumToMoney(0, ".", "", false)}
        </Text>
        <Text style={{ color: COLORS.gray, fontSize: 9 }}>
          &asymp; {isShowEyes ? "****" : convertNumToMoney(0, ".", "", false)}{" "}
          {"USD"}
        </Text>
      </View>

      <View style={styles.viewFilter}>
        <Text style={{ color: COLORS.gray, fontSize: 9 }}>
          Hide small balances
        </Text>
        <Text style={{ color: COLORS.gray, fontSize: 9 }}>Search</Text>
      </View>

      <View>
        <Loop
          dataSet={walletTradingReducer?.data}
          onRender={(item, index) => {
            let estimatedUSD = "-";

            if (
              !!listCoinsReducer[index] &&
              listCoinsReducer[index]?.currentPrice
            ) {
              estimatedUSD = Number(listCoinsReducer[index]?.currentPrice) * 1;
              // Number(item.availableBalance);
            }

            return (
              <TouchableOpacity
                key={item.name}
                onPress={() =>
                  navigation.navigate("detail_wallet_exchange", item)
                }
              >
                <View>
                  <Text style={styles.textLineItemTrading} />

                  <Text style={styles.textItemCoin}>{item.coin}</Text>
                  <View style={styles.viewItemTrading}>
                    <View>
                      <Text style={styles.textItemAvailable}>Available</Text>
                      <Text style={{ color: COLORS.white }}>
                        {isShowEyes
                          ? "****"
                          : convertNumToMoney(item.availableBalance, ".", "")}
                      </Text>
                    </View>
                    <View>
                      <Text style={styles.textItemOnOrder}>On orders</Text>
                      <Text style={{ color: COLORS.white }}>
                        {isShowEyes
                          ? "****"
                          : convertNumToMoney(item.freeze, ".", "")}
                      </Text>
                    </View>
                    <View style={styles.viewEstimated}>
                      <Text style={styles.textItemEstimated}>
                        Estimated(USD)
                      </Text>
                      <Text style={styles.textItemValueEstimated}>
                        {isShowEyes ? "****" : estimatedUSD}
                      </Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </ScrollView>
  );
};

export default Wallet_Exchange;
