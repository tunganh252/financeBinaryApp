import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import IconEyePass from "../../../assets/icons/fontAwesome/IconEyePass";
import { styles } from "./styles";

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

          {/* Tab button select */}
          <View>
            
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
