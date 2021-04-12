import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import Loop from "../../common/Loop";

import { styles } from "./styles";

import { arrTabParent } from "./constant";
import { COLORS } from "../../../constant";
import IconAnalytics from "../../../assets/icons/fontAwesome/IconAnalytics";
import IconSearch from "../../../assets/icons/fontAwesome/IconSearch";
import { TouchableOpacity } from "react-native-gesture-handler";
import Market_Exchange from "../../organisms/Martket_Exchange";

const Market = ({ navigation }) => {
  const [tabParent, setTabParent] = useState(arrTabParent[1]);

  return (
    <ScrollView style={styles.scrollViewContainerAll}>
      {/* Header */}
      <View style={styles.viewHeader}>
        <View style={styles.viewTabHeader}>
          <Loop
            dataSet={arrTabParent}
            onRender={(item) => {
              return (
                <TouchableOpacity
                  key={item.key}
                  // onPress={() => setTabParent(item)}
                >
                  <Text
                    style={{
                      color:
                        item.key === tabParent.key ? COLORS.white : "#d6d6d691",
                      fontSize: item.key === tabParent.key ? 19 : 18,
                      fontWeight: "700",
                    }}
                  >
                    {item.name}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>

        <View style={styles.viewActionHeader}>
          <TouchableOpacity style={{ marginRight: 20 }}>
            <IconAnalytics color={"#fff"} width={16} />
          </TouchableOpacity>
          <TouchableOpacity>
            <IconSearch color={"#fff"} width={16} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Content */}
      <View>
        {tabParent.key === "exchange" ? (
          <Market_Exchange navigation={navigation} />
        ) : null}
      </View>
    </ScrollView>
  );
};

export default Market;
