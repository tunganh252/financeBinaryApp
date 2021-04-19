import React, { useState, useCallback, useRef } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  RefreshControl,
} from "react-native";
import { useScrollToTop } from "@react-navigation/native";

import { styles } from "./styles";

import IconEyePass from "../../../assets/icons/fontAwesome/IconEyePass";

import { dataTabWalletPage } from "./constant";
import {
  convertNumToMoney,
  wait_macroTask,
} from "../../../constant/helpers/function";

import Loop from "../../common/Loop";
import { COLORS, SIZES } from "../../../constant";
import Wallet_Exchange from "../../organisms/Wallet_Exchange";
import Wallet_Investment from "../../organisms/Wallet_Investment";
import Wallet_Partner from "../../organisms/Wallet_Partner";
import LoadingScreen from "../../atoms/LoadingScreen";

const Wallet = ({ navigation }) => {
  const refScroll = useRef(null);
  useScrollToTop(refScroll);

  /**
   * State
   */
  const [refreshing, setRefreshing] = useState(false);
  const [isShowEyes, setIsShowEyes] = useState(false);
  const [tab, setTab] = useState(dataTabWalletPage[0]);
  const [isLoading, setIsLoading] = useState(false);

  /**
   * Function
   */

  const _handleEyes = () => {
    setIsShowEyes(!isShowEyes);
  };

  const _handleSetTab = (dataTab) => {
    setTab(dataTab);
  };

  const setLoadingPage = (isLoading) => {
    setIsLoading(isLoading);
  };

  /**
   * Effect
   */
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait_macroTask(1000).then(() => setRefreshing(false));
  }, []);

  const _renderHeader = () => {
    return (
      <View style={{ ...styles.viewSectionHeader, ...styles.shadow }}>
        <View style={styles.viewBgHeader}>
          {/* Header bar */}
          <View style={styles.viewHeaderBar__eye}>
            <TouchableOpacity
              style={styles.touchAble__icon_eye}
              onPress={_handleEyes}
            >
              <View style={{ flex: 1 }}>
                <IconEyePass
                  width={25}
                  height={25}
                  color={"#ffffff"}
                  active={isShowEyes}
                />
              </View>
            </TouchableOpacity>
          </View>

          {/* My asset */}
          <View style={styles.viewHeaderBar__asset}>
            <View>
              <Text style={styles.textAsset__title}>My Assets</Text>

              <View>
                <View style={styles.viewAsset__coin}>
                  <Text style={{ marginRight: 8, ...styles.textAsset_coint }}>
                    {isShowEyes ? "****" : convertNumToMoney(10, ".", "")}
                  </Text>
                  <Text style={styles.textAsset_coint}>BTC</Text>
                </View>

                <Text style={styles.textConver__coint}>
                  &asymp;{" "}
                  {isShowEyes
                    ? "****"
                    : convertNumToMoney(10234, ".", " USD", false)}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  };

  const _renderContent = () => {
    return (
      <>
        <View>
          <View style={styles.viewTabHeader}>
            <Loop
              dataSet={dataTabWalletPage}
              onRender={(item) => {
                return (
                  <View
                    style={{ position: "relative", flex: 1 }}
                    key={item.key}
                  >
                    <Text
                      style={{
                        ...styles.tabHeader__text,
                        color:
                          tab.key === item.key ? COLORS.primary : COLORS.gray,
                      }}
                      onPress={() => _handleSetTab(item)}
                    >
                      {item.name}
                    </Text>

                    {tab.key === item.key && (
                      <View style={styles.viewLine}>
                        <Text style={styles.viewLine__text} />
                      </View>
                    )}
                  </View>
                );
              }}
            />
          </View>

          <View style={{ flex: 1, maxHeight: 3 }}>
            <Text
              style={{
                backgroundColor: "#636a7757",
                height: 1,
              }}
            />
          </View>

          <View style={styles.viewContentData}>
            {tab.key === "exchange" && (
              <Wallet_Exchange
                navigation={navigation}
                isShowEyes={isShowEyes}
                setLoadingPage={setLoadingPage}
              />
            )}
            {tab.key === "investment" && (
              <Wallet_Investment
                navigation={navigation}
                isShowEyes={isShowEyes}
                setLoadingPage={setLoadingPage}
              />
            )}
            {tab.key === "partner" && (
              <Wallet_Partner
                navigation={navigation}
                isShowEyes={isShowEyes}
                setLoadingPage={setLoadingPage}
              />
            )}
            {/* {tab.key === "fiat" && (
            <Wallet_Exchange navigation={navigation} isShowEyes={isShowEyes} />
          )} */}
          </View>
        </View>
      </>
    );
  };

  return (
    <ScrollView
      ref={refScroll}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      scrollEnabled={isLoading ? false : true}
    >
      {isLoading && <LoadingScreen />}

      <View style={styles.containerHeader}>{_renderHeader()}</View>

      {/* main screen */}
      <View style={styles.viewContentContainer}>{_renderContent()}</View>
    </ScrollView>
  );
};

export default Wallet;
