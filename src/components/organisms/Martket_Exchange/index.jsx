import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import IconSort from "../../../assets/icons/fontAwesome/IconSort";
import { COLORS } from "../../../constant";
import Loop from "../../common/Loop";
import { listCoinParent, listfilter } from "./constant";

import { styles } from "./styles";

const Market_Exchange = ({ navigation }) => {
  /**
   * State
   */
  const [tabParent, setTabParent] = useState(listCoinParent[0]);
  const [tabChildFilter, setTabChildFilter] = useState(listfilter[0]);

  /**
   * Function
   */

  const _handleSetTabCoin = (tabParent) => {
    setTabParent(tabParent);
  };

  return (
    <View style={styles.viewContainer}>
      {/* List các coin chính */}
      <View style={styles.viewTabHeader}>
        <Loop
          dataSet={listCoinParent}
          onRender={(item) => {
            return (
              <View key={item.code} style={{ marginRight: 20 }}>
                <Text
                  style={{
                    ...styles.tabHeader__text,
                    color:
                      tabParent.code === item.code
                        ? COLORS.primary
                        : COLORS.gray,
                  }}
                  numberOfLines={2}
                  onPress={() => _handleSetTabCoin(item)}
                >
                  {item.name}
                </Text>
                {tabParent.code === item.code && (
                  <View style={styles.viewLine__text} />
                )}
              </View>
            );
          }}
        />
      </View>
      {/* List filter trong tab co */}
      <ScrollView
        style={{ marginTop: 12 }}
        horizontal={true}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <Loop
          dataSet={listfilter}
          onRender={(item, index) => {
            return (
              <TouchableOpacity key={index}>
                <Text
                  style={{
                    ...styles.textFilter,
                    color:
                      tabChildFilter.code === item.code
                        ? COLORS.primary
                        : COLORS.white,
                  }}
                >
                  {item.name}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </ScrollView>

      <View style={styles.viewLine} />

      {/* Data Coint */}
      <View style={styles.viewCoinContainer}>
        <View style={{ flex: 2 }}>
          <View style={styles.viewFlexRowJustifyStart}>
            <TouchableOpacity style={styles.viewFlexRowJustifyStart}>
              <Text style={styles.textFilterCoin}>Name &nbsp;</Text>
              <IconSort color={"#636a7757"} width={8} height={17} />
            </TouchableOpacity>
            <Text style={styles.textFilterCoin}>&nbsp;/&nbsp;</Text>
            <TouchableOpacity style={styles.viewFlexRowJustifyStart}>
              <Text style={styles.textFilterCoin}>24h &nbsp;</Text>
              <IconSort color={"#636a7757"} width={8} height={17} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ ...styles.viewLastFilterCoin, flex: 1 }}>
          <TouchableOpacity style={styles.viewFlexRowJustifyStart}>
            <Text style={styles.textFilterCoin}>Market Price &nbsp;</Text>
            <IconSort color={"#636a7757"} width={8} height={17} />
          </TouchableOpacity>
        </View>
        <View style={styles.viewLastFilterCoin}>
          <TouchableOpacity style={styles.viewFlexRowJustifyStart}>
            <Text style={{ ...styles.textFilterCoin, fontSize: 11 }}>
              Change % &nbsp;
            </Text>
            <IconSort color={"#636a7757"} width={8} height={17} />
          </TouchableOpacity>
        </View>
      </View>

      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}

      <View style={{ ...styles.viewCoinContainer, marginTop: 15 }}>
        <View style={{ flex: 2 }}>
          <View style={styles.viewFlexRowJustifyStart}>
            <Text style={{ color: COLORS.white, fontWeight: "700" }}>BTC</Text>
            <Text
              style={{
                ...styles.textFilterCoin,
                fontSize: 9,
                paddingTop: 6,
                opacity: 0.4,
                fontWeight: "600",
              }}
            >
              &nbsp; /USDT
            </Text>
          </View>
          <Text style={{ ...styles.textFilterCoin }}>24H $1.5B</Text>
        </View>
        <View
          style={{
            ...styles.viewLastFilterCoin,
            flexDirection: "column",
            flex: 1,
          }}
        >
          <Text style={{ color: COLORS.white, fontWeight: "700" }}>
            60606006
          </Text>
          <Text style={{ ...styles.textFilterCoin }}>$136151</Text>
        </View>
        <View style={{ ...styles.viewLastFilterCoin, alignItems: "center" }}>
          <Text
            style={{
              ...styles.textBtnPercent,
              backgroundColor: COLORS.baseGreen,
            }}
          >
            +0.22%
          </Text>
        </View>
      </View>
      <View style={{ ...styles.viewCoinContainer, marginTop: 15 }}>
        <View style={{ flex: 2 }}>
          <View style={styles.viewFlexRowJustifyStart}>
            <Text style={{ color: COLORS.white, fontWeight: "700" }}>BTC</Text>
            <Text
              style={{
                ...styles.textFilterCoin,
                fontSize: 9,
                paddingTop: 6,
                opacity: 0.4,
                fontWeight: "600",
              }}
            >
              &nbsp; /USDT
            </Text>
          </View>
          <Text style={{ ...styles.textFilterCoin }}>24H $1.5B</Text>
        </View>
        <View
          style={{
            ...styles.viewLastFilterCoin,
            flexDirection: "column",
            flex: 1,
          }}
        >
          <Text style={{ color: COLORS.white, fontWeight: "700" }}>
            60606006
          </Text>
          <Text style={{ ...styles.textFilterCoin }}>$136151</Text>
        </View>
        <View style={{ ...styles.viewLastFilterCoin, alignItems: "center" }}>
          <Text
            style={{
              ...styles.textBtnPercent,
              backgroundColor: COLORS.baseGreen,
            }}
          >
            +0.22%
          </Text>
        </View>
      </View>
      <View style={{ ...styles.viewCoinContainer, marginTop: 15 }}>
        <View style={{ flex: 2 }}>
          <View style={styles.viewFlexRowJustifyStart}>
            <Text style={{ color: COLORS.white, fontWeight: "700" }}>BTC</Text>
            <Text
              style={{
                ...styles.textFilterCoin,
                fontSize: 9,
                paddingTop: 6,
                opacity: 0.4,
                fontWeight: "600",
              }}
            >
              &nbsp; /USDT
            </Text>
          </View>
          <Text style={{ ...styles.textFilterCoin }}>24H $1.5B</Text>
        </View>
        <View
          style={{
            ...styles.viewLastFilterCoin,
            flexDirection: "column",
            flex: 1,
          }}
        >
          <Text style={{ color: COLORS.white, fontWeight: "700" }}>
            60606006
          </Text>
          <Text style={{ ...styles.textFilterCoin }}>$136151</Text>
        </View>
        <View style={{ ...styles.viewLastFilterCoin, alignItems: "center" }}>
          <Text
            style={{
              ...styles.textBtnPercent,
              backgroundColor: COLORS.baseGreen,
            }}
          >
            +0.22%
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Market_Exchange;
