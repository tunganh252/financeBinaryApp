import React from "react";
import { View, Text } from "react-native";

const Home = ({ test = 123 }) => {
  console.log(test);

  return (
    <View style={{ flex: 1, marginTop: 50, marginLeft: 50 }}>
      <Text>Home -- TabBottom</Text>
    </View>
  );
};

export default Home;
