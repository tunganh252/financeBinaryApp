import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import IconBack from "../../assets/icons/fontAwesome/IconBack";
import LoadingScreen from "../../components/atoms/LoadingScreen";
import { useAsync } from "../../components/common/hooks/useAsyncState";
import { COLORS } from "../../constant";
import { convertNumToMoney } from "../../constant/helpers/function";
import { useMarketGetDetailCoins } from "../../services/module/market";
import { useWalletTradingGetDetailSetting } from "../../services/module/wallet";

import { styles } from "./styles";

const Detail_Wallet_Exchange = ({ route, navigation }) => {
  const dataRoute = route.params;
  console.log(dataRoute);

  /**
   * Stores
   */
  const {
    state: walletTradingDetailReducer,
    get: getDetailWalletTrading,
  } = useWalletTradingGetDetailSetting();
  const {
    execute: getDetailWalletTradingAsync,
    status: getDetailWalletTradingStatus,
  } = useAsync(getDetailWalletTrading);
  const {
    state: marketCoinDetailReducer,
    get: getMarketCoinDetail,
  } = useMarketGetDetailCoins();
  const {
    execute: getMarketCoinDetailAsync,
    status: getMarketCoinDetailStatus,
  } = useAsync(getMarketCoinDetail);

  /**
   * State
   */

  /**
   * Function
   */

  /**
   * Effect
   */

  useEffect(() => {
    if (!!dataRoute) {
      getDetailWalletTradingAsync(dataRoute.coin);
      getMarketCoinDetailAsync(dataRoute.coin);
    }
  }, []);

  return (
    <>
      {(getDetailWalletTradingStatus === "loading" ||
        getMarketCoinDetailStatus === "loading") && <LoadingScreen />}
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.viewBlockHeader}>
            <TouchableOpacity
              style={{
                width: 50,
                justifyContent: "center",
              }}
              onPress={() => navigation.goBack()}
            >
              <IconBack width={24} height={24} color={COLORS.white} />
            </TouchableOpacity>

            <Text style={styles.textNameCoin}>
              {walletTradingDetailReducer?.name || "Coin"}
            </Text>

            <View style={styles.viewMoney}>
              <Text style={{ ...styles.textTitle, flex: 1 }}>Available</Text>
              <Text style={{ ...styles.textTitle, flex: 0.7 }}>On orders</Text>
              <Text
                style={{ ...styles.textTitle, flex: 1.3, textAlign: "right" }}
              >
                Estimated(USD)
              </Text>
            </View>
            <View style={{ ...styles.viewMoney, marginTop: 10 }}>
              <Text style={{ ...styles.textViewMoney, flex: 1 }}>
                {convertNumToMoney(walletTradingDetailReducer.availableBalance)}
              </Text>
              <Text style={{ ...styles.textViewMoney, flex: 0.7 }}>
                {convertNumToMoney(walletTradingDetailReducer.freeze)}
              </Text>
              <Text
                style={{ ...styles.textTitle, flex: 1.3, textAlign: "right" }}
              >
                {marketCoinDetailReducer.currentPrice}
              </Text>
            </View>

            <Text style={styles.textTrade}>Trade</Text>

            <View></View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Detail_Wallet_Exchange;
