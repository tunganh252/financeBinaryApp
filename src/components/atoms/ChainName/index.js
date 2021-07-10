import { COLORS } from "constant/themes";
import React from "react";
import { Text, View } from "react-native";

import { styles } from "./styles";

const ChainName = ({ textName = "TEST", data, selected }) => {
  return (
    <View
      style={{
        ...styles.container,
        borderWidth: selected ? 1 : 0,
        borderColor: selected ? COLORS.primary : "unset",
      }}
    >
      <Text
        style={{
          ...styles.textName,
          color: selected ? COLORS.primary : COLORS.white,
        }}
      >
        {textName}
      </Text>
    </View>
  );
};

export default ChainName;
