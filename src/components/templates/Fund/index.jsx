import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { styles } from "./styles";

import IconEyePass from "../../../assets/icons/fontAwesome/IconEyePass";

import { arrSelectBtn } from "./constant";

import Loop from "../../common/Loop";

const Fund = () => {
  const [isShowEyes, setIsShowEyes] = useState(false);

  const _handleEyes = () => {
    setIsShowEyes(!isShowEyes);
  };

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
                  10
                </Text>
                <Text style={styles.textAsset_coint}>BTC</Text>
              </View>
            </View>
          </View>

          {/* Select button*/}
          <View
            style={{
              ...styles.shadow,
              ...styles.viewSelectBtn,
              shadowOffset: { width: 4, height: 6 },
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

  return (
    <ScrollView>
      <View style={styles.containerHeader}>{_renderHeader()}</View>
    </ScrollView>
  );
};

export default Fund;
