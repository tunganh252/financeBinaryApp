import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  RefreshControl,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { styles } from "./styles";

import IconEyePass from "../../../assets/icons/fontAwesome/IconEyePass";

import { arrSelectBtn, dataTabFundPage } from "./constant";
import {
  convertNumToMoney,
  wait_macroTask,
} from "../../../constant/helpers/function";

import Loop from "../../common/Loop";
import { COLORS, SIZES } from "../../../constant";

const Fund = () => {
  /**
   * State
   */
  const [refreshing, setRefreshing] = useState(false);
  const [isShowEyes, setIsShowEyes] = useState(false);
  const [tab, setTab] = useState(dataTabFundPage[0]);

  /**
   * Function
   */

  const _handleEyes = () => {
    setIsShowEyes(!isShowEyes);
  };

  const _handleSetTab = (dataTab) => {
    setTab(dataTab);
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

              <View style={styles.viewAsset__coin}>
                <Text style={{ marginRight: 8, ...styles.textAsset_coint }}>
                  {convertNumToMoney(10, ".", "")}
                </Text>
                <Text style={styles.textAsset_coint}>BTC</Text>

                <Text style={styles.textConver__coint}>
                  {" "}
                  = {convertNumToMoney(10234, ".", "$")}
                </Text>
              </View>
            </View>
          </View>

          {/* Select button*/}
          <View
            style={{
              ...styles.shadow,
              ...styles.viewSelectBtn,
            }}
          >
            <View style={styles.viewBlockItemSelect}>
              <Loop
                dataSet={arrSelectBtn}
                memorize={arrSelectBtn}
                onRender={(item) => {
                  const {
                    name,
                    icon: Icon,
                    sizeIcon,
                    colorIcon,
                    backgroundColor,
                  } = item;
                  return (
                    <TouchableOpacity
                      key={name}
                      style={styles.touchAbleSelectBtn}
                    >
                      {backgroundColor.isLinear ? (
                        <>
                          <LinearGradient
                            style={styles.linearGradientStyle}
                            colors={backgroundColor.color}
                          >
                            <Icon width={sizeIcon} color={colorIcon} />
                          </LinearGradient>
                          <Text style={styles.textNameSelectBtn}>{name}</Text>
                        </>
                      ) : (
                        <>
                          <View
                            style={{
                              ...styles.viewBgSelectBtn,
                              backgroundColor: backgroundColor.color,
                            }}
                          >
                            <Icon width={sizeIcon} color={colorIcon} />
                          </View>
                          <Text style={styles.textNameSelectBtn}>{name}</Text>
                        </>
                      )}
                    </TouchableOpacity>
                  );
                }}
              />
            </View>
          </View>
        </View>
      </View>
    );
  };

  const _renderContent = () => {
    return (
      <View>
        <View style={styles.viewTabHeader}>
          <Loop
            dataSet={dataTabFundPage}
            onRender={(item) => {
              return (
                <View style={{ position: "relative", flex: 1 }} key={item.key}>
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
              backgroundColor: COLORS.gray,
              height: 0.5,
            }}
          />
        </View>

        {tab.key === "tradingAccount" && (
          <View
            style={{
              marginTop: SIZES.padding2,
              paddingHorizontal: SIZES.padding * 2,
            }}
          >
            <Text
              style={{
                color: "#a4a4a4",
                fontSize: 13,
              }}
            >
              Value of Trading Account(s)
            </Text>
          </View>
        )}
      </View>
    );
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View style={styles.containerHeader}>{_renderHeader()}</View>

      {/* main screen */}
      <View style={styles.viewContentContainer}>
        {_renderContent()}
        <View style={{ height: 500 }}></View>
      </View>
    </ScrollView>
  );
};

export default Fund;
