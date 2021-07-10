import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { COLORS } from "constant";

const Setting = () => {
  return (
    <View
      style={{
        backgroundColor: COLORS.blueDark,
        height: "100%",
        maxWidth: "100%",
      }}
    >
      <SafeAreaView>
        <View>
          <Text>Setting</Text>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Setting;
